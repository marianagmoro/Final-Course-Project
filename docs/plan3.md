# Plan 3: Dark/Light Theme System

## Original Prompt/Request

"Make it so when dark mode is on creative.png changes to creative white.png and all other images switch appropriately"

## AI Planning Response

### Theme System Architecture

The AI recommended implementing a comprehensive theme switching system:

1. **CSS Variable System**

   - Use CSS custom properties for colors
   - Define light and dark theme palettes
   - Automatic color inheritance across components

2. **Image Switching Logic**

   - JavaScript function to detect theme state
   - Automatic image src updates based on theme
   - Consistent naming convention for dark/light images

3. **State Management**
   - localStorage persistence for user preference
   - Automatic detection of system preference
   - Smooth transitions between themes

### Technical Implementation Plan

#### CSS Theme Variables

```css
:root {
  --color-text: #000000;
  --color-background: #ffffff;
  --color-accent: #333333;
}

html[data-theme="dark"] {
  --color-text: #ffffff;
  --color-background: #000000;
  --color-accent: #cccccc;
}
```

#### JavaScript Theme Function

```javascript
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  // Update all theme-aware images
  updateThemeImages(theme);
}
```

#### Image Naming Convention

- **Light mode**: `image.png`
- **Dark mode**: `image white.png`

## Implementation Notes

### What Was Implemented

✅ **CSS Variables**: Complete color system with dark/light variants
✅ **Theme Toggle Button**: SVG icons with proper accessibility
✅ **Image Switching**: Automatic updates for all branded images
✅ **State Persistence**: localStorage saves user preference
✅ **System Preference**: Detects prefers-color-scheme

### Images Supporting Theme Switching

1. **Logo**: `name.png` ↔ `name white.png`
2. **Hero Title**: `creative.png` ↔ `creative white.png`
3. **Section Headers**: `recent work.png` ↔ `recent work white.png`
4. **About Section**: `about.png` ↔ `about white.png`
5. **Contact Section**: `contact.png` ↔ `contact white.png`
6. **404 Page**: `404.png` ↔ `404 white.png`

### JavaScript Architecture

#### Theme Application Function

```javascript
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  // Update logo
  const logo = document.querySelector(".site-logo");
  if (logo) {
    logo.src =
      theme === "dark"
        ? "assets/images/name white.png"
        : "assets/images/name.png";
  }

  // Update hero image
  const heroImage = document.querySelector(".hero-title-image");
  if (heroImage) {
    heroImage.src =
      theme === "dark"
        ? "assets/images/creative white.png"
        : "assets/images/creative.png";
  }

  // Continue for all theme-aware images...
}
```

#### Event Handling

- Toggle button click events
- Initial theme detection
- System preference monitoring

### Design Considerations

1. **Accessibility**: Proper ARIA attributes on toggle button
2. **Performance**: Single function handles all image updates
3. **Scalability**: Easy to add new theme-aware images
4. **User Experience**: Instant theme switching with smooth transitions

### Color Palette Design

#### Light Theme

- **Text**: `#000000` (Black)
- **Background**: `#ffffff` (White)
- **Accent**: `#333333` (Dark Gray)

#### Dark Theme

- **Text**: `#ffffff` (White)
- **Background**: `#000000` (Black)
- **Accent**: `#cccccc` (Light Gray)

## Advanced Features

### System Preference Detection

```javascript
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
```

### State Persistence

```javascript
localStorage.setItem("theme", theme);
const savedTheme = localStorage.getItem("theme");
```

### Icon Switching

- Moon icon (🌙) for dark mode toggle
- Sun icon (☀️) for light mode toggle
- SVG icons with proper viewBox and styling

## User Experience Improvements

1. **Smooth Transitions**: CSS transitions on color changes
2. **Instant Feedback**: Immediate theme switching
3. **Memory**: Remembers user preference across sessions
4. **Consistency**: All images update simultaneously
5. **Accessibility**: Screen reader friendly toggle button

## Files Modified

- `assets/css/index.css` - Theme variables and transitions
- `assets/js/main.js` - Theme switching logic
- `index.html` - Theme toggle button
- `404.html` - Theme support for error page

## Browser Support

- Modern browsers with CSS custom properties
- localStorage support required
- Graceful degradation for older browsers

## Testing Checklist

✅ **Theme persistence across page reloads**
✅ **All images switch correctly**
✅ **System preference detection works**
✅ **Accessibility with screen readers**
✅ **Mobile device compatibility**

_Complete theme system successfully implemented_
