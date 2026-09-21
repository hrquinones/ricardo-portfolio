import { describe, expect, it } from "vitest";
import {
  getAllCaseStudies,
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
  getFeaturedCaseStudies,
  getRelatedCaseStudies,
} from "@/lib/content/case-studies";

const EXPECTED_SLUGS = [
  "card-onboarding",
  "card-platform",
  "nfc-payments",
  "judicial-platform",
  "legacy-modernization",
];

describe("case-study content", () => {
  it("exposes exactly the routes defined in the architecture spec", () => {
    expect(getAllCaseStudySlugs().sort()).toEqual([...EXPECTED_SLUGS].sort());
  });

  it("parses every case study against the schema without throwing", () => {
    const caseStudies = getAllCaseStudies();
    expect(caseStudies).toHaveLength(EXPECTED_SLUGS.length);
    for (const { meta, content } of caseStudies) {
      expect(meta.slug).toBeTruthy();
      expect(meta.category.length).toBeGreaterThan(0);
      expect(meta.technologies.length).toBeGreaterThan(0);
      expect(content.trim().length).toBeGreaterThan(0);
    }
  });

  it("looks up a case study by slug", () => {
    const { meta } = getCaseStudyBySlug("card-onboarding");
    expect(meta.title).toBe("Card Onboarding Optimization");
    expect(meta.metrics).toContainEqual({
      value: "<1%",
      label: "Error rate (from 15%)",
    });
  });

  it("only returns featured case studies from getFeaturedCaseStudies", () => {
    const featured = getFeaturedCaseStudies();
    expect(featured.length).toBeGreaterThan(0);
    for (const { meta } of featured) {
      expect(meta.featured).toBe(true);
    }
  });

  it("excludes the current slug from its related case studies", () => {
    const related = getRelatedCaseStudies("card-onboarding");
    expect(related.length).toBeGreaterThan(0);
    expect(related.some((cs) => cs.meta.slug === "card-onboarding")).toBe(
      false,
    );
  });

  it("prefers related case studies that share a category", () => {
    const related = getRelatedCaseStudies("card-onboarding", 1);
    expect(related[0].meta.slug).toBe("card-platform");
  });
});
