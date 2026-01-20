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

## Deployment (IMPORTANT - READ THIS)

**DO NOT use GitHub Actions workflow for this project.** The gh CLI token doesn't have `workflow` scope.

**Deploy via local build + push to deploy branch:**

```bash
# 1. Build the site
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro
npm run build

# 2. Push dist/ to deploy branch (Hostinger pulls from this)
cd dist
rm -rf .git  # Clean any old git init
git init
git config user.email "trey@voxemarketing.com"
git config user.name "Trey Mossman"
git add -A
git commit -m "Deploy: [description of changes]"
git push --force https://github.com/trey1mossman-ai/cleancut-astro.git HEAD:deploy
```

**Architecture:**
```
Local build (npm run build)
    ↓
dist/ folder pushed to `deploy` branch
    ↓
GitHub webhook triggers Hostinger auto-deploy
```

**Webhook:** `https://webhooks.hostinger.com/deploy/23981a6fc840c374aee4eb316bed27ff` (configured on GitHub)

**GitHub Repo:** `trey1mossman-ai/cleancut-astro` (public)
**Branches:**
- `main` - Source code
- `deploy` - Built static files only (Hostinger pulls from here)

## Email Communication (MANDATORY)

**ALL emails to CleanCut must CC the full team:**

| Role | Name | Email |
|------|------|-------|
| **Primary Contact** | Colleen Hayes | colleen@cleancutservice.com |
| **CC (Voxe)** | Matt Aponte | matt@voxemarketing.com |
| **CC (Voxe)** | Michael David | michaeld@voxemarketing.com |
| **CC (CleanCut CRO)** | Tyler Tate | tyler@cleancutservice.com |
| **CC (CleanCut Ops)** | Colby Geiser | colby@cleancutservice.com |

**Quick CC string for gmail.js:**
```
--cc "matt@voxemarketing.com,michaeld@voxemarketing.com,tyler@cleancutservice.com,colby@cleancutservice.com"
```

## Session Notes
- Site is deployed and live
- Check PROJECT-STATUS.md for detailed checklist
