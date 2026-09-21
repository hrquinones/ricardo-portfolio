import { ArchitectureVisual } from "@/components/home/ArchitectureVisual";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            {profile.title}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            {profile.positioning}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/work">View my work</Button>
            <Button href="/cv" variant="secondary">
              Download CV
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm">
            <ArchitectureVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
