# Dev Server SOP

## Starting the Dev Server

Always use `nohup` to prevent the server from dying when Claude runs other commands:

```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro
nohup npm run dev > /tmp/cleancut-dev.log 2>&1 &
```

## Verify It's Running

```bash
curl -s http://localhost:3000 > /dev/null && echo "✅ Running" || echo "❌ Down"
```

## Check Logs

```bash
tail -f /tmp/cleancut-dev.log
```

## Kill Server

```bash
pkill -9 -f "astro"
# or
lsof -ti:3000 | xargs kill -9
```

## Full Reset (Nuclear Option)

```bash
pkill -9 -f "astro"; pkill -9 -f "vite"; pkill -9 -f "node.*dev"
lsof -ti:3000,3001,3002,3003,3004,3005 | xargs kill -9 2>/dev/null
sleep 2
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro
nohup npm run dev > /tmp/cleancut-dev.log 2>&1 &
```

## Why This Matters

- Background processes started with `&` alone can get killed when the parent shell closes
- `nohup` (no hang up) prevents this by ignoring the SIGHUP signal
- Redirecting to a log file captures output for debugging
- Astro's hot reload still works - changes appear instantly in browser

## Port Convention

- Always use **port 3000** for CleanCut
- If 3000 is in use, kill whatever's on it first rather than using a different port

## Hostinger Deployment

**Deployment folder:** `/Users/treymossman/Projects/cleancut-static/cleancut-astro/hostinger-deployment/`

To build and prepare for Hostinger:
```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro
npm run build
rm -rf hostinger-deployment/*
cp -r dist/* hostinger-deployment/
```

Then upload the contents of `hostinger-deployment/` to Hostinger's public_html.

**IMPORTANT:** There is only ONE deployment folder. It lives inside the `cleancut-astro` project directory, not in the parent `cleancut-static` folder.
