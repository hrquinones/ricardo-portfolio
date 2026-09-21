import { describe, expect, it } from "vitest";
import { formatDateRange, formatMonthYear } from "@/lib/format-date";

describe("formatMonthYear", () => {
  it("formats a YYYY-MM string as an abbreviated month and year", () => {
    expect(formatMonthYear("2021-11")).toBe("Nov 2021");
  });
});

describe("formatDateRange", () => {
  it("formats a closed range", () => {
    expect(formatDateRange("2018-02", "2021-11")).toBe("Feb 2018 — Nov 2021");
  });

  it("formats an open-ended range as Present", () => {
    expect(formatDateRange("2021-11", "present")).toBe("Nov 2021 — Present");
  });
});
