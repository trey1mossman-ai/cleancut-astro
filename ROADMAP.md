# CleanCut Pros Website - Roadmap to Launch

**Created:** 2026-01-20
**Last Updated:** 2026-01-22
**Target Launch:** 2026-01-30
**Current Status:** 80% Complete

---

## Executive Summary

All service pages complete with FAQs. No blocking issues. Remaining work is SEO implementation and technical polish. Launch on track for Jan 30.

---

## Current State (Audit: Jan 22)

### ✅ COMPLETE
- All 7 service pages match Google Doc
- FAQ component built (FAQAccordion.astro)
- FAQs added to all service pages + homepage
- Springfield location on contact page
- Team headshots downloaded
- SCHEMA-DATA.yaml with business info
- Vercel deployment working

### ❌ MISSING (Discovered in Audit)
| Item | Status | Impact |
|------|--------|--------|
| robots.txt | Does not exist | Critical for crawling |
| sitemap.xml | No Astro integration | Critical for indexing |
| Schema markup (JSON-LD) | None implemented | Critical for local SEO |
| Image alt text | 119 images missing | High SEO + accessibility |
| llms.txt / llm.txt | Does not exist | Medium (AI/GEO) |
| Geo coordinates | Not in schema data | Medium (local SEO) |

---

## Phase 1: Service Page Rollout ✅ COMPLETE
**Completed:** Jan 20, 2026

All 7 service pages audited and match Google Doc exactly.

---

## Phase 2: Content Completion ✅ MOSTLY COMPLETE
**Status:** 95% Complete

### FAQs ✅ COMPLETE
- [x] Receive FAQ content from Colleen
- [x] Create FAQ section component (FAQAccordion.astro)
- [x] Add to all service pages + homepage
- [ ] Implement FAQPage schema.org markup (moved to Phase 3)

### Content Verification
- [x] Verify all pages have final copy from Google Doc
- [x] Check all CTAs are consistent
- [x] Springfield location added to contact page
- [ ] Update SCHEMA-DATA.yaml with Springfield location + geo coordinates

---

## Phase 3: SEO & Technical Polish
**Deadline:** Jan 28
**Estimated Total Effort:** 4-6 hours

### 🔴 CRITICAL (Must Have for Launch)

#### 3.1 Technical Foundation (1 hour)
| Task | Est. | Details |
|------|------|---------|
| Create robots.txt | 10 min | Allow all, reference sitemap |
| Install @astrojs/sitemap | 20 min | Add to astro.config.mjs |
| Verify sitemap generates | 10 min | Build and check /sitemap.xml |
| Add canonical URL config | 10 min | Set site URL in config |

#### 3.2 Schema Markup - JSON-LD (1.5 hours)
| Schema Type | Pages | Priority |
|-------------|-------|----------|
| LocalBusiness | All (via Layout) | 🔴 Critical |
| Organization | Homepage | 🔴 Critical |
| FAQPage | All pages with FAQs | 🔴 Critical |
| BreadcrumbList | All pages | 🟡 High |
| Service | Each service page | 🟡 High |

**Implementation:**
- [ ] Create SchemaMarkup.astro component
- [ ] Add LocalBusiness schema to Layout.astro (all pages)
- [ ] Add FAQPage schema to pages with FAQs
- [ ] Add Service schema to each service page
- [ ] Add BreadcrumbList to all pages
- [ ] Validate with Google Rich Results Test

#### 3.3 Image Alt Text Audit (1-2 hours)
**Issue:** 119 images missing alt attributes

| Page Category | Est. Images | Priority |
|---------------|-------------|----------|
| Service pages | ~50 | 🔴 Critical |
| Homepage | ~15 | 🔴 Critical |
| About/Team | ~20 | 🟡 High |
| Components | ~30 | 🟡 High |

- [ ] Audit all service page images
- [ ] Audit homepage images
- [ ] Audit about/team images
- [ ] Audit shared components (Hero, Gallery, etc.)

#### 3.4 Update SCHEMA-DATA.yaml (30 min)
- [ ] Add Springfield location with full address
- [ ] Add geo coordinates for Decatur (39.8403, -88.9548)
- [ ] Add geo coordinates for Springfield (39.7817, -89.6501)
- [ ] Verify year_established with client
- [ ] Mark client_approved: true after verification

