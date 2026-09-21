import { test, expect } from "@playwright/test";

test("contact page exposes working external and email links", async ({
  page,
}) => {
  await page.goto("/contact");
  const main = page.getByRole("main");

  const emailLink = main.getByRole("link", { name: "Email me" });
  await expect(emailLink).toHaveAttribute(
    "href",
    "mailto:hrquinones@gmail.com",
  );

  const linkedInLink = main.getByRole("link", { name: "LinkedIn" });
  await expect(linkedInLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/ricardo-quiñones/",
  );
  await expect(linkedInLink).toHaveAttribute("target", "_blank");
  await expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
});

test("footer external links are reachable from every page", async ({
  page,
}) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "target",
    "_blank",
  );
  await expect(footer.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    "mailto:hrquinones@gmail.com",
  );
});
