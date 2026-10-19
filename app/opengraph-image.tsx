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
          background: "linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 55%, #F0FDFA 100%)",
          color: "#171717",
          fontFamily: "sans-serif",
          borderBottom: "12px solid #0D9488",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#525252",
            fontSize: 28,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#171717",
              color: "#FFFFFF",
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
        <div style={{ fontSize: 44, color: "#0F766E", marginTop: 8 }}>{site.role}</div>
        <div style={{ fontSize: 26, color: "#525252", marginTop: 28, maxWidth: 900 }}>
          Next.js · React · TypeScript · Node · MongoDB · Firebase
        </div>
      </div>
    ),
    size
  );
}
