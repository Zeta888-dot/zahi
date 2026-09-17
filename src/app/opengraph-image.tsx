import { ImageResponse } from "next/og";

export const alt = "zahi. AI Virtual Try-On for eCommerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#050505",
          color: "#f5f5f2",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>
            <span>
              zahi<span style={{ color: "#ff6900" }}>.</span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 16,
              color: "#77736e",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            AI Virtual Try-On
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              lineHeight: 0.94,
              letterSpacing: "-0.055em",
              maxWidth: 1000,
            }}
          >
            <span>
              Your store,
            </span>
            <span>
              instantly try-on.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 24,
              color: "#77736e",
            }}
          >
            Turn product images into realistic try-on experiences.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 15,
            color: "#77736e",
          }}
        >
          <span>zahi.</span>
          <span>Virtual try-on for modern commerce</span>
        </div>
      </div>
    ),
    size
  );
}