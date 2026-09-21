import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedCaseStudies } from "@/lib/content/case-studies";

export function SelectedWork() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Engineering with measurable outcomes."
            description="A few systems that show the architecture decisions and results behind the impact numbers."
          />
          <LinkArrow href="/work">View all work</LinkArrow>
        </div>
        <div className="mt-10">
          <CaseStudyGrid caseStudies={featuredCaseStudies} />
        </div>
      </Container>
    </section>
  );
}
