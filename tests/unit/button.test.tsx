import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders as a link when href is provided", () => {
    render(<Button href="/work">View my work</Button>);
    const link = screen.getByRole("link", { name: "View my work" });
    expect(link).toHaveAttribute("href", "/work");
  });

  it("renders as a button when href is omitted", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute(
      "type",
      "submit",
    );
  });
});
