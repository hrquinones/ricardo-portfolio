import Link from "next/link";
import type { ImpactMetric } from "@/content/metrics";

interface MetricCardProps {
  metric: ImpactMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const body = (
    <>
      <p className="font-mono text-3xl font-semibold text-accent sm:text-4xl">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-medium text-foreground">{metric.label}</p>
      <p className="mt-1 text-sm text-muted">{metric.description}</p>
    </>
  );

  const className =
    "rounded-lg border border-border bg-surface p-6 transition-colors duration-200";

  if (metric.relatedCaseStudySlug) {
    return (
      <Link
        href={`/work/${metric.relatedCaseStudySlug}`}
        className={`${className} block hover:border-accent`}
      >
        {body}
      </Link>
    );
  }

  return <div className={className}>{body}</div>;
}
