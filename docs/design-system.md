/**
 * Design System Documentation
 * 
 * This file documents how the design system principles are applied in this extension.
 * It serves as a reference guide for developers working on the project.
 */

/**
 * Core Design Philosophy Implementation
 * 
 * 1. Clarity & Focus:
 *    - Typography system uses Segoe UI with carefully selected sizes and weights
 *    - Whitespace used intentionally with consistent spacing system
 *    - Form controls have clear states and feedback
 * 
 * 2. Deference to Content:
 *    - Minimal UI chrome - focus on tab list content
 *    - Background colors are subtle and non-distracting
 *    - Controls are simple and functional
 * 
 * 3. Depth & Hierarchy:
 *    - Consistent shadow system creates visual layers
 *    - Primary actions (copy button) have higher elevation
 *    - Visual relationships established through spacing and color
 * 
 * 4. Inclusive & Natural:
 *    - High contrast text for readability
 *    - Keyboard accessible controls
 *    - System preference detection for themes
 */

/**
 * Design System Components
 * 
 * 1. Typography System (typography.css)
 *    - Font: Segoe UI (primary), system fonts (fallback)
 *    - Clear type scale with 8 size tokens
 *    - Semantic text styles for consistent usage
 * 
 * 2. Spacing System (spacing.css)
 *    - Base unit of 4px
 *    - Systematic scale for consistent rhythm
 *    - Directional tokens for flexible application
 * 
 * 3. Elevation System (elevation.css)
 *    - Five elevation levels with consistent shadows
 *    - Light source direction maintained across components
 *    - Dark mode shadow adjustments for proper contrast
 * 
 * 4. Color System (theme.js)
 *    - Tokens based on Fluent UI design system
 *    - Light and dark theme support
 *    - Semantic color application for UI elements
 */

/**
 * Implementation Notes
 * 
 * - All styles use CSS custom properties for theming
 * - Components use class-based styling for consistency
 * - Motion uses cubic-bezier timing functions for natural movement
 * - Focus states are clearly visible for accessibility
 */