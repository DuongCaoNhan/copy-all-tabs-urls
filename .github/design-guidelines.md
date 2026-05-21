# Copilot Instructions: A Unified Design System (Fluent 2 + Apple HIG)

This is a set of guidelines that combines the systematic structure of Fluent 2 with the user-centric design philosophy of Apple's HIG. Follow these rules to create web apps that are not only consistent and accessible but also refined and content-focused.

---

## 1. Core Design Philosophy

These are the foundational principles that should guide every design decision.

* **Clarity & Focus:** The interface must be absolutely legible and understandable. Every interaction should be clear and unambiguous. Use negative space (whitespace) to reduce clutter and guide the user's focus to the most important content.
* **Deference to Content:** The user interface (UI) must recede into the background and celebrate the content. Minimize decorative elements ("chrome") like unnecessary borders and toolbars. The design should support the content, not compete with it.
* **Depth & Hierarchy:** Use elevation, layers, and meaningful motion to establish a clear visual hierarchy. This helps users understand where they are in the application and creates a sense of space.
* **Inclusive & Natural:** Design for everyone, always prioritizing accessibility. The application experience should feel natural and intuitive on any device and platform.

---

## 2. Color

* **Use Color with Purpose:** Color is used to express style, evoke emotion, and convey meaning.
* **Adhere to the Standard Palette:** Use the defined Fluent 2 color palette to ensure consistency.
* **Deference Principle:** Apply color subtly to guide and provide feedback. Color should support the content, not distract the user.
* **Use Tokens:** Always use the provided color tokens for easy management and theme updates (light/dark mode).

---

## 3. Elevation & Depth

* **Create Hierarchy:** Use shadows and layers to create a sense of distance, highlighting important elements and implementing the **Depth & Hierarchy** principle.
* **Consistent Shadow Direction:** Maintain a consistent shadow direction to create the illusion of a single light source.
* **Use Shadow Tokens:** Always use Fluent 2's tokens (e.g., `shadow 2`, `shadow 64`) for consistency.
* **Create Visual Layers:** Use effects like blur or transparency subtly to distinguish between UI layers (e.g., dialogs, pop-up menus).

---

## 4. Iconography

* **Clarity Principle:** Icons must be simple, instantly recognizable, and clearly represent a concept or action. Avoid ambiguity.
* **Regular and Filled Styles:**
    * **Regular:** Use for available actions.
    * **Filled:** Use for a selected state or when increased prominence is needed.
* **Sizing:** Choose a size that is appropriate for the context and interaction purpose.

---

## 5. Layout

* **Clarity & Deference Principles:** Leverage negative space (whitespace) to group information, create a clear structure, and allow the content to breathe. A good layout provides a stage for the content to shine.
* **Consistent Spacing:** Use consistent spacing values to create a familiar visual rhythm.
* **Responsive Layout:** Adapt the layout and spacing to fit all screen sizes.

---

## 6. Material

* **Use Material with Purpose:** Apply materials to support the **Depth & Hierarchy** principle.
    * **Solid:** The basic, opaque material.
    * **Mica / Acrylic:** Translucent materials that help create a sense of layers and context. Use them subtly to avoid distraction.
    * **Smoke:** Used to obscure the background behind a blocking UI (e.g., a dialog) to focus the user's attention.

---

## 7. Motion

* **Meaningful Motion:** Motion should be functional, helping users understand the relationship between screens and maintain context (the **Depth** principle).
* **Natural and Authentic:** Motion should be smooth, feel natural, and provide delight rather than disruption.
* **Avoid Superfluous Decoration:** Do not add motion just for aesthetic purposes. Every transition should have a functional reason.

---

## 8. Shapes

* **Use Basic Shapes:** Consistently use shapes (Rectangle, Circle, Pill) for their corresponding component types.
* **Corner Radius:** Use the defined corner radius values to create a uniform look.
* **Stroke:** Use appropriate stroke weights for the context to define and emphasize components when needed.

---

## 9. Typography

* **Clarity Principle:** Legibility is the highest priority.
* **Font:** Use **Segoe UI** (Web/Windows) or the native system font.
* **Clear Hierarchy:** Create a clear content structure using different font sizes and weights.
* **High Contrast:** Always ensure text has sufficient contrast against its background to be readable for all users.
* **Casing:** Use **Sentence case** (only the first letter of the sentence is capitalized). **AVOID USING ALL CAPS**.

---

## 10. References & Examples

Refer to these official resources for detailed specifications, visual examples, and live component demos.

### Fluent 2 Design System
* **Official Website:** `https://fluent2.microsoft.design/` - The primary source for all Fluent 2 principles and guidelines.
* **Color System:** `https://fluent2.microsoft.design/color` - Detailed guide on color tokens and application.
* **Layout Principles:** `https://fluent2.microsoft.design/layout` - Guide on spacing and responsive grids.

### Apple Human Interface Guidelines (HIG)
* **Main Website:** `https://developer.apple.com/design/human-interface-guidelines/` - The complete guide for designing for Apple platforms.
* **Core Themes (Clarity, Deference, Depth):** `https://developer.apple.com/design/human-interface-guidelines/themes` - Detailed explanation of the core design philosophies.

### Live Component & Implementation Examples
* **Fluent UI React v9 Components:** `https://fluentui.azurewebsites.net/` - An interactive Storybook of official Fluent 2 components for React. This is the primary reference for implementation.
* **Example of HIG Philosophy in a Web App:** `https://www.icloud.com/` - A web application that demonstrates Apple's principles of clarity and deference to content.