# Clean Cut Painting & Handyman - Brand Color Standards

> **Official brand colors - all development must follow these standards.**

---

## Primary Brand Colors

### Navy Blue - Primary Brand Color

| Property | Value |
|----------|-------|
| **Hex** | `#144787` |
| **RGB** | `rgb(20, 71, 135)` |
| **CSS Variable** | `--color-dark-blue` |

**Usage:**
- Section headings
- Icon backgrounds (`bg-[#144787]/10`)
- Text on light backgrounds
- Borders and accents
- Pattern overlays (`bg-[#144787]/90`)

```html
<!-- Backgrounds -->
<div class="bg-[#144787]">
<div class="bg-[#144787]/90">  <!-- 90% opacity overlay -->
<div class="bg-[#144787]/10">  <!-- 10% opacity for icon backgrounds -->

<!-- Text -->
<h2 class="text-[#144787]">
<span class="text-[#144787]">

<!-- Borders -->
<div class="border-[#144787]">
<div class="border-2 border-[#144787]">
```

---

### Sky Blue - Call-to-Action Color

| Property | Value |
|----------|-------|
| **Primary** | `sky-400` |
| **Hover** | `sky-500` |
| **Light Background** | `sky-50` or `sky-100` |

**Usage:**
- Primary action buttons
- CTA elements
- Accent highlights
- Stats and numbers

```html
<!-- Buttons -->
<button class="bg-sky-400 hover:bg-sky-500">

<!-- Stats -->
<span class="text-sky-600">2500+</span>

<!-- Light backgrounds -->
<div class="bg-sky-50">
<span class="bg-sky-100 text-sky-600">Badge</span>
```

---

### Neutral Colors

| Color | Tailwind Class | Usage |
|-------|----------------|-------|
| White | `white` | Backgrounds, text on dark |
| Gray 50 | `gray-50` | Section backgrounds |
| Gray 100 | `gray-100` | Card backgrounds, tags |
| Gray 200 | `gray-200` | Borders, dividers |
| Gray 500 | `gray-500` | Placeholder text, icons |
| Gray 600 | `gray-600` | Body text (standard) |
| Gray 700 | `gray-700` | Body text (emphasis) |
| Gray 900 | `gray-900` | Headings on white |

---

## Color Combinations

### Navy Background + White Text
```html
<section class="bg-[#144787]">
  <h2 class="text-white">Heading</h2>
  <p class="text-white/90">Body text with slight transparency</p>
</section>
```

### Pattern Overlay
```html
<section style="background-image: url('/patterns/pattern-04.webp');">
  <div class="absolute inset-0 bg-[#144787]/90"></div>
  <div class="relative z-10">
    <h2 class="text-white">Content</h2>
  </div>
</section>
```

### White Card on Navy
```html
<div class="bg-[#144787]">
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-[#144787]">Card Title</h3>
    <p class="text-gray-600">Card description</p>
  </div>
</div>
```

### Icon with Light Background
```html
<div class="w-16 h-16 bg-[#144787]/10 rounded-full flex items-center justify-center">
  <svg class="w-8 h-8 text-[#144787]">...</svg>
</div>
```

---

## Deprecated Colors - DO NOT USE

| Color | Reason |
|-------|--------|
| `#1e3a5f` | Old navy - too dark, doesn't match brand |
| `#2a4a73` | Test color - not in brand palette |
| `#345d8a` | Too light and saturated |
| Inline `font-family: 'PT Sans'` | Use `font-display` class instead |

---

## Google Brand Colors (Reviews Section Only)

These colors should ONLY be used in the Google Reviews component:

| Color | Hex | Usage |
|-------|-----|-------|
| Google Blue | `#4285F4` | Google logo, links |
| Google Red | `#EA4335` | Google logo |
| Google Yellow | `#FBBC05` | Star ratings, Google logo |
| Google Green | `#34A853` | Google logo |

---

## Pattern Assets

Located in `/public/patterns/`:

| Pattern | Primary Color | Usage |
|---------|---------------|-------|
| `pattern-04.webp` | 64.8% `#144787` | Services, Contact, CareersCTA |
| `pattern-02.webp` | Mixed | WhyChooseUs, VideoTestimonials |
| `pattern-03.webp` | Mixed | Commercial section |
| `pattern-05.webp` | Mixed | Promo section |

**Standard pattern overlay:**
```html
style="background-image: url('/patterns/pattern-04.webp'); background-size: cover; background-position: center;"
```

---

## Validation Checklist

When reviewing code, verify:

- [ ] No instances of `#1e3a5f`
- [ ] Navy blue uses `#144787` or `text-dark-blue`
- [ ] CTAs use `sky-400` / `sky-500`
- [ ] Body text uses `gray-600` or `gray-700`
- [ ] Pattern sections have navy overlay
- [ ] Text on dark backgrounds is white or `white/90`

---

*Last updated: December 2024*
*Color source: Brand patterns analyzed via `scripts/analyze-pattern-colors.mjs`*
