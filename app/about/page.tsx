import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          About
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.name}
        </h1>

        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
          <p>
            Ricardo has spent 19+ years turning ambiguous, often broken systems
            into ones that scale. That arc runs from HR and payroll platforms
            serving over 10,000 employees at Prosegur, through enterprise
            services and legacy migrations across LATAM, to building a judicial
            system&apos;s public-facing infrastructure from the ground up, to
            leading backend and architecture for a card platform at Personal Pay
            today.
          </p>
          <p>
            The pattern across those systems is consistent: find where a
            third-party dependency, a legacy constraint, or an unclear
            architectural boundary is quietly driving cost, risk, or complexity
            — and redesign around it, rather than patching symptoms. That
            mindset is what turned a 15% card-onboarding error rate into under
            1%, and a physical government office into a virtual desk shipped as
            a working MVP in one month, during a pandemic, under real time
            pressure.
          </p>
          <p>
            That same approach carries into how systems get built, not just
            fixed: splitting a card &quot;microlith&quot; into microservices
            with a per-product BFF, migrating legacy PHP and HR platforms onto
            maintainable, shared architectures without full rewrites, and
            building the observability (Datadog, Dynatrace) to see whether a
            change actually worked.
          </p>
          <p>Currently: {profile.title} at Personal Pay.</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/work">View my work</Button>
          <Button href="/experience" variant="secondary">
            Full experience
          </Button>
        </div>
      </Container>
    </div>
  );
}
