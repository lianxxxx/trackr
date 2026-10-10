import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trackr: Know where your money actually goes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #dbeafe 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="125" height="110" viewBox="0 0 34 30" fill="#60a5fa">
            <path d="M8 16H9Q10 16 10 17V22A8 8 0 0 1 2 30H1Q0 30 0 29V24A8 8 0 0 1 8 16Z" />
            <path d="M20 8H21Q22 8 22 9V22A8 8 0 0 1 14 30H13Q12 30 12 29V16A8 8 0 0 1 20 8Z" />
            <path d="M32 0H33Q34 0 34 1V22A8 8 0 0 1 26 30H25Q24 30 24 29V8A8 8 0 0 1 32 0Z" />
          </svg>
          <div
            style={{
              fontSize: 140,
              color: "#0f172a",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Trackr
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 56,
            color: "#0f172a",
            fontFamily: "sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Know where your money actually goes.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#64748b",
            fontFamily: "sans-serif",
          }}
        >
          Personal finance tracker · Philippines
        </div>
      </div>
    ),
    { ...size },
  );
}
