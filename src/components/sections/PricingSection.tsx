"use client";

import { useState } from "react";

const MONO = '"JetBrains Mono", monospace';

const tiers = [
  {
    name: "Flex",
    base: 0,
    rate: "$0.18 / gen",
    included: "no base fee",
    tagline: "Pure pay-as-you-go",
    features: [
      "$0.18 per generation",
      "All 40+ base models",
      "Widget, plugins & API",
      "Watermark-free exports",
      "Email support",
    ],
    featured: false,
    cta: "Start generating",
  },
  {
    name: "Studio",
    base: 49,
    rate: "$0.10 / gen",
    included: "600 gens included",
    tagline: "For growing stores",
    features: [
      "$0.10 per generation after",
      "Everything in Flex",
      "Custom brand presets",
      "Priority generation queue",
      "Email + chat support",
    ],
    featured: true,
    cta: "Choose Studio",
  },
  {
    name: "Scale",
    base: 199,
    rate: "$0.06 / gen",
    included: "3,000 gens included",
    tagline: "For catalogs & marketplaces",
    features: [
      "$0.06 per generation after",
      "Everything in Studio",
      "Custom model training",
      "Dedicated SLA, 99.9%",
      "Priority support",
    ],
    featured: false,
    cta: "Choose Scale",
  },
];

function bestPlan(n: number) {
  const opts = [
    { name: "Flex", c: n * 0.18 },
    { name: "Studio", c: 49 + Math.max(0, n - 600) * 0.1 },
    { name: "Scale", c: 199 + Math.max(0, n - 3000) * 0.06 },
  ];
  return opts.reduce((a, b) => (b.c < a.c ? b : a));
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-[3px] shrink-0">
      <path d="M2 6.5 4.5 9 10 3" stroke="#28769D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  const [images, setImages] = useState(1000);
  const best = bestPlan(images);

  return (
    <section className="zahi-section" id="pricing">
      <div className="zahi-content zahi-section-inner">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="zahi-eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
          <h2 className="zahi-heading mt-6 text-[40px] lg:text-[56px]">
            Pay for results,
            <br />
            <span className="zahi-blue">not seats.</span>
          </h2>
          <p className="zahi-body mt-6" style={{ fontSize: 15 }}>
            No free tier, no contracts. Every generation is billed, and the
            more you generate the less each one costs.
          </p>
        </div>

        {/* Cards: narrow + tall */}
        <div className="mx-auto mt-16 grid max-w-[960px] gap-5 md:grid-cols-3">
          {tiers.map((p) => (
            <div
              key={p.name}
              className="relative flex flex-col rounded-[22px] p-7 transition-all duration-300 hover:-translate-y-1.5"
              style={
                p.featured
                  ? {
                      background: "linear-gradient(180deg, #FFFFFF 0%, #EDF8FD 100%)",
                      border: "1.5px solid #28769D",
                      boxShadow: "0 25px 70px rgba(40,118,157,0.18)",
                    }
                  : {
                      background: "#FFFFFF",
                      border: "1px solid #E2EEF3",
                      boxShadow: "0 10px 30px rgba(64,112,132,0.07)",
                    }
              }
            >
              {p.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1"
                  style={{ fontFamily: MONO, fontSize: 8, letterSpacing: "0.14em", background: "#28769D", color: "#fff" }}
                >
                  BEST VALUE
                </span>
              )}

              <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.16em", color: p.featured ? "#28769D" : "#9BAAB1" }}>
                {p.name.toUpperCase()}
              </p>
              <p className="mt-2" style={{ fontSize: 12, color: "#718087" }}>
                {p.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="zahi-display" style={{ fontSize: 44, color: "#111315" }}>
                  ${p.base}
                </span>
                <span style={{ fontSize: 10, color: "#9BAAB1" }}>/ month base</span>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <span
                  className="rounded-full px-3 py-1.5"
                  style={{
                    fontFamily: MONO,
                    fontSize: 9,
                    width: "fit-content",
                    background: p.featured ? "rgba(40,118,157,0.1)" : "#F2F9FC",
                    color: p.featured ? "#28769D" : "#46535A",
                  }}
                >
                  {p.rate}
                </span>
                <span style={{ fontFamily: MONO, fontSize: 9, color: "#9BAAB1" }}>
                  {p.included}
                </span>
              </div>

              <div className="my-6 h-px w-full" style={{ background: "#E2EEF3" }} />

              <div className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check />
                    <span style={{ fontSize: 12, lineHeight: 1.55, color: "#46535A" }}>{f}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6" style={{ fontFamily: MONO, fontSize: 8, letterSpacing: "0.1em", color: "#B9C7CD" }}>
                BILLED MONTHLY · CANCEL ANYTIME
              </p>

              <a
                href="/#start"
                className="mt-4 flex items-center justify-center rounded-full"
                style={{
                  padding: "13px 18px",
                  fontSize: 11,
                  fontWeight: 600,
                  background: p.featured ? "#111315" : "#ffffff",
                  color: p.featured ? "#ffffff" : "#111315",
                  border: p.featured ? "1px solid #111315" : "1px solid #D5E6ED",
                  transition: "all 200ms ease",
                }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Estimator */}
        <div className="zahi-panel-raised mx-auto mt-12 max-w-[720px] p-8">
          <div className="flex items-center justify-between">
            <p style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.14em", color: "#718087" }}>
              ESTIMATE YOUR MONTH
            </p>
            <p style={{ fontFamily: MONO, fontSize: 9, color: "#9BAAB1" }}>
              {images.toLocaleString()} try-ons
            </p>
          </div>

          <input
            type="range"
            min={50}
            max={10000}
            step={50}
            value={images}
            onChange={(e) => setImages(Number(e.target.value))}
            className="mt-6 w-full"
            style={{ accentColor: "#28769D" }}
          />

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
            <p className="zahi-display" style={{ fontSize: 40, color: "#111315" }}>
              ≈ ${best.c.toFixed(0)}
              <span style={{ fontSize: 11, fontWeight: 400, color: "#9BAAB1" }}> / month</span>
            </p>
            <span
              className="rounded-full px-4 py-2"
              style={{ fontFamily: MONO, fontSize: 9, background: "#EDF8FD", color: "#28769D" }}
            >
              BEST ON {best.name.toUpperCase()} · ${(best.c / images).toFixed(2)} / GEN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}