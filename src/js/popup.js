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

  // Event bindings
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
});