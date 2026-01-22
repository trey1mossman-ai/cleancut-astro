# CleanCut Deployment Setup

## Overview
CleanCut Astro site is deployed via Vercel.

## URLs
- **Live Site:** https://cleancut-astro.vercel.app
- **GitHub Repo:** https://github.com/trey1mossman-ai/cleancut-astro

## Branch Structure
- `main` - Source code (Astro components, pages, assets) - Vercel auto-deploys from this branch

## Deployment Workflow

### To Deploy Updates:
1. Make changes on `main` branch
2. Commit and push to `main`
3. Vercel automatically builds and deploys

```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro
git add -A
git commit -m "Update: [description]"
git push origin main
```

Vercel handles the build (`npm run build`) and deployment automatically.

### Manual Deploy (if needed):
```bash
npx vercel --prod
```

## Video Compression
Videos were compressed from 185-272MB to 9-14MB each using ffmpeg:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k output.mp4
```

## Setup Date
2026-01-13

## Notes
- Vercel auto-deploys from main branch on every push
- All video files under 100MB (GitHub limit)
