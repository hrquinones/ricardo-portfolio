# ADR-005 — Server Components by default

## Status
Accepted

## Context
Most portfolio sections are static and do not require browser state.

## Decision
Use Server Components by default. Introduce Client Components only where interaction requires them.

## Consequences
- less client-side JavaScript;
- smaller browser workload;
- clear boundary for interactive components.
