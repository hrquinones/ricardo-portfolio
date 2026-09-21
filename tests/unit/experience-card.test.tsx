import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { experience } from "@/content/experience";

const personalPay = experience[0];

describe("ExperienceCard", () => {
  it("shows the collapsed summary (role, company, dates, focus)", () => {
    render(<ExperienceCard entry={personalPay} />);
    expect(screen.getByText(personalPay.role)).toBeInTheDocument();
    expect(screen.getByText(personalPay.focus)).toBeInTheDocument();
  });

  it("keeps responsibilities collapsed until expanded", () => {
    render(<ExperienceCard entry={personalPay} />);
    const [firstResponsibility] = personalPay.responsibilities;
    expect(screen.getByText(firstResponsibility)).not.toBeVisible();
  });

  it("links each related case study by its real title", () => {
    render(<ExperienceCard entry={personalPay} />);
    expect(
      screen.getByRole("link", { name: /card onboarding optimization/i }),
    ).toHaveAttribute("href", "/work/card-onboarding");
  });
});
