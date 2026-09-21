"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Tier = {
  name: string;
  tagline: string;
  base: number;
  included: number;
  perGen: number;
  includedLine: string;
  rateLine: string;
  features: string[];
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Flex",
    tagline: "Pure pay-as-you-go",
    base: 0,
    included: 0,
    perGen: 0.18,
    includedLine: "No base fee",
    rateLine: "$0.18 per generation",
    features: [
      "All 40+ base models",
      "Widget, plugins and API",
      "Watermark-free exports",
      "Email support",
    ],
    cta: "Start generating",
  },
  {
    name: "Studio",
    tagline: "For growing stores",
    base: 49,
    included: 600,
    perGen: 0.1,
    includedLine: "600 generations included",
    rateLine: "then $0.10 per generation",
    features: [
      "Everything in Flex",
      "Custom brand presets",
      "Priority generation queue",
      "Email and chat support",
    ],
    cta: "Choose Studio",
  },
  {
    name: "Scale",
    tagline: "For catalogs and marketplaces",
    base: 199,
    included: 3000,
    perGen: 0.06,
    includedLine: "3,000 generations included",
    rateLine: "then $0.06 per generation",
    features: [
      "Everything in Studio",
      "Custom model training",
      "Dedicated SLA, 99.9%",
      "Priority support",
    ],
    cta: "Choose Scale",
  },
];

const MIN_GENS = 50;
const MAX_GENS = 10000;
const SLIDER_STEPS = 1000;

/*
  The slider is logarithmic. On a linear 50 to 10,000 track the point where
  Flex stops being the cheapest sits at about 2% of the width, which makes the
  estimator feel dead. Log scale spreads every price break across the track.
*/
const toGens = (t: number) => {
  const raw = MIN_GENS * Math.pow(MAX_GENS / MIN_GENS, t / SLIDER_STEPS);
  return Math.min(MAX_GENS, Math.max(MIN_GENS, Math.round(raw / 50) * 50));
};

const monthlyCost = (tier: Tier, n: number) =>
  tier.base + Math.max(0, n - tier.included) * tier.perGen;

const money = (v: number) => `$${Math.round(v).toLocaleString("en-US")}`;

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
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
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

