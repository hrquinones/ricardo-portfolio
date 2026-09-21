import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("is transparent at the top of the page", () => {
    render(<Navbar />);
    expect(screen.getByRole("banner")).toHaveClass("bg-transparent");
  });

  it("gains a solid background once the page is scrolled", () => {
    render(<Navbar />);
    Object.defineProperty(window, "scrollY", { value: 40, writable: true });
    fireEvent.scroll(window);
    expect(screen.getByRole("banner")).toHaveClass("bg-background/90");
  });

  it("toggles the mobile menu open and closed", () => {
    render(<Navbar />);
    // One "Primary" nav (desktop) is always in the DOM; the mobile menu adds a second.
    expect(screen.getAllByRole("navigation", { name: "Primary" })).toHaveLength(
      1,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getAllByRole("navigation", { name: "Primary" })).toHaveLength(
      2,
    );

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(screen.getAllByRole("navigation", { name: "Primary" })).toHaveLength(
      1,
    );
  });
});
