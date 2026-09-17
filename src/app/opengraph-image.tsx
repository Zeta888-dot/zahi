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
          background: "#f4f2ee",
          color: "#101010",
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
          <div>
            zahi<span style={{ color: "#ff5c1f" }}>.</span>
          </div>

          <div
            style={{
              fontSize: 16,
              color: "#77736e",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            AI Virtual Try-On
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.94,
              letterSpacing: "-0.055em",
              maxWidth: 1000,
            }}
          >
            Your store,
            <br />
            instantly try-on.
          </div>

          <div
            style={{
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