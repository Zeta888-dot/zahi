"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How realistic are the try-ons?",
    a: "Fabric texture, drape and color are preserved to the stitch. Shoppers regularly rate zahi outputs indistinguishable from studio photography in blind tests.",
  },
  {
    q: "Do I need model releases?",
    a: "No. Base models are licensed synthetic personas. If you train a custom model on your own fits, you confirm you hold consent for the source photos.",
  },
  {
    q: "Which platforms are supported?",
    a: "Shopify and WooCommerce via native plugins, any other stack via the embeddable widget, and everything through the public REST API.",
  },
  {
    q: "How long does a generation take?",
    a: "Median 0.8 seconds on our edge fleet. Batch catalog jobs run asynchronously and notify your webhook on completion.",
  },
  {
    q: "Can I use my own models?",
    a: "Yes. Upload 10 to 20 photos of your fit model and a custom base model is trained in under a day, exclusive to your workspace.",
  },
  {
    q: "What does it cost?",
    a: "Fifty try-ons free every month. After that you pay per result, from $0.10 per try-on. No seats, no contracts.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="zahi-section" id="faq">
      <div className="zahi-content zahi-section-inner">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Left */}
          <div>
            <p className="zahi-eyebrow">FAQ</p>
            <h2 className="zahi-heading mt-6 text-[40px] lg:text-[56px]">
              Questions,
              <br />
              <span className="zahi-blue">answered.</span>
            </h2>

            <div className="zahi-panel-raised mt-10 p-6">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#111315" }}>
                Still unsure?
              </p>
              <p className="zahi-small mt-2" style={{ lineHeight: 1.6 }}>
                Talk to a human. We reply within one business day, PKT.
              </p>
              <a
                href="/contact"
                className="zahi-button-secondary mt-5"
                style={{ display: "inline-flex" }}
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                style={{
                  borderTop: i === 0 ? "1px solid #E2EEF3" : "none",
                  borderBottom: "1px solid #E2EEF3",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: open === i ? "#111315" : "#46535A",
                      transition: "color 300ms ease",
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{
                      border: "1px solid #D5E6ED",
                      background: open === i ? "#111315" : "#ffffff",
                      color: open === i ? "#ffffff" : "#718087",
                      transition: "all 300ms ease",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pb-6"
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#718087",
                        maxWidth: 560,
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}