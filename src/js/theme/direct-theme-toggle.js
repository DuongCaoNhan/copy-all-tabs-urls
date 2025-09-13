/**
 * Direct Theme Toggle - Simplified version for maximum reliability
 * This file implements a basic light/dark toggle that should work
 * even if the more advanced theme features fail
 */

// Basic theme definitions
const lightTheme = {
  colorNeutralBackground1: "#ffffff",
  colorNeutralBackground1Hover: "#f5f5f5",
  colorNeutralBackground2: "#f5f5f5",
  colorNeutralBackground3: "#f0f0f0", 
  colorNeutralBackground4: "#e0e0e0",
  colorNeutralForeground1: "#242424",
  colorNeutralForeground2: "#605e5c",
  colorNeutralForeground3: "#929292",
  colorNeutralForegroundOnBrand: "#ffffff",
  colorBrandBackground: "#0078d4",
  colorBrandBackgroundHover: "#106ebe",
  colorBrandBackgroundPressed: "#005a9e",
  colorNeutralStroke1: "#d1d1d1",
  colorNeutralStrokeAccessible: "#616161",
  colorTransparentBackground: "rgba(0, 0, 0, 0.4)",
  colorStatusSuccess: "#107C10"
};

const darkTheme = {
  colorNeutralBackground1: "#292929",
  colorNeutralBackground1Hover: "#3d3d3d",
  colorNeutralBackground2: "#3d3d3d", 
  colorNeutralBackground3: "#4d4d4d",
  colorNeutralBackground4: "#555555",
  colorNeutralForeground1: "#ffffff",
  colorNeutralForeground2: "#d6d6d6",
  colorNeutralForeground3: "#adadad",
  colorNeutralForegroundOnBrand: "#ffffff",
  colorBrandBackground: "#2899f5",
  colorBrandBackgroundHover: "#3aa0f3",
  colorBrandBackgroundPressed: "#168ad2",
  colorNeutralStroke1: "#666666",
  colorNeutralStrokeAccessible: "#adadad",
  colorTransparentBackground: "rgba(0, 0, 0, 0.6)",
  colorStatusSuccess: "#6CCB5F"
};

// Simplified theme application
function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

// Detect system preference
function prefersDarkTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Direct theme toggle implementation
document.addEventListener('DOMContentLoaded', () => {
  console.log('Setting up direct theme toggle');
  
  // Find the button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) {
    console.error('Theme toggle button not found');
    return;
  }
  
  // Initial theme
  let isDarkMode = prefersDarkTheme();
  
  try {
    // Try to read from localStorage
    const savedMode = localStorage.getItem('theme-mode');
    if (savedMode) {
      isDarkMode = savedMode === 'dark';
    }
  } catch (e) {
    console.error('Error reading from localStorage:', e);
  }
  
  // Apply initial theme
  applyTheme(isDarkMode ? darkTheme : lightTheme);
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
  
  // Simple toggle functionality
  themeToggleBtn.addEventListener('click', (e) => {
    console.log('Theme toggle clicked');
    
    // Toggle the mode
    isDarkMode = !isDarkMode;
    
    // Apply the theme
    applyTheme(isDarkMode ? darkTheme : lightTheme);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save to localStorage
    try {
      localStorage.setItem('theme-mode', isDarkMode ? 'dark' : 'light');
    } catch (e) {
      console.error('Error saving theme preference:', e);
    }
  });
});