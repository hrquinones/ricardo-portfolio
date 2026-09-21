import { z } from "zod";

export const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export type Metric = z.infer<typeof metricSchema>;

export const caseStudyMetaSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  category: z.array(z.string()).min(1),
  role: z.string(),
  technologies: z.array(z.string()).min(1),
  featured: z.boolean(),
  metrics: z.array(metricSchema),
});

export type CaseStudyMeta = z.infer<typeof caseStudyMetaSchema>;
