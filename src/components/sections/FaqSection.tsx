"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What is Zahi?",
    answer:
      "Zahi is a virtual try-on platform that helps fashion businesses generate realistic product try-ons using AI. It can be used through storefront experiences or integrated into custom products through an API.",
  },
  {
    question: "Do I need a photoshoot for every product?",
    answer:
      "No. The workflow is designed around existing product and model imagery, so you can create try-on experiences without producing a new photoshoot for every combination.",
  },
  {
    question: "Can I use Zahi with my existing store?",
    answer:
      "Yes. Zahi is being designed to work with common commerce workflows, including Shopify and WooCommerce, while also supporting custom integrations through an API.",
  },
  {
    question: "Which AI model powers the try-on?",
    answer:
      "The current product direction uses FASHN AI v1.6 for virtual try-on generation. The API layer is kept separate so the underlying generation service can evolve without requiring your storefront to be rebuilt.",
  },
  {
    question: "Can developers integrate Zahi directly?",
    answer:
      "Yes. The API workflow is intended for developers who want to build virtual try-on directly into their own applications, commerce experiences, or internal tools.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing can depend on generation volume, integration requirements, and the type of production workflow you need. Contact the team to discuss a setup for your use case.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "rotate-45" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="zahi-glow right-[-250px] top-[10%] h-[500px] w-[500px] opacity-25" />

        <div className="zahi-container zahi-section-inner relative">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="zahi-label">FAQ</div>

              <h2 className="mt-7 max-w-[520px] text-[43px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[59px]">
                Questions,
                <br />
                answered
                <br />
                <span className="zahi-orange">simply.</span>
              </h2>

              <p className="mt-7 max-w-[380px] text-[13px] leading-[1.7] text-[var(--zahi-text-soft)]">
                Everything you need to understand the product, integrations,
                API workflow, and how virtual try-on fits into your commerce
                stack.
              </p>

              <div className="mt-10 hidden border-t border-white/[0.08] pt-5 lg:block">
                <span className="text-[8px] uppercase tracking-[0.12em] text-white/15">
                  Still have questions?
                </span>

                <p className="mt-3 text-[11px] leading-[1.6] text-white/30">
                  Reach out and we can discuss your specific implementation.
                </p>
              </div>
            </div>

            <div className="border-t border-white/[0.08]">
              {faqs.map((faq, index) => {
                const open = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-white/[0.08]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(open ? null : index)
                      }
                      aria-expanded={open}
                      className="zahi-focus flex min-h-[78px] w-full items-center justify-between gap-8 text-left"
                    >
                      <span
                        className={`text-[14px] font-medium tracking-[-0.015em] transition-colors duration-300 sm:text-[15px] ${
                          open ? "text-white" : "text-white/55"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open
                            ? "border-[#ff6900]/30 bg-[#ff6900]/[0.08] text-[#ff6900]"
                            : "border-white/[0.08] text-white/25"
                        }`}
                      >
                        <PlusIcon open={open} />
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-[620px] pb-7 pr-12 text-[12px] leading-[1.75] text-white/30">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 border-t border-white/[0.08] pt-5 lg:hidden">
            <span className="text-[8px] uppercase tracking-[0.12em] text-white/15">
              Still have questions?
            </span>

            <p className="mt-3 text-[11px] leading-[1.6] text-white/30">
              Reach out and we can discuss your specific implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}