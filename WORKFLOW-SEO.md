# CleanCut SEO Implementation Workflow

**Created:** 2026-01-22
**Purpose:** Step-by-step execution plan with zero deviation
**Rule:** Complete each phase fully before moving to next. Stop at USER CHECKPOINTS.

---

## PHASE A: Technical Foundation
**Status:** ✅ COMPLETE (2026-01-22)
**Requires User:** NO
**Estimated Time:** 20 minutes

### A1. Create robots.txt
- [x] Create `/public/robots.txt`
- [ ] Content (standard, no business data):
```
User-agent: *
Allow: /

Sitemap: https://cleancutservice.com/sitemap-index.xml
```
- [x] Verify file exists after creation

### A2. Install Astro Sitemap Integration
- [x] Run: `npm install @astrojs/sitemap`
- [x] Update `astro.config.mjs`:
  - Add sitemap import
  - Add site URL config
  - Add sitemap to integrations
- [x] Verify no build errors: `npm run build`

### A3. Verify Sitemap Generates
- [x] Check `dist/sitemap-index.xml` exists after build
- [x] Verify all 13 pages listed

**PHASE A COMPLETE WHEN:** robots.txt exists, sitemap generates on build

---

## PHASE B: Schema Component Infrastructure
**Status:** ✅ COMPLETE (2026-01-22)
**Requires User:** NO
**Estimated Time:** 45 minutes

### B1. Create LocalBusinessSchema.astro Component
- [x] Create `/src/components/schema/LocalBusinessSchema.astro`
- [x] Component reads ALL data from props (passed from SCHEMA-DATA.yaml)
- [x] NO hardcoded business values in component
- [x] Outputs valid JSON-LD script tag

### B2. Create FAQSchema.astro Component
- [x] Create `/src/components/schema/FAQSchema.astro`
- [x] Accepts FAQ array as prop
- [x] Generates FAQPage schema from prop data
- [x] NO hardcoded questions/answers

### B3. Create BreadcrumbSchema.astro Component
- [x] Create `/src/components/schema/BreadcrumbSchema.astro`
- [x] Accepts breadcrumb path as prop
- [x] Generates BreadcrumbList schema

### B4. Create Schema Data Loader
- [x] Create `/src/data/schema.ts` (TypeScript for type safety)
- [x] Loads and parses SCHEMA-DATA.yaml
- [x] Exports typed business data object

### B5. Wire Schema into Layout
- [x] Import LocalBusinessSchema into Layout.astro
- [x] Pass data from schema loader to component
- [x] Schema appears on ALL pages via layout
- [x] Build verified - schema in HTML output

**PHASE B COMPLETE WHEN:** Components exist, build succeeds, schema appears in HTML output

---

## 🛑 USER CHECKPOINT 1: Business Data Verification
**Status:** NOT STARTED
**Requires User:** YES - STOP AND WAIT

### Present to User for Verification:

#### Current SCHEMA-DATA.yaml Values:
```yaml
# Decatur Location
address: "1004 E Eldorado St, Decatur, IL 62521"
phone: "(217) 330-7310"
lat: ??? (NEED USER TO VERIFY)
lng: ??? (NEED USER TO VERIFY)

# Springfield Location  
address: "631 E Princeton Ave, Unit D, Springfield, IL" (ZIP?)
phone: "(217) 672-5654" (VERIFY)
lat: ??? (NEED USER TO PROVIDE)
lng: ??? (NEED USER TO PROVIDE)

# Business Info
year_established: ??? (NEED USER TO PROVIDE)
hours: (VERIFY CURRENT)
```

#### User Must Confirm:
1. [ ] Decatur coordinates point to correct building
2. [ ] Springfield full address with ZIP
3. [ ] Springfield coordinates point to correct building
4. [ ] Both phone numbers are current
5. [ ] Business hours are accurate
6. [ ] Year business was established

**DO NOT PROCEED UNTIL USER PROVIDES/CONFIRMS ALL VALUES**

---

## PHASE C: Apply Verified Business Data
**Status:** NOT STARTED
**Requires User:** NO (uses verified data from Checkpoint 1)
**Estimated Time:** 15 minutes

### C1. Update SCHEMA-DATA.yaml
- [ ] Add Springfield location block with verified data
- [ ] Add geo coordinates for both locations
- [ ] Add year_established
- [ ] Verify hours are correct
- [ ] Set client_approved: true

