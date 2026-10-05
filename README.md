# MOHTARM SAAD — Engineering Portfolio & Technical Archive

> Production-grade personal engineering website, technical case-study repository, and life archive for **Muhammad Saad (Mohtarm Saad)**, Senior Computer Engineering undergraduate at NUTECH Islamabad (CEN Batch 22).

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 1. Architecture Overview

This project is built with the **Next.js App Router**, featuring static site generation (SSG), dynamic route metadata, full Open Graph social card support, and zero runtime client bloat.

### Directory Structure
```text
├── app/
│   ├── layout.tsx              # Root layout (Inter + JetBrains Mono, SEO metadata)
│   ├── page.tsx                # Homepage (Hero, Story, Featured Work, Skills, Education, Timeline, Contact)
│   ├── globals.css             # Tailwind CSS v4 and core keyframe animation definitions
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic sitemap.xml indexing all pages and dynamic slugs
│   ├── not-found.tsx           # Custom 404 page
│   ├── work/
│   │   ├── page.tsx            # Full engineering project catalog & CEPs
│   │   └── [slug]/
│   │       └── page.tsx        # Dedicated project case-study route with IEEE PDF download
│   ├── notes/
│   │   ├── page.tsx            # Engineering manuscripts, mental models & notes index
│   │   └── [slug]/
│   │       └── page.tsx        # Dedicated long-form reading route with Open Graph cards
│   ├── now/
│   │   └── page.tsx            # nownownow.com-style living status page
│   └── life/
│       └── page.tsx            # JZT & GYFHA leadership track record and photo gallery
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Hero, Story, FeaturedWork, Skills, Education, Timeline, Contact, BackgroundEffects
│   └── ui/                     # JourneyCard (3D fanning deck), Gallery (Lightbox)
├── lib/
│   ├── content.ts              # Typed data store & query helpers (single source of truth)
│   └── metadata.ts             # Centralized OpenGraph, Twitter, and SEO metadata builder
└── public/
    ├── docs/                   # SENTRYX IEEE Technical Report (PDF)
    ├── leadership/             # JZT leadership photography & badges
    ├── projects/               # Project diagrams and schematics (SVG/JPG)
    ├── story/                  # Story journey card imagery
    ├── profile.jpg             # High-resolution hero portrait
    └── Saad_CV.pdf             # Downloadable engineering resume
```

---

## 2. Multi-Page Routes

| Route | Type | Description |
| :--- | :--- | :--- |
| `/` | Static | High-impact landing page (Hero, Story, Highlights, Direct Contact). |
| `/work` | Static | Full engineering portfolio and additional coursework CEPs. |
| `/work/[slug]` | SSG | Dedicated case-study pages (e.g. `/work/sentryx-ai-alpr`). |
| `/notes` | Static | Technical writing, heuristics, and research index. |
| `/notes/[slug]` | SSG | Dedicated article reader pages (e.g. `/notes/sentryx-ieee-defense-manuscript`). |
| `/now` | Static | Public status snapshot of current senior semester focus. |
| `/life` | Static | Photography archive and student leadership track record (JZT, GYFHA). |
| `/sitemap.xml` | Dynamic | Complete XML sitemap generated on build. |
| `/robots.txt` | Dynamic | Search engine crawler rules pointing to sitemap. |

---

## 3. Development & Maintenance

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `10+`

### Setup Commands
```bash
# Install dependencies
npm install

# Start development server with Turbopack (runs at http://localhost:3000)
npm run dev

# Run high-speed linter (Oxlint)
npm run lint

# Production build and typecheck
npm run build

# Start production server locally
npm run start
```

---

## 4. Content Updates

All content is managed through a single typed data layer in [`lib/content.ts`](lib/content.ts):
- **Add / Edit Projects**: Modify the `projects` array in `lib/content.ts`. Each project automatically receives its own static route at `/work/[slug]`.
- **Add / Publish Notes**: Add an entry to the `notes` array in `lib/content.ts`. Setting `published: true` makes it accessible at `/notes/[slug]` and indexes it in `sitemap.xml`.
- **Update Currently / Now**: Update `homeIntro.currently` or `nowContent` in `lib/content.ts`.
- **Update Milestones**: Add items to `timeline` in `lib/content.ts`.
- **Update Resume / Papers**: Overwrite `public/Saad_CV.pdf` or `public/docs/SENTRYX-IEEE-Final-Report.pdf`.

---

## 5. Deployment on Vercel

1. Push this repository to GitHub (`main` branch).
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import the `Saad-Portfolio` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**.
6. Under **Settings > Domains**, add your custom domain: `mohtarmsaad.com`.
