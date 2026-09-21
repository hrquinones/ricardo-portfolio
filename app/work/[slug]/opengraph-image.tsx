import { ImageResponse } from "next/og";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/content/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

interface OpengraphImageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyOpengraphImage({
  params,
}: OpengraphImageProps) {
  const { slug } = await params;
  const { meta } = getCaseStudyBySlug(slug);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#09090b",
        color: "#f4f4f5",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          color: "#22d3ee",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        {meta.category.join(" · ")}
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 600,
          marginTop: 24,
          maxWidth: 950,
        }}
      >
        {meta.title}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#a1a1aa",
          marginTop: 24,
          maxWidth: 850,
        }}
      >
        {meta.subtitle}
      </div>
    </div>,
    { ...size },
  );
}
