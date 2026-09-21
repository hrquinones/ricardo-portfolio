import type { MDXComponents } from "mdx/types";
import { ArchitectureDiagram } from "@/components/work/ArchitectureDiagram";
import { BeforeAfter } from "@/components/work/BeforeAfter";
import { Metric } from "@/components/work/Metric";
import { ResultMetrics } from "@/components/work/ResultMetrics";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 text-2xl font-semibold tracking-tight text-foreground first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props) => <p className="mt-4 leading-relaxed text-muted" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  ArchitectureDiagram,
  BeforeAfter,
  Metric,
  ResultMetrics,
};
