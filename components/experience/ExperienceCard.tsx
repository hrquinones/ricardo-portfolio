import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LinkArrow } from "@/components/ui/LinkArrow";
import type { ExperienceEntry } from "@/content/experience";
import { getCaseStudyBySlug } from "@/lib/content/case-studies";
import { formatDateRange } from "@/lib/format-date";

interface ExperienceCardProps {
  entry: ExperienceEntry;
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  const relatedCaseStudies = (entry.relatedCaseStudySlugs ?? []).map(
    (slug) => getCaseStudyBySlug(slug).meta,
  );

  return (
    <details className="group py-6">
      <summary className="flex cursor-pointer list-none flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-3">
          <ChevronDown
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
          />
          <div>
            <p className="font-medium text-foreground">
              {entry.role}
              <span className="text-muted"> · {entry.company}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{entry.focus}</p>
          </div>
        </div>
        <p className="font-mono text-sm whitespace-nowrap text-muted sm:pl-7">
          {formatDateRange(entry.startDate, entry.endDate)}
        </p>
      </summary>

      <div className="mt-4 pl-7">
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
          {entry.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {entry.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>

        {relatedCaseStudies.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {relatedCaseStudies.map((caseStudy) => (
              <LinkArrow key={caseStudy.slug} href={`/work/${caseStudy.slug}`}>
                {caseStudy.title}
              </LinkArrow>
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}
