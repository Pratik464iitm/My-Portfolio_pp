# Pratik Panwar — Portfolio

A React + Vite personal engineering portfolio built from Pratik Panwar's resume
(IIT Madras, BS22B029). Dark, cinematic, systems-driven design — see design
notes at the bottom.

## Stack

- React 18 + Vite 5
- Framer Motion (animation)
- lucide-react (icons)
- Plain CSS with a small design-token system (`src/index.css`) — no UI kit,
  no Tailwind, so every visual choice is intentional and easy to trace.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 4. Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite: build command `vite build`,
output directory `dist`. Accept the defaults.

**Option B — Git + Vercel dashboard**

1. Push this folder to a GitHub repository.
2. In the [Vercel dashboard](https://vercel.com/new), import that repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. Deploy.

No environment variables are required — the site is fully static.

## Editing content

All resume-derived content (education, experience, projects, skills,
competitive-programming stats, leadership, contact links) lives in one file:

```
src/data/content.js
```

Update facts there and every section (cards, timelines, the skills
constellation, the contact links) updates automatically — nothing else needs
touching.

## Replacing the résumé file

The "View résumé" button links to `public/resume.pdf`. Swap that file for an
updated résumé (keep the filename `resume.pdf`, or update the path in
`src/data/content.js` → `personal.resumeFile`).

## Placeholders to review before publishing

- **Email** — not present on the source resume, so the Contact section
  currently points people to LinkedIn instead of a mailto link. Add a real
  address in `src/data/content.js` → `personal.links.email` if you want a
  direct email CTA.
- **Project repo links** — the resume doesn't list a separate GitHub URL per
  project, so all four project cards currently link to the general GitHub
  profile (`github.com/Pratik464iitm`). If each project has its own repo,
  update `github` per project in `src/data/content.js`.
- **Live demos** — none are listed on the resume, so every project modal
  shows "[ Live demo not published ]" instead of a fabricated link. Add a
  `demo` URL per project once (if) one exists.

## Design notes

- **Palette**: near-black base with two accents — teal (`--bio`) for the
  biotechnology thread, violet (`--systems`) for the software-systems thread
  — used deliberately rather than as decoration.
- **Type**: Space Grotesk for display/body, JetBrains Mono reserved for
  metadata, numbers and labels.
- **Signature interaction**: the hero's cursor-reactive node network (CODE /
  SYSTEMS / DATA / PRODUCT / PROBLEM SOLVING), and the Skills section's
  hover-to-highlight constellation linking each technology to the project(s)
  it was actually used in.
- Respects `prefers-reduced-motion` throughout (the loader, node parallax and
  counters all degrade to instant/static states).

## Accessibility & performance checklist

- [x] Fully responsive: 1440 / 1280 / 1024 / 768 / 390 / 375px
- [x] Semantic sectioning, landmark elements, alt/aria labels on icon-only
      controls
- [x] Visible focus states (`:focus-visible`) throughout
- [x] Keyboard-operable nav, project modal (Escape to close, focus moves to
      close button on open) and skill chips
- [x] `prefers-reduced-motion` respected globally
- [x] No information conveyed only on `:hover` — every hover affordance has
      a click/tap/focus equivalent
- [x] Custom cursor and heavy parallax auto-disabled on touch/coarse pointers
- [x] No fabricated resume information — see "Placeholders" above for the
      only three items that are honestly marked as missing from the source
      resume rather than invented
