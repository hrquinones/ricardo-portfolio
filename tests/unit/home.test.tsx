import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { profile } from "@/content/profile";

describe("Home", () => {
  it("renders the hero headline and primary CTAs", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: profile.tagline }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View my work" })).toHaveAttribute(
      "href",
      "/work",
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/cv",
    );
  });

  it("renders every home section as a landmark heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /engineering impact, measured/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /engineering with measurable/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /designs complex systems/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /technologies, grouped/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /let's talk/i }),
    ).toBeInTheDocument();
  });
});
