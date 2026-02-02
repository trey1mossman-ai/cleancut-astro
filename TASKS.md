# CleanCut Website Tasks - Detailed Implementation Guide

**Last Updated:** 2026-01-22
**Source:** Colleen's email (Jan 12) + Google Doc
**Status:** Most tasks complete

---

## Context Sources (READ BEFORE STARTING)

| Resource | Location | Purpose |
|----------|----------|---------|
| Colleen's annotated mockup | `~/Desktop/colleen-edits.png` | Visual reference for layout changes |
| Horizontal process example | `~/Desktop/colleen-screenshot.png` | Shows numbered horizontal steps (1,2,3,4) |
| Google Doc (full copy) | Doc ID: `1QZzrmitx3MAII4fjjycoJSQFGh3_1ZW9JNAJLJIcIbg` | All page copy, team info, contact details |
| Live site (existing copy) | https://cleancutservice.com | Pull any missing copy from here |
| Team headshots | `/public/images/team/` | Already downloaded (7 images) |
| Brand colors | `/docs/BRAND-COLORS.md` | Navy `#144787`, Sky `sky-400`, Gray `bg-gray-50` |

**Command to read Google Doc:**
```bash
node ~/.claude/scripts/drive.js --read "1QZzrmitx3MAII4fjjycoJSQFGh3_1ZW9JNAJLJIcIbg"
```

---

## Task 1: Horizontal Process Component ✅ COMPLETE

**Status:** Complete
**Files:** `/src/components/HorizontalProcess.astro`, `/src/components/ProcessScrollCards.astro`

Created reusable horizontal process component. Applied to all service pages.

---

## Task 2: Reduce Hero Height ✅ COMPLETE

**Status:** Complete
**Files:** All service pages

Reduced hero sections to `min-h-[350px]` on all service pages.

---

## Task 3: Alternating Section Backgrounds ✅ COMPLETE

**Status:** Complete

Pattern applied:
```
Hero (has image/overlay - no change)
Section 1: bg-white
Section 2: bg-gray-50 or bg-gray-200
Section 3: bg-white
...
```

---

## Task 4: Update Who We Are Page

**Status:** Not started
**Priority:** Medium
**File:** `/src/pages/who-we-are.astro`

### Team members (from Google Doc):

| Name | Title | Headshot file |
|------|-------|---------------|
| Dara Geiser | Owner & President | `dara-geiser.webp` |
| Colby Geiser | Operations Manager | `colby-geiser.webp` |
| Jack Geiser | Operations Manager | `jack-geiser.webp` |
| Tyler Tate | Chief Revenue Officer | `tyler-tate.webp` |
| Alyssa Stanford | Administrative Assistant | `alyssa-stanford.webp` |
| Sergio Sanchez | Project Manager | `sergio-sanchez.webp` |
| Heath Kavanaugh | Project Manager | `heath-kavanaugh.webp` |

**Note:** Colleen (Marketing Director) requested to be left off for now - no headshot yet.

---

## Task 5: Add Springfield Location to Contact Page

**Status:** Not started
**Priority:** High
**File:** `/src/pages/contact.astro`

### Location details (from Google Doc):

**Decatur Location:**
- Phone: (217) 330-7310
- Email: info@cleancutservice.com
- Address: 1004 East Eldorado Street, Decatur, IL, USA

**Springfield Location (NEW):**
- Phone: (217) 672-5654
- Email: info@cleancutservice.com
- Address: 631 E Princeton Ave, Unit D, Springfield, IL, USA

---

## Task 6: Apply Google Doc Copy to Service Pages ✅ COMPLETE

**Status:** Complete (2026-01-20)

All 7 service pages audited and corrected against Google Doc:
- [x] Interior Painting
- [x] Exterior Painting
- [x] Cabinet Refinishing
- [x] Deck Staining
- [x] Power Washing
- [x] Handyman
- [x] Commercial

---

## Task 7: Build and Deploy

**Status:** Ongoing

### Commands:
```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro

# Build locally
npm run build

# Test locally (optional)
npm run preview

# Deploy to Cloudflare Pages (automatic)
git add -A
git commit -m "Update: [description]"
git push origin main

# Manual deploy (if needed)
npx vercel --prod
```

### Verify at:
https://cleancut-astro.vercel.app

---

## File Reference

### Service pages location:
```
/src/pages/
├── commercial.astro
├── contact.astro
├── who-we-are.astro
├── our-work.astro
└── residential/
    ├── interior-painting.astro
    ├── exterior-painting.astro
    ├── cabinet-refinishing.astro
    ├── deck-staining.astro
    ├── power-washing.astro
    └── handyman.astro
```

### Team headshots location:
```
/public/images/team/
├── dara-geiser.webp
├── colby-geiser.webp
├── jack-geiser.webp
├── tyler-tate.webp
├── alyssa-stanford.webp
├── sergio-sanchez.webp
└── heath-kavanaugh.webp
```

---

## Quick Start for New Session

1. Read this file first
2. Check current task status
3. View Colleen's mockup: `open ~/Desktop/colleen-edits.png`
4. Build and test after each major change
5. Push to main to deploy (Cloudflare Pages auto-deploys)
