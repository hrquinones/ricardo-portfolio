import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";
import { formatDateRange } from "@/lib/format-date";

export function ExperienceSnapshot() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Experience"
            title="19+ years across backend, architecture, and modernization."
          />
          <LinkArrow href="/experience">View full experience</LinkArrow>
        </div>

        <ol className="mt-10 flex flex-col divide-y divide-border border-y border-border">
          {experience.map((entry) => (
            <li
              key={entry.id}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-medium text-foreground">
                  {entry.role}
                  <span className="text-muted"> · {entry.company}</span>
                </p>
                <p className="mt-1 text-sm text-muted">{entry.focus}</p>
              </div>
              <p className="font-mono text-sm whitespace-nowrap text-muted">
                {formatDateRange(entry.startDate, entry.endDate)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
