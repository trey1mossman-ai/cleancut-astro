# CleanCut Deployment Setup

## Overview
CleanCut Astro site is deployed via GitHub → Hostinger Git integration.

## URLs
- **Live Site:** https://indigo-badger-869654.hostingersite.com/
- **GitHub Repo:** https://github.com/trey1mossman-ai/cleancut-astro

## Branch Structure
- `main` - Source code (Astro components, pages, assets)
- `deploy` - Built static files only (what Hostinger serves)

## Hostinger Configuration
| Field | Value |
|-------|-------|
| Repository | `https://github.com/trey1mossman-ai/cleancut-astro.git` |
| Branch | `deploy` |
| Directory | *(blank - deploys to public_html)* |

## Deployment Workflow

### To Deploy Updates:
1. Make changes on `main` branch
2. Build: `npm run build`
3. Copy built files to hostinger-deployment folder (or use dist/)
4. Push to deploy branch:
   ```bash
   cd /tmp
   rm -rf cleancut-deploy
   mkdir cleancut-deploy && cd cleancut-deploy
   git init
   git remote add origin https://github.com/trey1mossman-ai/cleancut-astro.git
   cp -r /Users/treymossman/Projects/cleancut-static/cleancut-astro/hostinger-deployment/* .
   git add -A
   git commit -m "Deploy: [description]"
   git push origin HEAD:deploy --force
   ```
5. Hostinger auto-pulls from deploy branch

## Video Compression
Videos were compressed from 185-272MB to 9-14MB each using ffmpeg:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k output.mp4
```

Original videos backed up to: `/tmp/cleancut-video-originals/`

## Setup Date
2026-01-13

## Notes
- GitHub OAuth token lacks `workflow` scope, so GitHub Actions workflow couldn't be pushed
- Using manual deploy branch push instead of automated CI/CD
- All video files under 100MB (GitHub limit)
