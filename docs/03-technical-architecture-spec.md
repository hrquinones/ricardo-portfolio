# Technical Architecture Spec

## 1. Goals

Optimize for:
1. Performance
2. SEO
3. Maintainability
4. Developer experience
5. Easy deployment

## 2. Architectural principle

Static-first and content-driven.

Avoid infrastructure that does not create user value.

Initial site does not require:
- custom backend;
- database;
- Redis;
- authentication;
- CMS;
- microservices.

## 3. Technology

- Next.js App Router
- React
- TypeScript strict
- Tailwind CSS
- MDX
- Zod
- Lucide React
- Vitest
- Playwright
- ESLint
- Prettier
- GitHub Actions
- Vercel

Use versions compatible with the current stable Next.js release when implementation starts.

## 4. Repository structure

```text
ricardo-portfolio/
├── AGENTS.md
├── TASKS.md
├── README.md
├── docs/
│   ├── 01-strategy-content-spec.md
│   ├── 02-design-ux-spec.md
│   ├── 03-technical-architecture-spec.md
│   ├── 04-seo-spec.md
│   ├── 05-testing-spec.md
│   ├── 06-deployment-spec.md
│   └── decisions/
├── app/
├── components/
├── content/
├── lib/
├── public/
├── tests/
└── .github/
```

## 5. App routes

```text
/
/work
/work/card-onboarding
/work/card-platform
/work/nfc-payments
/work/judicial-platform
/work/legacy-modernization
/experience
/about
/cv
/contact
```

## 6. App Router

Use Next.js App Router.

Server Components by default.

Client Components only where state, browser APIs, event-driven interaction, or animation logic genuinely requires them.

## 7. Home composition

`app/page.tsx` should compose sections rather than contain large implementation details.

Conceptual:
```tsx
<Hero />
<MetricsSection />
<SelectedWork />
<EngineeringPhilosophy />
<ExperienceSnapshot />
<ExpertiseSection />
<ContactCTA />
```

## 8. Content architecture

Separate content from presentation.

Structured content:
- profile;
- metrics;
- experience;
- expertise.

Use TypeScript modules for structured data.

Use MDX for rich case-study content.

## 9. Case-study frontmatter

Conceptual schema:
```ts
interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  category: string[];
  role: string;
  technologies: string[];
  featured: boolean;
  metrics: Metric[];
}
```

Validate frontmatter with Zod.

## 10. MDX

Case studies live under:
`content/case-studies/*.mdx`

MDX may embed approved React components:
- Metric
- ArchitectureDiagram
- BeforeAfter
- ResultMetrics

## 11. Styling

Tailwind CSS is the primary styling layer.

Global CSS should contain:
- design tokens;
- base typography;
- global selection/scroll behavior where appropriate;
- reduced-motion rules.

Avoid large amounts of bespoke CSS.

## 12. Design tokens

Centralize:
- background;
- surfaces;
- borders;
- foreground;
- muted text;
- accent;
- spacing;
- radii;
- typography;
- container widths.

## 13. Images

Use optimized images through Next.js image tooling when raster images are required.

Keep the first version image-light.

Prefer SVG/HTML/CSS for architectural visuals.

## 14. Architecture diagrams

Default:
- SVG;
- CSS;
- React when interaction is needed.

Do not use Canvas/WebGL unless a future requirement genuinely requires it.

## 15. SEO

Every public page needs appropriate:
- title;
- description;
- canonical URL;
- Open Graph metadata.

Global metadata belongs in `app/layout.tsx`.

Use:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/opengraph-image.tsx`

Add JSON-LD for Person and WebSite.

## 16. Accessibility

Required:
- semantic HTML;
- keyboard navigation;
- focus states;
- contrast;
- reduced motion;
- meaningful labels;
- no color-only information.

## 17. Testing

Unit: Vitest.

E2E: Playwright.

Test meaningful behavior rather than every static markup detail.

Critical E2E:
- Home → Work → Case Study
- Home → CV
- mobile navigation
- theme switching if implemented
- external links

## 18. Quality scripts

Expected scripts:
```text
dev
build
start
lint
typecheck
test
test:watch
test:e2e
format
format:check
verify
```

`verify` should execute the essential local quality gates.

## 19. CI

GitHub Actions on pull requests and pushes to main.

Minimum:
- install dependencies;
- typecheck;
- lint;
- unit tests;
- build.

Run E2E in CI when configured for stable execution.

## 20. Deployment

Primary hosting:
Vercel.

Flow:
GitHub → PR → CI → Preview → merge main → Production.

Environments:
- Local
- Preview
- Production

## 21. Security

- HTTPS
- secure headers where appropriate
- no secrets in repository
- no unnecessary APIs
- dependency review

## 22. Performance

Targets:
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Prefer:
- static rendering;
- minimal client JavaScript;
- optimized images;
- small dependency footprint.

## 23. Error handling

Provide:
- `app/not-found.tsx`
- `app/error.tsx`

Keep the error experience visually consistent with the portfolio.

## 24. ADRs

Architectural changes should be documented under `docs/decisions/`.

## 25. Definition of Done

A feature is complete when:
- TypeScript passes;
- lint passes;
- relevant tests pass;
- build passes;
- mobile works;
- accessibility requirements are met;
- SEO requirements are met;
- unnecessary client components/dependencies were avoided.
