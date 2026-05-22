/**
 * URLCollector — background.js (MV3 Service Worker)
 *
 * Handles global keyboard commands registered in manifest.json "commands".
 *
 * IMPORTANT — MV3 clipboard limitation:
 *   Service workers run in a context that has NO access to `navigator.clipboard`.
 *   To write to the clipboard from a keyboard shortcut we must inject a tiny
 *   function into the ACTIVE TAB via chrome.scripting.executeScript so that
 *   the injected code can call navigator.clipboard.writeText() inside a
 *   real browsing context (which does have clipboard access).
 *
 * Required manifest permissions: "scripting", "activeTab", "tabs"
 */

const isSystemUrl = (url = '') =>
  /^(chrome|chrome-extension|edge|about|data|javascript):/i.test(url);

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'copy_urls') {
    await handleCopyUrls();
  } else if (command === 'sleep_tabs') {
    await handleSleepTabs();
  }
});

/**
 * copy_urls command handler.
 *
 * Builds a newline-separated list of all non-system tab URLs in the current
 * window, then injects a clipboard write into the active tab (the only safe
 * way to reach navigator.clipboard from a service worker).
 */
async function handleCopyUrls() {
  try {
    // 1. Collect all tabs in the current window.
    const allTabs = await chrome.tabs.query({ currentWindow: true });
    const urlText = allTabs
      .map((t) => t.url || '')
      .filter((url) => url && !isSystemUrl(url))
      .join('\n');

    if (!urlText) return;

    // 2. Find the active tab — script injection target.
    //    Keyboard commands grant activeTab permission to the focused tab.
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!activeTab || isSystemUrl(activeTab.url)) return;

    // 3. Inject clipboard write into the active tab's context.
    //    Service workers cannot call navigator.clipboard directly, but an
    //    injected function runs inside the page's browsing context, which
    //    DOES have clipboard access when triggered by a user gesture
    //    (the keyboard shortcut qualifies as a user gesture).
    await chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: (text) => navigator.clipboard.writeText(text),
      args: [urlText],
    });
  } catch (err) {
    console.error('[URLCollector] copy_urls failed:', err);
  }
}

/**
 * sleep_tabs command handler.
 *
 * Discards all tabs in the current window that are:
 *   - NOT the active tab
 *   - NOT currently playing audio (audible)
 *   - NOT pinned
 *   - NOT still loading
 *   - NOT already discarded
 */
async function handleSleepTabs() {
  try {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const candidates = tabs.filter(
      (t) => !t.active && !t.audible && !t.pinned && t.status !== 'loading' && !t.discarded
    );

    for (const tab of candidates) {
      try {
        await chrome.tabs.discard(tab.id);
      } catch (err) {
        // Individual tab discard errors are non-fatal (tab may have closed, etc.)
        console.warn(`[URLCollector] Could not discard tab ${tab.id}:`, err.message);
      }
    }
  } catch (err) {
    console.error('[URLCollector] sleep_tabs failed:', err);
  }
}
