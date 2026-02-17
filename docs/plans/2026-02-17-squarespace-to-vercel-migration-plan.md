# Squarespace-to-Vercel Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate cybercade.com off Squarespace onto Vercel by removing Pricing/Play Now, adding About section + games philosophy, updating contact info, and cleaning deployment config.

**Architecture:** Single-page Next.js landing site. Remove static export config (GitHub Pages), clean up path hacks. Add one new component (About.tsx). Edit existing components for content/link changes.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Lucide React, TypeScript

---

### Task 1: Remove Pricing Section

**Files:**
- Delete: `src/components/Pricing.tsx`
- Modify: `src/app/page.tsx:8,21`

**Step 1: Remove Pricing import and usage from page.tsx**

In `src/app/page.tsx`, remove line 8 (`import Pricing from "@/components/Pricing";`) and line 21 (`<Pricing />`). The file should become:

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import GameShowcase from "@/components/GameShowcase";
import EscapeRooms from "@/components/EscapeRooms";
import Integrations from "@/components/Integrations";
import Pillars from "@/components/Pillars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <GameShowcase />
      <EscapeRooms />
      <Integrations />
      <Pillars />
      <Footer />
    </main>
  );
}
```

**Step 2: Delete Pricing.tsx**

Run: `rm src/components/Pricing.tsx`

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors about missing Pricing references.

**Step 4: Commit**

```bash
git add src/app/page.tsx && git rm src/components/Pricing.tsx
git commit -m "feat: remove Pricing section"
```

---

### Task 2: Update Navbar — Remove Pricing Link and Play Now Button

**Files:**
- Modify: `src/components/Navbar.tsx:10-15,53-58,89-95`

**Step 1: Update navLinks array**

Replace the navLinks array (lines 10-15) with:

```tsx
const navLinks = [
  { name: "Games", href: "#games" },
  { name: "Integrations", href: "#integrations" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
];
```

**Step 2: Remove desktop "Play Now" button**

Remove lines 53-58 (the `<Link href="#contact" ...>Play Now</Link>` block) from the desktop nav.

**Step 3: Remove mobile "Play Now" button**

Remove lines 89-95 (the mobile `<Link href="#contact" ...>Play Now</Link>` block) from the mobile menu.

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: update nav — replace Pricing with About, remove Play Now CTA"
```

---

### Task 3: Remove Hero CTA Buttons

**Files:**
- Modify: `src/components/Hero.tsx:5,58-70`

**Step 1: Remove ChevronRight import**

On line 5, remove `ChevronRight` from the lucide-react import (it's only used in the CTA button):

```tsx
import { ShieldCheck, Zap, Trophy } from "lucide-react";
```

**Step 2: Remove the CTA button group**

Remove lines 58-70 (the entire `<div className="flex flex-col sm:flex-row ...">` block containing "INSERT COIN / START" and "View Specs" buttons).

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: remove hero CTA buttons"
```

---

### Task 4: Clean Hero Video Paths (Remove GitHub Pages basePath Hacks)

**Files:**
- Modify: `src/components/Hero.tsx:20-21`

**Step 1: Simplify video source paths**

Replace the conditional path expressions on lines 20-21 with direct paths:

```tsx
<source src="/Cinemagraphic_Superhero_Website_Hero.mp4" type="video/mp4" />
<img src="/hero-video.gif" alt="Cybercade Hero" className="w-full h-full object-cover" />
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "fix: simplify hero video paths for Vercel deployment"
```

---

### Task 5: Clean next.config.ts for Vercel

**Files:**
- Modify: `next.config.ts`

**Step 1: Replace entire config**

Replace the contents of `next.config.ts` with:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

This removes `output: 'export'` (Vercel handles SSR natively), `basePath`, and `assetPrefix`.

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds. Output directory changes from `out/` to `.next/`.

**Step 3: Commit**

```bash
git add next.config.ts
git commit -m "feat: clean next.config for Vercel deployment"
```

---

### Task 6: Delete GitHub Pages Workflow

**Files:**
- Delete: `.github/workflows/deploy.yml`

**Step 1: Delete the workflow file**

Run: `rm .github/workflows/deploy.yml`

**Step 2: Commit**

```bash
git rm .github/workflows/deploy.yml
git commit -m "chore: remove GitHub Pages deployment workflow"
```

---

### Task 7: Weave Games Curriculum Philosophy into GameShowcase

**Files:**
- Modify: `src/components/GameShowcase.tsx:84-88`

**Step 1: Update GameShowcase intro copy**

Replace the paragraph text (lines 84-88) with copy that incorporates NIST learning objectives and the "99%" messaging:

```tsx
<p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed uppercase tracking-wide font-medium">
  Built for the 99% who aren&apos;t cyber techies. NIST-aligned learning objectives
  <br />
  delivered as Wordle-like, 2-minute daily challenges.
  <br />
  <span className="text-white/80">Habit formation through addictive gameplay.</span>
</p>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/GameShowcase.tsx
git commit -m "feat: add NIST and curriculum philosophy to GameShowcase"
```

---

### Task 8: Create About Section Component

**Files:**
- Create: `src/components/About.tsx`

**Step 1: Create the About component**

Create `src/components/About.tsx` with the following content. This uses the same glassmorphism card style, Framer Motion animations, and Press Start 2P font as the rest of the site:

```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Gamepad2, Route, RefreshCw } from "lucide-react";

const principles = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Company-Wide Threat",
    desc: "Cybercrime is a company-wide threat, not just an IT thing.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-secondary" />,
    title: "Learning Through Play",
    desc: "Games are one of the most foundational forms of teaching — most people don't even know they are learning.",
  },
  {
    icon: <Route className="w-8 h-8 text-accent" />,
    title: "Process Over Outcomes",
    desc: "Understanding HOW someone got from Point A to Point B is more important than the fact they got there.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    title: "Continuous Education",
    desc: "Cybersecurity learning needs to be immersive & iterative, not just an annual rite of passage for compliance.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-display font-normal text-white mb-8 uppercase tracking-tight"
          >
            Our <span className="text-primary italic">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed"
          >
            Cybercade was started by a team passionate about gaming, learning and cybersecurity.
            We believe that education needs to change and gaming holds the key. We decided to build
            fun and engaging games to show the world a better way to learn.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md group hover:border-white/20 transition-all duration-500"
            >
              <div className="mb-6 drop-shadow-[0_0_12px_currentColor]">
                {principle.icon}
              </div>
              <h3 className="text-sm font-display text-white mb-4 uppercase tracking-[0.15em]">
                {principle.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add About to page.tsx**

In `src/app/page.tsx`, add the import and place the component between `<Pillars />` and `<Footer />`:

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import GameShowcase from "@/components/GameShowcase";
import EscapeRooms from "@/components/EscapeRooms";
import Integrations from "@/components/Integrations";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <GameShowcase />
      <EscapeRooms />
      <Integrations />
      <Pillars />
      <About />
      <Footer />
    </main>
  );
}
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/About.tsx src/app/page.tsx
git commit -m "feat: add About section with origin story and guiding principles"
```

---

### Task 9: Update Footer — Contact Email and Remove Dead Links

**Files:**
- Modify: `src/components/Footer.tsx:39,69-71`

**Step 1: Update Pricing link to About**

On line 39, change the Pricing link to About:

```tsx
<li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
```

**Step 2: Update contact email**

Replace line 70's `hello@cybercade.com` with `sales@cybercade.com`:

```tsx
<span>sales@cybercade.com</span>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update footer — sales email, Pricing→About link"
```

---

### Task 10: Visual Verification

**Step 1: Run dev server**

Run: `npm run dev`

**Step 2: Verify in browser at localhost:3000**

Check:
- [ ] Hero: Video plays, no CTA buttons, floating cards present
- [ ] Navbar: Shows Games | Integrations | How it Works | About — no Play Now button
- [ ] GameShowcase: Shows NIST/99% messaging in intro
- [ ] Pricing section: Gone
- [ ] About section: Appears between Pillars and Footer with 4 principle cards
- [ ] Footer: Shows sales@cybercade.com, About link instead of Pricing
- [ ] All animations work (scroll reveals, hovers)
- [ ] Mobile responsive: hamburger menu works, no Play Now in mobile menu

**Step 3: Commit any fixes if needed**

---

### Task 11: Final Build Verification

**Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds with no warnings or errors.

**Step 2: Commit all changes if any remain**

Final state should be clean `git status`.
