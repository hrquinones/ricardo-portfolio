import type { MetadataRoute } from "next";
import { isProductionDeployment, siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isProductionDeployment ? "/" : undefined,
      disallow: isProductionDeployment ? undefined : "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
