# URLCollector — Chrome Extension

A Chrome extension for collecting, filtering, sorting, grouping, and exporting URLs from all open tabs in the current window.

## Features

### URL Collection & Export
- **Copy to clipboard** — copy selected URLs in one click
- **Export formats** — save as `.txt`, `.csv`, or `.md`
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

### RAM Management
- **Sleep Inactive** — discard all inactive tabs to free memory
- **Sleep Selected** — discard only the checked tabs

### Duplicate Management
- **Clear Duplicates** — review and close duplicate tabs via a confirmation modal

### UI
- **Dark / Light theme** — system-aware with manual toggle; persists across sessions
- **Apple HIG–inspired design** — clean color palette, 8–12 px radius, soft shadows
- **Material Icons** throughout the interface

## Usage

1. Click the URLCollector icon in the Chrome toolbar
2. Optionally filter, sort, or select specific tabs
3. Click **Copy Selected URLs** to copy to clipboard, or use **Save** to export to a file
4. Use the Tab Management section to organise tabs directly in the browser

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
└── src/
    ├── popup/
    │   └── popup.html          # Popup entry point
    ├── js/
    │   ├── popup.js            # Main application logic
    │   └── theme/
    │       ├── theme.js        # Theme token definitions
    │       ├── theme-init.js   # Theme initialisation
    │       └── direct-theme-toggle.js  # Theme toggle handler
    ├── styles/
    │   ├── popup.css           # Main stylesheet & design tokens
    │   └── components/
    │       └── theme-styles.css
    └── assets/
        └── icons/
```

## Technical Details

| Item | Detail |
|---|---|
| Manifest Version | 3 |
| Permissions | `tabs`, `storage`, `tabGroups` |
| APIs | Chrome Tabs API, Tab Groups API, Clipboard API, Storage API |
| Browser Support | Chrome 88+, Edge, and other Chromium-based browsers |
| Font | Inter (Google Fonts) + Material Icons |
| CSP | `script-src 'self'`; Google Fonts allowed for styles/fonts |

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
