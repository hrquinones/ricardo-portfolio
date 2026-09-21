import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-md text-muted">
          Open to conversations about backend architecture, modernization, and
          teams that need a tech lead who ships.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${profile.email}`}>Email me</Button>
          <Button
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            LinkedIn
          </Button>
        </div>
      </Container>
    </section>
  );
}
