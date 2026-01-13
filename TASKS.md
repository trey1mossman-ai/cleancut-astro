# CleanCut Website Tasks - Detailed Implementation Guide

**Last Updated:** 2026-01-13
**Source:** Colleen's email (Jan 12) + Google Doc
**Status:** Ready for implementation

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

## Task 1: Horizontal Process Component

**Status:** Not started
**Priority:** High
**Files to modify:** All service pages in `/src/pages/residential/` + `/src/pages/commercial.astro`

### What to do:
Convert the current vertical card-based process section to a horizontal scrolling numbered step layout.

### Current state:
- Process uses 4 white cards in a grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- Each card has numbered circle, title, description
- Located in navy pattern background section

### Target state (per Colleen's screenshot):
- Horizontal line of numbered circles (1, 2, 3, 4)
- Steps connected visually in a row
- Scrollable horizontally on mobile (overflow-x-auto)
- Horizontal on desktop

### Copy to keep (DO NOT CHANGE - per Colby):
Pull existing process wording from each service page. Example from interior-painting:
1. **Protect** - Protect furniture, floors, and fixtures
2. **Prep** - Prep surfaces with sanding, priming, and repairs
3. **Apply** - Apply expert finish coats for lasting results
4. **Inspect** - Inspect and finalize with your approval

### Implementation approach:
1. Create reusable component: `/src/components/HorizontalProcess.astro`
2. Props: `steps` array with `{number, title, description}`
3. Use `flex` with `overflow-x-auto` and `snap-x` for mobile scroll
4. Numbered circles connected by line/border

---

## Task 2: Reduce Hero Height

**Status:** Not started
**Priority:** High
**Files to modify:** All service pages

### What to do:
Make hero sections smaller (less dominant) on service pages.

### Current state:
- `min-h-[500px]` on interior-painting
- Other pages may vary

### Target state:
- Reduce to approximately `min-h-[400px]` or `h-[50vh]` max
- Keep centered text layout
- Maintain gradient overlay and image

### Files to check/update:
- `/src/pages/residential/interior-painting.astro`
- `/src/pages/residential/exterior-painting.astro`
- `/src/pages/residential/cabinet-refinishing.astro`
- `/src/pages/residential/power-washing.astro` (or similar name)
- `/src/pages/residential/drywall-services.astro` (or similar name)
- `/src/pages/residential/handyman-services.astro` (or similar name)
- `/src/pages/commercial.astro`

---

## Task 3: Alternating Section Backgrounds

**Status:** Not started
**Priority:** Medium
**Files to modify:** All service pages

### What to do:
Ensure sections alternate between `bg-white` and `bg-gray-50` for visual separation.

### Pattern to follow:
```
Hero (has image/overlay - no change)
Section 1: bg-white
Section 2: bg-gray-50
Section 3: bg-white
Section 4: bg-gray-50
Process: navy pattern (no change)
Gallery/CTA: bg-gray-50
Final CTA: navy pattern (no change)
```

### Already using:
- `bg-gray-50` is already in the codebase
- Just ensure consistent alternation

---

## Task 4: Update Who We Are Page

**Status:** Not started
**Priority:** High
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

### Section copy (from Google Doc):
**Header:** "Meet the Clean Cut Team"
**Subhead:** "Craftsmanship, Collaboration, and Commitment"

**Intro paragraph:**
"At Clean Cut Painting & Handyman, our team is at the heart of everything we do. From our founders to our skilled applicators and installers, every member plays a key role in turning your vision into reality. Together, we bring decades of combined experience, a dedication to quality, and a personal touch to every project."

**Extended team note:**
"Beyond leadership, Clean Cut is proud to have 50+ in-house skilled applicators and installers who bring expertise, dedication, and passion to every project."

### Layout:
- Grid of team member cards with headshot, name, title
- No individual bios needed (not provided)

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

### Implementation:
- Add second location card matching Decatur styling
- Both should have same visual weight

---

## Task 6: Apply Google Doc Copy to Service Pages

**Status:** Not started
**Priority:** Medium
**Files:** All service pages

### IMPORTANT RULE:
- **DO NOT** change process section wording (keep existing)
- **DO** update: hero text, intro paragraphs, section descriptions
- Pull from Google Doc for each service

### Services to update:
1. Interior Painting - DONE (Dec 29)
2. Exterior Painting - needs update
3. Cabinet Refinishing - needs update
4. Power Washing - needs update
5. Drywall Services - needs update
6. Handyman Services - needs update
7. Commercial - needs update

### How to get copy:
```bash
node ~/.claude/scripts/drive.js --read "1QZzrmitx3MAII4fjjycoJSQFGh3_1ZW9JNAJLJIcIbg" | grep -A 50 "Exterior Painting"
```

Replace "Exterior Painting" with each service name.

### Fallback:
If Google Doc is missing content, pull from live site:
- https://cleancutservice.com/residential/exterior-painting
- (adjust URL for each service)

---

## Task 7: Build and Deploy

**Status:** Not started
**Priority:** Final step

### Commands:
```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro

# Build locally
npm run build

# Test locally (optional)
npm run preview

# Deploy to Hostinger
cd /tmp
rm -rf cleancut-deploy
mkdir cleancut-deploy && cd cleancut-deploy
git init
git remote add origin https://github.com/trey1mossman-ai/cleancut-astro.git
cp -r /Users/treymossman/Projects/cleancut-static/cleancut-astro/dist/* .
git add -A
git commit -m "Deploy: [description of changes]"
git push origin HEAD:deploy --force
```

### Verify at:
https://indigo-badger-869654.hostingersite.com/

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
    ├── power-washing.astro (check exact name)
    └── handyman-services.astro (check exact name)
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
4. Start with Task 1 (horizontal process) as it's used across all service pages
5. Build and test after each major change
