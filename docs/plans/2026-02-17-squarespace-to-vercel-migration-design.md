# Cybercade: Squarespace to Vercel Migration Design

**Date:** 2026-02-17
**Status:** Approved

## Goal

Migrate cybercade.com off Squarespace onto Vercel using the Cybercade-Rebuild project as the foundation. Incorporate substantive content from the Squarespace site while preserving the rebuild's superior design and animations.

## Decisions

- **Approach:** Minimal surgery on the rebuild — targeted removals, additions, and updates
- **Layout:** Single-page landing site with new About section (no new routes)
- **Tone:** Keep aspirational marketing language
- **Contact:** sales@cybercade.com only (no phone, no hello@ email)
- **No demo form, no chatbot, no pricing, no "Play Now" CTA**

## Removals

| Item | File | Action |
|------|------|--------|
| Pricing section | `Pricing.tsx`, `page.tsx` | Delete component, remove from page |
| Pricing nav link | `Navbar.tsx` | Remove from nav items |
| "Play Now" button | `Navbar.tsx` | Remove CTA button |
| "INSERT COIN / START" button | `Hero.tsx` | Remove hero CTA button |
| GitHub Pages workflow | `.github/workflows/deploy.yml` | Delete file |
| basePath/assetPrefix hacks | `next.config.ts` | Remove environment conditionals |
| Video path conditionals | `Hero.tsx` | Simplify to direct paths |

## Additions

### New About Section (between Pillars and Footer)

Origin story: "Started by a team passionate about gaming, learning and cybersecurity. We believe education needs to change and gaming holds the key."

Four guiding principles as animated glassmorphism cards:
1. Cybercrime is a company-wide threat, not just an IT thing
2. Games are one of the most foundational forms of teaching
3. Understanding HOW someone got from A to B matters more than arriving at B
4. Cybersecurity learning must be immersive & iterative, not annual compliance

Style: same glassmorphism cards, Framer Motion animations, Press Start 2P headings as rest of site.

### Games Curriculum Philosophy (woven into existing sections)

- NIST-based learning objectives messaging in GameShowcase header
- "Built for the 99% who aren't cyber techies" in GameShowcase intro
- Reinforce Missions vs Mini Games distinction in section badges/headers

## Updates

| Item | From | To |
|------|------|----|
| Contact email | hello@cybercade.com | sales@cybercade.com |
| next.config.ts | `output: 'export'`, basePath/assetPrefix | Clean Vercel config |
| Navbar links | Games, Integrations, How it Works, Pricing | Games, Integrations, How it Works, About |
| Hero | Has CTA button | Tagline + floating cards only |

## Deployment

- Remove `output: 'export'` (Vercel handles build natively)
- Remove `basePath` and `assetPrefix` environment conditionals
- Delete `.github/workflows/deploy.yml`
- No vercel.json needed — zero-config Next.js on Vercel
- User connects GitHub repo to Vercel, points cybercade.com DNS to Vercel