function Check() {
  return (
    <span className="mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#E6F1F7] text-[#28769D]">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M2.5 6.2L5 8.7L9.5 3.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function PricingSection() {
  const [t, setT] = useState(565);
  const { ref, inView } = useInView<HTMLDivElement>();

  const images = toGens(t);
  const costs = tiers.map((tier) => monthlyCost(tier, images));
  const cheapest = costs.indexOf(Math.min(...costs));

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <section id="pricing" className="zahi-section relative isolate scroll-mt-20 overflow-hidden">
      <style>{`
        .zahi-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 24px;
          background: transparent;
          cursor: pointer;
        }
        .zahi-range::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 9999px;
          background: linear-gradient(to right, #28769D var(--fill), #E2EEF3 var(--fill));
        }
        .zahi-range::-moz-range-track {
          height: 6px;
          border-radius: 9999px;
          background: #E2EEF3;
        }
        .zahi-range::-moz-range-progress {
          height: 6px;
          border-radius: 9999px;
          background: #28769D;
        }
        .zahi-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          margin-top: -8px;
          border: 0;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow: 0 0 0 2px #28769D, 0 6px 16px rgba(17, 19, 21, 0.2);
        }
        .zahi-range::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border: 0;
          border-radius: 9999px;
          background: #ffffff;
          box-shadow: 0 0 0 2px #28769D, 0 6px 16px rgba(17, 19, 21, 0.2);
        }
        .zahi-range:focus { outline: none; }
        .zahi-range:focus-visible::-webkit-slider-thumb {
          box-shadow: 0 0 0 2px #28769D, 0 0 0 6px rgba(40, 118, 157, 0.25);
        }
        .zahi-range:focus-visible::-moz-range-thumb {
          box-shadow: 0 0 0 2px #28769D, 0 0 0 6px rgba(40, 118, 157, 0.25);
        }
      `}</style>

      {/* Background, fades at top and bottom so it blends with neighbouring sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        <div className="absolute top-[8%] left-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
        <div className="absolute top-[24%] left-1/2 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.16),transparent)] blur-3xl" />
        <div className="absolute right-[-8%] bottom-[6%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.16),transparent)] blur-3xl" />
      </div>

      <div ref={ref} className="zahi-content relative py-24 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className={`zahi-heading text-[40px] leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[68px] ${reveal(
              "delay-0"
            )}`}
          >
            <span className="block">Pay for results,</span>
            <span className="zahi-blue block">not seats.</span>
          </h2>

          <p
            className={`zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px] ${reveal(
              "delay-150"
            )}`}
          >
            No free tier, no contracts. Every generation is billed, and the
            more you generate the less each one costs.
          </p>
        </div>

        {/* Plans, all three share one style */}
        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`h-full ${reveal(i === 0 ? "delay-300" : i === 1 ? "delay-500" : "delay-700")}`}
            >
              <div className="flex h-full flex-col rounded-[28px] bg-white p-7 ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-8">
                <p className="text-[12px] font-semibold tracking-[0.14em] text-[#718087]">
                  {tier.name.toUpperCase()}
                </p>
                <p className="mt-2 text-[14px] text-[#46535A]">{tier.tagline}</p>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="zahi-display text-[52px] leading-none text-[#111315]">
                    ${tier.base}
                  </span>
                  <span className="text-[14px] text-[#718087]">/ month</span>
                </div>

                <div className="mt-6 rounded-[16px] bg-[#F2F9FC] px-4 py-3.5">
                  <p className="text-[14px] font-semibold text-[#111315]">{tier.includedLine}</p>
                  <p className="mt-1 text-[13px] text-[#718087]">{tier.rateLine}</p>
                </div>

                <div className="my-7 h-px w-full bg-[#E2EEF3]" />

                <ul className="space-y-3.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check />
                      <span className="text-[14px] leading-[1.55] text-[#46535A]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacing lives on the wrapper, so the CTAs line up across all three cards */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/#start"
                    className="zahi-btn zahi-btn-primary zahi-btn-lg zahi-btn-block"
                  >
                    {tier.cta}
                    <span className="zahi-btn-icon" aria-hidden>
                      <ArrowUpRight />
                    </span>
                  </Link>
                  <p className="mt-4 text-center text-[12px] text-[#718087]">
                    Billed monthly, cancel anytime
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estimator */}
        <div className={`mx-auto mt-6 max-w-[820px] lg:mt-8 ${reveal("delay-1000")}`}>
          <div className="rounded-[28px] bg-white p-7 ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)] lg:p-8">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#718087]">
              ESTIMATE YOUR MONTH
            </p>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="zahi-display text-[48px] leading-none text-[#111315] lg:text-[56px]">
                {images.toLocaleString("en-US")}
              </span>
              <span className="text-[14px] text-[#718087]">try-ons per month</span>
            </div>

            <div className="mt-7">
              <input
                type="range"
                min={0}
                max={SLIDER_STEPS}
                step={1}
                value={t}
                onChange={(e) => setT(Number(e.target.value))}
                aria-label="Try-ons per month"
                aria-valuetext={`${images.toLocaleString("en-US")} try-ons per month`}
                className="zahi-range"
                style={{ "--fill": `${(t / SLIDER_STEPS) * 100}%` } as CSSProperties}
              />
              <div className="mt-2 flex justify-between text-[12px] text-[#718087]">
                <span>{MIN_GENS}</span>
                <span>{MAX_GENS.toLocaleString("en-US")}</span>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {tiers.map((tier, i) => {
                const isLowest = i === cheapest;
                return (
                  <div
                    key={tier.name}
                    className={`rounded-[18px] p-4 ring-1 transition-colors duration-300 ${
                      isLowest ? "bg-[#F2F9FC] ring-[#28769D]" : "bg-white ring-[#E2EEF3]"
                    }`}
                  >
                    <div className="flex h-6 items-center justify-between gap-2">
                      <span className="text-[12px] font-semibold tracking-[0.12em] text-[#718087]">
                        {tier.name.toUpperCase()}
                      </span>
                      {isLowest && (
                        <span className="rounded-full bg-[#E7F5EE] px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-[#2F7D57]">
                          LOWEST
                        </span>
                      )}
                    </div>
                    <p className="mt-2 flex items-baseline gap-1.5">
                      <span className="zahi-display text-[28px] leading-none text-[#111315]">
                        {money(costs[i])}
                      </span>
                      <span className="text-[12px] text-[#718087]">/ month</span>
                    </p>
                    <p className="mt-2 text-[12px] text-[#718087]">
                      About ${(costs[i] / images).toFixed(2)} per generation
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className={`mt-8 text-center text-[13px] text-[#718087] ${reveal("delay-1000")}`}>
          Drag the slider to see what each plan costs at your volume.
        </p>
      </div>
    </section>
  );
}