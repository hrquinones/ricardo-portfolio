# Design / UX Spec

## 1. Direction

Concept:
**Engineering × Product × Minimalism**

Desired impression:

> This person designs complex systems and explains them simply.

The site should feel like an engineering portfolio, not a generic CV template, freelance landing page, or “hacker” website.

## 2. Visual principles

- Impact first
- Progressive disclosure
- Architecture as a visual differentiator
- Strong typography
- Minimal decoration
- Dark-first experience
- One accent color
- Motion used to communicate flow, not spectacle

## 3. Typography

Primary: Inter
Technical / metadata: JetBrains Mono

## 4. Color direction

Dark-first:

- Background: near-black
- Surface: dark gray
- Border: subtle gray
- Primary text: near-white
- Secondary text: muted gray
- Accent: one technology-oriented color, preferably electric cyan/blue

Exact tokens belong to implementation.

## 5. Navigation

Desktop:

- Ricardo / RQ brand
- Work
- Experience
- About
- CV
- Contact

Mobile:

- compact brand
- menu button
- accessible keyboard navigation

Navbar:

- sticky;
- transparent initially;
- gains surface/background on scroll.

## 6. Home structure

1. Navigation
2. Hero
3. Impact Metrics
4. Selected Work
5. Engineering Philosophy
6. Experience Snapshot
7. Technical Expertise
8. Contact CTA
9. Footer

## 7. Hero

Headline direction:

> I build systems that scale.

Supporting positioning:

> Senior Backend Engineer · Tech Lead

CTA:

- View my work
- Download CV

Prefer an abstract architecture visual over a generic stock developer image.

## 8. Impact

Display 4 high-value metrics:

- 19+ years
- <1% card-onboarding error rate
- -90% provider API requests
- 50% response-time improvement

Use subtle count-up animation only if it improves comprehension.

## 9. Selected Work

Use a responsive grid of case-study cards.

Each card:

- number;
- category;
- title;
- concise description;
- primary metric;
- technology tags;
- “Explore case study” link.

## 10. Case-study page

Structure:

1. Back to Work
2. Hero
3. Context
4. Problem
5. Approach
6. Architecture
7. Before / After
8. Results
9. Lessons Learned
10. Related work

## 11. Experience

Use a clean timeline.

Collapsed experience entries should show:

- company;
- role;
- dates;
- concise focus.

Expanded content may show:

- responsibilities;
- highlights;
- technologies;
- links to related case studies.

## 12. About

More personal than the CV while remaining professional.

Emphasize:

- breadth of experience;
- engineering mindset;
- architecture;
- systems;
- impact.

## 13. Technical expertise

Do not use skill bars or percentages.

Group technologies into meaningful categories:

- Backend
- Architecture
- Databases
- Cloud / Infrastructure
- Mobile
- Observability / Tooling

## 14. CV

Keep page minimal:

- name;
- title;
- experience;
- Download PDF.

The portfolio tells the story; the PDF remains the formal document.

## 15. Contact

Use a strong closing CTA:

> Let's talk.

Channels:

- LinkedIn
- Email
- GitHub where available

## 16. Mobile

Mobile-first layout.

Hero and cards become single-column.
Metrics use a 2×2 grid where practical.
Case-study diagrams must remain readable.

## 17. Motion

Allowed:

- subtle fade/slide;
- metric count-up;
- line/flow animation;
- hover transitions.

Avoid:

- permanent particle effects;
- excessive parallax;
- bouncing text;
- unnecessary loaders.

Respect `prefers-reduced-motion`.

## 18. Accessibility

Required:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- sufficient contrast;
- meaningful alt text;
- accessible buttons/links;
- reduced-motion support.

## 19. Responsive breakpoints

Reference:

- Mobile: <640px
- Tablet: 640–1024px
- Desktop: 1024–1440px
- Large: >1440px

Use responsive behavior rather than treating these as rigid device categories.

## 20. Component inventory

Layout:

- Navbar
- Footer
- Container

Hero:

- Hero
- ArchitectureVisual

Impact:

- MetricsSection
- MetricCard

Work:

- CaseStudyCard
- CaseStudyGrid
- ArchitectureDiagram
- BeforeAfter
- ResultMetrics

Experience:

- ExperienceTimeline
- ExperienceCard

Expertise:

- ExpertiseSection
- ExpertiseGroup
- TechnologyTag

UI:

- Button
- Badge
- SectionHeading
- LinkArrow
