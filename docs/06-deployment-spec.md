# Deployment Specification

## Hosting

Primary:
Vercel.

## Source control

GitHub.

## Environments

- Local
- Preview
- Production

## Pull requests

Every PR should:

- run CI;
- produce a preview deployment where configured.

## Production

Production deploys from `main` after required checks pass.

## Domain

TBD.

## Environment variables

Keep secrets out of Git.

Use `.env.example` to document non-secret configuration requirements.

## Deployment checks

- successful build;
- no failed quality gates;
- production metadata correct;
- sitemap accessible;
- robots configuration correct;
- canonical domain configured;
- CV asset available.
