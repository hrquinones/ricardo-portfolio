import { Badge } from "@/components/ui/Badge";
import { LinkArrow } from "@/components/ui/LinkArrow";
import type { CaseStudyMeta } from "@/lib/content/schema";

interface CaseStudyCardProps {
  meta: CaseStudyMeta;
  index: number;
}

export function CaseStudyCard({ meta, index }: CaseStudyCardProps) {
  const primaryMetric = meta.metrics[0];

  return (
    <article className="flex flex-col rounded-lg border border-border bg-surface p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs tracking-widest text-accent uppercase">
          {meta.category.join(" · ")}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
        {meta.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{meta.subtitle}</p>

      {primaryMetric ? (
        <p className="mt-4 font-mono text-2xl font-semibold text-accent">
          {primaryMetric.value}
          <span className="ml-2 font-sans text-sm font-normal text-muted">
            {primaryMetric.label}
          </span>
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {meta.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      <div className="mt-6">
        <LinkArrow href={`/work/${meta.slug}`}>Explore case study</LinkArrow>
      </div>
    </article>
  );
}
