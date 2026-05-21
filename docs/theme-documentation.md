# Theme System Documentation for Chrome Extension

## Overview

The theme system in this Chrome extension uses CSS variables and JavaScript to provide a flexible, user-configurable theming experience. It supports multiple themes including Light, Dark, Blue Dark, and Sepia, with the ability to easily add more.

## Architecture

### Core Components

1. **theme.js**: Contains theme definitions, utility functions, and theme management logic.
   - Theme objects with color tokens and metadata
   - Theme management functions (setTheme, initializeTheme, setupThemeToggle)
   - Debug utilities

2. **theme-init.js**: Entry point for initializing the theme system
   - Imports and calls functions from theme.js
   - Handles DOM ready events and error handling

3. **theme-styles.css**: Contains additional CSS for theme components
   - Styling for theme menu and options
   - Ensures consistent appearance across themes

## Content Security Policy (CSP) Considerations

Chrome extensions with Manifest V3 enforce strict Content Security Policy rules which impact how the theme system works:

### ⚠️ Critical Guidelines

1. **NEVER use inline scripts**
   - All JavaScript must be in external files
   - Use type="module" for script imports

2. **Ensure proper CSP configuration in manifest.json**:
   ```json
   "content_security_policy": {
     "extension_pages": "script-src 'self'; object-src 'self'"
   }
   ```

3. **NEVER use eval() or new Function()**
   - All code must be statically analyzable
   - Avoid string concatenation that constructs code

4. **ALWAYS check the console for CSP violations**
   - CSP violations are reported in the browser console
   - These provide essential clues when theme functionality fails

## Adding New Themes

To add a new theme:

1. Create a new theme object in **theme.js** with all required properties:
   ```javascript
   export const newTheme = {
     name: "unique-name",    // Unique identifier for localStorage
     label: "Display Name",  // User-friendly name shown in UI
     emoji: "🎨",           // Emoji icon representing theme
     colorNeutralBackground1: "#rrggbb",
     // ... all other color tokens and values
   };
   ```

2. Add the new theme to the `allThemes` array:
   ```javascript
   export const allThemes = [
     webLightTheme,
     webDarkTheme,
     // Add your new theme here
     newTheme
   ];
   ```

## Debugging Theme Issues

When encountering theme-related problems:

1. Check for CSP violations in the browser console
2. Verify the DOM is fully loaded before theme manipulation
3. Enable debug mode in initializeTheme:
   ```javascript
   initializeTheme(true); // Enable debug mode
   ```
4. Look for errors in event listeners and DOM manipulation
5. Verify localStorage access (permissions and exceptions)

## Best Practices for Theme Development

1. **Test in Incognito Mode**: This helps verify theme persistence works correctly
2. **Test with and without localStorage**: Some users may block storage permissions
3. **Check browser compatibility**: Theme features should work across Chrome versions
4. **Always include detailed comments**: Help future developers understand theme implementation
5. **Keep CSP limitations in mind**: All code must comply with extension security rules
6. **Handle errors gracefully**: Use try/catch blocks for potential failure points

## Known Limitations

- Theme changes are not synchronized across extension views
- Some browser native UI elements cannot be themed
- Initial theme flash may occur before CSS variables are applied

---

## Troubleshooting Common Issues

### Theme Toggle Button Not Working

1. Check if button ID matches in HTML and JS
2. Verify event listeners are properly attached
3. Check browser console for JS errors
4. Ensure DOM is fully loaded before manipulation

### Theme Not Persisting

1. Verify localStorage permissions
2. Check for errors when writing to localStorage
3. Verify theme name is correctly saved and retrieved

### CSS Variables Not Applied

1. Use developer tools to inspect CSS variables on root element
2. Check for typos in variable names
3. Ensure setTheme is called with a complete theme object