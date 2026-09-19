"use client";

import { useEffect, useRef, useState } from "react";

const accentColors = ["#28769D", "#111315", "#4DA878", "#D85D5D"];
const positions = ["Bottom right", "Bottom left", "Inline"];

type Stage = "upload" | "generating" | "result";

export default function WidgetSection() {
  const [accent, setAccent] = useState(accentColors[0]);
  const [pos, setPos] = useState(positions[0]);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("upload");
  const [photo, setPhoto] = useState("/hero/model.png");
  const [custom, setCustom] = useState(false);
  const [prog, setProg] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (stage === "generating") {
      setProg(0);
      const t = setTimeout(() => setProg(100), 60);
      const t2 = setTimeout(() => setStage("result"), 1800);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
  }, [stage]);

  const posBtn =
    pos === "Bottom right"
      ? "right-6 bottom-6"
      : pos === "Bottom left"
      ? "left-6 bottom-6"
      : "bottom-6 left-1/2 -translate-x-1/2";

  const winPos =
    pos === "Bottom right"
      ? "top-16 right-6"
      : pos === "Bottom left"
      ? "top-16 left-6"
      : "top-16 left-1/2 -translate-x-1/2";

  return (
    <section className="zahi-section">
      <div className="zahi-content zahi-section-inner">
        <div className="zahi-eyebrow mb-8">Embeddable widget</div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: copy + controls */}
          <div>
            <h2 className="zahi-heading text-[40px] lg:text-[56px]">
              One script tag,
              <br />
              <span className="zahi-blue">any website.</span>
            </h2>

            <p className="zahi-body mt-8 max-w-[440px] text-[16px]">
              Not on Shopify or WooCommerce? Paste one line and the try-on
              widget lives on your site. Customize colors, position, and
              behavior to match your brand.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="zahi-label mb-4">Accent color</p>
                <div className="flex gap-3">
                  {accentColors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setAccent(c)}
                      className={`h-10 w-10 rounded-full border-2 transition-all ${
                        accent === c ? "scale-110 border-[#111315] shadow-lg" : "border-transparent"
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="zahi-label mb-4">Position</p>
                <div className="flex flex-wrap gap-3">
                  {positions.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPos(p)}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        lineHeight: 1,
                        padding: "11px 18px",
                        borderRadius: 9999,
                        whiteSpace: "nowrap",
                        border: `1px solid ${pos === p ? "#111315" : "#D5E6ED"}`,
                        background: pos === p ? "#111315" : "#ffffff",
                        color: pos === p ? "#ffffff" : "#46535A",
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="zahi-label mb-4">Embed code</p>
              <div className="zahi-terminal">
                <div className="zahi-terminal-bar">
                  <div className="zahi-terminal-dots">
                    <span className="zahi-terminal-dot" />
                    <span className="zahi-terminal-dot" />
                    <span className="zahi-terminal-dot" />
                  </div>
                  <span className="zahi-small">script.js</span>
                </div>
                <pre className="zahi-terminal-code">
{`<script
  src="https://cdn.zahi.pk/widget.js"
  data-store="yourstore"
  data-accent="${accent}"
  data-position="${pos.toLowerCase().replace(" ", "-")}"
  async
></script>`}
                </pre>
              </div>
            </div>
          </div>

          {/* Right: live PDP preview */}
          <div>
            <div className="zahi-product-shell relative overflow-hidden">
              {/* Browser bar */}
              <div className="zahi-product-header">
                <div className="flex items-center gap-3">
                  <div className="zahi-terminal-dots">
                    <span className="zahi-terminal-dot" />
                    <span className="zahi-terminal-dot" />
                    <span className="zahi-terminal-dot" />
                  </div>
                  <span className="rounded-full bg-[#F2F9FC] px-4 py-1.5 text-[10px] text-[#718087]">
                    yourstore.com/products/racing-graphic-tee
                  </span>
                </div>
                <span className="zahi-status">
                  <span className="zahi-status-dot" />
                  Live
                </span>
              </div>

              {/* PDP body */}
              <div className="grid gap-8 bg-white p-8 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-[16px] bg-[#F2F9FC]">
                  <img
                    src="/hero/garment.png"
                    alt="Racing graphic tee, flat"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="zahi-overline">Home / Tees</p>
                  <p className="zahi-heading mt-2 text-[24px]">Racing Graphic Tee</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[11px] text-[#E5B567]">★★★★★</span>
                    <span className="zahi-small">128 reviews</span>
                  </div>
                  <p className="zahi-display mt-4 text-[26px]">PKR 4,900</p>

                  <p className="zahi-label mt-6 mb-3">Color</p>
                  <div className="flex gap-2">
                    <span className="h-7 w-7 rounded-full border-2 border-[#111315] bg-[#111315]" />
                    <span className="h-7 w-7 rounded-full bg-[#F1F0EE]" />
                    <span className="h-7 w-7 rounded-full bg-[#D85D5D]" />
                  </div>

                  <p className="zahi-label mt-5 mb-3">Size</p>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((s, i) => (
                      <span
                        key={s}
                        className={`rounded-lg border px-3.5 py-2 text-[11px] font-medium ${
                          i === 1
                            ? "border-[#111315] bg-[#111315] text-white"
                            : "border-[#D5E6ED] text-[#46535A]"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <span className="zahi-button-primary w-full">Add to cart</span>
                  </div>
                </div>
              </div>

              {/* Widget window */}
              {open && (
                <div
                  className={`absolute z-20 flex max-h-[calc(100%-5.5rem)] w-[300px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_25px_70px_rgba(17,19,21,0.25)] ${winPos}`}
                >
                  <div
                    className="flex shrink-0 items-center justify-between px-5 py-3.5"
                    style={{ backgroundColor: accent }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
                        style={{ color: accent, fontSize: 10, fontWeight: 700 }}
                      >
                        z.
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#ffffff" }}>zahi try-on</span>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      style={{ fontSize: 16, lineHeight: 1, color: "rgba(255,255,255,0.8)" }}
                    >
                      ×
                    </button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-y-auto">
                    {stage === "upload" && (
                      <div className="p-5">
                        <p className="zahi-label mb-3">1 · Upload your photo</p>
                        <button
                          onClick={() => fileRef.current?.click()}
                          className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-[#C4DBE5] bg-[#F8FCFE]"
                        >
                          <img src={photo} alt="Your photo" className="max-h-full w-full object-contain" />
                          <span className="absolute right-2 bottom-2 rounded-full bg-white/90 px-3 py-1 text-[9px] font-semibold text-[#46535A]">
                            {custom ? "Your photo · change" : "Default model · change"}
                          </span>
                        </button>
                        <input
                          ref={fileRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) {
                              setPhoto(URL.createObjectURL(f));
                              setCustom(true);
                            }
                          }}
                        />
                        <p className="zahi-small mt-3">
                          Full-body photo, standing straight, works best.
                        </p>
                        <button
                          onClick={() => setStage("generating")}
                          className="mt-4 flex w-full items-center justify-center rounded-full text-white"
                          style={{
                            backgroundColor: accent,
                            padding: "13px 18px",
                            fontSize: 11,
                            fontWeight: 600,
                            lineHeight: 1,
                            boxShadow: "0 10px 25px rgba(17,19,21,0.15)",
                          }}
                        >
                          Generate try-on
                        </button>
                      </div>
                    )}

                    {stage === "generating" && (
                      <div className="flex flex-col items-center gap-4 p-8">
                        <div className="flex h-40 w-full items-center justify-center">
                          <img src={photo} alt="" className="max-h-full object-contain opacity-80" />
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-[#E2EEF3]">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${prog}%`, transition: "width 1.5s linear", backgroundColor: accent }}
                          />
                        </div>
                        <p className="zahi-small">Generating your try-on · 0.8s</p>
                      </div>
                    )}

                    {stage === "result" && (
                      <div className="p-5">
                        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#F8FCFE]">
                          <img src="/hero/try-on-result.png" alt="Try-on result" className="max-h-full w-full object-contain" />
                          <span className="absolute top-2 left-2 rounded-full bg-[#111315]/85 px-3 py-1 text-[9px] font-semibold tracking-[0.12em] text-white">
                            TRY-ON · 0.8s
                          </span>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <span
                            className="flex-1 rounded-full bg-[#111315] py-3 text-center text-white"
                            style={{ fontSize: 11, fontWeight: 600 }}
                          >
                            Download
                          </span>
                          <button
                            onClick={() => {
                              setStage("upload");
                              setPhoto("/hero/model.png");
                              setCustom(false);
                            }}
                            className="flex-1 rounded-full border border-[#D5E6ED] py-3"
                            style={{ fontSize: 11, fontWeight: 600, color: "#46535A" }}
                          >
                            Start over
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="shrink-0 border-t border-[#E2EEF3] px-5 py-3 text-center text-[9px] text-[#9BAAB1]">
                    Powered by zahi
                  </p>
                </div>
              )}

              {/* Single floating widget button */}
              {!open && (
                <button
                  onClick={() => {
                    setOpen(true);
                    setStage("upload");
                  }}
                  className={`absolute z-10 ${posBtn}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 18px",
                    borderRadius: 9999,
                    fontSize: 11,
                    fontWeight: 600,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    backgroundColor: accent,
                    color: "#ffffff",
                    boxShadow: "0 12px 30px rgba(17,19,21,0.2)",
                  }}
                >
                  <span
                    className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white"
                    style={{ color: accent, fontSize: 9, fontWeight: 700 }}
                  >
                    z.
                  </span>
                  Try it on
                </button>
              )}
            </div>

            <p className="zahi-small mt-4 text-center">
              Live preview · click the zahi button to open the widget
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}