# URLCollector Extension - AI Assistance Guide

## Project Overview
This Chrome extension lets users collect, filter, sort, and export URLs from all browser tabs in the current window. It features a Fluent UI inspired design with dark/light theme support.

## Design Guidelines
This project follows a unified design system that combines Fluent 2 and Apple HIG principles. All visual elements and interactions should adhere to these guidelines.
- See [Design Guidelines](./design-guidelines.md) for detailed specifications.

## Architecture
- **Manifest V3 Extension**: Uses Chrome extension APIs with strict Content Security Policy rules
- **UI Components**: Single popup interface with filtering, sorting, and selection features
- **Theme System**: Custom CSS variables system based on Fluent UI design tokens

## Key Components
1. **Popup UI** (`popup/popup.html`, `popup/popup.js`, `popup/popup.css`)
   - Main extension interface with tab list, filtering, sorting, and action buttons
   - Dynamically renders tab items with checkboxes, favicons, and title/URL info
   - Follows the design principles of clarity, deference to content, and depth outlined in the design guidelines

2. **Theme System** (`lib/theme.js`, `popup/theme-init.js`)
   - CSS variable-based theming using Fluent UI design tokens
   - Supports system preference detection and manual theme switching
   - Persists theme preference in localStorage
   - Implements the color system specified in the design guidelines

3. **Chrome Integration** (`popup/popup.js`)
   - Uses Chrome Tabs API to list and manipulate browser tabs
   - Clipboard interaction for copying selected URLs
   - File saving functionality for exporting URLs in different formats

## Critical Patterns & Conventions

### 1. Content Security Policy Compliance
Chrome extensions with Manifest V3 enforce strict CSP. No inline scripts are allowed - always use external JS files, and ensure proper CSP configuration in manifest.json.

```html
<!-- CORRECT: External script reference -->
<script type="module" src="theme-init.js"></script>

<!-- INCORRECT: Inline script will be blocked -->
<script type="module">
  import { initializeTheme } from '../lib/theme.js';
  // This will be blocked by CSP
</script>
```

```json
// Required CSP configuration in manifest.json
"content_security_policy": {
  "extension_pages": "script-src 'self'; object-src 'self'"
},
"permissions": [
  "tabs",
  "storage"  // Required for localStorage theme persistence
]
```

### 2. Theme Management
Theme tokens are defined in `lib/theme.js` and applied as CSS variables:
```javascript
// Setting theme (from lib/theme.js)
export function setTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme).forEach(([token, value]) => {
    root.style.setProperty(`--${token}`, value);
  });
  root.setAttribute('data-theme', theme === webDarkTheme ? 'dark' : 'light');
}
```

### 3. Dynamic UI Generation
Tab items are dynamically created in JavaScript rather than static HTML:
```javascript
// From popup.js - renderUrlList function
const urlItem = document.createElement('div');
urlItem.className = 'url-item';
// ... additional element creation and configuration
```

### 4. Cross-File Communication
Theme system spans multiple files with clear responsibilities:
- `lib/theme.js`: Core theme definitions and utilities
- `popup/theme-init.js`: DOM-ready initialization (CSP-compliant)
- CSS uses the variables: `var(--colorNeutralBackground1, #ffffff)`

When debugging theme issues, add detailed logging in theme-init.js:
```javascript
// Direct theme toggle implementation in theme-init.js
themeToggleBtn.addEventListener('click', (e) => {
  console.log('Theme toggle clicked');
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(currentTheme === 'dark' ? webDarkTheme : webLightTheme);
  
  // Important: Stop event propagation to prevent conflicts
  e.stopPropagation();
});
```

## Development Workflow
1. Load the extension in Chrome with "Developer mode" enabled
2. After code changes, reload the extension in `chrome://extensions/`
3. For theme/style debugging, use browser dev tools to inspect CSS variables
4. For theme token application issues, enable debug mode: `initializeTheme(true)`

## Known Limitations
- Must avoid inline scripts due to CSP restrictions
- Theme initialization requires separate JS file imports
- Check browser console for CSP violations if UI features don't work