document.addEventListener('DOMContentLoaded', async function() {
  const copyButton = document.getElementById('copyButton');
  const statusDiv = document.getElementById('status');
  const urlListContainer = document.getElementById('url-list-container');
  const filterInput = document.getElementById('filter-input');
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const saveButton = document.getElementById('saveButton');
  const exportFormatSelect = document.getElementById('export-format');
  const sortSelect = document.getElementById('sort-select');
  const hideDuplicatesCheckbox = document.getElementById('hide-duplicates');
  const skipSystemCheckbox = document.getElementById('skip-system');
  const clearFilterButton = document.getElementById('clear-filter');
  const countSelectedSpan = document.getElementById('count-selected');
  const countTotalSpan = document.getElementById('count-total');
  const clearDuplicateBtn = document.getElementById('clear-duplicate-btn');
  const duplicateConfirm = document.getElementById('duplicate-confirm');
  const duplicateListDiv = document.getElementById('duplicate-list');
  const confirmCloseDuplicatesBtn = document.getElementById('confirm-close-duplicates');
  const cancelCloseDuplicatesBtn = document.getElementById('cancel-close-duplicates');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  // Tab Management buttons (Phase 2)
  const sortActionSelect = document.getElementById('sort-action-select');
  const sortTabsBtn = document.getElementById('sort-tabs-btn');
  const groupActionSelect = document.getElementById('group-action-select');
  const groupTabsBtn = document.getElementById('group-tabs-btn');
  const toggleGroupsBtn = document.getElementById('toggle-groups-btn');
  const sortGroupsBtn = document.getElementById('sort-groups-btn');
  const sleepInactiveBtn = document.getElementById('sleep-inactive-btn');
  const sleepSelectedBtn = document.getElementById('sleep-selected-btn');
  const restoreTabsBtn = document.getElementById('restore-tabs-btn');
  // Session Manager (Phase 3)
  const saveSessionBtn = document.getElementById('save-session-btn');
  const manageSessionsBtn = document.getElementById('manage-sessions-btn');
  const sessionsModal = document.getElementById('sessions-modal');
  const sessionsListDiv = document.getElementById('sessions-list');
  const closeSessionsModalBtn = document.getElementById('close-sessions-modal-btn');
  const closeSessionsBtn = document.getElementById('close-sessions-btn');

  const UC_SESSIONS_KEY = 'uc_sessions';
  // TODO: consider capping at 20 sessions to avoid unbounded storage growth.

  filterInput.focus();

  let allTabs = [];
  let lastRenderedTabs = [];
  const TAB_MANAGER_STATE_KEY = 'tabManagerState';
  const TAB_GROUP_ID_NONE = typeof chrome.tabGroups !== 'undefined'
    ? chrome.tabGroups.TAB_GROUP_ID_NONE
    : -1;

  const isSystemUrl = (url) => /^(chrome|edge|about|chrome-extension):/i.test(url);
  const extractDomain = (url) => {
    try { return new URL(url).hostname.replace(/^www\./,''); } catch { return ''; }
  };

  const getFilteredBaseSet = () => {
    let base = [...allTabs];
    // Invert logic: checked = show system tabs, unchecked = hide system tabs
    if (!skipSystemCheckbox.checked) base = base.filter(t => !isSystemUrl(t.url));
    return base;
  };

  const applyFilterSortAndRender = () => {
    const filterText = filterInput.value.toLowerCase();
    let tabs = getFilteredBaseSet();

    // Mark duplicates
    const urlCount = tabs.reduce((acc,t)=>{acc[t.url]=(acc[t.url]||0)+1; return acc;},{});

    if (filterText) {
      tabs = tabs.filter(tab => (tab.url && tab.url.toLowerCase().includes(filterText)) || (tab.title && tab.title.toLowerCase().includes(filterText)));
    }

    // Sorting
    const sortMode = sortSelect.value;
    if (sortMode === 'domain') {
      tabs.sort((a,b)=> extractDomain(a.url).localeCompare(extractDomain(b.url)) || a.index - b.index);
    } else if (sortMode === 'title') {
      tabs.sort((a,b)=> (a.title||'').localeCompare(b.title||'') || a.index - b.index);
    } else if (sortMode === 'last-accessed') {
      tabs.sort((a,b)=> (b.lastAccessed || 0) - (a.lastAccessed || 0) || a.index - b.index);
    } else if (sortMode === 'tab-count') {
      const domainCount = tabs.reduce((acc, t) => {
        const d = extractDomain(t.url); acc[d] = (acc[d]||0) + 1; return acc;
      }, {});
      tabs.sort((a,b)=> {
        const da = extractDomain(a.url), db = extractDomain(b.url);
        return (domainCount[db] - domainCount[da]) || da.localeCompare(db) || a.index - b.index;
      });
    } else { // index
      tabs.sort((a,b)=> a.index - b.index);
    }

    // Hide duplicates if selected
    if (hideDuplicatesCheckbox.checked) {
      const seen = new Set();
      tabs = tabs.filter(t => { if (seen.has(t.url)) return false; seen.add(t.url); return true; });
    }

    renderUrlList(tabs, urlCount);
  };

  const updateCounts = () => {
    const total = urlListContainer.querySelectorAll('.url-item input[type="checkbox"]').length;
    const selected = urlListContainer.querySelectorAll('.url-item input[type="checkbox"]:checked').length;
    countTotalSpan.textContent = total.toString();
    countSelectedSpan.textContent = selected.toString();
  };

  const renderUrlList = (tabsToRender, urlCountMap) => {
    lastRenderedTabs = tabsToRender;
    urlListContainer.innerHTML = '';
    tabsToRender.forEach((tab, index) => {
      const urlItem = document.createElement('div');
      urlItem.className = 'url-item';

      const duplicate = urlCountMap && urlCountMap[tab.url] > 1;
      if (duplicate) urlItem.classList.add('duplicate');
      if (tab.discarded) urlItem.classList.add('discarded');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `tab-${index}`;
      checkbox.value = tab.url;
      checkbox.dataset.tabId = String(tab.id);
      checkbox.checked = true; // default

      const favicon = document.createElement('img');
      favicon.className = 'favicon';
      favicon.referrerPolicy = 'no-referrer';
      favicon.src = tab.favIconUrl || ''; 
      if (!tab.favIconUrl) favicon.classList.add('hidden');

      const label = document.createElement('label');
      label.htmlFor = `tab-${index}`;
      label.textContent = tab.title || tab.url;
      label.title = tab.url;

      // Domain badge (optional small domain)
      const domain = extractDomain(tab.url);
      if (domain) {
        const badge = document.createElement('span');
        badge.className = 'domain-badge';
        badge.textContent = domain;
        label.appendChild(document.createTextNode(' '));
        label.appendChild(badge);
      }

      urlItem.appendChild(checkbox);
      urlItem.appendChild(favicon);
      urlItem.appendChild(label);
      urlListContainer.appendChild(urlItem);

      checkbox.addEventListener('change', updateCounts);
      urlItem.addEventListener('click', (e) => {
        if (e.target === checkbox || e.target.tagName === 'A') return;
        if (e.target.tagName === 'INPUT') return;
        checkbox.checked = !checkbox.checked;
        updateCounts();
      });
    });
    // After render adjust select-all state
    const allCbs = urlListContainer.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(allCbs).every(cb => cb.checked);
    selectAllCheckbox.checked = allChecked;
    updateCounts();
  };

  // Initial load
  try {
    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
  } catch (error) {
    console.error('Error getting tabs:', error);
    statusDiv.textContent = 'Error loading tabs.';
  }

  filterInput.addEventListener('input', () => applyFilterSortAndRender());
  sortSelect.addEventListener('change', () => applyFilterSortAndRender());
  hideDuplicatesCheckbox.addEventListener('change', () => applyFilterSortAndRender());
  skipSystemCheckbox.addEventListener('change', () => applyFilterSortAndRender());
  clearFilterButton.addEventListener('click', () => { filterInput.value=''; applyFilterSortAndRender(); filterInput.focus(); });

  // Select/Deselect All functionality
  selectAllCheckbox.addEventListener('change', () => {
    const allVisibleCheckboxes = urlListContainer.querySelectorAll('input[type="checkbox"]');
    allVisibleCheckboxes.forEach(checkbox => { checkbox.checked = selectAllCheckbox.checked; });
    updateCounts();
  });

  const getSelectedUrls = () => Array.from(urlListContainer.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

  // Copy button functionality
  copyButton.addEventListener('click', async () => {
    const selectedUrls = getSelectedUrls();

    if (selectedUrls.length === 0) {
      statusDiv.textContent = '❌ No URLs selected.';
      setTimeout(() => { statusDiv.textContent = ''; }, 3000);
      return;
    }

    const format = exportFormatSelect.value;

    try {
      if (format === 'html') {
        // Rich Text copy: write both text/html and text/plain simultaneously so
        // the OS can paste rich text (hyperlinks) into Word/email and fall back
        // to plain text in Notepad. ClipboardItem is required for multi-type writes.
        const selectedTabs = lastRenderedTabs.filter(t => selectedUrls.includes(t.url));
        const htmlString = selectedTabs
          .map(t => `<a href="${t.url}">${(t.title || t.url).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</a>`)
          .join('<br>\n');
        const plainText = selectedTabs
          .map(t => `${t.title || t.url}\n${t.url}`)
          .join('\n\n');

        if (typeof ClipboardItem !== 'undefined') {
          await navigator.clipboard.write([
            new ClipboardItem({
              'text/html':  new Blob([htmlString], { type: 'text/html' }),
              'text/plain': new Blob([plainText],  { type: 'text/plain' }),
            }),
          ]);
        } else {
          // Fallback: ClipboardItem not available (older browsers / extension context)
          await navigator.clipboard.writeText(plainText);
        }

        statusDiv.textContent = `✅ Copied ${selectedTabs.length} URLs as Rich Text!`;
      } else {
        await navigator.clipboard.writeText(selectedUrls.join('\n'));
        statusDiv.textContent = `✅ Copied ${selectedUrls.length} URLs!`;
      }

      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
    } catch (error) {
      console.error('Error copying URLs:', error);
      statusDiv.textContent = '❌ Failed to copy URLs';
      setTimeout(() => { statusDiv.textContent = ''; }, 3000);
    }
  });

  const timestampForFilename = () => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
  };

  // Save button functionality
  saveButton.addEventListener('click', () => {
    const selectedUrls = getSelectedUrls();
    if (selectedUrls.length === 0) {
      statusDiv.textContent = '❌ No URLs selected.';
      setTimeout(() => { statusDiv.textContent = ''; }, 3000);
      return;
    }

    const format = exportFormatSelect.value;
    const selectedTabs = lastRenderedTabs.filter(t => selectedUrls.includes(t.url));

    let content = '';
    let filename = `copy-tabs-${timestampForFilename()}`;

    if (format === 'txt') {
      content = selectedTabs.map(t => t.url).join('\n');
      filename += '.txt';
    } else if (format === 'csv') {
      content = 'Title,URL\n' + selectedTabs.map(t => `"${(t.title||'').replace(/"/g, '""')}","${t.url}"`).join('\n');
      filename += '.csv';
    } else if (format === 'md') {
      content = selectedTabs.map(t => `- [${t.title||t.url}](${t.url})`).join('\n');
      filename += '.md.txt';
    } else if (format === 'html') {
      // Rich Text file: a self-contained HTML file with clickable hyperlinks.
      // Can be opened in any browser or imported into Word/email clients.
      const links = selectedTabs
        .map(t => `  <li><a href="${t.url}">${(t.title || t.url).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</a></li>`)
        .join('\n');
      content = `<!DOCTYPE html>\n<html>\n<head><meta charset="utf-8"><title>URLCollector Export</title></head>\n<body>\n<ul>\n${links}\n</ul>\n</body>\n</html>`;
      filename += '.html';
    }

    try {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 0);
      statusDiv.textContent = `💾 Saved ${selectedTabs.length} URLs (${format}).`;
      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
    } catch (err) {
      console.error('Save failed', err);
      statusDiv.textContent = '❌ Failed to save file';
      setTimeout(() => { statusDiv.textContent = ''; }, 3000);
    }
  });

  // Tìm các tab duplicate (không phải tab đầu tiên của mỗi URL)
  function getDuplicateTabs() {
    const urlToFirstTabId = {};
    const dups = [];
    for (const tab of allTabs) {
      if (!urlToFirstTabId[tab.url]) {
        urlToFirstTabId[tab.url] = tab.id;
      } else {
        dups.push(tab);
      }
    }
    return dups;
  }

  // Clear duplicate tabs button functionality
  clearDuplicateBtn.addEventListener('click', () => {
    const dups = getDuplicateTabs();
    if (dups.length === 0) {
      statusDiv.textContent = '✅ No duplicate tabs.';
      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 2000);
      return;
    }
    // Hiển thị danh sách tab duplicate
    duplicateListDiv.innerHTML = '<b>Duplicate tabs to close:</b><ul>' + dups.map(t => `<li>${t.title ? t.title.replace(/</g,'&lt;') : t.url} <span style='color:#888;font-size:11px;'>(${t.url})</span></li>`).join('') + '</ul>';
    duplicateConfirm.classList.remove('hidden');
  });

  cancelCloseDuplicatesBtn.addEventListener('click', () => {
    duplicateConfirm.classList.add('hidden');
  });

  confirmCloseDuplicatesBtn.addEventListener('click', async () => {
    const dups = getDuplicateTabs();
    if (dups.length === 0) {
      duplicateConfirm.classList.add('hidden');
      return;
    }
    try {
      await chrome.tabs.remove(dups.map(t => t.id));
      statusDiv.textContent = `🗑️ Closed ${dups.length} duplicate tabs.`;
      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 2000);
      duplicateConfirm.classList.add('hidden');
      // Reload tab list
      allTabs = await chrome.tabs.query({ currentWindow: true });
      applyFilterSortAndRender();
    } catch (e) {
      statusDiv.textContent = '❌ Failed to close tabs.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
      duplicateConfirm.classList.add('hidden');
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === filterInput) {
      copyButton.click();
    } else if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 's')) {
      e.preventDefault();
      saveButton.click();
    }
  });

  // ── Tab Management ─────────────────────────────────────────

  /**
   * Saves the id, index, and groupId of every tab in the current window
   * to chrome.storage.local so it can be restored later.
   * Pinned tabs are included so their groupId is preserved on restore.
   */
  async function saveTabState() {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const groupIds = [...new Set(
      tabs
        .map(({ groupId }) => groupId)
        .filter(groupId => groupId !== TAB_GROUP_ID_NONE && groupId >= 0)
    )];
    const groups = [];

    for (const groupId of groupIds) {
      try {
        const { title, color } = await chrome.tabGroups.get(groupId);
        groups.push({ groupId, title, color });
      } catch (err) {
        console.warn(`Tab group ${groupId} metadata could not be saved:`, err.message);
      }
    }

    const state = {
      windowId: tabs[0]?.windowId ?? null,
      tabs: tabs.map(({ id, index, groupId }) => ({
        id,
        index,
        groupId,
        wasGrouped: groupId !== TAB_GROUP_ID_NONE && groupId >= 0
      })),
      groups
    };

    await chrome.storage.local.set({ [TAB_MANAGER_STATE_KEY]: state });
    restoreTabsBtn.disabled = false;
  }

  /**
   * Reads the saved tab state and moves every surviving tab back to its
   * original index.  Tabs that were ungrouped (groupId === -1) are
   * explicitly ungrouped again; tabs that belonged to a group are
   * re-attached to that group.  Each call is individually try-catched so
   * a closed tab never aborts the entire restore.
   */
  async function restoreTabState() {
    const result = await chrome.storage.local.get(TAB_MANAGER_STATE_KEY);
    const state = result[TAB_MANAGER_STATE_KEY];
    const currentWindowId = allTabs[0]?.windowId ?? null;
    if (!state || !Array.isArray(state.tabs) || state.tabs.length === 0 || state.windowId !== currentWindowId) {
      restoreTabsBtn.disabled = true;
      return;
    }

    // Sort by original index so moves are applied in order.
    const sorted = [...state.tabs].sort((a, b) => a.index - b.index);

    // Phase 1: move each tab back to its original index.
    for (const entry of sorted) {
      try {
        await chrome.tabs.move(entry.id, { index: entry.index });
      } catch (err) {
        console.warn(`Tab ${entry.id} could not be moved (may be closed):`, err.message);
      }
    }

    // Phase 2: restore group membership using saved group metadata.
    const survivingTabs = await chrome.tabs.query({ currentWindow: true });
    const survivingTabIds = new Set(survivingTabs.map(({ id }) => id));
    const groupedTabs = new Map();
    const savedGroups = new Map((state.groups || []).map(group => [group.groupId, group]));

    for (const entry of sorted) {
      if (!survivingTabIds.has(entry.id)) {
        continue;
      }

      if (entry.wasGrouped && entry.groupId !== undefined && entry.groupId !== TAB_GROUP_ID_NONE && entry.groupId >= 0) {
        if (!groupedTabs.has(entry.groupId)) {
          groupedTabs.set(entry.groupId, []);
        }
        groupedTabs.get(entry.groupId).push(entry.id);
        continue;
      }

      try {
        await chrome.tabs.ungroup([entry.id]);
      } catch (err) {
        console.warn(`Tab ${entry.id} ungroup restore skipped:`, err.message);
      }
    }

    for (const [groupId, tabIds] of groupedTabs) {
      try {
        const newGroupId = await chrome.tabs.group({ tabIds });
        const savedGroup = savedGroups.get(groupId);
        if (savedGroup) {
          await chrome.tabGroups.update(newGroupId, {
            title: savedGroup.title,
            color: savedGroup.color
          });
        }
      } catch (err) {
        console.warn(`Group restore skipped for ${groupId}:`, err.message);
      }
    }

    await chrome.storage.local.remove(TAB_MANAGER_STATE_KEY);
    restoreTabsBtn.disabled = true;

    // Refresh the displayed list.
    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();

    statusDiv.textContent = '↩ Tabs restored.';
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  /**
   * Shared helper: sorts and clusters all existing Tab Groups A→Z using
   * chrome.tabGroups.move without saving state or touching the UI.
   * Returns the tab index immediately after the last group so callers know
   * where ungrouped tabs should begin.
   */
  async function _doSortGroups() {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const pinnedCount = tabs.filter(t => t.pinned).length;
    const groups = await chrome.tabGroups.query({ windowId: chrome.windows.WINDOW_ID_CURRENT });
    if (groups.length === 0) return pinnedCount;

    groups.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

    // Pack each group consecutively right after pinned tabs.
    let currentIndex = pinnedCount;
    for (const group of groups) {
      try {
        const groupTabs = await chrome.tabs.query({ groupId: group.id });
        await chrome.tabGroups.move(group.id, { index: currentIndex });
        currentIndex += groupTabs.length;
      } catch (err) {
        console.warn(`_doSortGroups: could not move group "${group.title}":`, err.message);
      }
    }
    // currentIndex is now the first slot after all grouped tabs.
    return currentIndex;
  }

  /**
   * Sorts only the FREE (ungrouped) tabs by root domain A→Z.
   * Existing Tab Groups are sorted and clustered first so they are never
   * broken apart by a chrome.tabs.move call.
   */
  async function sortTabsByDomain() {
    await saveTabState();

    try {
      // Step 1: Cluster + sort all groups; get the index where free tabs start.
      const freeStart = await _doSortGroups();

      // Step 2: Re-query; keep only free (ungrouped, unpinned, non-system) tabs.
      const tabs = await chrome.tabs.query({ currentWindow: true });
      const free = tabs.filter(
        t => !t.pinned &&
             t.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE &&
             !isSystemUrl(t.url)
      );
      if (free.length === 0) {
        allTabs = await chrome.tabs.query({ currentWindow: true });
        applyFilterSortAndRender();
        return;
      }

      // Step 3: Sort free tabs A→Z by root domain.
      free.sort((a, b) =>
        (extractDomain(a.url) || '').localeCompare(extractDomain(b.url) || '') || a.index - b.index
      );

      // Step 4: Bulk-move free tabs to start at freeStart — groups stay untouched.
      await chrome.tabs.move(free.map(t => t.id), { index: freeStart });

      allTabs = await chrome.tabs.query({ currentWindow: true });
      applyFilterSortAndRender();
      statusDiv.textContent = `✅ Sorted ${free.length} ungrouped tab${free.length !== 1 ? 's' : ''} by domain.`;
      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
    } catch (err) {
      console.error('sortTabsByDomain failed:', err);
      statusDiv.textContent = '❌ Sort failed.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
    }
  }

  /**
   * Groups all unpinned, non-internal tabs by their root domain using
   * Chrome Tab Groups.  Domains with 2+ tabs get a named group;
   * single-tab domains are explicitly ungrouped.
   */
  async function groupTabsByDomain() {
    await saveTabState();

    const tabs = await chrome.tabs.query({ currentWindow: true });
    const pinnedCount = tabs.filter(t => t.pinned).length;

    // Sort eligible tabs A→Z by root domain so same-domain tabs land
    // adjacent to each other and groups appear in alphabetical order.
    const eligible = tabs
      .filter(t => !t.pinned && !isSystemUrl(t.url))
      .sort((a, b) =>
        (extractDomain(a.url) || '(other)').localeCompare(extractDomain(b.url) || '(other)')
        || a.index - b.index
      );

    // Move each tab individually to guarantee sorted adjacent placement.
    // chrome.tabs.move(array) does not preserve array order reliably.
    for (let i = 0; i < eligible.length; i++) {
      await chrome.tabs.move(eligible[i].id, { index: pinnedCount + i });
    }

    // Build Map<domain → tabId[]> — insertion order is now A→Z.
    const domainMap = new Map();
    for (const tab of eligible) {
      const domain = extractDomain(tab.url) || '(other)';
      if (!domainMap.has(domain)) domainMap.set(domain, []);
      domainMap.get(domain).push(tab.id);
    }

    for (const [domain, tabIds] of domainMap) {
      try {
        if (tabIds.length >= 2) {
          const groupId = await chrome.tabs.group({ tabIds });
          await chrome.tabGroups.update(groupId, { title: domain });
        } else {
          // Ungroup lone tabs so they are never left inside a stale group.
          await chrome.tabs.ungroup(tabIds);
        }
      } catch (err) {
        console.warn(`Could not group/ungroup domain "${domain}":`, err.message);
      }
    }

    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();

    statusDiv.textContent = `✅ Grouped tabs by domain.`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  // Init: enable Restore button if a saved state already exists.
  const initState = await chrome.storage.local.get(TAB_MANAGER_STATE_KEY);
  if (
    initState[TAB_MANAGER_STATE_KEY] &&
    initState[TAB_MANAGER_STATE_KEY].windowId === allTabs[0]?.windowId &&
    initState[TAB_MANAGER_STATE_KEY].tabs?.length > 0
  ) {
    restoreTabsBtn.disabled = false;
  }

  // ── Phase 2 new functions ──────────────────────────────────

  /**
   * Collapses all tab groups if any are currently expanded, otherwise
   * expands them all. Updates the button label to reflect the next action.
   */
  /**
   * Clusters and sorts all Tab Groups alphabetically by title using
   * chrome.tabGroups.move — safe for groups because it moves the entire
   * group as a unit without touching individual tab indices.
   *
   * Indexing logic:
   *   currentIndex starts right after pinned tabs.
   *   After each group.move(), advance currentIndex by the tab count of that
   *   group so the next group is placed immediately after it.
   */
  async function sortTabGroups() {
    await saveTabState();
    const groups = await chrome.tabGroups.query({ windowId: chrome.windows.WINDOW_ID_CURRENT });
    if (groups.length === 0) {
      statusDiv.textContent = 'No tab groups to sort.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
      return;
    }
    // Delegate to the shared helper which does the actual moves.
    await _doSortGroups();
    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = `✅ Sorted ${groups.length} tab group${groups.length !== 1 ? 's' : ''} A→Z.`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  async function toggleAllGroups() {
    try {
      const groups = await chrome.tabGroups.query({ windowId: chrome.windows.WINDOW_ID_CURRENT });
      if (groups.length === 0) {
        statusDiv.textContent = 'No tab groups found.';
        setTimeout(() => { statusDiv.textContent = ''; }, 2000);
        return;
      }
      const anyExpanded = groups.some(g => !g.collapsed);
      for (const group of groups) {
        try {
          await chrome.tabGroups.update(group.id, { collapsed: anyExpanded });
        } catch (err) {
          console.warn(`Could not update group ${group.id}:`, err.message);
        }
      }
      toggleGroupsBtn.innerHTML = anyExpanded ? '<span class="material-icons">expand_less</span>Toggle Groups' : '<span class="material-icons">expand_more</span>Toggle Groups';
      statusDiv.textContent = anyExpanded ? '▶ All groups collapsed.' : '▼ All groups expanded.';
      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 2000);
    } catch (err) {
      console.error('toggleAllGroups failed:', err);
      statusDiv.textContent = '❌ Could not toggle groups.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
    }
  }

  /**
   * Physically sorts browser tabs using the selected metric from
   * #sort-action-select and then refreshes the list display.
   */
  async function executeSort() {
    const metric = sortActionSelect.value;
    if (metric === 'domain') {
      await sortTabsByDomain();
    } else if (metric === 'tab-count') {
      await sortTabsByTabCount();
    }
  }

  /**
   * Physically sorts unpinned tabs so that domains with the most tabs
   * appear first, with alphabetical tie-breaking.
   */
  async function sortTabsByTabCount() {
    await saveTabState();
    try {
      // Step 1: Cluster + sort all groups; get index where free tabs start.
      const freeStart = await _doSortGroups();

      // Step 2: Re-query; keep only free (ungrouped, unpinned, non-system) tabs.
      const tabs = await chrome.tabs.query({ currentWindow: true });
      const free = tabs.filter(
        t => !t.pinned &&
             t.groupId === chrome.tabGroups.TAB_GROUP_ID_NONE &&
             !isSystemUrl(t.url)
      );
      if (free.length === 0) {
        allTabs = await chrome.tabs.query({ currentWindow: true });
        applyFilterSortAndRender();
        return;
      }

      // Step 3: Count tabs per domain across free tabs only.
      const domainCount = free.reduce((acc, t) => {
        const d = extractDomain(t.url); acc[d] = (acc[d] || 0) + 1; return acc;
      }, {});

      // Sort: most tabs first, then A→Z, then original index.
      free.sort((a, b) => {
        const da = extractDomain(a.url), db = extractDomain(b.url);
        return (domainCount[db] - domainCount[da]) || da.localeCompare(db) || a.index - b.index;
      });

      // Step 4: Bulk-move free tabs after all groups.
      await chrome.tabs.move(free.map(t => t.id), { index: freeStart });

      allTabs = await chrome.tabs.query({ currentWindow: true });
      applyFilterSortAndRender();
      statusDiv.textContent = `✅ Sorted ${free.length} ungrouped tab${free.length !== 1 ? 's' : ''} by tab count.`;
      statusDiv.classList.add('success');
      setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
    } catch (err) {
      console.error('sortTabsByTabCount failed:', err);
      statusDiv.textContent = '❌ Sort failed.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
    }
  }

  /**
   * Groups browser tabs using the selected metric from #group-action-select.
   */
  async function executeGroup() {
    const metric = groupActionSelect.value;
    if (metric === 'domain') {
      await groupTabsByDomain();
    } else if (metric === 'subdomain') {
      await groupTabsBySubdomain();
    }
  }

  /**
   * Groups tabs by full hostname (preserving subdomains, e.g. docs.github.com
   * is separate from github.com). Mirrors groupTabsByDomain logic.
   */
  async function groupTabsBySubdomain() {
    await saveTabState();
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const pinnedCount = tabs.filter(t => t.pinned).length;

    const getHost = (url) => { try { return new URL(url).hostname || '(other)'; } catch { return '(other)'; } };

    // Sort eligible tabs A→Z by full hostname so same-subdomain tabs land
    // adjacent to each other and groups appear in alphabetical order.
    const eligible = tabs
      .filter(t => !t.pinned && !isSystemUrl(t.url))
      .sort((a, b) => getHost(a.url).localeCompare(getHost(b.url)) || a.index - b.index);

    // Move each tab individually to guarantee sorted adjacent placement.
    // chrome.tabs.move(array) does not preserve array order reliably.
    for (let i = 0; i < eligible.length; i++) {
      await chrome.tabs.move(eligible[i].id, { index: pinnedCount + i });
    }

    // Build Map<host → tabId[]> — insertion order is now A→Z.
    const hostMap = new Map();
    for (const tab of eligible) {
      const host = getHost(tab.url);
      if (!hostMap.has(host)) hostMap.set(host, []);
      hostMap.get(host).push(tab.id);
    }

    for (const [host, tabIds] of hostMap) {
      try {
        if (tabIds.length >= 2) {
          const groupId = await chrome.tabs.group({ tabIds });
          await chrome.tabGroups.update(groupId, { title: host });
        } else {
          await chrome.tabs.ungroup(tabIds);
        }
      } catch (err) {
        console.warn(`Could not group/ungroup host "${host}":`, err.message);
      }
    }

    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = '✅ Grouped tabs by subdomain.';
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  /**
   * Discards all inactive tabs (excluding: active, audible, loading, pinned,
   * and already-discarded tabs) to free RAM.
   */
  async function sleepInactiveTabs() {
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const candidates = tabs.filter(t =>
      !t.active && !t.audible && !t.discarded && t.status !== 'loading' && !t.pinned
    );
    if (candidates.length === 0) {
      statusDiv.textContent = 'No inactive tabs to sleep.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
      return;
    }
    let count = 0;
    for (const tab of candidates) {
      try {
        await chrome.tabs.discard(tab.id);
        count++;
      } catch (err) {
        console.warn(`Could not discard tab ${tab.id}:`, err.message);
      }
    }
    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = `💤 Slept ${count} inactive tab${count !== 1 ? 's' : ''}.`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  /**
   * Discards the currently-selected (checked) tabs, applying the same
   * exclusions as sleepInactiveTabs (skips active, audible, loading, pinned).
   */
  async function sleepSelectedTabs() {
    const checkedBoxes = Array.from(
      urlListContainer.querySelectorAll('input[type="checkbox"]:checked')
    );
    if (checkedBoxes.length === 0) {
      statusDiv.textContent = 'No tabs selected.';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
      return;
    }

    const selectedIds = checkedBoxes
      .map(cb => parseInt(cb.dataset.tabId, 10))
      .filter(id => !isNaN(id));

    const tabs = await chrome.tabs.query({ currentWindow: true });
    const tabMap = new Map(tabs.map(t => [t.id, t]));

    let count = 0;
    for (const id of selectedIds) {
      const tab = tabMap.get(id);
      if (!tab) continue;
      if (tab.active || tab.audible || tab.discarded || tab.status === 'loading' || tab.pinned) continue;
      try {
        await chrome.tabs.discard(id);
        count++;
      } catch (err) {
        console.warn(`Could not discard tab ${id}:`, err.message);
      }
    }

    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = `💤 Slept ${count} selected tab${count !== 1 ? 's' : ''}.`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  // Wire Tab Management event listeners (Phase 2).
  sortTabsBtn.addEventListener('click', executeSort);
  groupTabsBtn.addEventListener('click', executeGroup);
  toggleGroupsBtn.addEventListener('click', toggleAllGroups);
  sortGroupsBtn.addEventListener('click', sortTabGroups);
  sleepInactiveBtn.addEventListener('click', sleepInactiveTabs);
  sleepSelectedBtn.addEventListener('click', sleepSelectedTabs);
  restoreTabsBtn.addEventListener('click', restoreTabState);

  // ── Phase 3: Tab Session Manager ───────────────────────────────────────────

  /**
   * Builds a human-readable timestamp string for session names.
   * e.g. "Session — May 22 2026, 14:30"
   */
  function buildSessionName() {
    const d = new Date();
    return `Session \u2014 ${d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}, ${d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`;
  }

  /**
   * Saves the current set of open tabs (plus their Tab Group metadata) to
   * chrome.storage.local under the "uc_sessions" key.
   *
   * Schema per session:
   *   { id, name, timestamp, tabs: [{ url, title, groupName, groupColor }] }
   */
  async function saveSession() {
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // Collect unique group IDs so we only call chrome.tabGroups.get() once per group.
    const groupIds = [...new Set(
      tabs.map(t => t.groupId).filter(id => id !== TAB_GROUP_ID_NONE && id >= 0)
    )];

    // Build a Map<groupId, { title, color }> for fast lookup below.
    const groupMeta = new Map();
    for (const groupId of groupIds) {
      try {
        const { title, color } = await chrome.tabGroups.get(groupId);
        groupMeta.set(groupId, { title: title || '', color: color || 'grey' });
      } catch (err) {
        console.warn(`[Session] Could not fetch group ${groupId}:`, err.message);
      }
    }

    const sessionTabs = tabs.map(t => {
      const meta = groupMeta.get(t.groupId);
      return {
        url:        t.url,
        title:      t.title || t.url,
        groupName:  meta ? meta.title  : null,
        groupColor: meta ? meta.color  : null,
      };
    });

    const newSession = {
      id:        `uc_${Date.now()}`,
      name:      buildSessionName(),
      timestamp: Date.now(),
      tabs:      sessionTabs,
    };

    const result = await chrome.storage.local.get(UC_SESSIONS_KEY);
    const existing = Array.isArray(result[UC_SESSIONS_KEY]) ? result[UC_SESSIONS_KEY] : [];
    await chrome.storage.local.set({ [UC_SESSIONS_KEY]: [newSession, ...existing] });

    statusDiv.textContent = `\u2705 Session saved (${sessionTabs.length} tabs).`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  /**
   * Restores a saved session by opening each saved URL as a new tab in the
   * current window, then re-grouping them to match the original Tab Groups.
   *
   * Grouping strategy:
   *   - Collect newly created tabs by their original groupName.
   *   - Call chrome.tabs.group() once per group name, then
   *     chrome.tabGroups.update() to set title + color.
   */
  async function restoreSession(session) {
    sessionsModal.classList.add('hidden');

    // Map<groupName, tabId[]> to batch-create groups after all tabs open.
    const groupNameToTabIds = new Map();
    const createdTabIds = [];

    for (const savedTab of session.tabs) {
      try {
        const newTab = await chrome.tabs.create({ url: savedTab.url, active: false });
        createdTabIds.push(newTab.id);
        if (savedTab.groupName) {
          if (!groupNameToTabIds.has(savedTab.groupName)) {
            groupNameToTabIds.set(savedTab.groupName, { tabIds: [], color: savedTab.groupColor || 'grey' });
          }
          groupNameToTabIds.get(savedTab.groupName).tabIds.push(newTab.id);
        }
      } catch (err) {
        console.warn(`[Session] Could not open tab ${savedTab.url}:`, err.message);
      }
    }

    // Re-create Tab Groups from saved metadata.
    for (const [groupName, { tabIds, color }] of groupNameToTabIds) {
      if (tabIds.length === 0) continue;
      try {
        const newGroupId = await chrome.tabs.group({ tabIds });
        await chrome.tabGroups.update(newGroupId, { title: groupName, color });
      } catch (err) {
        console.warn(`[Session] Could not recreate group "${groupName}":`, err.message);
      }
    }

    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = `\u21a9 Restored \u201c${session.name}\u201d (${createdTabIds.length} tabs).`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 4000);
  }

  /**
   * Deletes a saved session by ID and re-renders the sessions list.
   */
  async function deleteSession(sessionId) {
    const result = await chrome.storage.local.get(UC_SESSIONS_KEY);
    const existing = Array.isArray(result[UC_SESSIONS_KEY]) ? result[UC_SESSIONS_KEY] : [];
    const updated = existing.filter(s => s.id !== sessionId);
    await chrome.storage.local.set({ [UC_SESSIONS_KEY]: updated });
    renderSessionsList(updated);
  }

  /**
   * Renders the list of saved sessions inside the sessions modal.
   */
  function renderSessionsList(sessions) {
    sessionsListDiv.innerHTML = '';

    if (!sessions || sessions.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'uc-sessions-empty';
      empty.textContent = 'No saved sessions yet.';
      sessionsListDiv.appendChild(empty);
      return;
    }

    for (const session of sessions) {
      const item = document.createElement('div');
      item.className = 'uc-session-item';

      const meta = document.createElement('div');
      meta.className = 'uc-session-meta';

      const name = document.createElement('span');
      name.className = 'uc-session-name';
      name.textContent = session.name;
      name.title = session.name;

      const detail = document.createElement('span');
      detail.className = 'uc-session-detail';
      detail.textContent = `${session.tabs.length} tab${session.tabs.length !== 1 ? 's' : ''}`;

      meta.appendChild(name);
      meta.appendChild(detail);

      const actions = document.createElement('div');
      actions.className = 'uc-session-actions';

      const restoreBtn = document.createElement('button');
      restoreBtn.className = 'uc-btn uc-btn-secondary';
      restoreBtn.title = 'Open all tabs from this session';
      restoreBtn.innerHTML = '<span class="material-icons" style="font-size:14px">restore</span>Restore';
      restoreBtn.addEventListener('click', () => restoreSession(session));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'uc-btn uc-btn-danger';
      deleteBtn.title = 'Delete this session';
      deleteBtn.innerHTML = '<span class="material-icons" style="font-size:14px">delete</span>';
      deleteBtn.addEventListener('click', () => deleteSession(session.id));

      actions.appendChild(restoreBtn);
      actions.appendChild(deleteBtn);

      item.appendChild(meta);
      item.appendChild(actions);
      sessionsListDiv.appendChild(item);
    }
  }

  /**
   * Opens the sessions modal and loads the current list from storage.
   */
  async function openSessionsModal() {
    const result = await chrome.storage.local.get(UC_SESSIONS_KEY);
    const sessions = Array.isArray(result[UC_SESSIONS_KEY]) ? result[UC_SESSIONS_KEY] : [];
    renderSessionsList(sessions);
    sessionsModal.classList.remove('hidden');
  }

  function closeSessionsModal() {
    sessionsModal.classList.add('hidden');
  }

  // Wire Session Manager event listeners.
  saveSessionBtn.addEventListener('click', saveSession);
  manageSessionsBtn.addEventListener('click', openSessionsModal);
  closeSessionsModalBtn.addEventListener('click', closeSessionsModal);
  closeSessionsBtn.addEventListener('click', closeSessionsModal);
  // Close sessions modal when clicking the backdrop.
  sessionsModal.addEventListener('click', (e) => {
    if (e.target === sessionsModal) closeSessionsModal();
  });
});
