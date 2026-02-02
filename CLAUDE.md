# CleanCut Pros - Project Context

## Overview
Marketing website for CleanCut Pros, a painting and handyman service company based in Decatur, Illinois.

## Quick Reference
| Item | Value |
|------|-------|
| **Client** | CleanCut Pros (Colleen) |
| **Location** | Decatur, IL + Springfield, IL |
| **Stack** | Astro 5 + Tailwind CSS 4 |
| **Deployment** | Cloudflare Pages (auto-deploys from cloudflare remote) |
| **Live Site** | https://www.cleancutservice.com |
| **Status** | LIVE |

## Tech Stack
- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x (via Vite plugin)
- **Hosting:** Cloudflare Pages
- **Domain:** GoDaddy (redirects non-www → www)
- **Build:** `npm run build` → `dist/`

## Git Remotes
| Remote | Repo | Purpose |
|--------|------|---------|
| `origin` | trey1mossman-ai/cleancut-astro | Development (includes docs) |
| `cloudflare` | CleanCutDecatur/decatur-website | **PRODUCTION** (website only) |

## Deployment

### To Deploy to Production:
```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro

# 1. Test build locally
npm run build

# 2. Commit changes
git add -A
git commit -m "Update: [description]"

# 3. Push to development (includes docs)
git push origin main

# 4. Push to PRODUCTION (Cloudflare auto-deploys)
git push cloudflare main
```

### What Goes Where
| Remote | Push | Don't Push |
|--------|------|------------|
| `origin` | Everything (code + docs) | - |
| `cloudflare` | Website code only | Docs, PROGRESS.md, dev notes |

### Cloudflare Build Settings
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 (NODE_VERSION env var)

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
2. **Deploy via cloudflare remote** - push to cloudflare, auto-deploys
3. **Images need EXIF/IPTC metadata** before going live (geo-tagged, keywords)
4. **Follow SEO-CONFIG.yaml** for meta tags and keywords

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
- Site is LIVE on Cloudflare Pages at cleancutservice.com
- Check PROGRESS.md for detailed session log
