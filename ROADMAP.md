# CleanCut Pros Website - Roadmap to Launch

**Created:** 2026-01-20
**Target Launch:** 2026-01-30 (per client agreement)
**Current Status:** 75% Complete

---

## Executive Summary

Interior painting page APPROVED (Jan 16). All service pages audited and match Google Doc (Jan 20). FAQs pending from client. Target: Launch by Jan 30.

---

## Phase 1: Service Page Rollout ✅ COMPLETE
**Status:** Complete (2026-01-20)
**Completed:** Jan 20, 2026

All 7 service pages audited and corrected to match Google Doc exactly:
- [x] exterior-painting.astro - 8 process steps
- [x] cabinet-refinishing.astro - 7 process steps
- [x] deck-staining.astro - 7 process steps
- [x] power-washing.astro - 3 process steps
- [x] handyman.astro - no process steps (per doc)
- [x] interior-painting.astro - approved Jan 16
- [x] commercial.astro - kept generic (acceptable)

---

## Phase 2: Content Completion
**Estimated Effort:** 2-3 hours
**Deadline:** Jan 27

### FAQs (Waiting on Client)
- [ ] Receive FAQ content from Colleen
- [ ] Create FAQ section component
- [ ] Add to relevant service pages
- [ ] Implement FAQPage schema.org markup

### Content Verification
- [x] Verify all pages have final copy from Google Doc
- [x] Check all CTAs are consistent
- [ ] Verify contact info matches SCHEMA-DATA.yaml
- [ ] Confirm business hours are correct

---

## Phase 3: SEO & Technical Polish
**Estimated Effort:** 2-3 hours
**Deadline:** Jan 28

### SEO Checklist
- [ ] Verify sitemap.xml exists and is correct
- [ ] Verify robots.txt exists
- [ ] Add geographic coordinates (lat/long) for both locations
- [ ] Confirm canonical domain is set
- [ ] Verify LocalBusiness schema.org markup
- [ ] Add Service schema for each service page
- [ ] Image alt text audit (all images have descriptive alt)

### Technical Polish
- [ ] Run `npm run build` - verify no errors
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test contact form submission
- [ ] Verify all links work (no 404s)
- [ ] Check page load speed
- [ ] Verify video testimonials load properly

---

## Phase 4: Final Review & Launch
**Deadline:** Jan 29-30

### Pre-Launch Checklist
- [ ] Send preview link to Colleen for final sign-off
- [ ] Get written approval to launch
- [ ] Verify live site URL is ready (cleancutservice.com or similar)
- [ ] DNS pointing correctly (if custom domain)

### Launch Day
- [ ] Deploy final build to Vercel
- [ ] Verify all pages load correctly
- [ ] Test contact form on live site
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Send "site is live" confirmation to Colleen

### Post-Launch (Jan 31+)
- [ ] Monitor for any issues
- [ ] Set up Google Analytics (if not done)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Business Profile links to new site

---

## Blocking Issues

### Currently Blocked
| Issue | Blocked By | Resolution |
|-------|------------|------------|
| FAQ section | Colleen providing content | Follow up if not received by Jan 22 |

### Technical Issues (Non-Blocking)
None currently.

---

## Resources

### Key Files
- **Google Doc (Copy):** 1QZzrmitx3MAII4fjjycoJSQFGh3_1ZW9JNAJLJIcIbg
- **Source of Truth:** SCHEMA-DATA.yaml
- **Design System:** /docs/DESIGN-SYSTEM.md
- **Brand Colors:** /docs/BRAND-COLORS.md

### URLs
- **Live Site:** https://cleancut-astro.vercel.app

### Communication
- **Primary Contact:** Colleen Hayes (colleen@cleancutservice.com)
- **CC on all emails:** matt@voxemarketing.com, michaeld@voxemarketing.com, tyler@cleancutservice.com, colby@cleancutservice.com

---

## Timeline Summary

```
Week of Jan 20-24: Phase 1 ✅ COMPLETE
└── All service pages match Google Doc

Week of Jan 27-30: Phases 2-4 (Content, Polish, Launch)
├── Mon 1/27: FAQ implementation (if received), content verification
├── Tue 1/28: SEO checklist, technical polish
├── Wed 1/29: Final review, send to Colleen for sign-off
└── Thu 1/30: LAUNCH DAY
```

---

## Success Criteria

Launch is complete when:
1. ✅ All 8 pages follow approved interior-painting design pattern
2. ✅ All copy matches Google Doc exactly
3. [ ] Contact form works and submits correctly
4. [ ] Site loads in < 3 seconds on mobile
5. [ ] All images display correctly with proper alt text
6. [ ] Colleen has given written sign-off
7. [ ] Site is live on production domain

---

## Notes

- **Jan 16:** Interior painting page approved by Colleen
- **Jan 20:** All 7 service pages audited and corrected against Google Doc
- **Jan 22:** Documentation updated - Vercel only deployment
- **Jan 30:** Target launch date per client agreement
