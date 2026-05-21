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
  // Tab Management buttons
  const sortByDomainBtn = document.getElementById('sort-by-domain-btn');
  const groupByDomainBtn = document.getElementById('group-by-domain-btn');
  const restoreTabsBtn = document.getElementById('restore-tabs-btn');

  filterInput.focus();

  let allTabs = [];
  let lastRenderedTabs = [];

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

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `tab-${index}`;
      checkbox.value = tab.url;
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

  // Enable Restore button if a saved state already exists
  try {
    const initResult = await chrome.storage.local.get('tabManagerState');
    if (initResult.tabManagerState) restoreTabsBtn.disabled = false;
  } catch (e) { /* ignore */ }

  // --- Tab Management functions ---
  // Duplicate local declarations removed; keep the later Tab Management block
  // in this DOMContentLoaded handler as the single source of truth.

  async function sortTabsByDomain() {
    await saveTabState();
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const firstUnpinnedIndex = tabs.filter(t => t.pinned).length;
    const movable = tabs.filter(t => !t.pinned && !isSystemUrl(t.url));
    movable.sort((a, b) => extractDomain(a.url).localeCompare(extractDomain(b.url)) || a.index - b.index);
    const sortedIds = movable.map(t => t.id);
    if (sortedIds.length > 0) {
      await chrome.tabs.move(sortedIds, { index: firstUnpinnedIndex });
    }
    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = '✅ Tabs sorted by domain.';
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  async function groupTabsByDomain() {
    await saveTabState();
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const groupable = tabs.filter(t => !t.pinned && !isSystemUrl(t.url));

    const domainMap = new Map();
    for (const tab of groupable) {
      const domain = extractDomain(tab.url);
      if (!domainMap.has(domain)) domainMap.set(domain, []);
      domainMap.get(domain).push(tab.id);
    }

    for (const [domain, tabIds] of domainMap) {
      try {
        if (tabIds.length >= 2) {
          const groupId = await chrome.tabs.group({ tabIds });
          await chrome.tabGroups.update(groupId, { title: domain });
        } else {
          await chrome.tabs.ungroup(tabIds);
        }
      } catch (e) { console.warn(`Could not group domain "${domain}":`, e); }
    }

    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();
    statusDiv.textContent = '✅ Tabs grouped by domain.';
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  sortByDomainBtn.addEventListener('click', sortTabsByDomain);
  groupByDomainBtn.addEventListener('click', groupTabsByDomain);
  restoreTabsBtn.addEventListener('click', restoreTabState);
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
    const urlsToCopy = getSelectedUrls().join('\n');

    if (!urlsToCopy) {
      statusDiv.textContent = '❌ No URLs selected.';
      setTimeout(() => { statusDiv.textContent = ''; }, 3000);
      return;
    }

    try {
      await navigator.clipboard.writeText(urlsToCopy);
      statusDiv.textContent = `✅ Copied ${getSelectedUrls().length} URLs!`;
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
    const state = tabs.map(({ id, index, groupId }) => ({ id, index, groupId }));
    await chrome.storage.local.set({ tabManagerState: state });
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
    const result = await chrome.storage.local.get('tabManagerState');
    const state = result.tabManagerState;
    if (!state || state.length === 0) return;

    // Sort by original index so moves are applied in order.
    const sorted = [...state].sort((a, b) => a.index - b.index);

    // Phase 1: move each tab back to its original index.
    for (const entry of sorted) {
      try {
        await chrome.tabs.move(entry.id, { index: entry.index });
      } catch (err) {
        console.warn(`Tab ${entry.id} could not be moved (may be closed):`, err.message);
      }
    }

    // Phase 2: restore group membership.
    // TAB_GROUP_ID_NONE is -1 in the Chrome API.
    const NONE = typeof chrome.tabGroups !== 'undefined'
      ? chrome.tabGroups.TAB_GROUP_ID_NONE
      : -1;

    for (const entry of sorted) {
      try {
        if (entry.groupId !== undefined && entry.groupId !== NONE && entry.groupId >= 0) {
          // Re-attach to original group (group must still exist).
          await chrome.tabs.group({ tabIds: [entry.id], groupId: entry.groupId });
        } else {
          // Explicitly ungroup so the tab is not trapped inside a new group.
          await chrome.tabs.ungroup([entry.id]);
        }
      } catch (err) {
        console.warn(`Tab ${entry.id} group restore skipped:`, err.message);
      }
    }

    await chrome.storage.local.remove('tabManagerState');
    restoreTabsBtn.disabled = true;

    // Refresh the displayed list.
    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();

    statusDiv.textContent = '↩ Tabs restored.';
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  /**
   * Sorts all unpinned, non-internal tabs alphabetically by root domain,
   * then moves them in a single bulk API call starting right after the
   * last pinned tab.
   */
  async function sortTabsByDomain() {
    await saveTabState();

    const tabs = await chrome.tabs.query({ currentWindow: true });
    const pinnedCount = tabs.filter(t => t.pinned).length;
    // firstUnpinnedIndex is the index where unpinned tabs begin.
    const firstUnpinnedIndex = pinnedCount;

    // Only sort unpinned tabs with non-internal URLs.
    const movable = tabs.filter(t => !t.pinned && !isSystemUrl(t.url));

    movable.sort((a, b) =>
      extractDomain(a.url).localeCompare(extractDomain(b.url)) || a.index - b.index
    );

    const sortedTabIds = movable.map(t => t.id);
    if (sortedTabIds.length === 0) return;

    // Single bulk move — avoids per-tab race conditions and UI glitches.
    await chrome.tabs.move(sortedTabIds, { index: firstUnpinnedIndex });

    allTabs = await chrome.tabs.query({ currentWindow: true });
    applyFilterSortAndRender();

    statusDiv.textContent = `✅ Sorted ${sortedTabIds.length} tabs by domain.`;
    statusDiv.classList.add('success');
    setTimeout(() => { statusDiv.textContent = ''; statusDiv.classList.remove('success'); }, 3000);
  }

  /**
   * Groups all unpinned, non-internal tabs by their root domain using
   * Chrome Tab Groups.  Domains with 2+ tabs get a named group;
   * single-tab domains are explicitly ungrouped.
   */
  async function groupTabsByDomain() {
    await saveTabState();

    const tabs = await chrome.tabs.query({ currentWindow: true });

    // Exclude pinned and internal-URL tabs from grouping.
    const eligible = tabs.filter(t => !t.pinned && !isSystemUrl(t.url));

    // Build Map<domain → tabId[]>.
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
  const initState = await chrome.storage.local.get('tabManagerState');
  if (initState.tabManagerState && initState.tabManagerState.length > 0) {
    restoreTabsBtn.disabled = false;
  }

  // Wire Tab Management event listeners.
  sortByDomainBtn.addEventListener('click', sortTabsByDomain);
  groupByDomainBtn.addEventListener('click', groupTabsByDomain);
  restoreTabsBtn.addEventListener('click', restoreTabState);
});