/**
 * Direct Theme Toggle — sole theme controller for the popup.
 *
 * Applies the saved (or system-preferred) theme synchronously, before
 * DOMContentLoaded, to eliminate flash-of-unstyled-content (FOUC).
 * The CSS uses [data-theme] attribute overrides in popup.css, so we
 * only need to set the attribute — no CSS variable injection needed.
 */

// ── Synchronous FOUC prevention ──────────────────────────────────
(function applyInitialTheme() {
  let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  try {
    const saved = localStorage.getItem('theme-mode');
    if (saved !== null) isDark = saved === 'dark';
  } catch { /* localStorage unavailable — use system preference */ }
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}());

// ── Button setup after DOM is ready ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark
    ? '<span class="material-icons">dark_mode</span>'
    : '<span class="material-icons">light_mode</span>';

  btn.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    btn.innerHTML = isDark
      ? '<span class="material-icons">dark_mode</span>'
      : '<span class="material-icons">light_mode</span>';
    try { localStorage.setItem('theme-mode', isDark ? 'dark' : 'light'); } catch { /* ignore */ }
  });
});