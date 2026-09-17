"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: 0,
    included: 50,
    features: ["50 try-ons / month", "8 base models", "Watermarked exports", "Community support"],
    featured: false,
  },
  {
    name: "Growth",
    price: 49,
    included: 1000,
    features: ["1,000 try-ons / month", "40+ models", "Shopify & WooCommerce plugins", "Embeddable widget", "Email support"],
    featured: true,
  },
  {
    name: "Scale",
    price: 199,
    included: 5000,
    features: ["5,000 try-ons / month", "Custom models (train on your fits)", "Full API access", "Priority support, SLA"],
    featured: false,
  },
];

const rows = [
  ["Monthly try-ons", "50", "1,000", "5,000"],
  ["Model library", "8", "40+", "40+ & custom"],
  ["Plugins", "No", "✓", "✓"],
  ["Widget", "Watermarked", "✓", "✓"],
  ["API access", "No", "Add-on", "✓"],
  ["Support", "Community", "Email", "Priority + SLA"],
];

export default function PricingPage() {
  const [images, setImages] = useState(1000);
  const rec = images <= 50 ? plans[0] : images <= 1000 ? plans[1] : images <= 5000 ? plans[2] : null;
  const cost = rec ? rec.price + Math.max(0, images - rec.included) * 0.1 : null;

  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Pricing</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Pay for results,
        <br />
        <span className="text-pewter">not seats.</span>
      </h1>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-[27px] p-8 ${p.featured ? "bg-ink-black text-canvas-white" : "bg-canvas-white dark:bg-coal-light"}`}
          >
            <p className="text-[14px] font-medium">{p.name}</p>
            <p className="mt-4 text-[43px] tracking-[-0.02em]">
              ${p.price}
              <span className={`text-[13px] ${p.featured ? "text-canvas-white/60" : "text-pewter"}`}> /month</span>
            </p>
            <div className={`mt-6 flex flex-col gap-3 text-[14px] ${p.featured ? "text-canvas-white/80" : "text-pewter"}`}>
              {p.features.map((f) => (
                <span key={f}>· {f}</span>
              ))}
            </div>
            <Link
              href="/#start"
              className={`mt-8 rounded-full py-3 text-center text-[14px] font-medium ${p.featured ? "bg-ember-orange text-ink-black" : "bg-ink-black text-canvas-white dark:bg-canvas-white dark:text-ink-black"}`}
            >
              {p.price === 0 ? "Start free" : `Choose ${p.name}`}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light md:p-12">
        <h2 className="text-[27px] tracking-[-0.015em]">Estimate your monthly cost</h2>
        <input
          type="range"
          min={50}
          max={8000}
          step={50}
          value={images}
          onChange={(e) => setImages(Number(e.target.value))}
          className="mt-8 w-full accent-ember-orange"
        />
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-[15px] text-pewter">{images.toLocaleString()} try-ons / month</p>
          <p className="text-[27px] tracking-[-0.015em]">
            {rec ? `$${cost?.toFixed(0)} / month on ${rec.name}` : "Custom pricing, talk to us"}
          </p>
        </div>
      </div>

      <div className="mt-24 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-[14px]">
          <thead>
            <tr className="border-b border-ash text-[12px] text-pewter dark:border-coal-light">
              <th className="py-4 pr-4 font-medium">Features</th>
              {plans.map((p) => (
                <th key={p.name} className="py-4 pr-4 font-medium">{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-ash dark:border-coal-light">
                {r.map((c, i) => (
                  <td key={i} className={`py-4 pr-4 ${i === 0 ? "font-medium" : "text-pewter"}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}