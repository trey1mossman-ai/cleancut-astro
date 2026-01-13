# CleanCut Pros - Project Context

## Overview
Marketing website for CleanCut Pros, a painting and handyman service company based in Decatur, Illinois.

## Quick Reference
| Item | Value |
|------|-------|
| **Client** | CleanCut Pros (Colleen) |
| **Location** | Decatur, IL |
| **Stack** | Astro 5 + Tailwind CSS 4 |
| **Deployment** | Hostinger (NOT Vercel) |
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
dist/               # Build output (deploy this)
```

## Key Rules
1. **All business data must come from SCHEMA-DATA.yaml** - never fabricate
2. **Deploy to Hostinger** - NOT Vercel (client's hosting)
3. **Images need EXIF/IPTC metadata** before going live (geo-tagged, keywords)
4. **Follow SEO-CONFIG.yaml** for meta tags and keywords

## Services Offered
- Residential painting (interior/exterior)
- Commercial painting
- Handyman services
- Pressure washing
- Drywall repair

## Deployment
```bash
npm run build        # Build to dist/
# Upload dist/ contents to Hostinger via FTP or file manager
```

## Contact
- **Client:** Colleen
- **Email:** colleen@cleancutservice.com

## Session Notes
- Site is deployed and live
- Check PROJECT-STATUS.md for detailed checklist
