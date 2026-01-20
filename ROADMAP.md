# CleanCut Pros Website - Roadmap to Launch

**Created:** 2026-01-20
**Target Launch:** 2026-01-30 (per client agreement)
**Current Status:** 75% Complete

---

## Executive Summary

Interior painting page APPROVED (Jan 16). Ready to roll out design pattern to all service pages. FAQs pending from client. Target: Launch by Jan 30.

---

## Phase 1: Service Page Rollout (CURRENT)
**Status:** Ready to Start
**Estimated Effort:** 6-8 hours total
**Deadline:** Jan 24

The interior-painting page design is approved. Apply the same pattern to remaining 5 residential pages + commercial.

### Pattern to Apply (from interior-painting.astro)
- ProcessScrollCards component (horizontal scroll, 5 steps)
- Hero height: 350px (not 500px)
- Alternating backgrounds: white → bg-gray-50 → white → bg-gray-50
- CTA text: "Get a Complimentary Proposal"
- Gallery with Lightbox functionality
- Process steps from Google Doc

### Pages to Update

| Page | Est. Time | Status | Notes |
|------|-----------|--------|-------|
| exterior-painting.astro | 1.5 hrs | Pending | 402 lines, needs process steps |
| cabinet-refinishing.astro | 1.5 hrs | Pending | 392 lines |
| deck-staining.astro | 1.5 hrs | Pending | 419 lines (largest) |
| power-washing.astro | 1 hr | Pending | 361 lines |
| handyman.astro | 1 hr | Pending | 362 lines |
| commercial.astro | 1.5 hrs | Pending | Large page, different layout |

### For Each Page
1. [ ] Copy process steps from Google Doc (1QZzrmitx3MAII4fjjycoJSQFGh3_1ZW9JNAJLJIcIbg)
2. [ ] Implement ProcessScrollCards component
3. [ ] Update hero height to 350px
4. [ ] Fix section backgrounds (alternating white/gray-50)
5. [ ] Update CTA buttons to "Get a Complimentary Proposal"
6. [ ] Verify gallery images and Lightbox
7. [ ] Test mobile responsiveness

---

## Phase 2: Content Completion
**Estimated Effort:** 2-3 hours
**Deadline:** Jan 27

### FAQs (Waiting on Client)
- [ ] Receive FAQ content from Colleen (she mentioned "this week" on Jan 16)
- [ ] Create FAQ section component
- [ ] Add to relevant service pages
- [ ] Implement FAQPage schema.org markup

### Content Verification
- [ ] Verify all pages have final copy from Google Doc
- [ ] Check all CTAs are consistent
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

### Deployment Pipeline
- [ ] Test deploy branch push workflow
- [ ] Verify Hostinger receives updates
- [ ] If Hostinger still broken, document Vercel as primary

---

## Phase 4: Final Review & Launch
**Deadline:** Jan 29-30

### Pre-Launch Checklist
- [ ] Send preview link to Colleen for final sign-off
- [ ] Get written approval to launch
- [ ] Verify live site URL is ready (cleancutservice.com or similar)
- [ ] DNS pointing correctly (if custom domain)

### Launch Day
- [ ] Deploy final build to production
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
| Issue | Workaround | Priority |
|-------|------------|----------|
| Hostinger webhook not pulling | Manual deploy or use Vercel | Low |
| GitHub Actions token scope | Manual deploy | Low |

---

## Resources

### Key Files
- **Google Doc (Copy):** 1QZzrmitx3MAII4fjjycoJSQFGh3_1ZW9JNAJLJIcIbg
- **Source of Truth:** SCHEMA-DATA.yaml
- **Design System:** /docs/DESIGN-SYSTEM.md
- **Brand Colors:** /docs/BRAND-COLORS.md

### Preview URLs
- **Vercel:** https://cleancut-astro.vercel.app
- **Hostinger:** http://indigo-badger-869654.hostingersite.com/

### Communication
- **Primary Contact:** Colleen Hayes (colleen@cleancutservice.com)
- **CC on all emails:** matt@voxemarketing.com, michaeld@voxemarketing.com, tyler@cleancutservice.com, colby@cleancutservice.com

---

## Timeline Summary

```
Week of Jan 20-24: Phase 1 (Service Page Rollout)
├── Mon 1/20: Start exterior-painting, cabinet-refinishing
├── Tue 1/21: Complete deck-staining, power-washing
├── Wed 1/22: Complete handyman, commercial
└── Thu 1/23: Buffer day / client review

Week of Jan 27-30: Phases 2-4 (Content, Polish, Launch)
├── Mon 1/27: FAQ implementation (if received), content verification
├── Tue 1/28: SEO checklist, technical polish
├── Wed 1/29: Final review, send to Colleen for sign-off
└── Thu 1/30: LAUNCH DAY
```

---

## Success Criteria

Launch is complete when:
1. All 8 pages follow approved interior-painting design pattern
2. All copy matches Google Doc exactly
3. Contact form works and submits correctly
4. Site loads in < 3 seconds on mobile
5. All images display correctly with proper alt text
6. Colleen has given written sign-off
7. Site is live on production domain

---

## Notes

- **Jan 16:** Interior painting page approved by Colleen
- **Jan 20:** Roadmap created, ready to begin Phase 1
- **Jan 30:** Target launch date per client agreement
