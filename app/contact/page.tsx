import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s talk.
        </h1>
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

        <dl className="mt-12 flex flex-col gap-6 text-sm sm:flex-row sm:gap-12">
          <div>
            <dt className="font-mono text-xs tracking-widest text-muted uppercase">
              Email
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${profile.email}`}
                className="text-foreground transition-colors duration-200 hover:text-accent"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-widest text-muted uppercase">
              Location
            </dt>
            <dd className="mt-1 text-foreground">{profile.location}</dd>
          </div>
        </dl>
      </Container>
    </div>
  );
}
