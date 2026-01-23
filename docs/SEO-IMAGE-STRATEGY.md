# CleanCut Pros - Image SEO & Service Area Strategy
## Comprehensive Implementation Plan

**Created:** January 22, 2026  
**Status:** Ready for Execution  
**Author:** Voxe Marketing (Claude Agent)

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Research Foundation](#2-research-foundation)
3. [Market Analysis](#3-market-analysis)
4. [Keyword Strategy](#4-keyword-strategy)
5. [Geographic Distribution Strategy](#5-geographic-distribution-strategy)
6. [Image Alt Text Implementation](#6-image-alt-text-implementation)
7. [EXIF/GPS Metadata Implementation](#7-exifgps-metadata-implementation)
8. [Service Schema Enhancement](#8-service-schema-enhancement)
9. [Execution Plan](#9-execution-plan)
10. [Verification Checklist](#10-verification-checklist)

---

## 1. Executive Summary

### Objective
Optimize 119 images across the CleanCut website for:
- **Local SEO** - Rank for "[service] + [city]" searches
- **Image Search** - Appear in Google Image results
- **AI/Answer Engines** - Provide structured data for LLMs
- **Geographic Signals** - Distribute location keywords strategically

### Deliverables
1. Alt text on all 119 images (keyword-optimized, location-distributed)
2. EXIF metadata on all image files (GPS coordinates, copyright, keywords)
3. Service schema with `areaServed` covering all service areas
4. Documentation for future maintenance

### Key Metrics
- 119 images to optimize
- 40+ service area cities to distribute
- 7 service categories to cover
- 2 physical locations (Decatur HQ, Springfield satellite)

---

## 2. Research Foundation

### Sources Consulted
1. **Basecoat Marketing** - "SEO for Painters: The Definitive Guide (2025)"
   - "painter near me" = 74,000 monthly searches nationally
   - Image optimization critical for local pack rankings

2. **Local Visibility System** - "The One Truth about Local SEO"
   - "As density of competitors increases, the amount of map you're visible in decreases"
   - Physical address = massive advantage within 10-15 mile radius

3. **Simply Be Found** - "7 Critical Local SEO Strategies (2025)"
   - Google's 3 pillars: Relevance, Distance, Prominence
   - Distance requires physical solution (address)

4. **Walk to Success Marketing** - "Small Town, Big Impact: Hyperlocal SEO"
   - Small towns = less competition, easier to dominate
   - Word-of-mouth amplification effect

5. **Our Own Research** - `~/.claude/research/patterns/`
   - `complete-seo-optimization-checklist-2025-2026.md`
   - `cleancut-seo-keywords-painting-handyman.md`

### Key Research Findings

#### Image Alt Text Best Practices (2025-2026)
- **Length:** 80-140 characters (under 125 recommended)
- **Format:** Descriptive, keyword-rich, location when relevant
- **Avoid:** "Image of...", "Picture of...", keyword stuffing
- **Include:** Action/scene description, service type, location naturally

#### EXIF/IPTC Metadata Fields
| Field | Purpose | Example Value |
|-------|---------|---------------|
| GPS Latitude | Geographic signal | 39.846140 |
| GPS Longitude | Geographic signal | -88.943339 |
| Title | Keyword-rich description | "Interior painting Decatur IL" |
| Description | Service + location | "Professional interior painting by Clean Cut" |
| Keywords | Comma-separated terms | "interior painting, Decatur, Illinois, painter" |
| Copyright | Business branding | "© 2026 Clean Cut Painting & Handyman" |
| Author | Business name | "Clean Cut Painting & Handyman" |

#### Local SEO Competition Analysis
- **Small city (Decatur, 69k):** Lower competition, easier to rank #1
- **Medium city (Springfield, 116k):** More searches, more competition
- **University town (Champaign, 92k):** No physical address = uphill battle
- **Sweet spot:** 10-15 mile radius from verified business address

---

## 3. Market Analysis

### Service Area Demographics

| City | Population | County | Distance from Decatur | Physical Presence |
|------|-----------|--------|----------------------|-------------------|
| **Decatur** | 69,000 | Macon | 0 mi (HQ) | ✅ Primary address |
| **Springfield** | 116,500 | Sangamon | 40 mi | ✅ Satellite office |
| **Champaign** | 92,000 | Champaign | 50 mi | ❌ Service area only |
| **Mt. Zion** | 5,762 | Macon | 6 mi | ⚡ Decatur suburb |
| **Forsyth** | 3,465 | Macon | 5 mi | ⚡ Decatur suburb |

### Competition Density Assessment

| Market | Est. Competitors | SEO Difficulty | Opportunity |
|--------|-----------------|----------------|-------------|
| Decatur | 5-10 painters | Low | **HIGH** - Easy to dominate |
| Springfield | 15-25 painters | Medium | **MEDIUM** - Have address advantage |
| Champaign | 20-30 painters | Medium-High | **LOW** - No address, university competition |
| Central IL (regional) | N/A | Low | **HIGH** - Catch-all positioning |

### Search Volume Estimates (Monthly)

| Keyword | Est. Volume | Competition |
|---------|------------|-------------|
| "painter Decatur IL" | 50-100 | Low |
| "painter Springfield IL" | 100-200 | Medium |
| "painter Champaign IL" | 100-200 | Medium-High |
| "painter near me" (national) | 74,000 | High (but local intent) |
| "interior painting [city]" | 20-50 per city | Low-Medium |
| "handyman [city]" | 50-150 per city | Medium |

---

## 4. Keyword Strategy

### Primary Keywords (High Intent)
These are the money keywords - people ready to hire.

**By Service:**
| Service | Primary Keyword | Secondary Keywords |
|---------|----------------|-------------------|
| Interior Painting | interior painter Decatur IL | interior painting Springfield, house painter Central Illinois |
| Exterior Painting | exterior painter Decatur IL | house painting Springfield IL, exterior painting contractor |
| Cabinet Refinishing | cabinet painting Decatur IL | kitchen cabinet refinishing, cabinet painter Central Illinois |
| Deck Staining | deck staining Decatur IL | deck refinishing Springfield, wood deck restoration |
| Power Washing | power washing Decatur IL | pressure washing Springfield, house washing Central Illinois |
| Handyman | handyman Decatur IL | handyman services Springfield, home repair Central Illinois |
| Commercial | commercial painter Decatur | commercial painting Springfield IL, office painting |

### Long-Tail Keywords (Specific Services)
Lower volume but higher conversion rate.

- "kitchen cabinet painting Decatur IL"
- "bathroom tile repair handyman Springfield"
- "fence staining Central Illinois"
- "drywall repair Macon County"
- "deck cleaning and staining Forsyth IL"

### Location Modifiers
**Primary (use most):**
- Decatur IL / Decatur Illinois
- Springfield IL / Springfield Illinois
- Central Illinois

**Secondary (use occasionally):**
- Macon County
- Sangamon County
- Champaign IL (sparingly - no address)

**Tertiary (use in rotation):**
- Mt. Zion IL
- Forsyth IL
- Chatham IL
- Rochester IL

---

## 5. Geographic Distribution Strategy

### The Problem
119 images across 8+ pages. 40+ service area cities. How do we distribute location mentions without:
- Keyword stuffing (penalized by Google)
- Ignoring secondary markets (missed opportunity)
- Over-representing markets where we can't rank (wasted effort)

### The Solution: Weighted Distribution

Based on:
1. Physical address presence (biggest factor)
2. Population/search volume (opportunity size)
3. Competition density (ability to rank)
4. Distance from HQ (service radius)

### Final Distribution Weights

| Location | % of Mentions | Reasoning |
|----------|--------------|-----------|
| **Decatur / Decatur IL** | 35% | HQ, lowest competition, core identity |
| **Springfield / Springfield IL** | 25% | 2nd location, biggest market, address advantage |
| **Central Illinois** | 20% | Regional catch-all, captures all searches |
| **Macon County** | 8% | County-level searches, Decatur reinforcement |
| **Champaign** | 5% | Service area but no address |
| **Secondary cities** | 7% | Mt. Zion, Forsyth, Chatham, etc. |

### Per-Page Distribution (119 images)

| Page | Est. Images | Decatur | Springfield | Central IL | Other |
|------|-------------|---------|-------------|------------|-------|
| about.astro | 4 | 2 | 1 | 1 | 0 |
| our-process.astro | 3 | 1 | 1 | 1 | 0 |
| contact.astro | 1 | 1 | 0 | 0 | 0 |
| our-work.astro | ~20 | 7 | 5 | 4 | 4 |
| who-we-are.astro | ~4 | 1 | 1 | 1 | 1 |
| interior-painting.astro | ~15 | 5 | 4 | 3 | 3 |
| exterior-painting.astro | ~15 | 5 | 4 | 3 | 3 |
| cabinet-refinishing.astro | ~12 | 4 | 3 | 3 | 2 |
| deck-staining.astro | ~12 | 4 | 3 | 3 | 2 |
| power-washing.astro | ~12 | 4 | 3 | 3 | 2 |
| handyman.astro | ~12 | 4 | 3 | 3 | 2 |
| commercial.astro | ~9 | 3 | 3 | 2 | 1 |

---

## 6. Image Alt Text Implementation

### Alt Text Formula by Service

**Interior Painting:**
```
[Action/Result] + [Room/Surface] + [Quality descriptor] + [Location]
```
Examples:
- "Professional painter applying neutral wall color in Decatur Illinois living room"
- "Freshly painted bedroom with crisp white trim in Springfield IL home"
- "Interior wall painting transformation in Central Illinois residence"

**Exterior Painting:**
```
[Action/Result] + [Surface type] + [Home descriptor] + [Location]
```
Examples:
- "Exterior house painting in progress on Decatur IL two-story home"
- "Vinyl siding painting completed on Springfield Illinois residence"
- "Professional exterior painting by Central Illinois contractors"

**Cabinet Refinishing:**
```
[Color/Finish] + [Cabinet type] + [Room] + [Location]
```
Examples:
- "White painted kitchen cabinets in Decatur Illinois home renovation"
- "Oak cabinet transformation to modern painted finish in Springfield"
- "Cabinet refinishing project in Central Illinois kitchen"

**Deck Staining:**
```
[Action/Result] + [Wood type] + [Deck descriptor] + [Location]
```
Examples:
- "Cedar deck restored with semi-transparent stain in Decatur IL"
- "Freshly stained backyard deck in Springfield Illinois"
- "Deck restoration project in Macon County Illinois"

**Power Washing:**
```
[Action] + [Surface] + [Result descriptor] + [Location]
```
Examples:
- "Power washing removing years of dirt from Decatur home siding"
- "Pressure washing concrete driveway in Springfield IL"
- "House washing preparation for painting in Central Illinois"

**Handyman:**
```
[Specific task] + [Location/Room] + [Quality descriptor] + [City]
```
Examples:
- "Drywall repair completed in Decatur Illinois home"
- "Custom tile installation by Springfield handyman services"
- "Bathroom renovation handyman work in Central Illinois"

**Commercial:**
```
[Building type] + [Service] + [Professional descriptor] + [Location]
```
Examples:
- "Commercial office painting project in Decatur IL business park"
- "Warehouse interior painting by Springfield commercial painters"
- "Retail store painting contractor in Central Illinois"

### Character Limits
- **Target:** 80-120 characters
- **Maximum:** 125 characters
- **Minimum:** 40 characters (too short = missed opportunity)

---

## 7. EXIF/GPS Metadata Implementation

### Tool Required
```bash
# Install exiftool if not present
brew install exiftool
```

### Metadata Template (All Images)

```bash
exiftool \
  -GPSLatitude=39.846140 \
  -GPSLatitudeRef=N \
  -GPSLongitude=88.943339 \
  -GPSLongitudeRef=W \
  -Copyright="© 2026 Clean Cut Painting & Handyman" \
  -Author="Clean Cut Painting & Handyman" \
  -Artist="Clean Cut Painting & Handyman" \
  -XMP-dc:Creator="Clean Cut Painting & Handyman" \
  -IPTC:CopyrightNotice="© 2026 Clean Cut Painting & Handyman" \
  -overwrite_original \
  [image_file]
```

### Service-Specific Keywords

| Service | EXIF Keywords |
|---------|---------------|
| Interior Painting | interior painting, house painter, wall painting, Decatur, Illinois, Central Illinois |
| Exterior Painting | exterior painting, house painting, siding painting, Decatur, Illinois, Central Illinois |
| Cabinet Refinishing | cabinet painting, cabinet refinishing, kitchen cabinets, Decatur, Illinois |
| Deck Staining | deck staining, deck refinishing, wood restoration, Decatur, Illinois |
| Power Washing | power washing, pressure washing, house washing, Decatur, Illinois |
| Handyman | handyman, home repair, drywall repair, Decatur, Illinois |
| Commercial | commercial painting, office painting, business painting, Decatur, Illinois |

### GPS Coordinates

| Location | Latitude | Longitude | Use For |
|----------|----------|-----------|---------|
| Decatur HQ | 39.846140 | -88.943339 | All images (primary) |
| Springfield Office | 39.774706 | -89.648175 | Optional for Springfield-specific |

**Note:** All images get Decatur coords. This is standard practice - photos tagged with business HQ location.

---

## 8. Service Schema Enhancement

### Current State
- LocalBusinessSchema ✅ (with geo coordinates)
- FAQSchema ✅ (on all pages with FAQs)
- BreadcrumbSchema ✅

### Enhancement: Service Schema with areaServed

Create new component: `src/components/schema/ServiceSchema.astro`

This schema will include:
- Service name and description
- Provider (Clean Cut)
- areaServed with all 40+ cities

### Service Areas for Schema
Primary: Decatur, Springfield
Macon County: Mt. Zion, Forsyth, Maroa, Argenta, Niantic, Blue Mound, Harristown
Sangamon County: Chatham, Auburn, Riverton, Rochester, Sherman, Pawnee
Champaign County: Champaign, Urbana, Rantoul, Mahomet, Savoy

---

## 9. Execution Plan

### Phase E: Alt Text Implementation

**Step 1:** Audit all 119 images - get exact count per page
**Step 2:** Create alt text for each image following formulas
**Step 3:** Apply to each page file
**Step 4:** Verify build passes

### Phase E2: EXIF Metadata Implementation

**Step 1:** Verify exiftool installed
**Step 2:** Apply GPS + copyright to all images
**Step 3:** Apply service-specific keywords by folder
**Step 4:** Verify metadata with sample check

### Phase F: Verification & Deploy

1. Run build: `npm run build`
2. Check schema in Rich Results Test
3. Deploy: `npx vercel --prod`
4. Submit sitemap to Google Search Console

---

## 10. Verification Checklist

### Alt Text
- [ ] All 119 images have alt text
- [ ] No alt text exceeds 125 characters
- [ ] Location distribution matches plan
- [ ] No duplicate alt text

### EXIF
- [ ] All images have GPS coordinates
- [ ] All images have copyright
- [ ] Keywords applied by service

### Schema
- [ ] LocalBusiness valid
- [ ] FAQPage valid
- [ ] Service schema added

### Build
- [ ] Build passes
- [ ] No broken images
- [ ] Site loads correctly

---

## Appendix: Full Service Area List

### Macon County (Primary)
Decatur, Mt. Zion, Forsyth, Maroa, Argenta, Niantic, Blue Mound, Harristown, Long Creek, Macon, Oakley, Oreana, Warrensburg, Elwin, Boody

### Sangamon County (Secondary - Springfield)
Springfield, Chatham, Auburn, Riverton, Rochester, Sherman, Pawnee, Southern View, Leland Grove, Grandview, Jerome, Williamsville, Pleasant Plains, Cantrall, Divernon

### Champaign County (Tertiary)
Champaign, Urbana, Rantoul, Mahomet, Savoy, Monticello, St. Joseph, Tolono, Philo, Sidney, Homer, Farmer City

### Nearby Regional
Taylorville, Lincoln, Mattoon, Charleston, Bloomington, Normal, Effingham

---

**Document History**
- 2026-01-22: Initial creation
- Ready for execution pending user approval
