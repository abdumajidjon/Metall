# INTEGNITY - Bootstrap 5 + GSAP Professional Implementation

Bu loyiha sizning professional rasmingiz asosida **Bootstrap 5** va **GSAP** bilan yaratilgan premium INTEGNITY influencer agency web sayt hisoblanadi.

## 🎯 Rasm Asosida Implementation

### ✅ Rasmdan Olingan Elementlar
- **Classical Statue**: O'ng tomonda joylashgan professional statue figure
- **Dark Gradient Background**: Sophisticated gradient overlay
- **Navigation Layout**: INTEGNITY brand, centered menu, START A PROJECT CTA
- **Three Badges**: Strategy-first, Independent since 2013, #1 Ranked
- **Large Title**: INTEGNITY text overlay on statue
- **Premium Aesthetic**: Professional agency branding

### 🎨 Visual Specifications
```css
/* Background Gradient (from image) */
--bg-gradient: linear-gradient(135deg, 
    rgba(26, 31, 38, 0.95) 0%, 
    rgba(45, 55, 65, 0.9) 30%, 
    rgba(58, 74, 92, 0.85) 60%, 
    rgba(45, 55, 65, 0.9) 100%);

/* Typography (Plus Jakarta Sans) */
--fs-brand: 32px;
--fs-cta: 20px;
--fs-nav: 16px;
--fs-hero-title: clamp(4rem, 12vw, 12rem);
```

## 🚀 Technology Stack

### Framework & Libraries
- **Bootstrap 5.3.2** - Responsive framework
- **GSAP 3.12.2** - Professional animations
- **ScrollTrigger** - Scroll-based animations
- **TextPlugin** - Text animations
- **Plus Jakarta Sans** - Google Fonts typography

### GSAP Features Used
```javascript
// Loading animations
gsap.to(progressBar, { width: '100%', duration: 2 });

// Hero entrance
gsap.fromTo(statue, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 0.8 });

// Letter-by-letter title animation
titleLetters.forEach((letter, index) => {
    gsap.to(letter, {
        opacity: 1, y: 0, rotationX: 0,
        delay: 2 + (index * 0.1)
    });
});

// Parallax scrolling
gsap.to(statue, {
    y: -100,
    scrollTrigger: { trigger: '.hero-section', scrub: 1 }
});
```

## 📂 File Structure

```
├── index.html          # Bootstrap 5 + GSAP structure
├── style.css           # Professional CSS with animations
├── script.js           # GSAP enhanced JavaScript
├── statue.jpg          # Classical statue image (add your image)
└── README.md           # This documentation
```

## 🎬 GSAP Animations

### Loading Sequence
1. **Progress Bar** - Smooth width animation
2. **Loading Screen** - Fade out transition
3. **Hero Entrance** - Statue and overlay fade in
4. **Navigation** - Slide down with stagger
5. **Badges** - Scale up with back.out easing
6. **Title Letters** - Individual letter animations

### Interactive Animations
```javascript
// Hover effects
gsap.to(element, { y: -3, scale: 1.05, duration: 0.3 });

// Click animations
gsap.to(element, { scale: 0.95, yoyo: true, repeat: 1 });

// Parallax effects
gsap.to(statue, { y: -100, scrollTrigger: { scrub: 1 } });
```

### Scroll Animations
- **Statue Parallax** - Moves up on scroll
- **Title Fade** - Fades out with scroll
- **Scroll Indicator** - Disappears on scroll
- **Navbar Background** - Appears on scroll

## 📱 Bootstrap 5 Responsive System

### Grid Implementation
```html
<div class="container-fluid px-4 px-lg-5">
    <div class="row justify-content-start mb-5">
        <div class="col-12">
            <div class="hero-badges">
```

### Utility Classes Used
- **Layout**: `d-flex`, `justify-content-center`, `align-items-center`
- **Spacing**: `px-4`, `px-lg-5`, `py-4`, `mb-5`, `gap-4`
- **Display**: `d-none`, `d-lg-block`, `d-flex`
- **Responsive**: `container-fluid`, `row`, `col-12`

### Breakpoints
```css
/* Bootstrap 5 Breakpoints */
XL (≥1400px): Full desktop with statue 50% width
LG (≥992px): Large desktop, navbar-expand-lg
MD (≥768px): Tablet, statue 70% width, opacity 0.6
SM (≥576px): Small tablet
XS (<576px): Mobile, statue 100% width, opacity 0.3
```

## ⚡ Performance Features

