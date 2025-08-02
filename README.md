# INTEGNITY - Responsive Website

Bu loyiha sizning HTML kodingiz asosida yaratilgan to'liq responsive INTEGNITY web sayt hisoblanadi.

## 🎯 Asosiy Xususiyatlar

### ✅ Sizning Kodingizga Mos
- Aynan bir xil HTML struktura
- Bir xil class nomlari
- Bir xil element tartibini saqlash
- Faqat responsive qo'shimchalar

### 📱 To'liq Responsive Dizayn

#### 🖥️ Desktop (1400px+)
- To'liq navbar ko'rinadi
- Keng spacing va padding
- Hover effektlar

#### 💻 Large Desktop (1024px-1399px)
- Optimallashtirilgan spacing
- Barcha elementlar ko'rinadi

#### 📱 Tablet (768px-1023px)
- Kichikroq font sizes
- Moslashtirilgan gaps

#### 📱 Mobile (≤767px)
- Hamburger menu
- Vertikal badge layout
- Markazlashtirilgan content

#### 📱 Small Mobile (≤480px)
- Compact layout
- Kichik font sizes

#### 📱 Very Small Mobile (≤360px)
- Ultra-compact design
- Minimal spacing

## 📂 Fayl Tuzilishi

```
├── index.html          # Sizning HTML kodingiz (responsive qo'shimchalar bilan)
├── vars.css            # CSS variables
├── style.css           # Responsive CSS stillari
├── script.js           # JavaScript funksionalligi
├── integnity1.svg      # INTEGNITY logo SVG
├── arrow-10.svg        # Arrow icon SVG
└── README.md           # Bu fayl
```

## 🎨 Dizayn Elementlari

### Navigation Bar
- **Brand**: INTEGNITY logo chap tomonda
- **Menu**: HOME, ABOUT, WORK, INSIGHTS, SERVICES, CONTACT
- **CTA**: START A PROJECT tugmasi o'ng tomonda
- **Mobile**: Hamburger menu

### Hero Content
- **Badges**: 3 ta glass morphism badge
  - Strategy-first Influencer Agency
  - Independent since 2013
  - #1 Ranked Emerce100
- **Title**: INTEGNITY SVG logo

## ⚡ Texnologiyalar

- **HTML5** - Sizning strukturangiz
- **CSS3** - Modern responsive features
- **Vanilla JavaScript** - Mobile menu functionality
- **SVG** - Scalable graphics

## 🚀 Xususiyatlar

### Responsive Features
- **Mobile Menu** - Hamburger toggle
- **Flexible Layout** - CSS Grid va Flexbox
- **Scalable Typography** - clamp() functions
- **Touch Friendly** - Mobile optimized

### Interactive Elements
- **Hover Effects** - Navigation va buttons
- **Mobile Menu** - Smooth animations
- **Keyboard Navigation** - Accessibility
- **Touch Gestures** - Swipe detection

## 🎯 Responsive Breakpoints

```css
/* Very Small Mobile */
@media (max-width: 360px) { ... }

/* Small Mobile */
@media (max-width: 480px) { ... }

/* Mobile */
@media (max-width: 767px) { ... }

/* Tablet */
@media (max-width: 1023px) and (min-width: 768px) { ... }

/* Desktop */
@media (max-width: 1399px) and (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1400px) { ... }
```

## 🔧 Ishga Tushirish

1. Barcha fayllarni bir papkaga joylashtiring
2. `index.html` faylini brauzerda oching
3. Yoki web serverda ishga tushiring:

```bash
# Python server
python -m http.server 8000

# Node.js server
npx serve .

# PHP server
php -S localhost:8000
```

## 📱 Test Qilingan Qurilmalar

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Tablet**: iPad, Android tablets
- **Mobile**: iPhone, Android phones
- **Orientations**: Portrait va Landscape

## 🎨 CSS Variables

Barcha ranglar, o'lchamlar va boshqa qiymatlar `vars.css` faylida CSS variables sifatida saqlangan:

```css
:root {
  --primary-bg: linear-gradient(135deg, #3a4a5c 0%, #2d3741 50%, #1a1f26 100%);
  --text-white: #ffffff;
  --glass-bg: rgba(255, 255, 255, 0.1);
  /* ... */
}
```

## 🌐 Browser Qo'llab-quvvatlash

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## ♿ Accessibility

- **Keyboard Navigation** - Tab support
- **Focus Indicators** - Visual feedback
- **Screen Reader** - Semantic HTML
- **Reduced Motion** - Respects user preferences
- **High Contrast** - Support for accessibility modes

---

**Maqsad**: Sizning HTML kodingizni saqlab, to'liq responsive qilish  
**Yaratuvchi**: Codegen AI  
**Sana**: 2025  
**Versiya**: 3.0

