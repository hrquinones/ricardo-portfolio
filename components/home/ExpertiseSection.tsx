import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseGroups } from "@/content/expertise";

export function ExpertiseSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Technical expertise"
          title="Technologies, grouped by what they're for."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseGroups.map((group) => (
            <div key={group.id}>
              <h3 className="font-mono text-sm tracking-widest text-muted uppercase">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
