# Clean Cut Painting & Handyman - Design System

> **This document is the single source of truth for all UI development.**
> The homepage (`src/pages/index.astro`) serves as the reference implementation.

---

## Table of Contents

1. [Brand Colors](#brand-colors)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Buttons & CTAs](#buttons--ctas)
5. [Section Patterns](#section-patterns)
6. [Cards & Components](#cards--components)
7. [Lightbox Component](#lightbox-component)
8. [Images & Media](#images--media)
9. [Animations & Transitions](#animations--transitions)
10. [Mobile-First Standards](#mobile-first-standards)
11. [Accessibility](#accessibility)
12. [ID & Class Naming](#id--class-naming)
13. [Service Page Structure](#service-page-structure)

---

## Brand Colors

### Primary Palette

| Color | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| **Navy Blue** | `#144787` | `--color-dark-blue` | Primary brand color, headings, icons |
| **Sky Blue** | `sky-400` | `--color-primary` | CTAs, buttons, accents |
| **Sky Blue Hover** | `sky-500` | `--color-primary-dark` | Button hover states |
| **White** | `#ffffff` | - | Backgrounds, text on dark |
| **Gray Text** | `gray-600` | - | Body text, descriptions |
| **Gray Light** | `gray-50` | - | Section backgrounds |

### Usage Examples

```html
<!-- Navy Blue -->
<h2 class="text-[#144787]">Heading</h2>
<div class="bg-[#144787]">Navy background</div>
<div class="border-[#144787]">Navy border</div>

<!-- Sky Blue CTAs -->
<button class="bg-sky-400 hover:bg-sky-500">CTA</button>

<!-- Text Colors -->
<p class="text-gray-600">Body text</p>
<p class="text-gray-700">Darker body text</p>
```

### Deprecated Colors - DO NOT USE

- `#1e3a5f` - Old navy (too dark)
- `#2a4a73` - Test color
- Any hardcoded navy that isn't `#144787`

---

## Typography

### Font Families

```css
--font-display: 'PT Sans', Arial, sans-serif;  /* Headings */
--font-body: 'Inter', system-ui, sans-serif;   /* Body text */
```

### Heading Sizes

| Element | Mobile | Desktop | Classes |
|---------|--------|---------|---------|
| H1 (Hero) | `text-3xl` | `text-5xl xl:text-6xl` | `text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold` |
| H2 (Section) | `text-3xl` | `text-4xl` | `text-3xl lg:text-4xl font-display font-bold text-[#144787]` |
| H3 (Card) | `text-lg` | `text-xl` | `text-lg font-semibold text-[#144787]` |

### Body Text Sizes

| Type | Classes |
|------|---------|
| Section Description | `text-lg text-gray-600` |
| Card Description | `text-sm text-gray-600` |
| Small/Caption | `text-xs text-gray-500` |

### Standard Section Header Pattern

```html
<div class="text-center mb-12">
  <h2 class="text-3xl lg:text-4xl font-display font-bold text-[#144787] mb-4">
    Section Title
  </h2>
  <p class="text-lg text-gray-600 max-w-2xl mx-auto">
    Section description text here.
  </p>
</div>
```

---

## Spacing & Layout

### Container

```html
<div class="container-custom">
  <!-- Max width: 1400px, responsive padding -->
</div>
```

Defined in `global.css`:
```css
.container-custom {
  @apply max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8;
}
```

### Section Padding

**Standard:** `py-16` for all sections

```html
<section class="py-16">
```

**Exception:** Hero section uses `py-20 lg:py-24`

### Grid Gaps

| Context | Gap |
|---------|-----|
| Card grids | `gap-6` |
| Form elements | `space-y-3` or `space-y-4` |
| Button groups | `gap-4` |
| Icon + text | `gap-2` or `gap-3` |

---

## Buttons & CTAs

### Primary Button

```html
<button class="px-6 py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors shadow-md">
  Get My Free Estimate
</button>
```

Or use the utility class:
```html
<button class="btn-primary">Get My Free Estimate</button>
```

### Outline Button

```html
<button class="px-6 py-3 border-2 border-[#144787] text-[#144787] font-semibold rounded-lg hover:bg-[#144787] hover:text-white transition-all">
  Learn More
</button>
```

Or use the utility class:
```html
<button class="btn-outline">Learn More</button>
```

### Button Combinations (Mobile-First)

```html
<div class="flex flex-col sm:flex-row gap-4 justify-center">
  <button class="btn-primary">Primary Action</button>
  <button class="btn-outline">Secondary Action</button>
</div>
```

### Phone CTA

```html
<a href="tel:+12173307310" class="px-6 py-3 bg-white text-[#144787] font-semibold rounded-lg hover:bg-gray-100 transition-all">
  Call (217) 330-7310
</a>
```

---

## Section Patterns

### Light Background Section

```html
<section class="py-16 bg-white">
  <div class="container-custom">
    <!-- Content -->
  </div>
</section>
```

### Gray Background Section

```html
<section class="py-16 bg-gray-50">
  <div class="container-custom">
    <!-- Content -->
  </div>
</section>
```

### Pattern Background with Navy Overlay

```html
<section class="py-16 relative overflow-hidden" style="background-image: url('/patterns/pattern-04.webp'); background-size: cover; background-position: center;">
  <div class="absolute inset-0 bg-[#144787]/90"></div>
  <div class="container-custom relative z-10">
    <!-- Content (white text) -->
  </div>
</section>
```

### Solid Navy Section

```html
<section class="py-16 bg-[#144787]">
  <div class="container-custom">
    <!-- Content (white text) -->
  </div>
</section>
```

### Full-Width Visual Break

Use between content sections to add visual interest. Shows a single impactful image edge-to-edge.

```html
<section class="relative h-96 overflow-hidden">
  <img
    src="/images/example.webp"
    alt="Descriptive alt text"
    class="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
</section>
```

**Image Requirements:**
- Minimum 1200px width, recommended 1920px+
- Must be landscape orientation
- Choose images that showcase completed work relevant to the page topic
- Avoid office/consultation room shots - use actual project photos

### Hero Section (Service Pages)

```html
<section class="relative min-h-[500px] py-20 lg:py-24 overflow-hidden">
  <img
    src="/images/hero.webp"
    alt="Service description"
    class="absolute inset-0 w-full h-full object-cover"
  >
  <div class="absolute inset-0 bg-gradient-to-br from-[#144787]/85 via-[#144787]/75 to-[#144787]/65 lg:from-black/70 lg:via-black/60 lg:to-black/50 backdrop-blur-md lg:backdrop-blur-none"></div>
  <div class="container-custom relative z-10">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 drop-shadow-lg">
        Page Title
      </h1>
      <p class="text-lg sm:text-xl lg:text-2xl text-white/95 font-medium max-w-3xl mx-auto">
        Subtitle description here.
      </p>
    </div>
  </div>
</section>
```

---

## Cards & Components

### Standard Service Card

```html
<div class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
  <div class="aspect-video overflow-hidden">
    <img src="..." alt="..." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
  </div>
  <div class="p-5">
    <h3 class="text-lg font-semibold text-[#144787] mb-2 text-center">Title</h3>
    <p class="text-sm text-gray-600 text-center">Description</p>
  </div>
</div>
```

### Feature Card with Icon

```html
<div class="p-6 bg-white rounded-lg border border-gray-200 hover:border-sky-400 hover:shadow-lg transition-all">
  <div class="w-16 h-16 bg-[#144787]/10 rounded-full flex items-center justify-center mx-auto mb-4">
    <svg class="w-8 h-8 text-[#144787]">...</svg>
  </div>
  <h3 class="text-lg font-semibold text-[#144787] mb-3 text-center">Feature Title</h3>
  <p class="text-sm text-gray-600 text-center">Feature description</p>
</div>
```

### Stats Overlay Card

```html
<div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-3 sm:p-4 shadow-lg">
  <div class="grid grid-cols-3 gap-2 sm:gap-4 text-center">
    <div>
      <div class="text-lg sm:text-2xl font-bold text-sky-600">2500+</div>
      <div class="text-[10px] sm:text-xs text-gray-600">Projects Done</div>
    </div>
    <!-- More stats -->
  </div>
</div>
```

### Image Grid Showcase with Labels

For displaying services/features with labeled images. Labels appear at bottom only.

```html
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-6xl mx-auto">
  <div class="relative h-64 overflow-hidden rounded-lg shadow-lg group">
    <img
      src="/images/example.webp"
      alt="Service description"
      class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
      data-lightbox-gallery="gallery-name"
    />
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
      <p class="text-white font-semibold">Label Text</p>
    </div>
  </div>
  <!-- More items... -->
</div>
```

**Key Points:**
- Label overlay: `bg-gradient-to-t from-black/70 to-transparent` (bottom only, NOT full coverage)
- Add `pointer-events-none` to label div so images remain clickable for lightbox
- Use `data-lightbox-gallery="gallery-name"` for lightbox integration
- Fixed height `h-64` ensures consistent grid appearance

### Gallery Section with Featured Image

```html
<!-- Featured Large Image -->
<div class="max-w-5xl mx-auto mb-12">
  <div class="relative overflow-hidden rounded-lg shadow-2xl group h-96">
    <img
      src="/images/featured.webp"
      alt="Featured image description"
      class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      loading="lazy"
      data-lightbox-gallery="gallery-name"
    />
  </div>
</div>

<!-- Grid Gallery -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  <div class="gallery-item group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-72">
    <img
      src="/images/gallery-item.webp"
      alt="Gallery image description"
      class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
      data-lightbox-gallery="gallery-name"
    />
  </div>
  <!-- More items... -->
</div>
```

### Process Steps (Numbered)

```html
<div class="max-w-4xl mx-auto space-y-6">
  <div class="bg-white rounded-lg p-6 shadow-lg flex gap-6">
    <div class="flex-shrink-0">
      <div class="w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center text-xl font-bold">
        1
      </div>
    </div>
    <div>
      <h3 class="text-xl font-bold text-[#144787] mb-2">Step Title</h3>
      <p class="text-gray-600">Step description here.</p>
    </div>
  </div>
  <!-- More steps... -->
</div>
```

---

## Lightbox Component

**MANDATORY:** Every service page MUST include the Lightbox component and ALL project/gallery images MUST be clickable.

### Setup Requirements

1. Add to page imports: `import Lightbox from '../../components/Lightbox.astro';`
2. Add before closing `</Layout>`: `<Lightbox />`
3. Add `data-lightbox-gallery="gallery-name"` to **ALL** clickable images

### Which Images MUST Be Clickable

| Image Type | Clickable? | Gallery Name Convention |
|------------|------------|------------------------|
| Services overview grid | **YES** | `{service}-services` (e.g., `interior-services`) |
| Feature section images | **YES** | `{service}-gallery` |
| Gallery featured image | **YES** | `{service}-gallery` |
| Gallery grid images | **YES** | `{service}-gallery` |
| Hero background | No | N/A (decorative) |
| Full-width visual break | No | N/A (decorative) |
| Pattern backgrounds | No | N/A (decorative) |

### Implementation Pattern

```html
<!-- Services overview grid - MUST include data-lightbox-gallery -->
<div class="relative h-64 overflow-hidden rounded-lg shadow-lg group">
  <img
    src="/images/example.webp"
    alt="Service description"
    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    loading="lazy"
    data-lightbox-gallery="interior-services"
  />
  <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pointer-events-none">
    <p class="text-white font-semibold">Label Text</p>
  </div>
</div>

<!-- Gallery images - MUST include data-lightbox-gallery -->
<div class="gallery-item group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-72">
  <img
    src="/images/gallery-item.webp"
    alt="Gallery image description"
    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
    loading="lazy"
    data-lightbox-gallery="interior-gallery"
  />
</div>
```

### Key Implementation Notes

- **Label overlays:** Add `pointer-events-none` to label divs so images remain clickable
- **Same gallery name:** Images with the same `data-lightbox-gallery` value will have prev/next navigation
- **Separate galleries:** Use different gallery names for different sections if you want separate navigation groups
- **Cursor hint:** Consider adding `cursor-pointer` class to indicate clickability

### Verification Checklist

Before considering a page complete:
- [ ] Lightbox component is imported
- [ ] `<Lightbox />` is placed before `</Layout>`
- [ ] ALL services overview grid images have `data-lightbox-gallery`
- [ ] ALL feature section images have `data-lightbox-gallery`
- [ ] ALL gallery images have `data-lightbox-gallery`
- [ ] Label overlays have `pointer-events-none`

---

## Images & Media

### Minimum Image Dimensions

| Container Type | Minimum Width | Recommended | Notes |
|----------------|---------------|-------------|-------|
| Full-width visual break (`h-96`) | 1200px | 1920px+ | Landscape orientation required |
| Hero images | 1920px | 2250px+ | Landscape, high quality |
| Gallery grid images | 960px | 1080px+ | Works for both portrait/landscape |
| Service card thumbnails | 800px | 1080px+ | 16:9 aspect ratio |
| Small thumbnails | 600px | 800px+ | For grids with many items |

**CRITICAL:** Always verify image dimensions before using. Use `sips -g pixelWidth -g pixelHeight <file>` to check. Images below minimum will appear blurry.

### Aspect Ratios

| Use Case | Ratio | Class |
|----------|-------|-------|
| Service cards | 16:9 | `aspect-video` |
| Gallery images | 4:3 | `aspect-[4/3]` |
| Thumbnails | 9:16 | `aspect-[9/16]` |
| Full-width break | ~3:1 | `h-96` (fixed height) |

### Image Standards

```html
<img
  src="/images/example.webp"
  alt="Descriptive alt text"
  class="w-full h-full object-cover"
  loading="lazy"
>
```

- **Format:** `.webp` preferred
- **Loading:** Use `loading="lazy"` except for above-fold images
- **Object fit:** `object-cover` for consistent sizing
- **Hover effect:** `group-hover:scale-105 transition-transform duration-300`

### Image Quality Audit Process

Before finalizing any page, audit all images:

1. List all image sources used on the page
2. Check dimensions: `sips -g pixelWidth -g pixelHeight <file>`
3. Verify minimum requirements are met for each container type
4. Replace any undersized images with higher quality alternatives
5. Prefer landscape images for wide containers, portrait for tall containers

---

## Animations & Transitions

### Standard Transitions

| Effect | Classes |
|--------|---------|
| Color change | `transition-colors` |
| All properties | `transition-all duration-300` |
| Transform (scale, translate) | `transition-transform duration-300` or `duration-500` |

### Hover Effects

```html
<!-- Card lift -->
<div class="hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">

<!-- Image zoom -->
<img class="group-hover:scale-105 transition-transform duration-300">

<!-- Button lift -->
<button class="hover:-translate-y-0.5 transition-all duration-300">
```

### Carousel Animations

```css
.carousel-track {
  transition: transform 500ms ease-out;
}
```

---

## Mobile-First Standards

### Breakpoint Reference

| Prefix | Min Width | Usage |
|--------|-----------|-------|
| (none) | 0px | Mobile base styles |
| `sm:` | 640px | Large phones/small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

### Key Mobile-First Patterns

#### Typography Scaling
```html
<h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
<h2 class="text-3xl lg:text-4xl">
<p class="text-base sm:text-lg lg:text-xl">
```

#### Grid Layouts
```html
<!-- 1 col -> 2 col -> 3 col -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Button Stacking
```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col sm:flex-row gap-4 justify-center">
```

#### Text Wrapping
```html
<!-- Allow wrap on mobile, prevent on larger screens -->
<div class="sm:whitespace-nowrap">LONG TEXT HERE</div>
```

#### Hide/Show by Breakpoint
```html
<div class="hidden lg:block">Desktop only</div>
<div class="lg:hidden">Mobile only</div>
```

#### Responsive Spacing
```html
<div class="p-3 sm:p-4 lg:p-6">
<div class="gap-2 sm:gap-4 lg:gap-6">
```

---

## Accessibility

### Required Attributes

```html
<!-- Buttons must have labels -->
<button aria-label="Previous slide">
  <svg>...</svg>
</button>

<!-- Images must have alt text -->
<img alt="Professional interior painting service" src="...">

<!-- Form inputs need labels -->
<label for="email">Email</label>
<input id="email" type="email">
```

### Focus States

```html
<input class="focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10 focus:outline-none">
```

### Disabled States

```html
<button class="disabled:opacity-50 disabled:cursor-not-allowed" disabled>
```

### Link Targets

```html
<a href="..." target="_blank" rel="noopener noreferrer">External Link</a>
```

---

## ID & Class Naming

### Component ID Prefixes

To avoid JavaScript conflicts between components, use unique prefixes:

| Component | Prefix | Example |
|-----------|--------|---------|
| About carousel | `about-` | `about-carousel-prev` |
| Reviews carousel | `reviews-` | `reviews-carousel-track` |
| Video testimonials | `video-` | `video-prev` |
| Promo modal | `promo-` | `promo-modal` |

### Class Naming

```html
<!-- Component-specific classes -->
<div class="review-card">
<button class="reviews-carousel-dot">

<!-- State classes -->
<div class="review-text-truncated">
<div class="review-text-full hidden">
```

---

## Quick Reference Checklist

When creating new pages/components:

- [ ] Uses `container-custom` for content width
- [ ] Section padding is `py-16`
- [ ] Headings use `font-display` and `text-[#144787]`
- [ ] Body text uses `text-gray-600` or `text-gray-700`
- [ ] Buttons follow primary/outline patterns
- [ ] Mobile styles come first (no prefix)
- [ ] Images use `.webp` format and `loading="lazy"`
- [ ] All interactive elements have hover states
- [ ] Component IDs use unique prefixes
- [ ] Accessibility attributes present

---

## Service Page Structure

Reference implementation: `src/pages/residential/interior-painting.astro`

### Recommended Section Order

1. **Hero Section** - Full-width background image with gradient overlay
2. **Services Overview** - Image grid showcasing what's included (clickable for lightbox)
3. **Full-Width Visual Break** - Impactful project photo (edge-to-edge)
4. **Feature Section** - Text + image layout (e.g., "Expert Color Consultation")
5. **Process Section** - Numbered steps on pattern background
6. **Gallery Section** - Featured image + grid of project photos
7. **CTA Section** - Call-to-action on pattern background

### Section Background Alternation

Alternate backgrounds to create visual rhythm:

```
Hero (image + gradient overlay)
  ↓
Services Overview (bg-gray-50)
  ↓
Visual Break (full-width image, no padding)
  ↓
Feature Section (bg-white)
  ↓
Process (pattern + navy overlay)
  ↓
Gallery (bg-gray-50)
  ↓
CTA (pattern + navy overlay)
```

### Content Guidelines

- **Visual breaks** should show actual completed work, NOT office/consultation photos
- **Alt text** should be descriptive and unique per image

### Image Duplication Rules (CRITICAL)

**NEVER use the same image twice on a page.** Common mistakes to avoid:

| Location 1 | Location 2 | Result |
|------------|------------|--------|
| Visual break | Feature section | ❌ WRONG - duplicate |
| Visual break | Gallery | ❌ WRONG - duplicate |
| Feature section | Gallery | ❌ WRONG - duplicate |
| Services grid | Gallery | ❌ WRONG - duplicate |

**Before adding any image, verify it's not already used elsewhere on the page.**

### Image Clickability Rules (MANDATORY)

**ALL project/work images MUST be clickable** with the Lightbox component. This includes:

- ✅ Services overview grid images
- ✅ Feature section images (e.g., "Expert Color Consultation" image)
- ✅ Gallery featured image
- ✅ Gallery grid images
- ❌ Hero background (decorative only)
- ❌ Full-width visual break (decorative only)
- ❌ Pattern backgrounds (decorative only)

See [Lightbox Component](#lightbox-component) section for implementation details.

### Page Template Checklist

**Structure:**
- [ ] Hero with service-specific image
- [ ] Services/features grid with labels
- [ ] Full-width visual break with relevant project photo
- [ ] At least one text + image feature section
- [ ] Process or "how we work" section
- [ ] Gallery with featured image + grid
- [ ] CTA section

**Lightbox (MANDATORY):**
- [ ] Lightbox component imported at top of file
- [ ] `<Lightbox />` placed before `</Layout>`
- [ ] ALL services grid images have `data-lightbox-gallery` attribute
- [ ] ALL feature section images have `data-lightbox-gallery` attribute
- [ ] ALL gallery images have `data-lightbox-gallery` attribute
- [ ] Label overlays have `pointer-events-none` class

**Image Quality:**
- [ ] All images audited for dimensions (use `sips -g pixelWidth -g pixelHeight`)
- [ ] Full-width visual break image is 1200px+ wide (1920px+ recommended)
- [ ] Gallery images are 960px+ wide (1080px+ recommended)
- [ ] No blurry or undersized images

**Image Duplication:**
- [ ] Visual break image is NOT used in feature section
- [ ] Visual break image is NOT used in gallery
- [ ] Feature section image is NOT used in gallery
- [ ] Services grid images are NOT repeated in gallery
- [ ] Each image appears exactly ONCE on the page

---

## Image Selection Best Practices (Case Study: Cabinet Refinishing)

This section documents learnings from refining the cabinet-refinishing page from low-quality image selection to high-quality, contextually appropriate images.

### The Problem: Low-Quality Image Selection

The original cabinet-refinishing page had several issues:

| Issue | Example | Impact |
|-------|---------|--------|
| **Undersized images** | `CleanCut Image-4.webp` at 680x733 for feature section | Blurry appearance, unprofessional |
| **Tiny gallery images** | 500-612px wide images in gallery grid | Pixelated when displayed at full size |
| **Irrelevant images** | Generic stock-looking photos | Doesn't showcase actual work |
| **Duplicate images** | Same image in services grid AND gallery | Feels repetitive, unprofessional |

### The Solution: Strategic Image Selection

#### Step 1: Audit All Images with Dimensions

**ALWAYS check dimensions before selecting an image:**
```bash
sips -g pixelWidth -g pixelHeight /path/to/image.webp
```

**Minimum requirements by container:**
| Container | Minimum | Recommended | Blurry Risk |
|-----------|---------|-------------|-------------|
| Feature section | 1080px | 1200px+ | High if under 800px |
| Visual break (full-width) | 1200px | 1920px+ | High if under 1000px |
| Gallery grid | 960px | 1080px+ | Medium if under 800px |
| Services overview grid | 960px | 1080px+ | Medium if under 800px |

#### Step 2: Match Images to Content Context

**For Cabinet Refinishing specifically, prioritize images showing:**

| Service Label | What Image Should Show | Good Example |
|--------------|------------------------|--------------|
| Kitchen Cabinets | Kitchen with painted/refinished cabinets | White shaker cabinets, modern kitchen |
| Bathroom Vanities | Bathroom with wood or painted vanity | Vanity with drawers, mirror area |
| Built-In Shelving | Room with built-in shelves, desk area, floating shelves | Open living space with built-in desk/shelving |
| Bookcases | Room with painted bookcases or shelving units | Child's room with painted closet/furniture |
| Entertainment Centers | Living room with TV console, media cabinet | Modern living/dining with entertainment area |
| Hardware Updates | Close-up or room showing cabinet hardware | Painter at work or detailed cabinet shot |

#### Step 3: Find Images in Your Library

**Search strategy for finding contextually appropriate images:**

1. **Start with service-specific folders:**
   - `/images/services-optimized/cabinet-refinishing/`
   - `/images/services-optimized/interior-painting/` (often has cabinet shots)

2. **Check Home Page folders for high-res options:**
   - `/images/Home Page/Residential Services/` (2250px+ images)
   - `/images/Home Page/Recent Projects/` (2250px+ images)

3. **View each candidate image** before selecting - don't rely on filename alone

4. **Verify dimensions meet requirements** for the specific container

#### Step 4: Eliminate Duplicates

**Check for duplicates after all selections:**
```bash
grep -o 'src="[^"]*"' /path/to/page.astro | sort | uniq -c | sort -rn
```

Any count > 1 indicates a duplicate that needs replacement.

### Cabinet Refinishing Page: Before & After

| Section | Before | After | Improvement |
|---------|--------|-------|-------------|
| **Feature Section** | `CleanCut Image-4.webp` (680x733) - blurry, generic | `2.webp` (1080x1080) - modern white kitchen with cabinets | Sharp, contextually perfect |
| **Visual Break** | `CleanCut Image-3.webp` (1600x1066) - acceptable but generic | `6t4a6783.webp` (1920x1281) - open concept with kitchen cabinets | Higher res, shows cabinets |
| **Built-In Shelving** | Generic image | `542207858...webp` (960x1200) - open living with built-in shelving/desk | Shows actual built-in work |
| **Gallery Images** | 500-612px tiny images | All 960-2250px high-res images | No pixelation |

### Key Learnings

1. **Always verify dimensions first** - A beautiful image is useless if it's 414x414 pixels

2. **Context matters more than aesthetics** - A 1080px image of actual cabinet work beats a 2000px stock photo

3. **Interior painting images often work for cabinets** - Kitchen and living room shots frequently show cabinet work

4. **Check the actual image content** - Filenames like "Garage Repaint" might show interior slatwall that's perfect for "Built-In Shelving"

5. **Duplicates compound quickly** - When replacing images, track what's used where to avoid creating new duplicates

6. **User feedback is critical** - The user knows their work best; iterate based on their input about which images actually represent their services

### Image Selection Workflow

```
1. List all image slots on page
   ↓
2. For each slot, define what content should show
   ↓
3. Search image library for candidates
   ↓
4. Check dimensions (sips -g pixelWidth -g pixelHeight)
   ↓
5. View image to confirm content matches context
   ↓
6. Verify no duplicates with grep command
   ↓
7. Replace and rebuild to verify
```

---

*Last updated: December 2024*
*Reference implementations:*
- *Homepage: `src/pages/index.astro`*
- *Service Page: `src/pages/residential/interior-painting.astro`*
- *Cabinet Refinishing (image selection case study): `src/pages/residential/cabinet-refinishing.astro`*
