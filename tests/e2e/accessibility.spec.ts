import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/work",
  "/work/card-onboarding",
  "/experience",
  "/about",
  "/cv",
  "/contact",
];

for (const route of ROUTES) {
  test(`${route} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([]);
  });

  test(`${route} has exactly one h1`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
  });
}
