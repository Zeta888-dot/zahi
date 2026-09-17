import { ImageResponse } from "next/og";

export const alt = "zahi — Virtual Try-On for eCommerce";
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
          justifyContent: "flex-end",
          padding: 60,
          background: "#0a0a0a",
          color: "#f1f0ee",
        }}
      >
        <div style={{ fontSize: 28, color: "#8a8a8a" }}>zahi.</div>
        <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          Your store, instantly try-on.
        </div>
        <div style={{ marginTop: 24, fontSize: 24, color: "#ff5c1f" }}>
          AI Virtual Try-On for eCommerce
        </div>
      </div>
    ),
    size
  );
}