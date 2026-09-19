"use client";

import { useEffect, useState } from "react";

const platforms = [
  {
    name: "Shopify",
    icon: <img src="https://cdn.simpleicons.org/shopify/95BF47" alt="Shopify" className="h-4 w-4 object-contain" />,
  },
  {
    name: "WooCommerce",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.5c-6.1 0-11 4.2-11 9.4 0 3 1.7 5.7 4.3 7.4-.1.9-.6 2.2-1.5 3.2 0 0 2.7-.4 4.6-1.7 1.1.3 2.4.5 3.6.5 6.1 0 11-4.2 11-9.4S18.1 2.5 12 2.5z"
          fill="#7F54B3"
        />
        <path d="M5.8 9.5l1.4 4.6 1.9-3.9 1.9 3.9 1.4-4.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14.6" cy="12.2" r="1.9" stroke="#fff" strokeWidth="1.4" />
        <circle cx="19" cy="12.2" r="1.9" stroke="#fff" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const installSteps = [
  "Connecting to store...",
  "Registering webhooks...",
  "Injecting try-on button...",
  "Syncing product catalog...",
];

export default function PluginsSection() {
  const [platform, setPlatform] = useState(platforms[0]);
  const [step, setStep] = useState(-1);

  const installing = step >= 0 && step < 4;
  const installed = step === 4;

  useEffect(() => {
    if (step < 0 || step >= 4) return;
    const t = setTimeout(() => setStep(step + 1), 750);
    return () => clearTimeout(t);
  }, [step]);

  const install = () => {
    if (installing || installed) return;
    setStep(0);
  };

  const switchPlatform = (p: (typeof platforms)[number]) => {
    setPlatform(p);
    setStep(-1);
  };

  const progress = installed ? 100 : installing ? ((step + 1) / 4) * 100 : 0;

  return (
    <section className="zahi-section" id="plugins">
      <div className="zahi-content zahi-section-inner">
        <div className="zahi-eyebrow mb-8">Native plugins</div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <h2 className="zahi-heading text-[40px] lg:text-[56px]">
              Install once,
              <br />
              <span className="zahi-blue">sell everywhere.</span>
            </h2>

            <p className="zahi-body mt-8 max-w-[440px] text-[16px]">
              No theme edits, no code paste. One click in your store admin
              and the try-on button goes live on every product page.
            </p>

            {/* Platform tabs with real logos */}
            <div className="mt-10 flex gap-3">
              {platforms.map((p) => (
                <button
                  key={p.name}
                  onClick={() => switchPlatform(p)}
                  className="flex items-center gap-2.5"
                  style={{
                    padding: "11px 18px",
                    borderRadius: 9999,
                    fontSize: 11,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    border: `1px solid ${platform.name === p.name ? "#111315" : "#D5E6ED"}`,
                    background: platform.name === p.name ? "#111315" : "#ffffff",
                    color: platform.name === p.name ? "#ffffff" : "#46535A",
                    transition: "all 250ms ease",
                  }}
                >
                 {p.icon}
                  {p.name}
                </button>
              ))}
            </div>

            {/* Admin mock */}
            <div className="zahi-panel-raised mt-8 overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E2EEF3] px-6 py-4">
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "#718087" }}>
                  {platform.name.toUpperCase()} ADMIN
                </span>
                <span className="zahi-status">
                  <span className="zahi-status-dot" />
                  Connected store
                </span>
              </div>

              <div className="flex items-center gap-4 p-6">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#111315]"
                  style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}
                >
                  z.
                </span>
                <div className="min-w-0 flex-1">
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#111315" }}>zahi Try-On</p>
                  <p style={{ fontSize: 10, color: "#718087" }}>★★★★★ · 214 reviews · by zahi</p>
                </div>
                <button
                  onClick={install}
                  className="shrink-0 rounded-full"
                  style={{
                    padding: "11px 18px",
                    fontSize: 11,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    background: installed ? "#4DA878" : "#111315",
                    color: "#ffffff",
                    transition: "background 300ms ease",
                  }}
                >
                  {installed ? "Connected" : installing ? "Installing..." : "Install"}
                </button>
              </div>

              {/* Real install progress */}
              {(installing || installed) && (
                <div className="border-t border-[#E2EEF3] px-6 py-5">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-[#E2EEF3]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: installed ? "#4DA878" : "#28769D",
                        transition: "width 700ms ease, background 300ms ease",
                      }}
                    />
                  </div>
                  <p className="zahi-small mt-3">
                    {installed ? "Plugin active · try-on button live on all products" : installSteps[step]}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: store preview */}
          <div>
            <div className="zahi-product-shell relative overflow-hidden">
              <div className="zahi-product-header">
                <span className="rounded-full bg-[#F2F9FC] px-4 py-1.5 text-[10px] text-[#718087]">
                  yourstore.com
                </span>
                <span className="zahi-status">
                  <span
                    className={`zahi-status-dot ${installed ? "" : "opacity-30"}`}
                    style={{ background: installed ? "#4DA878" : undefined }}
                  />
                  {installed ? "Widget live" : installing ? installSteps[step] : "Widget off"}
                </span>
              </div>

              <div className="grid gap-6 bg-white p-8 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[16px] bg-[#F2F9FC]">
                  <img src="/hero/garment.png" alt="Product" className="aspect-[3/4] w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <p className="zahi-overline">Home / Tees</p>
                  <p className="zahi-heading mt-2 text-[20px]">Racing Graphic Tee</p>
                  <p className="zahi-display mt-3 text-[22px]">PKR 4,900</p>
                  <div className="mt-5">
                    <span className="zahi-button-primary w-full">Add to cart</span>
                  </div>

                  {/* Try-on button slides in below product card */}
                  <div className="mt-3">
                    {installed ? (
                      <button
                        className="flex w-full items-center justify-center gap-2 rounded-full"
                        style={{
                          padding: "13px 18px",
                          fontSize: 11,
                          fontWeight: 600,
                          background: "#28769D",
                          color: "#ffffff",
                          animation: "zahi-pop 500ms ease both",
                        }}
                      >
                        <span
                          className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white"
                          style={{ color: "#28769D", fontSize: 9, fontWeight: 700 }}
                        >
                          z.
                        </span>
                        Try it on
                      </button>
                    ) : (
                      <span
                        className="flex w-full items-center justify-center rounded-full border border-dashed border-[#C4DBE5] px-5"
                        style={{ padding: "13px 18px", fontSize: 10, color: "#9BAAB1" }}
                      >
                        widget appears here after install
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <p className="zahi-small mt-4 text-center">
              {installed
                ? "Plugin live · shoppers see the try-on button"
                : "Click Install to see the widget go live"}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zahi-pop {
          0% { opacity: 0; transform: translateY(10px) scale(0.94); }
          60% { transform: translateY(-2px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}