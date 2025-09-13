// Import theme functions
import { initializeTheme, setupThemeToggle } from './theme.js';

/**
 * IMPORTANT: Chrome Extension Theme System Notes
 * 
 * 1. Content Security Policy (CSP) Requirements:
 *    - Never use inline scripts - always use external JS files
 *    - Ensure manifest.json has proper CSP: 
 *      "content_security_policy": {
 *        "extension_pages": "script-src 'self'; object-src 'self'"
 *      }
 *    - Never use eval() or new Function()
 * 
 * 2. Debugging Theme Issues:
 *    - Check browser console for CSP violations
 *    - Verify script loading order (DOM must be loaded)
 *    - Use try/catch blocks to handle errors gracefully
 * 
 * 3. For Future Modifications:
 *    - Add new themes in lib/theme.js to allThemes array
 *    - Each theme needs name, label, and emoji properties
 *    - All CSS variables must be consistently defined
 */

// Check if direct-theme-toggle is active and working
function isDirectThemeToggleActive() {
  try {
    return !!document.querySelector('#theme-toggle-btn') && 
           typeof localStorage.getItem('theme-mode') === 'string';
  } catch (e) {
    return false;
  }
}

// Initialize theme functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded in theme-init.js');
  
  // Skip initialization if direct theme toggle is working
  if (isDirectThemeToggleActive()) {
    console.log('Direct theme toggle is active, skipping advanced theme initialization');
    return;
  }
  
  try {
    // Initialize theme with debug mode enabled to see logs
    initializeTheme(true);
    console.log('Theme initialized successfully');
    
    // Set up the theme toggle with our enhanced function
    setupThemeToggle('theme-toggle-btn');
    console.log('Theme toggle setup with multi-theme support');
  } catch (error) {
    console.error('Error in theme initialization:', error);
  }
});