# URLCollector — Chrome Extension

A Chrome extension for collecting, filtering, sorting, grouping, and exporting URLs from all open tabs in the current window.

## Features

### URL Collection & Export
- **Copy to clipboard** — copy selected URLs in one click
- **Export formats** — save as `.txt`, `.csv`, `.md`, or **Rich Text** (HTML for Word/email with clickable hyperlinks)
- **Selective copy** — check/uncheck individual tabs or use Select All

### Filtering & Sorting
- **Live filter** — filter the tab list by title or URL as you type
- **Display sort** — preview tabs sorted by tab order, domain A→Z, title A→Z, last accessed, or tab count per domain
- **Hide duplicates** — toggle to visually suppress duplicate URLs
- **Skip system tabs** — filter out `chrome://`, `edge://`, and other internal pages

### Tab Management
- **Sort tabs** — physically reorder tabs in the browser by domain A→Z or by tab count per domain; preserves existing Tab Groups
- **Group tabs** — automatically create Chrome Tab Groups by root domain or subdomain
- **Sort Groups** — alphabetically sort all Tab Groups A→Z
- **Toggle Groups** — collapse or expand all Tab Groups at once
- **Restore** — undo the last sort or group operation

### Session Manager
- **Save Session** — save the current set of open tabs as a named session
- **Manage Sessions** — view, restore, and delete saved sessions

### RAM Management
- **Sleep Inactive** — discard all inactive tabs to free memory
- **Sleep Selected** — discard only the checked tabs

### Duplicate Management
- **Clear Duplicates** — review and close duplicate tabs via a confirmation modal

### UI
- **Dark / Light theme** — system-aware with manual toggle; persists across sessions
- **Apple HIG–inspired design** — clean color palette, 8–12 px radius, soft shadows
- **Material Icons** throughout the interface
- **Keyboard shortcuts tooltip** — click the keyboard icon in the header to see all available shortcuts

## Keyboard Shortcuts

| Scope | Shortcut | Action |
|---|---|---|
| Global | `Ctrl+Shift+C` | Copy all URLs |
| Global | `Alt+S` | Sleep inactive tabs |
| In popup | `Enter` (filter focused) | Copy selected URLs |
| In popup | `Ctrl+S` | Save / export URLs |

## Usage

1. Click the URLCollector icon in the Chrome toolbar
2. Optionally filter, sort, or select specific tabs
3. Click **Copy Selected URLs** to copy to clipboard, or use **Save** to export to a file
4. Use the Tab Management section to organise tabs directly in the browser
5. Use **Save Session** to bookmark the current tab set for later restoration

## Installation

### Load Unpacked (Developer Mode)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the repository root folder
5. The URLCollector icon will appear in the toolbar

### Chrome Web Store
*Coming soon*

## Project Structure

```
copy-all-tabs-urls/
├── manifest.json               # Extension manifest (MV3)
├── background.js               # Service worker (keyboard command handler)
└── src/
    ├── popup/
    │   └── popup.html          # Popup entry point
    ├── js/
    │   ├── popup.js            # Main application logic
    │   └── theme/
    │       ├── theme.js        # Theme token definitions
    │       ├── theme-init.js   # Theme initialisation
    │       └── direct-theme-toggle.js  # Theme toggle handler (anti-FOUC)
    └── styles/
        └── popup.css           # Main stylesheet & design tokens
```

## Technical Details

| Item | Detail |
|---|---|
| Manifest Version | 3 |
| Permissions | `tabs`, `storage`, `tabGroups`, `scripting`, `activeTab` |
| APIs | Chrome Tabs API, Tab Groups API, Clipboard API, Storage API |
| Browser Support | Chrome 88+, Edge, and other Chromium-based browsers |
| Fonts | System font stack (`-apple-system`, `system-ui`) + Material Icons |
| CSP | `script-src 'self'`; Material Icons loaded from Google Fonts |

## Development

### Prerequisites
- Chrome 88+ (Manifest V3 + Tab Groups API support)

### Local Development
1. Clone the repository
2. Make changes to files under `src/`
3. Load unpacked via `chrome://extensions/`
4. After each change, click **Reload** on the extension card

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## License

MIT — see the [LICENSE](LICENSE) file for details.

## Bug Reports & Feature Requests

Please [open an issue](../../issues) on GitHub.

---

**Made for productivity enthusiasts**
