# ADR-002 — Static-first architecture

## Status

Accepted

## Context

Portfolio content is mostly static and shared among visitors.

## Decision

Prefer static rendering and build-time content wherever possible.

## Alternatives

- database-backed application;
- dynamic server rendering for all pages;
- external CMS.

## Consequences

- simpler infrastructure;
- strong performance;
- predictable deployment;
- content changes require a Git change and deployment.
