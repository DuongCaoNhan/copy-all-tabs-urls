document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copyButton');
  const statusDiv = document.getElementById('status');

  copyButton.addEventListener('click', async function() {
    try {
      // Get all tabs in the current window
      const tabs = await chrome.tabs.query({ currentWindow: true });
      
      // Extract URLs and join them with newlines
      const urls = tabs.map(tab => tab.url).join('\n');
      
      // Copy to clipboard using the modern Clipboard API
      await navigator.clipboard.writeText(urls);
      
      // Show success message
      statusDiv.textContent = `✅ Copied ${tabs.length} URLs!`;
      statusDiv.classList.add('success');
      
      // Clear status after 3 seconds
      setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.classList.remove('success');
      }, 3000);
      
    } catch (error) {
      console.error('Error copying URLs:', error);
      statusDiv.textContent = '❌ Failed to copy URLs';
      statusDiv.style.color = '#d93025';
      
      // Clear error message after 3 seconds
      setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.style.color = '';
      }, 3000);
    }
  });
});
