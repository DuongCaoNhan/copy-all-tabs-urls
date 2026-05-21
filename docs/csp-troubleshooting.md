# CSP Troubleshooting Guide for Chrome Extensions

## Common Issues

When working with Chrome Extensions, you might encounter errors like:

```
Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'"
```

This is related to the Content Security Policy (CSP) restrictions in Chrome Extensions.

## Root Causes

Chrome Extensions using Manifest V3 have strict security policies that prohibit:

1. Scripts written directly in HTML (inline scripts)
2. Using eval() or new Function()
3. Remote scripts from undeclared domains

## Solutions

### 1. Avoid inline scripts

**INCORRECT:**
```html
<button onclick="doSomething()">Click me</button>

<script>
  function doSomething() { /* code */ }
</script>
```

**CORRECT:**
```html
<button id="myButton">Click me</button>
<script src="myScript.js"></script>
```

```javascript
// myScript.js
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('myButton').addEventListener('click', doSomething);
});

function doSomething() { /* code */ }
```

### 2. Always use external JavaScript files

**INCORRECT:**
```html
<script>
  // Code here will be blocked by CSP
</script>
```

**CORRECT:**
```html
<script src="myFile.js"></script>
<script type="module" src="myModule.js"></script>
```

### 3. Ensure manifest.json has proper CSP configuration

```json
"content_security_policy": {
  "extension_pages": "script-src 'self'; object-src 'self'"
}
```

### 4. Use addEventListener instead of inline event handlers

**INCORRECT:**
```html
<button onclick="myFunction()">Click</button>
```

**CORRECT:**
```javascript
// In external JS file
document.getElementById('myButton').addEventListener('click', myFunction);
```

### 5. Check the Console to identify specific CSP errors

When a feature doesn't work, check the browser console to see detailed CSP violation errors.

## General Debugging Process

1. Open Chrome DevTools (F12) and check the Console tab
2. Look for CSP errors (usually containing "Refused to...")
3. Move all inline JavaScript to separate .js files
4. Remove all inline event handlers (onclick, onload, etc.)
5. Use addEventListener in separate .js files
6. Verify that manifest.json has the correct CSP configuration

## Important Notes

- CSP errors typically don't crash the extension, but they prevent features from working
- After fixes, you need to reload the extension in chrome://extensions
- Always check the console when features aren't working as expected