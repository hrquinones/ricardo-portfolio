import { describe, expect, it } from "vitest";
import { caseStudyMetaSchema } from "@/lib/content/schema";

const validFrontmatter = {
  slug: "test-case",
  title: "Test Case",
  subtitle: "A test subtitle",
  category: ["Backend"],
  role: "Engineer",
  technologies: ["Node.js"],
  featured: false,
  metrics: [{ value: "-50%", label: "Something" }],
};

describe("caseStudyMetaSchema", () => {
  it("accepts valid frontmatter", () => {
    expect(() => caseStudyMetaSchema.parse(validFrontmatter)).not.toThrow();
  });

  it("accepts an empty metrics array", () => {
    expect(() =>
      caseStudyMetaSchema.parse({ ...validFrontmatter, metrics: [] }),
    ).not.toThrow();
  });

  it("rejects frontmatter missing a required field", () => {
    const withoutTitle: Partial<typeof validFrontmatter> = {
      ...validFrontmatter,
    };
    delete withoutTitle.title;
    expect(() => caseStudyMetaSchema.parse(withoutTitle)).toThrow();
  });

  it("rejects an empty category list", () => {
    expect(() =>
      caseStudyMetaSchema.parse({ ...validFrontmatter, category: [] }),
    ).toThrow();
  });
});
