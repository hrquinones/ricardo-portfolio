import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PRINCIPLES = [
  {
    title: "Fix the dependency, not just the error.",
    description:
      "The card-onboarding error rate dropped fastest once the fix targeted call volume to the provider's API, not just individual failures.",
  },
  {
    title: "Architecture boundaries should move together.",
    description:
      "Splitting a backend into microservices pays off fastest when the frontend boundary — a BFF per product — moves with it, not after it.",
  },
  {
    title: "Ship the MVP, then earn the rewrite.",
    description:
      "The judicial virtual desk replaced a physical office in a month by shipping a working MVP first and evolving it under real usage.",
  },
  {
    title: "Modernization doesn't require a rewrite.",
    description:
      "Legacy PHP and HR platforms both became maintainable by introducing structure — design patterns, a shared platform — not by replacing live systems outright.",
  },
];

export function EngineeringPhilosophy() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Engineering philosophy"
          title="Designs complex systems, explains them simply."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{principle.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
