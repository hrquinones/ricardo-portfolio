import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { formatDateRange } from "@/lib/format-date";

const description =
  "Download Ricardo Quiñones' CV — Senior Backend Engineer and Tech Lead with 19+ years of experience.";

export const metadata: Metadata = {
  title: "CV",
  description,
  alternates: { canonical: "/cv" },
  openGraph: { title: "CV", description, url: "/cv" },
};

export default function CVPage() {
  return (
    <div className="py-16">
      <Container className="max-w-2xl">
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          CV
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{profile.title}</p>

        <div className="mt-8">
          <Button href="/ricardo-quinones-cv.pdf" download>
            Download PDF
          </Button>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-border border-y border-border">
          {experience.map((entry) => (
            <div
              key={entry.id}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <p className="font-medium text-foreground">
                {entry.role}
                <span className="text-muted"> · {entry.company}</span>
              </p>
              <p className="font-mono text-sm whitespace-nowrap text-muted">
                {formatDateRange(entry.startDate, entry.endDate)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
