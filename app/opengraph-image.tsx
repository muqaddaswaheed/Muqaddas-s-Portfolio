import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050506 0%, #0a0a0c 60%, #04120d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#10b981",
            fontSize: 28,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#10b981",
              color: "#050506",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            M
          </div>
          Available for work
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 40, letterSpacing: -2 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 44, color: "#34d399", marginTop: 8 }}>{site.role}</div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.55)", marginTop: 28, maxWidth: 900 }}>
          Next.js · React · TypeScript · Node · MongoDB · Firebase
        </div>
      </div>
    ),
    size
  );
}
