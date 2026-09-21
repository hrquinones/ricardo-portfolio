import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow="Experience"
          title="19+ years across backend, architecture, and modernization."
          description="Expand a role for responsibilities, technologies, and the case studies behind it."
        />
        <div className="mt-10">
          <ExperienceTimeline entries={experience} />
        </div>
      </Container>
    </div>
  );
}
