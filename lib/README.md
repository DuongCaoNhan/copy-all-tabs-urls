# Theme System for Chrome Extension

## Overview

This directory contains the theme system for the Chrome extension. The core functionality is in `theme.js`.

## Important Notes for Developers

### Content Security Policy (CSP)

Chrome extensions with Manifest V3 have strict CSP rules:
- NEVER use inline scripts - all JS must be in external files
- Make sure manifest.json has proper CSP configuration
- NEVER use eval() or new Function()

### Debugging

When theme functionality fails:
- Check browser console for CSP violations
- Make sure DOM is loaded before manipulating it
- Use try/catch blocks to handle potential errors

### Extending

To add new themes:
1. Add a new theme object in theme.js with all required properties
2. Include it in the allThemes array
3. Test thoroughly in both regular and incognito mode

For detailed documentation, see `/docs/theme-documentation.md`