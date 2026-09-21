import { afterEach, describe, expect, it, vi } from "vitest";
import { getAllCaseStudies } from "@/lib/content/case-studies";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes every static route and every case study", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const path of [
      "",
      "/work",
      "/experience",
      "/about",
      "/cv",
      "/contact",
    ]) {
      expect(urls).toContain(`http://localhost:3000${path}`);
    }
    for (const { meta } of getAllCaseStudies()) {
      expect(urls).toContain(`http://localhost:3000/work/${meta.slug}`);
    }
  });
});

describe("robots", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("disallows crawling outside production", async () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    vi.resetModules();
    const { default: robots } = await import("@/app/robots");
    expect(robots().rules).toMatchObject({ disallow: "/" });
  });

  it("allows crawling in production", async () => {
    vi.stubEnv("VERCEL_ENV", "production");
    vi.resetModules();
    const { default: robots } = await import("@/app/robots");
    expect(robots().rules).toMatchObject({ allow: "/" });
  });
});

describe("case-study SEO hygiene", () => {
  it("has a unique title per case study", () => {
    const titles = getAllCaseStudies().map((cs) => cs.meta.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("has a unique, non-empty subtitle (used as the meta description) per case study", () => {
    const subtitles = getAllCaseStudies().map((cs) => cs.meta.subtitle);
    for (const subtitle of subtitles) {
      expect(subtitle.length).toBeGreaterThan(0);
    }
    expect(new Set(subtitles).size).toBe(subtitles.length);
  });
});
