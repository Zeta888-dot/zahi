"use client";

import { useState } from "react";

export default function HeroSection() {
  const [position, setPosition] = useState(50);

  return (
    <section className="zahi-section relative overflow-hidden">
      <div className="zahi-glow absolute top-20 right-0" />
      <div className="zahi-glow-small absolute top-40 left-10" />

      <div className="zahi-content relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Eyebrow */}
        <div className="zahi-eyebrow mb-8">
          AI Virtual Try-On for eCommerce
        </div>

        {/* Headline */}
        <h1 className="zahi-display text-[56px] lg:text-[92px]">
          Every garment,
          <br />
          <span className="zahi-blue">on every body.</span>
        </h1>

        <p className="zahi-body mt-8 max-w-[520px] text-[16px] lg:text-[18px]">
          Generate photorealistic try-ons in 08 seconds. One product photo,
          forty models, infinite customers.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/try-on" className="zahi-button-primary">
            Try it now
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className="zahi-button-secondary">
            See how it works
          </a>
        </div>

        {/* Interactive Before/After */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="zahi-product-shell relative aspect-[3/4] overflow-hidden">
            {/* Before: model */}
            <img
              src="/hero/model.png"
              alt="Model before try-on"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* After: try-on result */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <img
                src="/hero/try-on-result.png"
                alt="Model after try-on"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-[#46535A] backdrop-blur">
              BEFORE
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-[#111315]/85 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-white backdrop-blur">
              AFTER · 08s
            </span>

            {/* Slider handle */}
            <div
              className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.25)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.18)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12H16M8 12L11 9M8 12L11 15M16 12L13 9M16 12L13 15" stroke="#111315" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          {/* Live stats */}
          <div className="space-y-6">
            <div className="zahi-panel-raised p-8">
              <p className="zahi-display zahi-blue text-[48px]">08s</p>
              <p className="zahi-body mt-2">Average generation time</p>
            </div>
            <div className="zahi-panel-raised p-8">
              <p className="zahi-display zahi-blue text-[48px]">40+</p>
              <p className="zahi-body mt-2">Base models in library</p>
            </div>
            <div className="zahi-panel-raised p-8">
              <p className="zahi-display zahi-blue text-[48px]">3,847</p>
              <p className="zahi-body mt-2">Try-ons generated today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
