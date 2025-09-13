# URLCollector - Chrome Extension

A powerful Chrome extension that helps you collect, filter, sort, and copy URLs from all browser tabs in the current window.

## Features

- Advanced filtering: Filter tabs by title or URL
- Flexible sorting: Sort by tab order, domain, or title
- Selective copying: Choose which URLs to include
- Multiple export formats: Save as TXT, CSV, or Markdown
- Duplicate management: Identify and close duplicate tabs
- Dark mode support: Comfortable viewing in any lighting condition
- Accessibility focused: High contrast and clear typography
- Error handling: Graceful error handling with user feedback

## What it does

1. Click the extension icon in your Chrome toolbar
2. Click the "Copy All URLs" button in the popup
3. All URLs from tabs in the current window are copied to your clipboard
4. Each URL is placed on a separate line
5. Get instant feedback showing how many URLs were copied

## Installation

### Method 1: Load Unpacked (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" button
5. Select the folder containing the extension files
6. The extension will appear in your extensions toolbar

### Method 2: Chrome Web Store
*Coming soon...*

## Project Structure

```
copy-all-tabs-urls/
├── manifest.json    # Extension configuration
├── popup.html      # Extension popup interface
├── popup.js        # Extension functionality
└── README.md       # This file
```

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: `tabs` (to access tab URLs)
- **API Used**: Chrome Tabs API, Clipboard API
- **Browser Support**: Chrome, Edge, and other Chromium-based browsers

## Development

### Prerequisites
- Chrome browser (version 88 or higher for Manifest V3 support)
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development
1. Clone the repository
2. Make your changes to the files
3. Load the extension using the installation steps above
4. Reload the extension in `chrome://extensions/` after making changes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Bug Reports & Feature Requests

If you encounter any bugs or have feature requests, please [open an issue](../../issues) on GitHub.

## Support

If you need help or have questions:
- Check the [Issues](../../issues) page
- Create a new issue if your question isn't already answered



**Made for productivity enthusiasts**
