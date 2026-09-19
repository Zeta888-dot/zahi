"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    n: "01",
    t: "Upload garment",
    d: "Drop a product photo. The garment is isolated automatically, no masking, no studio.",
    img: "/hero/garment.png",
    meta: "INPUT · PNG",
  },
  {
    n: "02",
    t: "Pick a model",
    d: "Forty base models or your own. Pose, ethnicity and size dialed per campaign.",
    img: "/hero/model.png",
    meta: "BASE · 04",
  },
  {
    n: "03",
    t: "Generate",
    d: "Photorealistic try-on in 0.8s. Fabric, drape and color preserved to the stitch.",
    img: "/hero/try-on-result.png",
    meta: "OUT · 0.8s",
  },
];

const MONO = '"JetBrains Mono", monospace';

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="how-it-works" className="zahi-section relative overflow-hidden">
      <div className="zahi-glow zahi-float-slow pointer-events-none absolute top-24 right-0" />
      <div className="zahi-glow-small zahi-float pointer-events-none absolute bottom-24 left-8" />

      <div className="zahi-content relative" style={{ paddingBlock: 130 }}>
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="zahi-eyebrow">How it works</p>
            <h2 className="zahi-heading mt-6" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              Flat lay to fit,
              <br />
              <span className="zahi-blue">in three moves.</span>
            </h2>
          </div>
          <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", color: "#9BAAB1" }}>
            AVG SESSION · 47s
          </p>
        </div>

        {/* Stepper */}
        <div className="mt-20 grid md:grid-cols-3">
          {steps.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className="px-0 py-6 text-left md:px-8 md:first:pl-0"
              style={{
                borderLeft: i === 0 ? "none" : "1px solid #E2EEF3",
              }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    color: active === i ? "#28769D" : "#B9C7CD",
                    transition: "color 400ms ease",
                  }}
                >
                  {s.n}
                </span>
                <span style={{ fontFamily: MONO, fontSize: 9, color: "#B9C7CD" }}>
                  {s.meta}
                </span>
              </div>
              <p
                className="mt-4"
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: active === i ? "#111315" : "#718087",
                  transition: "color 400ms ease",
                }}
              >
                {s.t}
              </p>
              <p className="mt-2" style={{ fontSize: 12, lineHeight: 1.7, color: "#718087" }}>
                {s.d}
              </p>
              <div className="mt-6 h-px w-full" style={{ background: "#E2EEF3" }}>
                {active === i && (
                  <div
                    key={active}
                    className="h-px"
                    style={{
                      background: "#28769D",
                      width: "100%",
                      animation: "zahi-progress 4s linear forwards",
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Stage */}
        <div className="relative mx-auto mt-16 max-w-[780px]">
          <div className="zahi-product-shell">
            {/* window bar */}
            <div className="zahi-product-header">
              <div className="zahi-terminal-dots">
                <span className="zahi-terminal-dot" />
                <span className="zahi-terminal-dot" />
                <span className="zahi-terminal-dot" />
              </div>
              <span style={{ fontFamily: MONO, fontSize: 9, color: "#9BAAB1" }}>
                zahi studio · session 0x9f2
              </span>
            </div>

            {/* image stage */}
            <div
              className="relative h-[360px] md:h-[440px]"
              style={{
                background: "linear-gradient(160deg, #F8FCFE 0%, #EDF8FD 100%)",
              }}
            >
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? "scale(1)" : "scale(1.06)",
                    filter: active === i ? "blur(0px)" : "blur(8px)",
                    transition: "opacity 900ms ease, transform 900ms ease, filter 900ms ease",
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.t}
                    className="max-h-full w-auto max-w-full rounded-[14px] object-contain"
                    style={{ boxShadow: "0 30px 80px rgba(54,103,126,0.25)" }}
                  />
                </div>
              ))}

              {/* grid overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(67,122,145,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(67,122,145,0.04) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* chips */}
              <span
                className="absolute bottom-4 left-4 rounded-full px-3 py-1.5 backdrop-blur"
                style={{
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  color: "#28769D",
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid #C4DBE5",
                }}
              >
                {steps[active].meta}
              </span>
              <span
                className="absolute right-4 bottom-4"
                style={{ fontFamily: MONO, fontSize: 9, color: "#9BAAB1" }}
              >
                {steps[active].n} / 03
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zahi-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}