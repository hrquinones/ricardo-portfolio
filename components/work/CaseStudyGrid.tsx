import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import type { CaseStudyMeta } from "@/lib/content/schema";

interface CaseStudyGridProps {
  caseStudies: { meta: CaseStudyMeta }[];
}

export function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map(({ meta }, index) => (
        <CaseStudyCard key={meta.slug} meta={meta} index={index} />
      ))}
    </div>
  );
}
