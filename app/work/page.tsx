import type { Metadata } from "next";
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllCaseStudies } from "@/lib/content/case-studies";

const description =
  "Case studies in backend architecture, microservices, payments, and legacy modernization — with the measurable outcomes behind them.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work", description, url: "/work" },
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="py-16">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Work"
          title="Case studies from 19+ years of engineering."
          description="Architecture decisions, trade-offs, and the measurable outcomes behind them."
        />
        <div className="mt-10">
          <CaseStudyGrid caseStudies={caseStudies} />
        </div>
      </Container>
    </div>
  );
}
