# Clean Cut - Component Patterns

> **Copy-paste ready component patterns from the homepage.**
> Reference: `src/pages/index.astro` and `src/components/`

---

## Table of Contents

1. [Page Structure](#page-structure)
2. [Section Templates](#section-templates)
3. [Card Components](#card-components)
4. [Carousel/Slider](#carouselslider)
5. [Form Elements](#form-elements)
6. [Navigation Elements](#navigation-elements)
7. [Media Components](#media-components)
8. [Badge & Tag Components](#badge--tag-components)
9. [CTA Sections](#cta-sections)

---

## Page Structure

### Standard Page Layout

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import FloatingCallButton from '../components/FloatingCallButton.astro';
---

<Layout title="Page Title | Clean Cut Painting & Handyman">
  <Header />

  <main>
    <!-- Hero Section -->
    <!-- Content Sections -->
  </main>

  <Footer />
  <FloatingCallButton />
</Layout>
```

### Service Page Layout

Use `ServicePageLayout.astro` for residential service pages:
- Interior Painting
- Exterior Painting
- Cabinet Refinishing
- Deck Staining
- Power Washing
- Handyman

---

## Section Templates

### Standard Content Section

```html
<section class="py-16 bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-[#144787] mb-4">
        Section Title
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Section description goes here.
      </p>
    </div>

    <!-- Section content -->
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

### Pattern Background Section

```html
<section class="py-16 relative overflow-hidden" style="background-image: url('/patterns/pattern-04.webp'); background-size: cover; background-position: center;">
  <div class="absolute inset-0 bg-[#144787]/90"></div>
  <div class="container-custom relative z-10">
    <!-- White text content -->
    <h2 class="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
      Section Title
    </h2>
    <p class="text-lg text-white/90">Description</p>
  </div>
</section>
```

### Two-Column Section (Image + Content)

```html
<section class="py-16 bg-white">
  <div class="container-custom">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content Column -->
      <div class="space-y-6">
        <h2 class="text-3xl lg:text-4xl font-display font-bold text-[#144787] mb-4">
          Title
        </h2>
        <p class="text-lg text-gray-700">Description</p>
        <a href="#" class="inline-block px-6 py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors shadow-lg">
          CTA Button
        </a>
      </div>

      <!-- Image Column -->
      <div class="relative">
        <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
          <img src="/images/..." alt="..." class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Card Components

### Service Card (Link)

```html
<a class="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 block h-full" href="/service-url">
  <div class="aspect-video relative overflow-hidden">
    <img src="/images/..." alt="Service Name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
  </div>
  <div class="p-5">
    <h3 class="text-lg font-display font-semibold text-[#144787] mb-2 text-center">
      Service Name
    </h3>
    <p class="text-dark text-sm text-center">Service description</p>
  </div>
</a>
```

### Feature Card with Icon

```html
<div class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm">
  <div class="group p-6 rounded-lg border border-gray-200 hover:border-sky-400 hover:shadow-lg transition-all bg-white h-full">
    <div class="text-center">
      <div class="w-16 h-16 bg-[#144787]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-[#144787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <!-- SVG path -->
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-[#144787] mb-3">Feature Title</h3>
      <p class="text-gray-600 text-sm">Feature description text here.</p>
    </div>
  </div>
</div>
```

### Gallery Card with Overlay

```html
<figure class="group relative overflow-hidden rounded-lg shadow-md">
  <img src="/images/..." alt="Project title" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
  <figcaption class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
    <p class="text-white font-semibold">Project Title</p>
  </figcaption>
</figure>
```

### Review Card

```html
<div class="review-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
  <div class="p-6 flex-1 flex flex-col">
    <!-- Header with Avatar -->
    <div class="flex items-start gap-4 mb-4">
      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC05] flex items-center justify-center">
        <span class="text-white font-semibold text-lg">JD</span>
      </div>
      <div class="flex-1">
        <h4 class="font-semibold text-gray-900">John Doe</h4>
        <div class="flex gap-0.5 mt-1">
          <!-- 5 star SVGs -->
        </div>
      </div>
    </div>

    <!-- Review Text -->
    <p class="text-gray-700 text-sm leading-relaxed flex-1">
      Review text here...
    </p>

    <!-- Service Tags -->
    <div class="flex flex-wrap gap-2 mt-4">
      <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
        Interior painting
      </span>
    </div>
  </div>
</div>
```

---

## Carousel/Slider

### Carousel Container Structure

```html
<div class="relative">
  <!-- Navigation Buttons -->
  <button
    id="[component]-carousel-prev"
    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    aria-label="Previous"
  >
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>

  <button
    id="[component]-carousel-next"
    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    aria-label="Next"
  >
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>

  <!-- Track -->
  <div class="overflow-hidden mx-8">
    <div id="[component]-carousel-track" class="flex transition-transform duration-500 ease-out gap-6">
      <!-- Cards here -->
    </div>
  </div>

  <!-- Dots -->
  <div class="flex justify-center gap-2 mt-8">
    <button class="[component]-carousel-dot w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400" data-index="0" aria-label="Go to slide 1"/>
    <!-- More dots -->
  </div>
</div>
```

**Important:** Always use unique ID prefixes per component (e.g., `reviews-carousel-prev`, `about-carousel-prev`) to avoid JavaScript conflicts.

---

## Form Elements

### Input Field

```html
<input
  type="text"
  placeholder="Full Name *"
  required
  class="w-full h-11 px-4 py-2.5 bg-white/80 border border-gray-200 rounded-lg focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10 focus:outline-none transition-all text-sm"
>
```

### Select Field

```html
<select class="w-full h-11 px-4 py-2.5 bg-white/80 border border-gray-200 rounded-lg focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10 focus:outline-none transition-all text-sm">
  <option value="">Select Service (Optional)</option>
  <option value="interior-painting">Interior Painting</option>
  <option value="exterior-painting">Exterior Painting</option>
</select>
```

### Submit Button

```html
<button type="submit" class="w-full h-10 bg-sky-400 text-white font-medium rounded-lg hover:bg-sky-500 transition-all text-sm">
  Get My Free Estimate
</button>
```

### Form Container (Card Style)

```html
<div class="bg-white rounded-xl shadow-lg p-4 lg:p-5 border border-gray-100">
  <div class="text-center mb-4">
    <h2 class="text-2xl lg:text-3xl font-display font-bold text-[#144787]">
      Get Your Free Estimate
    </h2>
    <p class="text-sm text-gray-600 mt-2">Complimentary - 24hr response</p>
  </div>
  <form class="space-y-3">
    <!-- Form fields -->
  </form>
</div>
```

---

## Navigation Elements

### Filter Buttons

```html
<div class="flex justify-center gap-2 mb-8">
  <button
    class="filter-btn px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-[#144787] text-white"
    data-filter="all"
  >
    All
  </button>
  <button
    class="filter-btn px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200"
    data-filter="residential"
  >
    Residential
  </button>
</div>
```

### Collapsible Toggle

```html
<button
  class="region-toggle flex items-center gap-2 text-[#144787] font-medium hover:text-[#144787]/80 transition-colors"
  data-region="decatur"
>
  <span class="toggle-text">Show All</span>
  <svg class="w-5 h-5 transition-transform toggle-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
  </svg>
</button>
```

---

## Media Components

### Video Player with Thumbnail Overlay

```html
<div class="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
  <!-- Thumbnail Overlay -->
  <div id="video-thumbnail-overlay" class="absolute inset-0 z-10 cursor-pointer">
    <img src="/videos/thumbnail.webp" alt="Video thumbnail" class="w-full h-full object-cover"/>
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    <!-- Play Button -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-105 transition-all">
        <svg class="w-6 h-6 text-[#144787] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- Video -->
  <video id="main-video" class="w-full aspect-video object-contain" controls playsinline>
    <source src="/videos/video.mp4" type="video/mp4">
  </video>
</div>
```

### Image with Hover Zoom

```html
<div class="aspect-[4/3] overflow-hidden rounded-xl">
  <img
    src="/images/..."
    alt="..."
    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    loading="lazy"
  />
</div>
```

---

## Badge & Tag Components

### Status Badge

```html
<span class="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 text-sm font-semibold rounded-full">
  Family-Owned Since 2018
</span>
```

### Limited Time Badge

```html
<div class="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full shadow-lg">
  <span class="font-bold text-sm tracking-wide">LIMITED TIME OFFER</span>
</div>
```

### Service Tag

```html
<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
  Interior painting
</span>
```

### Verified Badge

```html
<div class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
  <svg class="w-5 h-5"><!-- Google G icon --></svg>
  <span class="text-sm text-gray-600 font-medium">Verified Google Reviews</span>
</div>
```

### BBB Accredited Badge

```html
<div class="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full">
  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>
  <span class="text-green-800 font-semibold">BBB Accredited - A+ Rating</span>
</div>
```

---

## CTA Sections

### Standard CTA Section

```html
<section class="py-16 bg-[#144787]">
  <div class="container-custom text-center">
    <h2 class="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
      Ready to Start Your Project?
    </h2>
    <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
      Contact us today for a free estimate!
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="#contact" class="px-8 py-4 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors shadow-lg text-lg">
        Get Free Estimate
      </a>
      <a href="tel:+12173307310" class="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#144787] transition-all shadow-lg text-lg">
        Call (217) 330-7310
      </a>
    </div>
  </div>
</section>
```

### Careers CTA

```html
<section class="py-16 relative bg-[#144787]">
  <div class="absolute inset-0 opacity-20" style="background-image: url('/patterns/pattern-04.webp'); background-size: cover;"></div>
  <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
    <h2 class="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
      Join the Clean Cut Family
    </h2>
    <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
      Description text here.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="mailto:..." class="px-6 py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition-all">
        Apply Now
      </a>
      <a href="tel:..." class="px-6 py-3 bg-white text-[#144787] font-semibold rounded-lg hover:bg-gray-100 transition-all">
        Call Us
      </a>
    </div>
  </div>
</section>
```

---

*Last updated: December 2024*
*Reference: Homepage components in `src/components/`*
