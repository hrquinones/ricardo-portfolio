# Ricardo Quiñones — Portfolio Agent Instructions

## Purpose

This repository contains the personal engineering portfolio of Ricardo Quiñones.

The portfolio must communicate:

- Senior Backend Engineering experience
- Tech Lead experience
- Software architecture expertise
- Legacy modernization
- Measurable engineering impact

## Source of truth

Before implementing or changing anything, read:

1. `docs/01-strategy-content-spec.md`
2. `docs/02-design-ux-spec.md`
3. `docs/03-technical-architecture-spec.md`

For specialized work also read:

- `docs/04-seo-spec.md`
- `docs/05-testing-spec.md`
- `docs/06-deployment-spec.md`

## Core rules

- Do not invent professional experience, projects, metrics, responsibilities, employers, dates, or technologies.
- Keep content separated from presentation.
- Prefer Server Components.
- Use Client Components only when interaction requires them.
- Prefer static-first rendering.
- Do not add a backend, database, CMS, Redis, authentication, or other infrastructure unless explicitly required.
- Do not add dependencies without a concrete reason.
- Mobile, accessibility, SEO, and performance are first-class requirements.
- Preserve the visual direction: Engineering × Product × Minimalism.
- Prefer real engineering impact over decorative technology.
- Do not use fake skill percentages, fake GitHub activity, or unsupported claims.

## Development workflow

Before coding:

1. Read the relevant specs.
2. Inspect the existing implementation.
3. Identify affected files and components.
4. Implement the smallest appropriate change.
5. Update documentation if an architectural decision changes.

After coding:

1. Run typecheck.
2. Run lint.
3. Run unit tests.
4. Run build.
5. Run E2E tests when the change affects user flows.
6. Check mobile and accessibility when UI changes.

## Definition of Done

A feature is complete only when:

- TypeScript passes.
- ESLint passes.
- Relevant tests pass.
- Build passes.
- Mobile behavior is acceptable.
- Accessibility requirements are met.
- SEO requirements are met where applicable.
- No unnecessary Client Component was introduced.
- No unnecessary dependency was introduced.
- Documentation remains consistent with implementation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