### 🟡 HIGH (Should Have for Launch)

#### 3.5 Technical Polish (1 hour)
- [ ] Run `npm run build` - verify no errors
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test contact form submission
- [ ] Verify all internal links work (no 404s)
- [ ] Check page load speed (target: <3s on mobile)
- [ ] Test video testimonials load

### 🟢 NICE TO HAVE (Post-Launch OK)

#### 3.6 AI/GEO Optimization
- [ ] Create llms.txt at domain root
- [ ] Create llm.txt (identical copy)
- [ ] Structure content for AI extraction

#### 3.7 Image EXIF Metadata
- [ ] Add GPS coordinates to service area images
- [ ] Add NAP to image comments
- [ ] Use JPEG format for geotagged images

#### 3.8 Advanced SEO
- [ ] Internal linking audit (hub-and-spoke)
- [ ] Content freshness dates on pages
- [ ] NAP consistency check across citations
- [ ] Accessibility audit (WCAG 2.2 AA)

---

## Phase 4: Final Review & Launch
**Deadline:** Jan 29-30

### Pre-Launch Checklist (Jan 29)
- [ ] All Phase 3 Critical items complete
- [ ] Send preview link to Colleen for final sign-off
- [ ] Get written approval to launch
- [ ] Verify production domain ready (cleancutservice.com)
- [ ] DNS configured correctly

### Launch Day (Jan 30)
- [ ] Deploy final build to Vercel
- [ ] Connect custom domain (if not done)
- [ ] Verify all pages load correctly
- [ ] Test contact form on live site
- [ ] Test on Chrome, Safari, Firefox, Edge
- [ ] Send "site is live" confirmation to Colleen

### Post-Launch (Jan 31+)
- [ ] Monitor for issues
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Business Profile links to new site
- [ ] Update GBP with new website URL
- [ ] Implement Phase 3 "Nice to Have" items

---

## Timeline Summary

```
Thu Jan 22: ✅ FAQ complete, roadmap updated
Fri Jan 23: Phase 3.1-3.2 (robots, sitemap, schema)
Sat Jan 24: Phase 3.3 (image alt text audit)
Sun Jan 25: Phase 3.4-3.5 (schema data, technical polish)
Mon Jan 27: Buffer / catch-up
Tue Jan 28: Final testing, Phase 3 complete
Wed Jan 29: Send to Colleen for approval
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
| DNS propagation delay | Low | Configure DNS Jan 28 if possible |

---

## Success Criteria

Launch is complete when:
1. ✅ All pages follow approved design pattern
2. ✅ All copy matches Google Doc exactly
3. ✅ FAQs on all service pages + homepage
4. [ ] robots.txt and sitemap.xml exist
5. [ ] LocalBusiness + FAQPage schema implemented
6. [ ] All images have descriptive alt text
7. [ ] Contact form works on production
8. [ ] Site loads in < 3 seconds on mobile
9. [ ] Colleen has given written sign-off
10. [ ] Site is live on production domain

---

## Post-Launch SEO Roadmap (Feb 2026)

After launch, implement remaining optimizations:

| Week | Focus | Tasks |
|------|-------|-------|
| Week 1 | AI/GEO | llms.txt, content structure for AI |
| Week 2 | Images | EXIF metadata, geotagging |
| Week 3 | Technical | Internal linking, accessibility |
| Week 4 | Citations | NAP audit, directory submissions |

---

## Resources

### Key Files
- **Schema Data:** SCHEMA-DATA.yaml
- **Design System:** /docs/DESIGN-SYSTEM.md
- **SEO Research:** ~/.claude/research/patterns/complete-seo-optimization-checklist-2025-2026.md

### URLs
- **Staging:** https://cleancut-astro.vercel.app
- **Production:** https://cleancutservice.com (pending)

### Communication
- **Primary Contact:** Colleen Hayes (colleen@cleancutservice.com)
- **CC:** matt@voxemarketing.com, michaeld@voxemarketing.com, tyler@cleancutservice.com, colby@cleancutservice.com

---

## Changelog

- **2026-01-22:** Major update - added SEO audit findings, detailed Phase 3, post-launch roadmap
- **2026-01-22:** FAQ section marked complete
- **2026-01-20:** Initial roadmap created
