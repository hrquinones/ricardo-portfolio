# Portfolio Implementation Tasks

## Phase 0 — Repository setup

- [x] Initialize Git repository
- [x] Add `AGENTS.md`
- [x] Add portfolio specs under `docs/`
- [x] Add `TASKS.md`
- [x] Add `README.md`

## Phase 1 — Foundation

- [x] Initialize Next.js App Router
- [x] Configure TypeScript strict mode
- [x] Configure Tailwind CSS
- [x] Configure ESLint
- [x] Configure Prettier
- [x] Configure Vitest
- [x] Configure Playwright
- [x] Add base scripts
- [x] Create project folder structure

## Phase 2 — Design system

- [x] Define design tokens
- [x] Implement typography
- [x] Implement Container
- [x] Implement Button
- [x] Implement Badge
- [x] Implement SectionHeading
- [x] Implement LinkArrow
- [x] Implement dark-first theme
- [x] Add reduced-motion support

## Phase 3 — Content layer

- [x] Add profile data
- [x] Add impact metrics
- [x] Add experience data
- [x] Add expertise data
- [x] Define case-study schema
- [x] Add MDX loader/parser
- [x] Add Zod validation
- [x] Create initial case studies

## Phase 4 — Home

- [x] Navbar
- [x] Hero
- [x] Architecture visual
- [x] Impact metrics
- [x] Selected Work
- [x] Engineering Philosophy
- [x] Experience Snapshot
- [x] Technical Expertise
- [x] Contact CTA
- [x] Footer

## Phase 5 — Work

- [x] Work index
- [x] Case Study template
- [x] ArchitectureDiagram
- [x] BeforeAfter
- [x] ResultMetrics
- [x] Card Onboarding
- [x] Card Platform
- [x] NFC Payments
- [x] Judicial Platform
- [x] Legacy Modernization

## Phase 6 — Experience / About / CV / Contact

- [x] Experience page
- [x] About page
- [x] CV page
- [x] Contact page
- [x] CV PDF asset

## Phase 7 — SEO

- [x] Global metadata
- [x] Page metadata
- [x] Canonical URLs
- [x] Sitemap
- [x] Robots
- [x] Open Graph image
- [x] JSON-LD Person
- [x] JSON-LD WebSite

## Phase 8 — QA

- [x] Unit tests
- [x] Component tests where behavior matters
- [x] E2E critical flows
- [x] Keyboard navigation
- [x] Focus states
- [x] Contrast
- [x] Reduced motion
- [x] Mobile review
- [x] Performance review
- [x] No console errors

## Phase 9 — CI/CD

- [x] GitHub Actions CI
- [x] Pull request checks
- [x] Production build
- [x] Vercel project
- [ ] Preview deployments (blocked, see note)
- [x] Production deployment
- [ ] Domain configuration (blocked, see note)

Notes:

- **Preview deployments** need the Vercel GitHub App installed with
  access to `hrquinones/ricardo-portfolio` (Vercel dashboard → Project
  → Settings → Git → Connect Git Repository, or github.com/apps/vercel
  → Configure). This is a one-time GitHub-side authorization that can't
  be granted via API token — once installed, every PR gets an automatic
  preview deployment and pushes to `main` auto-deploy to production,
  completing the GitHub → PR → CI → Preview → merge main → Production
  flow.
- **Domain configuration**: production domain is still TBD per
  `docs/06-deployment-spec.md`. Once registered, attach it in Vercel
  (Project → Settings → Domains) and set `SITE_URL` in Vercel's
  environment variables to match — `lib/site-config.ts` already reads
  it and falls back correctly until then.