### GSAP Optimizations
- **Hardware Acceleration** - transform3d usage
- **Debounced Events** - Resize and scroll optimization
- **Intersection Observer** - Efficient scroll detection
- **Conditional Animations** - Mobile vs desktop

### Loading Optimizations
```javascript
// Font preloading
const fontLink = document.createElement('link');
fontLink.rel = 'preload';
fontLink.href = 'Google Fonts URL';

// Image preloading
const img = new Image();
img.src = 'statue.jpg';
```

### Performance Monitoring
```javascript
// Load time tracking
const perfData = performance.getEntriesByType('navigation')[0];
console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
```

## 🎯 Interactive Features

### Navigation
- **Hover Effects** - GSAP powered smooth transitions
- **Active States** - Dynamic class management
- **Mobile Menu** - Bootstrap collapse with GSAP animations
- **Scroll Effects** - Navbar background on scroll

### CTA Button
```javascript
// Enhanced hover animation
ctaButton.addEventListener('mouseenter', function() {
    gsap.to(this, { scale: 1.05, y: -2, duration: 0.3 });
    gsap.to(arrow, { x: 3, duration: 0.3 });
});
```

### Hero Badges
- **Hover Scale** - Smooth scale and lift effects
- **Shimmer Effect** - CSS pseudo-element animation
- **Click Feedback** - Scale down animation

## 🔧 Setup Instructions

### 1. Add Statue Image
```bash
# Add your statue image as 'statue.jpg' in the root directory
# Recommended size: 1920x1080 or higher
# Format: JPG or WebP for best performance
```

### 2. CDN Links (Already Included)
```html
<!-- Bootstrap 5 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### 3. Run the Website
```bash
# Simple HTTP server
python -m http.server 8000

# Or with Node.js
npx serve .

# Or open index.html directly
```

## 🎨 Customization

### Colors
```css
:root {
    --color-white: #FFFFFF;
    --color-dark: #1a1f26;
    --color-accent: rgba(255, 255, 255, 0.1);
    --bg-gradient: /* Your custom gradient */;
}
```

### Animations
```javascript
// Customize animation timings
gsap.to(element, {
    duration: 0.8,        // Animation duration
    ease: 'power2.out',   // Easing function
    delay: 0.5           // Delay before start
});
```

### Responsive Behavior
```css
/* Custom breakpoints */
@media (max-width: 991.98px) {
    .statue-container { width: 70%; opacity: 0.6; }
}

@media (max-width: 767.98px) {
    .statue-container { width: 100%; opacity: 0.3; }
}
```

## 🌐 Browser Support

- **Chrome** 60+ ✅
- **Firefox** 55+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅
- **Mobile Browsers** ✅
- **GSAP Support** ✅

## ♿ Accessibility

### GSAP Accessibility
```javascript
// Respect reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set('*', { duration: 0.01 });
}
```

### Bootstrap Accessibility
- **ARIA attributes** - Automatic on components
- **Keyboard navigation** - Tab, Enter, Escape support
- **Focus management** - Visible focus indicators
- **Screen reader** - Semantic HTML structure

## 🎯 GSAP vs CSS Animations

| Feature | GSAP | CSS |
|---------|------|-----|
| Performance | ✅ Hardware accelerated | ⚠️ Limited |
| Control | ✅ Full programmatic | ❌ Limited |
| Easing | ✅ Advanced easing | ⚠️ Basic |
| Timeline | ✅ Complex sequences | ❌ No timeline |
| ScrollTrigger | ✅ Built-in | ❌ Manual |
| File Size | 📦 ~30KB | 📦 0KB |

## 🚀 Advanced Features

### Mouse Parallax (Desktop)
```javascript
// Subtle mouse movement effects
document.addEventListener('mousemove', function(e) {
    const mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    gsap.to(statue, { x: mouseX * 20, duration: 1 });
});
```

### Touch Gestures (Mobile)
```javascript
// Swipe detection
document.addEventListener('touchend', function(e) {
    const deltaX = touchEndX - touchStartX;
    if (Math.abs(deltaX) > 50) {
        // Handle swipe
    }
});
```

### Loading Screen
- **Progress Animation** - Smooth progress bar
- **Logo Animation** - Brand entrance
- **Transition** - Fade to main content

---

**Framework**: Bootstrap 5.3.2 + GSAP 3.12.2  
**Design**: Based on professional agency image  
**Performance**: Optimized for all devices  
**Animations**: Professional GSAP implementation  
**Yaratuvchi**: Codegen AI  
**Sana**: 2025  
**Versiya**: 6.0 (Bootstrap + GSAP Perfect)