### C2. Verify Schema Output
- [ ] Build project
- [ ] Check HTML source for valid JSON-LD
- [ ] Validate with schema markup validator (manually - provide URL to user)

**PHASE C COMPLETE WHEN:** SCHEMA-DATA.yaml has all verified data, schema renders correctly

---

## PHASE D: FAQ Schema Integration
**Status:** NOT STARTED
**Requires User:** NO
**Estimated Time:** 30 minutes

### D1. Extract FAQ Data Structure
- [ ] Read each page with FAQs
- [ ] Create FAQ data structure that component can consume
- [ ] Options: inline data or centralized FAQ file

### D2. Add FAQSchema to Pages with FAQs
Pages to update:
- [ ] index.astro (homepage)
- [ ] interior-painting.astro
- [ ] exterior-painting.astro
- [ ] cabinet-refinishing.astro
- [ ] deck-staining.astro
- [ ] power-washing.astro
- [ ] handyman.astro
- [ ] commercial.astro

### D3. Verify FAQ Schema
- [ ] Build and check HTML source
- [ ] Verify FAQPage schema appears on each page

**PHASE D COMPLETE WHEN:** All FAQ pages have valid FAQPage schema in HTML

---

## 🛑 USER CHECKPOINT 2: Image Alt Text Review
**Status:** NOT STARTED
**Requires User:** YES - STOP AND WAIT

### Present to User:

#### Missing Alt Text Audit
I will generate a complete list:
```
| File | Image | Current Alt | Suggested Alt |
|------|-------|-------------|---------------|
| interior-painting.astro | hero.jpg | (missing) | "Interior painting..." |
| ... | ... | ... | ... |
```

#### User Must:
1. [ ] Review each suggested alt text
2. [ ] Correct any inaccurate descriptions
3. [ ] Approve final list

**DO NOT APPLY ALT TEXT UNTIL USER APPROVES LIST**

---

## PHASE E: Apply Verified Alt Text
**Status:** NOT STARTED
**Requires User:** NO (uses approved list from Checkpoint 2)
**Estimated Time:** 1-2 hours (119 images)

### E1. Apply Alt Text to Service Pages
- [ ] interior-painting.astro
- [ ] exterior-painting.astro
- [ ] cabinet-refinishing.astro
- [ ] deck-staining.astro
- [ ] power-washing.astro
- [ ] handyman.astro
- [ ] commercial.astro

### E2. Apply Alt Text to Other Pages
- [ ] index.astro
- [ ] about.astro
- [ ] contact.astro
- [ ] who-we-are.astro
- [ ] our-work.astro
- [ ] our-process.astro

### E3. Apply Alt Text to Components
- [ ] Hero components
- [ ] Gallery components
- [ ] Other shared components

### E4. Verify All Images Have Alt
- [ ] Run audit command
- [ ] Confirm 0 missing alt attributes

**PHASE E COMPLETE WHEN:** All 119 images have descriptive alt text

---

## PHASE F: Final Verification & Deploy
**Status:** NOT STARTED
**Requires User:** PARTIAL (final approval)
**Estimated Time:** 30 minutes

### F1. Build Verification
- [ ] `npm run build` - no errors
- [ ] All pages generate

### F2. Schema Validation
- [ ] Provide Rich Results Test URL to user
- [ ] User confirms no schema errors

### F3. Deploy to Staging
- [ ] `npx vercel --prod`
- [ ] Verify live site works

### F4. User Final Sign-off
- [ ] User confirms staging looks correct
- [ ] Ready for client preview

**WORKFLOW COMPLETE**

---

## Progress Tracker

| Phase | Status | Completed |
|-------|--------|-----------|
| A: Technical Foundation | NOT STARTED | |
| B: Schema Infrastructure | NOT STARTED | |
| CHECKPOINT 1: Business Data | NOT STARTED | |
| C: Apply Business Data | NOT STARTED | |
| D: FAQ Schema | NOT STARTED | |
| CHECKPOINT 2: Alt Text Review | NOT STARTED | |
| E: Apply Alt Text | NOT STARTED | |
| F: Final Verification | NOT STARTED | |

---

## Rules I Will Follow

1. **Complete phases in order** - No skipping ahead
2. **Stop at checkpoints** - Present data, wait for user response
3. **No hardcoded business data** - All business info comes from SCHEMA-DATA.yaml
4. **Verify after each step** - Build/check before marking complete
5. **Update this file** - Mark items complete as I go
6. **If uncertain, ask** - Don't guess on business data
