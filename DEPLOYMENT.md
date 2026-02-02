# CleanCut Deployment Setup

## Overview
CleanCut Astro site is deployed via **Cloudflare Pages**.

## URLs
- **Live Site:** https://www.cleancutservice.com
- **Production Repo:** https://github.com/CleanCutDecatur/decatur-website
- **Development Repo:** https://github.com/trey1mossman-ai/cleancut-astro

## Git Remotes
```bash
origin     → trey1mossman-ai/cleancut-astro (development - includes docs)
cloudflare → CleanCutDecatur/decatur-website (PRODUCTION - website only)
```

## Deployment Workflow

### Standard Deploy to Production:
```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro

# 1. Test build locally
npm run build

# 2. Commit changes
git add -A
git commit -m "Update: [description]"

# 3. Push to development repo (includes docs)
git push origin main

# 4. Push to PRODUCTION (Cloudflare auto-deploys)
git push cloudflare main
```

### What Goes Where

| Remote | Purpose | What to Push |
|--------|---------|--------------|
| `origin` | Development & docs | Everything - code, docs, PROGRESS.md |
| `cloudflare` | **PRODUCTION** | Website code only - no docs/notes |

### When to Push to Cloudflare
- ✅ Website code changes (pages, components, styles)
- ✅ Image/asset updates
- ✅ Content changes
- ✅ Bug fixes
- ❌ Documentation updates (PROGRESS.md, etc.)
- ❌ Development notes
- ❌ Non-website files

## Cloudflare Build Settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `20` (set via NODE_VERSION env var) |
| Framework preset | Astro |

## Build Time
- Typical build: ~30-60 seconds
- Deploy propagation: ~1-2 minutes

## Domain Setup
- **Registrar:** GoDaddy
- **DNS:** Cloudflare
- **Redirect:** non-www → www (automatic)
- **SSL:** Cloudflare (automatic)

## Troubleshooting

### Common Build Issues
- **Node version:** Must be 20+ (set NODE_VERSION=20 in Cloudflare env)
- **File size:** 25MB max per file
- **No wrangler.toml needed:** Use dashboard settings

### Check Build Status
- Cloudflare Pages dashboard shows build logs
- Builds trigger automatically on push to cloudflare remote

## Setup Date
- **Initial:** 2026-01-13
- **Live on Cloudflare:** 2026-01-30

## Production Deploy Workflow (IMPORTANT)

The cloudflare repo should NOT contain internal docs. Use this workflow:

### For website-only changes (most deploys):
```bash
# Create clean production branch from cloudflare
git checkout -b prod-deploy cloudflare/main

# Cherry-pick website changes from main
git checkout main -- src/ public/ astro.config.mjs package.json

# Commit, push, cleanup
git add -A
git commit -m "feat: description"
git push cloudflare prod-deploy:main
git checkout main
git branch -D prod-deploy
```

### Files that should NEVER go to cloudflare:
- *.md files (except README.md)
- docs/ folder
- .claude/ folder
- PROGRESS.md, CLIENT.md, etc.

### Cleaned up on 2026-02-02:
Removed all internal docs from cloudflare repo. Going forward, only website code should be pushed to production.
