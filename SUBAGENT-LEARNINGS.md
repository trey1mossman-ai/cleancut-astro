# Sub-Agent Learnings: CleanCut Pros

> Project-specific learnings for the CleanCut painting & handyman service website.
> Stack: Astro + Tailwind + Cloudflare Pages

---

## Project Context

- **Client:** Colleen (Decatur, IL)
- **Type:** Service business website
- **Stack:** Astro, Tailwind CSS
- **Deployment:** Cloudflare Pages (auto-deploys from main)
- **Status:** Deployed, ongoing maintenance

---

## What Works for This Project

| Pattern | Why It Works |
|---------|--------------|
| ProcessScrollCards | Horizontal scroll with snap points works well on mobile |
| bg-gray-200 | Tailwind v4's gray-50/100 are too light - use gray-200 for visible contrast |
| Google Doc as source of truth | All copy comes from the shared doc, prevents miscommunication |

## What to Avoid

| Anti-Pattern | What Happened |
|--------------|---------------|
| Assuming process steps | Each service has different process steps per Google Doc |
| Generic content | Handyman has NO process steps - don't add generic ones |

---

## Prompt Templates That Work

### Component Updates
```
Read the Google Doc first, then update the component to match exactly.
```

### Content Changes
```
Audit against Google Doc before making changes. Don't assume.
```

---

## Session Log

- **2026-01-20:** Full audit of all 7 service pages against Google Doc
- **2026-01-16:** Interior painting page approved by client
- **2026-01-22:** Docs updated to Cloudflare Pages-only deployment

---

*Initialized: 2025-12-23*
*Last Updated: 2026-01-22*
