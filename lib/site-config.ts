function resolveSiteUrl(): string {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  // VERCEL_PROJECT_PRODUCTION_URL is the stable production alias (the
  // project's vercel.app domain, or the custom domain once one is set) —
  // unlike VERCEL_URL, which is a new, unique URL on every deployment.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Ricardo Quiñones",
  title: "Ricardo Quiñones — Senior Backend Engineer & Tech Lead",
  description:
    "Senior Backend Engineer and Tech Lead with 19+ years of experience building scalable systems, modernizing legacy architectures, and leading backend and payments platforms.",
  url: resolveSiteUrl(),
};

export const isProductionDeployment = process.env.VERCEL_ENV === "production";
