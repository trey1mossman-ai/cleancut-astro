# CleanCut Pros Website - Roadmap to Launch

**Created:** 2026-01-20
**Last Updated:** 2026-01-29
**Target Launch:** 2026-01-30
**Current Status:** 99% Complete

---

## Executive Summary

All service pages complete with FAQs. SEO optimization complete (schema markup, image alt texts, EXIF metadata). Gallery UX improvements deployed. Remaining work is final testing, sitemap submission, and client approval. Launch on track for Jan 30.

---

## Current State (Updated: Jan 23)

### ✅ COMPLETE
- All 7 service pages match Google Doc
- FAQ component built (FAQAccordion.astro)
- FAQs added to all service pages + homepage
- Springfield location on contact page
- Team headshots downloaded
- SCHEMA-DATA.yaml with business info + geo coordinates
- Vercel deployment working
- LocalBusiness, FAQ, Breadcrumb schema markup on all pages
- 89 image alt texts optimized with location keywords
- EXIF/GPS metadata on 117 images
- Gallery filters (7 categories) with accessibility
- Video gallery redesign with click-to-play thumbnails
- Keyword research document (500+ keywords)
- SEO image strategy document

### ✅ SEO/AEO OPTIMIZATION (Jan 29)
- [x] Open Graph and Twitter meta tags added to Layout.astro
- [x] BreadcrumbSchema added to all 8 service pages
- [x] Home page H1 SEO optimized with sr-only text
- [x] EXIF Title/Description added to 87 service images
- [x] Power washing image folder created (4 images)
- [x] VideoObject schema added to FAQWithVideo component
- [x] AggregateRating schema added to GoogleReviews component

### ❌ REMAINING
| Item | Status | Impact |
|------|--------|--------|
| sitemap submission | Not submitted to GSC | Medium - post-launch OK |
| Client final approval | Awaiting Jan 29 10am meeting | Required for launch |

---

## Phase 1: Service Page Rollout ✅ COMPLETE
**Completed:** Jan 20, 2026

All 7 service pages audited and match Google Doc exactly.

---

## Phase 2: Content Completion ✅ COMPLETE
**Completed:** Jan 22, 2026

### FAQs ✅ COMPLETE
- [x] Receive FAQ content from Colleen
- [x] Create FAQ section component (FAQAccordion.astro)
- [x] Add to all service pages + homepage
- [x] Implement FAQPage schema.org markup

### Content Verification ✅ COMPLETE
- [x] Verify all pages have final copy from Google Doc
- [x] Check all CTAs are consistent
- [x] Springfield location added to contact page
- [x] SCHEMA-DATA.yaml with geo coordinates for both locations

---

## Phase 3: SEO & Technical Polish ✅ COMPLETE
**Completed:** Jan 22, 2026

### 🔴 CRITICAL (Must Have for Launch) ✅ DONE

#### 3.1 Technical Foundation ✅ COMPLETE
- [x] Sitemap configured (Astro integration)
- [x] Canonical URL config set
- [x] Vercel auto-deploys working

#### 3.2 Schema Markup - JSON-LD ✅ COMPLETE
- [x] LocalBusiness schema on all pages
- [x] FAQPage schema on pages with FAQs
- [x] BreadcrumbList on all pages

#### 3.3 Image Alt Text Audit ✅ COMPLETE
- [x] 89 image alt texts optimized with location keywords
- [x] Distribution: 35% Decatur, 25% Springfield, 20% Central IL
- [x] Strategy document created

#### 3.4 SCHEMA-DATA.yaml ✅ COMPLETE
- [x] Springfield location with full address
- [x] Geo coordinates for Decatur (39.846140, -88.943339)
- [x] Geo coordinates for Springfield (39.774706, -89.648175)

### 🟡 HIGH (Should Have) ✅ COMPLETE
- [x] Gallery filters implemented (7 categories)
- [x] Video gallery redesign with thumbnails
- [x] Accessibility: ARIA roles, keyboard navigation

### 🟢 NICE TO HAVE ✅ COMPLETE
- [x] EXIF/GPS metadata on 117 images
- [x] Copyright metadata added
- [x] Keyword research document (500+ keywords)

---

## Phase 4: Final Review & Launch
**Deadline:** Jan 29-30

### Pre-Launch Checklist (Jan 29)
- [ ] Send preview link to Colleen for final sign-off
- [ ] Get written approval to launch
- [ ] Verify production domain ready (cleancutservice.com)
- [ ] DNS configured correctly

### Launch Day (Jan 30)
- [ ] Deploy final build to Vercel
- [ ] Connect custom domain (if not done)
- [ ] Verify all pages load correctly
- [ ] Test contact form on live site
- [ ] Send "site is live" confirmation to Colleen

### Post-Launch (Jan 31+)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Business Profile links to new site
- [ ] Monitor for issues

---

## Timeline Summary

```
Thu Jan 22: ✅ SEO optimization complete, gallery UX complete
Fri Jan 23: Reply to Colleen, address any feedback
Mon Jan 27: Buffer / catch-up
Tue Jan 28: ✅ Full website overhaul (15 phases from Colleen feedback)
Wed Jan 29: ✅ SEO/AEO masterplan complete (8 phases), Final review with Colleen 10am MST
Thu Jan 30: LAUNCH DAY
```

---

## Blocking Issues

### Currently Blocked
| Issue | Blocked By | Resolution |
|-------|------------|------------|
| None | - | - |

### Risks
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Colleen slow to approve | Medium | Send preview Jan 29 AM, follow up same day |

---

## Success Criteria

Launch is complete when:
1. ✅ All pages follow approved design pattern
2. ✅ All copy matches Google Doc exactly
3. ✅ FAQs on all service pages + homepage
4. ✅ LocalBusiness + FAQPage schema implemented
5. ✅ All images have descriptive alt text
6. ✅ Gallery filters and video redesign deployed
7. [ ] Contact form works on production
8. [ ] Site loads in < 3 seconds on mobile
9. [ ] Colleen has given written sign-off
10. [ ] Site is live on production domain

---

## Resources

### Key Files
- **Schema Data:** SCHEMA-DATA.yaml
- **SEO Strategy:** /docs/SEO-IMAGE-STRATEGY.md
- **Keyword Research:** /docs/KEYWORD-RESEARCH.md
- **Design System:** /docs/DESIGN-SYSTEM.md

### URLs
- **Staging:** https://cleancut-astro.vercel.app
- **Production:** https://cleancutservice.com (pending)

### Communication
- **Primary Contact:** Colleen Hayes (colleen@cleancutservice.com)
- **CC:** matt@voxemarketing.com, michaeld@voxemarketing.com

---

## Changelog

- **2026-01-29:** SEO/AEO masterplan executed - OG tags, BreadcrumbSchema, VideoObject, AggregateRating, EXIF metadata
- **2026-01-28:** Full website overhaul (15 phases) from Colleen feedback meeting
- **2026-01-23:** Roadmap updated to reflect completed SEO work from Jan 22
- **2026-01-22:** SEO optimization complete (schema, alt texts, EXIF), gallery UX improvements
- **2026-01-22:** FAQ section marked complete
- **2026-01-20:** Initial roadmap created
