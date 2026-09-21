function resolveSiteUrl(): string {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
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
