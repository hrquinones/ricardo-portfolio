# Testing Specification

## 1. Philosophy

Test behavior and risk, not implementation trivia.

## 2. Unit tests

Use Vitest for:

- content validation;
- schema validation;
- utilities;
- data transformations;
- metadata helpers.

## 3. Component tests

Prioritize components with meaningful behavior:

- Navbar;
- mobile navigation;
- theme toggle if implemented;
- CaseStudyCard;
- interactive architecture components.

Static presentation components do not need exhaustive tests.

## 4. E2E

Use Playwright.

Critical flows:

1. Home loads.
2. Home → Work.
3. Work → Case Study.
4. Case Study navigation.
5. Home → CV.
6. CV download.
7. Mobile menu.
8. Theme switching if implemented.
9. External contact links.

## 5. Accessibility

Check:

- keyboard navigation;
- visible focus;
- semantic landmarks;
- button/link names;
- contrast;
- reduced motion;
- heading hierarchy.

## 6. Responsive QA

Review at least:

- mobile;
- tablet;
- desktop;
- large desktop.

## 7. Build gates

Before merge:

- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

Run E2E for relevant UI changes.

## 8. Regression principle

A change that affects a shared component should include appropriate regression coverage.
