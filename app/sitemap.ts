import type { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/lib/content/case-studies";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/experience",
    "/about",
    "/cv",
    "/contact",
  ];
  const caseStudyRoutes = getAllCaseStudySlugs().map((slug) => `/work/${slug}`);

  return [...staticRoutes, ...caseStudyRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
