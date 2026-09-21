import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          fontSize: 28,
          color: "#22d3ee",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        {profile.title}
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 600,
          marginTop: 24,
          maxWidth: 900,
        }}
      >
        {profile.tagline}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#a1a1aa",
          marginTop: 24,
          maxWidth: 820,
        }}
      >
        {profile.positioning}
      </div>
    </div>,
    { ...size },
  );
}
