import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Design system"
          title="Foundation ready."
          description="Design tokens, typography, and the base UI components are wired up."
        />
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#">View my work</Button>
          <Button href="#" variant="secondary">
            Download CV
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Node.js</Badge>
          <Badge>NestJS</Badge>
          <Badge>Microservices</Badge>
        </div>
        <LinkArrow href="#">Explore case study</LinkArrow>
      </Container>
    </main>
  );
}
