import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";

const description =
  "19+ years of backend engineering experience across Personal Pay, Poder Judicial de Santiago del Estero, Istorming, and Prosegur.";

export const metadata: Metadata = {
  title: "Experience",
  description,
  alternates: { canonical: "/experience" },
  openGraph: { title: "Experience", description, url: "/experience" },
};

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
