# INTEGNITY - Bootstrap 5 Implementation

Bu loyiha sizning rasmingiz va Figma CSS specifications asosida **Bootstrap 5** framework bilan yaratilgan to'liq responsive INTEGNITY web sayt hisoblanadi.

## 🎯 Bootstrap 5 Implementation

### ✅ Framework Features
- **Bootstrap 5.3.2** - Latest stable version
- **Responsive Grid System** - Container-fluid, rows, columns
- **Utility Classes** - Spacing, typography, flexbox
- **Components** - Navbar, buttons, collapse
- **JavaScript** - Bootstrap bundle with Popper.js

### 🎨 Figma Specifications (100% Implemented)

```css
/* INTEGNITY Brand */
font-family: Plus Jakarta Sans ✅
font-size: 32px ✅
font-weight: 800 ✅
color: white ✅

/* Navigation Items */
font-family: Plus Jakarta Sans ✅
font-size: 16px ✅
font-weight: 800 ✅
color: white ✅

/* START A PROJECT Button */
font-family: Plus Jakarta Sans ✅
font-size: 20px ✅
font-weight: 800 ✅
color: white ✅

/* Hero Badges */
font-family: Plus Jakarta Sans ✅
font-size: 16px ✅
font-weight: 800 ✅
text-transform: uppercase ✅
color: white ✅
```

### 🎨 Color Palette (From Image)
```css
:root {
    --color-white: #FFFFFF;
    --color-gray-light: #CA9C6D;
    --color-gray-dark: #D9D9D9;
    --bg-gradient: linear-gradient(135deg, #3a4a5c 0%, #2d3741 50%, #1a1f26 100%);
}
```

## 📂 File Structure

```
├── index.html          # Bootstrap 5 HTML structure
├── style.css           # Custom CSS with Bootstrap integration
├── script.js           # Enhanced JavaScript with Bootstrap
└── README.md           # This documentation
```

## 🚀 Bootstrap 5 Components Used

### Navigation
```html
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand">INTEGNITY</a>
        <button class="navbar-toggler" data-bs-toggle="collapse">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
```

### Grid System
```html
<div class="container-fluid px-5">
    <div class="row justify-content-center">
        <div class="col-12">
```

### Utility Classes
```html
<div class="d-flex justify-content-center flex-wrap gap-4">
<div class="d-none d-lg-block">
<div class="py-4 px-5 mb-5">
```

## 📱 Responsive Breakpoints (Bootstrap 5)

### Extra Large (≥1400px)
```css
@media (min-width: 1400px) {
    /* Bootstrap xxl breakpoint */
}
```

### Large (≥992px)
```css
@media (min-width: 992px) {
    /* Bootstrap lg breakpoint */
    .d-lg-block { display: block !important; }
}
```

### Medium (≥768px)
```css
@media (min-width: 768px) {
    /* Bootstrap md breakpoint */
}
```

### Small (≥576px)
```css
@media (min-width: 576px) {
    /* Bootstrap sm breakpoint */
}
```

### Extra Small (<576px)
```css
@media (max-width: 575.98px) {
    /* Bootstrap xs (default) */
}
```

## ⚡ Bootstrap 5 Features

### Responsive Navigation
- **Desktop**: Full horizontal menu
- **Mobile**: Collapsible hamburger menu
- **Bootstrap Classes**: `navbar-expand-lg`, `navbar-toggler`, `collapse`

### Grid System
- **Container**: `container-fluid` for full width
- **Responsive**: `col-12`, `justify-content-center`
- **Spacing**: `px-5`, `py-4`, `mb-5`, `gap-4`

### Utility Classes
- **Display**: `d-flex`, `d-none`, `d-lg-block`
- **Flexbox**: `justify-content-center`, `align-items-center`
- **Text**: `text-uppercase`, `text-center`
- **Spacing**: `px-*`, `py-*`, `mb-*`, `gap-*`

