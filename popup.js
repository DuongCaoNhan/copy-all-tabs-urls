document.addEventListener('DOMContentLoaded', async function() {
  const copyButton = document.getElementById('copyButton');
  const statusDiv = document.getElementById('status');
  const urlListContainer = document.getElementById('url-list-container');
  const filterInput = document.getElementById('filter-input');
  const selectAllCheckbox = document.getElementById('select-all-checkbox');

  let allTabs = [];

  // Function to render the list of URLs
  const renderUrlList = (tabsToRender) => {
    urlListContainer.innerHTML = '';
    tabsToRender.forEach((tab, index) => {
      const urlItem = document.createElement('div');
      urlItem.className = 'url-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `tab-${index}`;
      checkbox.value = tab.url;
      checkbox.checked = true; // Default to checked

      const label = document.createElement('label');
      label.htmlFor = `tab-${index}`;
      label.textContent = tab.title || tab.url;
      label.title = tab.url;

      urlItem.appendChild(checkbox);
      urlItem.appendChild(label);
      urlListContainer.appendChild(urlItem);
    });
  };

  // Initial load
  try {
    allTabs = await chrome.tabs.query({ currentWindow: true });
    renderUrlList(allTabs);
  } catch (error) {
    console.error('Error getting tabs:', error);
    statusDiv.textContent = 'Error loading tabs.';
  }

  // Filter functionality
  filterInput.addEventListener('input', () => {
    const filterText = filterInput.value.toLowerCase();
    const filteredTabs = allTabs.filter(tab => 
      (tab.url && tab.url.toLowerCase().includes(filterText)) ||
      (tab.title && tab.title.toLowerCase().includes(filterText))
    );
    renderUrlList(filteredTabs);
    // After filtering, re-apply the "select all" state
    const allVisibleCheckboxes = urlListContainer.querySelectorAll('input[type="checkbox"]');
    allVisibleCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
  });

  // Select/Deselect All functionality
  selectAllCheckbox.addEventListener('change', () => {
    const allVisibleCheckboxes = urlListContainer.querySelectorAll('input[type="checkbox"]');
    allVisibleCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // Copy button functionality
  copyButton.addEventListener('click', async () => {
    const selectedCheckboxes = urlListContainer.querySelectorAll('input[type="checkbox"]:checked');
    const urlsToCopy = Array.from(selectedCheckboxes).map(cb => cb.value).join('\n');

    if (!urlsToCopy) {
      statusDiv.textContent = '❌ No URLs selected.';
      setTimeout(() => { statusDiv.textContent = ''; }, 3000);
      return;
    }

    try {
      await navigator.clipboard.writeText(urlsToCopy);
      
      statusDiv.textContent = `✅ Copied ${selectedCheckboxes.length} URLs!`;
      statusDiv.classList.add('success');
      
      setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.classList.remove('success');
      }, 3000);
      
    } catch (error) {
      console.error('Error copying URLs:', error);
      statusDiv.textContent = '❌ Failed to copy URLs';
      
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 3000);
    }
  });
});
