import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import CVPage from "@/app/cv/page";
import ExperiencePage from "@/app/experience/page";
import { profile } from "@/content/profile";

describe("ExperiencePage", () => {
  it("renders an h1 and one entry per role", () => {
    render(<ExperiencePage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("group")).toHaveLength(4);
  });
});

describe("AboutPage", () => {
  it("renders the profile name as the h1", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: profile.name }),
    ).toBeInTheDocument();
  });
});

describe("CVPage", () => {
  it("links Download PDF to the real CV asset", () => {
    render(<CVPage />);
    expect(screen.getByRole("link", { name: "Download PDF" })).toHaveAttribute(
      "href",
      "/ricardo-quinones-cv.pdf",
    );
  });
});

describe("ContactPage", () => {
  it("renders a mailto link with the real email", () => {
    render(<ContactPage />);
    expect(screen.getByRole("link", { name: "Email me" })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
  });
});
