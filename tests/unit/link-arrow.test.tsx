import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LinkArrow } from "@/components/ui/LinkArrow";

describe("LinkArrow", () => {
  it("renders an internal link without target=_blank", () => {
    render(<LinkArrow href="/work">Explore case study</LinkArrow>);
    const link = screen.getByRole("link", { name: /explore case study/i });
    expect(link).toHaveAttribute("href", "/work");
    expect(link).not.toHaveAttribute("target");
  });

  it("renders an external link with target=_blank and rel=noopener", () => {
    render(
      <LinkArrow href="https://linkedin.com" external>
        LinkedIn
      </LinkArrow>,
    );
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
