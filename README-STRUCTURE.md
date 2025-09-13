# URLCollector Extension - Directory Structure

This document describes the organization of the URLCollector extension codebase.

## Directory Structure

```
/
├── manifest.json           # Chrome extension manifest
└── src/                    # Source code directory
    ├── assets/             # Static assets like icons, images
    ├── js/                 # JavaScript files
    │   ├── popup.js        # Main popup functionality
    │   └── theme/          # Theme-related JavaScript
    │       ├── direct-theme-toggle.js # Simple theme toggle functionality
    │       ├── theme.js    # Core theme definitions and utilities
    │       └── theme-init.js # Theme initialization
    ├── popup/              # Main extension popup interface
    │   └── popup.html      # Popup HTML entry point
    └── styles/             # Stylesheets
        ├── components/     # Component-specific styles
        │   └── theme-styles.css # Theme component styles
        ├── design/         # Design system foundation
        │   ├── elevation.css    # Elevation/shadow styles
        │   ├── spacing.css      # Spacing system
        │   └── typography.css   # Typography styles
        └── popup.css       # Main popup styles
```

## Code Organization Principles

1. **Separation of Concerns**: Files are organized by their function and purpose
   - Design system foundation in `styles/design/`
   - Component-specific styles in `styles/components/`
   - Theme-related JavaScript in `js/theme/`
   - Main application logic in `js/`

2. **Maintainability**: The structure makes it easy to:
   - Locate specific functionality
   - Update design system components independently
   - Modify theme behavior without affecting other parts
   - Extend with new features by adding files in appropriate locations

3. **Design System Integration**: 
   - Design tokens (typography, spacing, elevation) are in dedicated files
   - CSS custom properties ensure consistent design application
   - Theming system allows for light/dark themes while maintaining design integrity

## Development Workflow

When working with this codebase:

1. **Design System Changes**:
   - Modify files in `src/styles/design/` to update design tokens

2. **Theming**:
   - Use `src/js/theme/theme.js` to define theme tokens
   - Theme initialization happens in `theme-init.js`
   - Direct theme toggle in `direct-theme-toggle.js`

3. **UI Changes**:
   - Main popup styling in `src/styles/popup.css`
   - Component-specific styles in `src/styles/components/`
   - HTML structure in `src/popup/popup.html`

4. **Functionality Changes**:
   - Main popup JavaScript in `src/js/popup.js`

## Building and Testing

Load the extension in Chrome with "Developer mode" enabled:
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the extension root directory
4. After code changes, reload the extension from `chrome://extensions/`