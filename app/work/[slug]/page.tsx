import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { BackToWork } from "@/components/work/BackToWork";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { ResultMetrics } from "@/components/work/ResultMetrics";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  type CaseStudy,
} from "@/lib/content/case-studies";
import { mdxComponents } from "@/lib/mdx-components";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = getCaseStudyBySlug(slug);
    return {
      title: meta.title,
      description: meta.subtitle,
      alternates: { canonical: `/work/${meta.slug}` },
      openGraph: {
        title: meta.title,
        description: meta.subtitle,
        url: `/work/${meta.slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  let caseStudy: CaseStudy;
  try {
    caseStudy = getCaseStudyBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = caseStudy;
  const related = getRelatedCaseStudies(slug);

  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        <BackToWork />

        <header className="mt-8">
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            {meta.category.join(" · ")}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{meta.subtitle}</p>
          <p className="mt-4 text-sm text-muted">{meta.role}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </header>

        <div className="mt-12">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ blockJS: false }}
          />
        </div>

        {meta.metrics.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Results
            </h2>
            <div className="mt-4">
              <ResultMetrics metrics={meta.metrics} />
            </div>
          </section>
        ) : null}
      </Container>

      {related.length > 0 ? (
        <Container className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Related work
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map(({ meta: relatedMeta }, index) => (
              <CaseStudyCard
                key={relatedMeta.slug}
                meta={relatedMeta}
                index={index}
              />
            ))}
          </div>
        </Container>
      ) : null}
    </article>
  );
}
