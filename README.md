# INTEGNITY - Figma Specifications Implementation

Bu loyiha Figma Dev Mode'dan olingan aniq CSS specifications asosida yaratilgan to'liq responsive INTEGNITY web sayt hisoblanadi.

## 🎯 Figma Specifications

### ✅ Aniq Typography (Figma'dan)
```css
/* INTEGNITY Brand */
font-family: Plus Jakarta Sans
font-size: 32px
font-weight: 800
color: white

/* Navigation Items (HOME, ABOUT, WORK, etc.) */
font-family: Plus Jakarta Sans
font-size: 16px
font-weight: 800
color: white

/* START A PROJECT Button */
font-family: Plus Jakarta Sans
font-size: 20px
font-weight: 800
color: white
```

### 📱 To'liq Responsive Dizayn

#### 🖥️ Desktop (1400px+)
- Figma specifications: 32px brand, 16px nav, 20px CTA
- To'liq navbar ko'rinadi
- Keng spacing va padding

#### 💻 Tablet (768px-1023px)
- Scaled font sizes: 28px brand, 15px nav, 18px CTA
- Optimallashtirilgan layout

#### 📱 Mobile (≤767px)
- Responsive clamp() functions
- Hamburger menu
- Vertikal badge layout
- Markazlashtirilgan content

#### 📱 Small Mobile (≤480px)
- Ultra-responsive typography
- Compact layout

## 📂 Fayl Tuzilishi

```
├── index.html          # HTML struktura (mobile menu qo'shildi)
├── vars.css            # CSS variables (Figma specs)
├── style.css           # Responsive CSS (Figma typography)
├── script.js           # JavaScript funksionalligi
├── integnity1.svg      # INTEGNITY logo (Plus Jakarta Sans)
├── arrow-10.svg        # Arrow icon
└── README.md           # Bu fayl
```

## 🎨 Typography System

### Font Family
- **Primary**: Plus Jakarta Sans (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Font Weights
- **All Elements**: 800 (Extra Bold) - Figma specification

### Font Sizes (Desktop)
- **Brand Logo**: 32px (INTEGNITY)
- **CTA Button**: 20px (START A PROJECT)
- **Navigation**: 16px (HOME, ABOUT, WORK, etc.)

### Responsive Typography
```css
/* Mobile responsive sizes */
--fs-brand-mobile: clamp(24px, 6vw, 32px);
--fs-cta-mobile: clamp(16px, 4vw, 20px);
--fs-nav-mobile: clamp(14px, 3.5vw, 16px);
```

## ⚡ Texnologiyalar

- **HTML5** - Semantic markup
- **CSS3** - Modern features
  - CSS Custom Properties
  - Clamp() functions for responsive typography
  - Backdrop filters
  - Grid va Flexbox
- **Google Fonts** - Plus Jakarta Sans
- **Vanilla JavaScript** - Mobile menu functionality

## 🚀 Xususiyatlar

### Figma-Perfect Implementation
- **Exact Font Specifications** - Plus Jakarta Sans, 800 weight
- **Precise Font Sizes** - 32px, 20px, 16px
- **Consistent Typography** - Word-wrap: break-word
- **Color Accuracy** - White text (#ffffff)

### Responsive Features
- **Mobile Menu** - Hamburger toggle
- **Flexible Layout** - CSS Grid va Flexbox
- **Scalable Typography** - clamp() functions
- **Touch Friendly** - Mobile optimized

### Interactive Elements
- **Hover Effects** - Navigation va buttons
- **Mobile Menu** - Smooth animations
- **Keyboard Navigation** - Accessibility
- **Font Loading** - Optimized with font-display: swap

## 🎯 Responsive Breakpoints

```css
/* Very Small Mobile */
@media (max-width: 360px) {
  .integnity { font-size: clamp(18px, 4.5vw, 24px); }
}

/* Small Mobile */
@media (max-width: 480px) {
  .integnity { font-size: clamp(20px, 5vw, 28px); }
}

/* Mobile */
@media (max-width: 767px) {
  .integnity { font-size: var(--fs-brand-mobile); }
}

/* Tablet */
@media (max-width: 1023px) and (min-width: 768px) {
  .integnity { font-size: 28px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .integnity { font-size: 32px; } /* Figma exact */
}
```

## 🔧 Ishga Tushirish

1. Barcha fayllarni bir papkaga joylashtiring
2. `index.html` faylini brauzerda oching
3. Plus Jakarta Sans Google Fonts'dan yuklanadi

```bash
# Web server bilan ishga tushirish
python -m http.server 8000
# yoki
npx serve .
```

## 📱 Test Qilingan

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Tablet**: iPad, Android tablets  
- **Mobile**: iPhone, Android phones
- **Font Loading**: Plus Jakarta Sans Google Fonts

## 🎨 CSS Variables (Figma Specs)

```css
:root {
  /* Figma Typography */
  --font-family: 'Plus Jakarta Sans', sans-serif;
  --font-weight-extrabold: 800;
  
  /* Figma Font Sizes */
  --fs-brand: 32px;    /* INTEGNITY */
  --fs-cta: 20px;      /* START A PROJECT */
  --fs-nav: 16px;      /* Navigation items */
  
  /* Colors */
  --text-white: #ffffff;
  --primary-bg: linear-gradient(135deg, #3a4a5c 0%, #2d3741 50%, #1a1f26 100%);
}
```

## 🌐 Browser Qo'llab-quvvatlash

- **Chrome** 60+ ✅
- **Firefox** 55+ ✅
- **Safari** 12+ ✅
- **Edge** 79+ ✅
- **Mobile Browsers** ✅

## ♿ Accessibility

- **Font Loading** - font-display: swap
- **Keyboard Navigation** - Tab support
- **Focus Indicators** - Visual feedback
- **Reduced Motion** - Respects user preferences
- **High Contrast** - Support for accessibility modes

## 🎯 Figma vs Implementation

| Element | Figma Spec | Implementation |
|---------|------------|----------------|
| Brand Font | Plus Jakarta Sans, 32px, 800 | ✅ Exact match |
| Nav Font | Plus Jakarta Sans, 16px, 800 | ✅ Exact match |
| CTA Font | Plus Jakarta Sans, 20px, 800 | ✅ Exact match |
| Color | White | ✅ #ffffff |
| Word Wrap | break-word | ✅ Applied |

---

**Maqsad**: Figma specifications'ni 100% aniq implement qilish  
**Font**: Plus Jakarta Sans (Google Fonts)  
**Yaratuvchi**: Codegen AI  
**Sana**: 2025  
**Versiya**: 4.0 (Figma Perfect)

