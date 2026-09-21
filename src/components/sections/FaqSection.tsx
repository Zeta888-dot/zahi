"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    a: "Median 8 seconds on our edge fleet. Batch catalog jobs run asynchronously and notify your webhook on completion.",
  },
  {
    q: "Can I use my own models?",
    a: "Yes. Upload 10 to 20 photos of your fit model and a custom base model is trained in under a day, exclusive to your workspace.",
  },
  {
    q: "What does it cost?",
    a: "There is no free tier. Flex is pay-as-you-go at $0.18 per generation with no base fee. Studio ($49 a month) and Scale ($199 a month) include generations and lower the rate to $0.10 and $0.06. No seats, no contracts.",
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M5.5 4H12V10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, inView } = useInView<HTMLDivElement>();

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <section id="faq" className="zahi-section relative isolate scroll-mt-20 overflow-hidden">
      {/* Background, fades at top and bottom so it blends with neighbouring sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        <div className="absolute top-[8%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
        <div className="absolute top-[22%] left-1/2 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.16),transparent)] blur-3xl" />
        <div className="absolute bottom-[6%] left-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.14),transparent)] blur-3xl" />
      </div>

      <div ref={ref} className="zahi-content relative py-24 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className={`zahi-heading text-[40px] leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[68px] ${reveal(
              "delay-0"
            )}`}
          >
            <span className="block">Questions,</span>
            <span className="zahi-blue block">answered.</span>
          </h2>

          <p
            className={`zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px] ${reveal(
              "delay-150"
            )}`}
          >
            Quick answers about quality, platforms, speed and pricing.
          </p>
        </div>

        {/* Accordion */}
        <div className={`mx-auto mt-14 max-w-[820px] lg:mt-16 ${reveal("delay-300")}`}>
          <div className="overflow-hidden rounded-[28px] bg-white ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={f.q}
                  className={`transition-colors duration-500 ${
                    i > 0 ? "border-t border-[#E2EEF3]" : ""
                  } ${isOpen ? "bg-[#F8FCFE]" : "bg-white"}`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-button-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus-visible:-outline-offset-4 lg:px-8 lg:py-7"
                    >
                      <span
                        className={`text-[17px] font-semibold leading-[1.4] transition-colors duration-300 lg:text-[19px] ${
                          isOpen
                            ? "text-[#111315]"
                            : "text-[#46535A] group-hover:text-[#111315]"
                        }`}
                      >
                        {f.q}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#111315] text-white ring-[#111315]"
                            : "bg-white text-[#718087] ring-[#D5E6ED] group-hover:text-[#111315] group-hover:ring-[#111315]"
                        }`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`max-w-[640px] px-6 pb-7 text-[15px] leading-[1.7] text-[#718087] transition-opacity duration-500 motion-reduce:transition-none lg:px-8 lg:pb-8 lg:text-[16px] ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact */}
        <div className={`mx-auto mt-6 max-w-[820px] lg:mt-8 ${reveal("delay-500")}`}>
          <div className="flex flex-col items-start gap-5 rounded-[28px] bg-white p-7 ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)] sm:flex-row sm:items-center sm:justify-between lg:p-8">
            <div>
              <p className="text-[18px] font-semibold text-[#111315]">Still unsure?</p>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-[#718087]">
                Talk to a human. We reply within one business day, PKT.
              </p>
            </div>

            <Link href="/contact" className="zahi-btn zahi-btn-secondary shrink-0">
              Contact us
              <span className="zahi-btn-icon" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}