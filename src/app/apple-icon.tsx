import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg width="112" height="99" viewBox="0 0 34 30" fill="#60a5fa">
          <path d="M8 16H9Q10 16 10 17V22A8 8 0 0 1 2 30H1Q0 30 0 29V24A8 8 0 0 1 8 16Z" />
          <path d="M20 8H21Q22 8 22 9V22A8 8 0 0 1 14 30H13Q12 30 12 29V16A8 8 0 0 1 20 8Z" />
          <path d="M32 0H33Q34 0 34 1V22A8 8 0 0 1 26 30H25Q24 30 24 29V8A8 8 0 0 1 32 0Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
