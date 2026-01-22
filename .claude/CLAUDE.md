# CleanCut Pros - Project Context

## Overview
Marketing website for CleanCut Pros, a painting and handyman service company based in Decatur, Illinois.

## Quick Reference
| Item | Value |
|------|-------|
| **Client** | CleanCut Pros (Colleen) |
| **Location** | Decatur, IL |
| **Stack** | Astro 5 + Tailwind CSS 4 |
| **Deployment** | Vercel (auto-deploys from main) |
| **Status** | Deployed |

## Tech Stack
- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x (via Vite plugin)
- **Images:** Sharp for optimization
- **Build:** `npm run build` → `dist/`

## Project Structure
```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
├── pages/          # Routes
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── our-process.astro
│   ├── our-work.astro
│   ├── commercial.astro
│   └── residential/    # Service pages
└── styles/         # Global styles
public/             # Static assets
dist/               # Build output
```

## Key Rules
1. **All business data must come from SCHEMA-DATA.yaml** - never fabricate
2. **Deploy via Vercel** - push to main, auto-deploys
3. **Images need EXIF/IPTC metadata** before going live (geo-tagged, keywords)
4. **Follow SEO-CONFIG.yaml** for meta tags and keywords

## Services Offered
- Residential painting (interior/exterior)
- Commercial painting
- Handyman services
- Pressure washing
- Drywall repair

## Deployment

**Live Site:** https://cleancut-astro.vercel.app

**To Deploy:**
```bash
# Automatic (preferred)
git add -A
git commit -m "Update: [description]"
git push origin main
# Vercel auto-builds and deploys

# Manual (if needed)
npx vercel --prod
```

**GitHub Repo:** `trey1mossman-ai/cleancut-astro` (public)

## Session Notes
- Site is deployed and live on Vercel
- Check PROJECT-STATUS.md for detailed checklist
