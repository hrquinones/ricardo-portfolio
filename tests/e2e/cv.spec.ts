import { test, expect } from "@playwright/test";

test("home -> cv -> download", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Download CV" }).click();
  await expect(page).toHaveURL("/cv");
  await expect(
    page.getByRole("heading", { level: 1, name: "Ricardo Quiñones" }),
  ).toBeVisible();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download PDF" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("ricardo-quinones-cv.pdf");
});

test("experience timeline expands a role to reveal its case studies", async ({
  page,
}) => {
  await page.goto("/experience");
  const firstRole = page.locator("details").first();
  await expect(firstRole.getByRole("link")).toBeHidden();
  await firstRole.locator("summary").click();
  await expect(firstRole.getByRole("link").first()).toBeVisible();
});
