# Clean Cut - Mobile-First Development Standards

> **All styles must be written mobile-first.**
> Base styles (no prefix) target mobile. Use breakpoint prefixes to enhance for larger screens.

---

## Breakpoint Reference

| Prefix | Min Width | Device Target |
|--------|-----------|---------------|
| (none) | 0px | Mobile phones (base) |
| `sm:` | 640px | Large phones, small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops, small desktops |
| `xl:` | 1280px | Large desktops |
| `2xl:` | 1536px | Extra large screens |

---

## Core Principles

### 1. Start with Mobile

Write the mobile style first, then add larger screen overrides:

```html
<!-- CORRECT: Mobile-first -->
<div class="text-sm sm:text-base lg:text-lg">

<!-- WRONG: Desktop-first (don't do this) -->
<div class="lg:text-lg md:text-base text-sm">
```

### 2. Progressive Enhancement

Add features for larger screens, don't remove them:

```html
<!-- Mobile: Stack vertically -->
<!-- Desktop: Side by side -->
<div class="flex flex-col lg:flex-row">
```

### 3. Touch-First Interactions

- Minimum tap target: 44x44px
- Adequate spacing between interactive elements
- Hover states only enhance, not required

---

## Typography Scaling

### Headings

```html
<!-- H1 (Hero) -->
<h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">

<!-- H2 (Section) -->
<h2 class="text-3xl lg:text-4xl">

<!-- H3 (Card) -->
<h3 class="text-lg lg:text-xl">
```

### Body Text

```html
<!-- Standard paragraph -->
<p class="text-base sm:text-lg lg:text-xl">

<!-- Description text -->
<p class="text-sm sm:text-base">

<!-- Small text -->
<p class="text-xs sm:text-sm">
```

### Stats/Numbers

```html
<div class="text-lg sm:text-2xl font-bold">2500+</div>
<div class="text-[10px] sm:text-xs">Label</div>
```

---

## Layout Patterns

### Container

```html
<div class="container-custom">
  <!-- Defined as: max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -->
</div>
```

### Grid Layouts

```html
<!-- 1 column -> 2 columns -> 3 columns -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 1 column -> 2 columns (content sections) -->
<div class="grid lg:grid-cols-2 gap-12 items-center">
```

### Flex Layouts

```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col sm:flex-row gap-4">

<!-- Always row, wrap on mobile -->
<div class="flex flex-wrap gap-4">
```

---

## Spacing Patterns

### Section Padding

```html
<!-- Standard section -->
<section class="py-16">

<!-- Hero section -->
<section class="py-20 lg:py-24">
```

### Component Padding

```html
<!-- Cards -->
<div class="p-4 sm:p-5 lg:p-6">

<!-- Tight cards -->
<div class="p-3 sm:p-4">
```

### Gap Spacing

```html
<!-- Between cards -->
<div class="gap-4 sm:gap-6">

<!-- Between elements -->
<div class="gap-2 sm:gap-4">
```

### Margins

```html
<!-- Section header margin -->
<div class="mb-8 sm:mb-12">

<!-- Element spacing -->
<div class="mb-4 lg:mb-6">
```

---

## Button Patterns

### Stacked on Mobile, Row on Desktop

```html
<div class="flex flex-col sm:flex-row gap-4 justify-center">
  <button class="btn-primary">Primary Action</button>
  <button class="btn-outline">Secondary Action</button>
</div>
```

### Full Width on Mobile

```html
<a href="#" class="w-full sm:w-auto px-6 py-3 ...">
  Button Text
</a>
```

### Mobile-Specific Buttons

```html
<!-- Show only on mobile -->
<div class="lg:hidden">
  <a href="tel:..." class="w-full py-3.5 bg-sky-400 ...">
    Call Now
  </a>
</div>

<!-- Show only on desktop -->
<a href="tel:..." class="hidden lg:inline-flex ...">
  Call (217) 330-7310
</a>
```

---

## Image Patterns

### Responsive Images

```html
<img
  src="/images/example.webp"
  alt="Description"
  class="w-full h-64 sm:h-72 lg:h-80 object-cover"
  loading="lazy"
>
```

### Aspect Ratio Containers

```html
<div class="aspect-video">
  <img class="w-full h-full object-cover">
</div>

<div class="aspect-[4/3]">
  <img class="w-full h-full object-cover">
</div>

<div class="aspect-[9/16]">
  <!-- Vertical video thumbnail -->
</div>
```

---

## Text Wrapping

### Allow Wrap on Mobile, Prevent on Desktop

```html
<div class="sm:whitespace-nowrap">COMPETITIVE RATES.</div>
```

### Constrain Width

```html
<p class="max-w-2xl mx-auto">
  Long text that stays readable on large screens.
</p>
```

---

## Show/Hide by Breakpoint

### Mobile Only

```html
<div class="lg:hidden">
  <!-- Visible on mobile and tablet only -->
</div>

<div class="sm:hidden">
  <!-- Visible on small mobile only -->
</div>
```

### Desktop Only

```html
<div class="hidden lg:block">
  <!-- Visible on laptop and up -->
</div>

<div class="hidden sm:flex">
  <!-- Visible on tablet and up, uses flex -->
</div>
```

---

## Navigation Patterns

### Mobile Menu Toggle

```html
<!-- Hamburger button (mobile only) -->
<button class="lg:hidden p-2" aria-label="Open menu">
  <svg class="w-6 h-6">...</svg>
</button>

<!-- Desktop nav (hidden on mobile) -->
<nav class="hidden lg:flex gap-6">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

### Carousel Arrows

```html
<button class="w-10 h-10 sm:w-12 sm:h-12 ...">
  <svg class="w-5 h-5 sm:w-6 sm:h-6">...</svg>
</button>
```

---

## Form Patterns

### Stacked Inputs (Mobile Default)

```html
<form class="space-y-3 sm:space-y-4">
  <input class="w-full h-11 ...">
  <input class="w-full h-11 ...">
  <button type="submit" class="w-full h-10 ...">
    Submit
  </button>
</form>
```

### Inline Form (Desktop)

```html
<form class="flex flex-col sm:flex-row gap-3">
  <input class="flex-1 ...">
  <button class="sm:w-auto ...">Submit</button>
</form>
```

---

## Testing Checklist

Before deploying, test on these viewports:

- [ ] **375px** - iPhone SE / small phones
- [ ] **390px** - iPhone 12/13/14
- [ ] **428px** - iPhone 14 Plus / large phones
- [ ] **768px** - iPad / tablets
- [ ] **1024px** - iPad Pro / small laptops
- [ ] **1280px** - Standard laptop
- [ ] **1440px+** - Desktop

### Common Issues to Check

- [ ] Text doesn't overflow horizontally
- [ ] Buttons are tappable (min 44px)
- [ ] Images don't break layout
- [ ] Forms are usable without horizontal scroll
- [ ] Navigation is accessible
- [ ] Cards stack properly
- [ ] Spacing feels balanced

---

## Quick Reference

### Most Common Patterns

```html
<!-- Typography -->
text-3xl lg:text-4xl
text-base sm:text-lg
text-sm sm:text-base

<!-- Layout -->
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
flex flex-col sm:flex-row
gap-4 sm:gap-6

<!-- Spacing -->
py-16
p-4 sm:p-5 lg:p-6
mb-8 sm:mb-12

<!-- Visibility -->
hidden lg:block
lg:hidden

<!-- Sizing -->
w-full sm:w-auto
h-10 sm:h-12
```

---

*Last updated: December 2024*
*Reference: Homepage at `src/pages/index.astro`*
