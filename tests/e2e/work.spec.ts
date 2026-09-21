import { test, expect } from "@playwright/test";

test("home -> work -> case study", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "View my work" }).click();
  await expect(page).toHaveURL("/work");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Case studies from 19+ years of engineering.",
    }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Explore case study" }).first().click();
  await expect(page).toHaveURL(/\/work\/.+/);
  await expect(page.getByRole("link", { name: "Back to Work" })).toBeVisible();
});

test("unknown case study slug renders the 404 page", async ({ page }) => {
  const response = await page.goto("/work/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { level: 1, name: "Page not found." }),
  ).toBeVisible();
});
