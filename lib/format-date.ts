const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatMonthYear(date: string): string {
  const [year, month] = date.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = formatMonthYear(startDate);
  const end = endDate === "present" ? "Present" : formatMonthYear(endDate);
  return `${start} — ${end}`;
}