### Components
- **Navbar**: Responsive navigation with collapse
- **Buttons**: Custom styled with Bootstrap base
- **Cards**: Hero badges with Bootstrap styling

## 🔧 Installation & Setup

### 1. CDN Links (Already Included)
```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap 5 JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### 2. Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### 3. Run the Website
```bash
# Simple HTTP server
python -m http.server 8000

# Or with Node.js
npx serve .

# Or open index.html directly in browser
```

## 🎨 Custom CSS Integration

### Bootstrap Override
```css
/* Override Bootstrap variables */
:root {
    --bs-primary: #ffffff;
    --bs-dark: #2d3741;
}

/* Custom component styles */
.navbar {
    background: transparent !important;
}

.btn-cta {
    background: rgba(255, 255, 255, 0.1) !important;
    border: 2px solid rgba(255, 255, 255, 0.15) !important;
}
```

### Responsive Utilities
```css
/* Mobile-first approach */
@media (max-width: 991.98px) {
    .navbar-collapse {
        background: rgba(45, 55, 65, 0.98);
        backdrop-filter: blur(20px);
    }
}
```

## 🌐 Browser Support

- **Chrome** 60+ ✅
- **Firefox** 55+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅
- **Mobile Browsers** ✅
- **Bootstrap 5** compatible browsers ✅

## ♿ Accessibility (Bootstrap 5 Enhanced)

### Built-in Bootstrap Accessibility
- **ARIA attributes** - Automatic on components
- **Keyboard navigation** - Tab, Enter, Escape support
- **Screen reader** - Semantic HTML structure
- **Focus management** - Visible focus indicators

### Custom Enhancements
```javascript
// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu
    }
});

// ARIA enhancements
navLinks.forEach(link => {
    link.setAttribute('role', 'menuitem');
    link.setAttribute('tabindex', '0');
});
```

## 🚀 Performance Optimizations

### Bootstrap 5 Benefits
- **Smaller bundle size** - No jQuery dependency
- **Modern CSS** - CSS custom properties
- **Tree shaking** - Import only needed components
- **CDN delivery** - Fast loading from Bootstrap CDN

### Custom Optimizations
```javascript
// Font preloading
const fontLink = document.createElement('link');
fontLink.rel = 'preload';
fontLink.href = 'Google Fonts URL';

// Intersection Observer
const observer = new IntersectionObserver(entries => {
    // Animate elements on scroll
});
```

## 🎯 Bootstrap vs Custom Comparison

| Feature | Bootstrap 5 | Custom CSS |
|---------|-------------|------------|
| Grid System | ✅ Built-in | ❌ Manual |
| Responsive | ✅ Automatic | ❌ Manual |
| Components | ✅ Pre-built | ❌ Custom |
| JavaScript | ✅ Included | ❌ Manual |
| File Size | 📦 ~25KB gzipped | 📦 Variable |
| Customization | 🎨 Variables | 🎨 Full control |

## 📋 Bootstrap 5 Classes Used

### Layout
- `container-fluid`, `row`, `col-12`
- `d-flex`, `justify-content-center`, `align-items-center`
- `flex-wrap`, `flex-column`, `gap-4`

### Spacing
- `px-5`, `py-4`, `mb-5`, `mt-3`
- `p-0`, `m-0`, `mx-auto`

### Display
- `d-none`, `d-lg-block`, `d-flex`
- `d-inline-flex`, `d-md-none`

### Text
- `text-center`, `text-uppercase`
- `text-white`, `text-decoration-none`

### Components
- `navbar`, `navbar-expand-lg`, `navbar-dark`
- `navbar-brand`, `navbar-toggler`, `navbar-nav`
- `nav-link`, `btn`, `collapse`

---

**Framework**: Bootstrap 5.3.2  
**Font**: Plus Jakarta Sans (Google Fonts)  
**Responsive**: Mobile-first approach  
**Yaratuvchi**: Codegen AI  
**Sana**: 2025  
**Versiya**: 5.0 (Bootstrap Perfect)

