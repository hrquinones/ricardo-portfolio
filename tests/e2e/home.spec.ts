import { test, expect } from "@playwright/test";

test("home page loads and renders the hero", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "I build systems that scale.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "View my work" })).toBeVisible();
});

test("mobile menu opens and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only interaction");
  await page.goto("/");
  const mobileMenu = page.locator("#mobile-menu");
  await expect(mobileMenu).toBeHidden();

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    mobileMenu.getByRole("link", { name: "Work", exact: true }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Close menu" }).click();
  await expect(mobileMenu).toBeHidden();
});
