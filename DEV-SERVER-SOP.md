# Dev Server SOP

## Starting the Dev Server

Always use `nohup` to prevent the server from dying when Claude runs other commands:

```bash
cd /Users/treymossman/Projects/cleancut-static/cleancut-astro
nohup npm run dev > /tmp/cleancut-dev.log 2>&1 &
```

## Verify It's Running

```bash
curl -s http://localhost:4321 > /dev/null && echo "✅ Running" || echo "❌ Down"
```

## Check Logs

```bash
tail -f /tmp/cleancut-dev.log
```

## Kill Server

```bash
pkill -9 -f "astro"
# or
lsof -ti:4321 | xargs kill -9
```

## Full Reset (Nuclear Option)

```bash
pkill -9 -f "astro"; pkill -9 -f "vite"; pkill -9 -f "node.*dev"
lsof -ti:4321,4322,4323,4324,4325 | xargs kill -9 2>/dev/null
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

- Astro default is **port 4321** for CleanCut
- If 4321 is in use, kill whatever's on it first rather than using a different port

## Deployment

**Cloudflare Pages (auto-deploy):**
```bash
git add -A
git commit -m "Update: [description]"
git push origin main
```

Cloudflare Pages automatically builds and deploys when you push to cloudflare remote.

**Manual deploy (if needed):**
```bash
git push cloudflare main
```

**Live Site:** https://www.cleancutservice.com
