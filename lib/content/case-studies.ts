import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { caseStudyMetaSchema, type CaseStudyMeta } from "@/lib/content/schema";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");

export interface CaseStudy {
  meta: CaseStudyMeta;
  content: string;
}

function readCaseStudyFile(fileName: string): CaseStudy {
  const filePath = path.join(CASE_STUDIES_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta = caseStudyMetaSchema.parse(data);

  const expectedFileName = `${meta.slug}.mdx`;
  if (expectedFileName !== fileName) {
    throw new Error(
      `Case study slug "${meta.slug}" does not match file name "${fileName}"`,
    );
  }

  return { meta, content };
}

function caseStudyFileNames(): string[] {
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudyFileNames().map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudyFileNames()
    .map(readCaseStudyFile)
    .sort((a, b) => a.meta.title.localeCompare(b.meta.title));
}

export function getCaseStudyBySlug(slug: string): CaseStudy {
  return readCaseStudyFile(`${slug}.mdx`);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((caseStudy) => caseStudy.meta.featured);
}

export function getRelatedCaseStudies(slug: string, limit = 2): CaseStudy[] {
  const all = getAllCaseStudies();
  const current = all.find((caseStudy) => caseStudy.meta.slug === slug);
  const others = all.filter((caseStudy) => caseStudy.meta.slug !== slug);

  if (!current) return others.slice(0, limit);

  return others
    .map((caseStudy) => ({
      caseStudy,
      sharedCategories: caseStudy.meta.category.filter((category) =>
        current.meta.category.includes(category),
      ).length,
    }))
    .sort((a, b) => b.sharedCategories - a.sharedCategories)
    .slice(0, limit)
    .map(({ caseStudy }) => caseStudy);
}
