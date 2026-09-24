import { ImageResponse } from "next/og";

export const alt = "Svezhen Bratanov — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "86px",
        background: "#070a0d",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#bef264", fontSize: 24 }}>
        <div style={{ width: 12, height: 12, borderRadius: 99, background: "#bef264" }} />
        AVAILABLE FOR OPPORTUNITIES
      </div>
      <div style={{ marginTop: 38, display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.03 }}>
        <span>Svezhen Bratanov</span>
        <span style={{ color: "#67e8f9" }}>Full-Stack Developer</span>
      </div>
      <div style={{ marginTop: 38, display: "flex", fontSize: 26, color: "#a1a1aa" }}>
        React · Angular · Next.js · Node.js · TypeScript
      </div>
    </div>,
    size,
  );
}
