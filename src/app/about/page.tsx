import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";

const story = [
  "zahi is building virtual try-on infrastructure for stores that want better product imagery without rebuilding their entire workflow.",
  "Upload a garment, choose a model, and generate a realistic product experience that can live across your store, campaigns, widgets, and API.",
  "The goal is simple: make high-quality fashion imagery easier to create, easier to deploy, and easier for shoppers to use.",
];

const principles = [
  {
    title: "Merchants first",
    desc: "Every feature starts with a store owner's problem, not a model's benchmark.",
  },
  {
    title: "Honest imagery",
    desc: "Try-ons should stay faithful to the real garment, so shoppers know what to expect.",
  },
  {
    title: "Fast is a feature",
    desc: "Generation should feel instant, whether it happens in a dashboard or inside a storefront.",
  },
];

/*
  Light variant of the pill button, for the dark call to action card.
  These custom properties feed the .zahi-btn rules in globals.css.
*/
const lightPill = {
  "--btn-bg": "#EAF4F9",
  "--btn-fg": "#0B1216",
  "--btn-shadow": "0 16px 40px -18px rgba(111, 182, 221, 0.55)",
  "--btn-hover-bg": "#6FB6DD",
  "--btn-hover-fg": "#0B1216",
  "--btn-hover-shadow": "0 24px 50px -16px rgba(111, 182, 221, 0.75)",
  "--btn-icon-bg": "#0B1216",
  "--btn-icon-fg": "#ffffff",
  "--btn-icon-hover-bg": "#0B1216",
  "--btn-icon-hover-fg": "#6FB6DD",
} as CSSProperties;

const cardCls =
  "rounded-[28px] bg-white ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)]";

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

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background, fades out at the bottom so it blends into the footer area */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
      >
        <div className="absolute top-[-6%] left-1/2 h-[520px] w-[860px] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.2),transparent)] blur-3xl" />
        <div className="absolute top-[10%] right-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
        <div className="absolute top-[38%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.14),transparent)] blur-3xl" />
      </div>

      <div className="zahi-content relative pt-32 pb-24 lg:pt-44 lg:pb-32">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <h1 className="zahi-display text-[44px] leading-[1.02] tracking-[-0.04em] sm:text-[64px] lg:text-[88px]">
              <span className="block">Fashion commerce,</span>
              <span className="zahi-blue block">rebuilt for AI.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px]">
              The visual layer for modern fashion commerce.
            </p>
          </Reveal>
        </div>

        {/* Story */}
        <div className="mx-auto mt-14 max-w-[820px] lg:mt-16">
          <Reveal delay={300}>
            <div className={`${cardCls} p-8 lg:p-12`}>
              <p className="text-[20px] font-medium leading-[1.55] tracking-[-0.02em] text-[#111315] lg:text-[24px]">
                {story[0]}
              </p>

              <div className="mt-6 space-y-5 text-[16px] leading-[1.75] text-[#46535A] lg:text-[17px]">
                <p>{story[1]}</p>
                <p>{story[2]}</p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-[#E2EEF3] pt-6 text-[14px] text-[#718087]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DA878]" />
                Founded in Chitral, Pakistan in 2026
              </div>
            </div>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mx-auto mt-24 max-w-[1120px] lg:mt-32">
          <Reveal>
            <h2 className="zahi-heading mx-auto max-w-[760px] text-center text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[56px]">
              <span className="block">Three principles</span>
              <span className="zahi-blue block">behind every feature.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 150} className="h-full">
                <div
                  className={`${cardCls} flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-8`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111315] font-mono text-[13px] font-semibold text-white">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#111315]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#718087]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mx-auto mt-24 max-w-[1120px] lg:mt-32">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[32px] bg-[#0B1216] px-6 py-14 text-center shadow-[0_40px_100px_-40px_rgba(17,19,21,0.5)] ring-1 ring-white/10 sm:px-12 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 h-[420px] w-[760px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.4),transparent)] blur-3xl" />
                <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
              </div>

              <h2 className="mx-auto max-w-[720px] text-[34px] font-medium leading-[1.05] tracking-[-0.04em] text-[#EAF4F9] sm:text-[48px] lg:text-[60px]">
                Build the next layer of{" "}
                <span className="text-[#6FB6DD]">fashion commerce.</span>
              </h2>

              <div className="mt-10 flex justify-center lg:mt-12">
                <Link
                  href="/#start"
                  className="zahi-btn zahi-btn-primary zahi-btn-lg"
                  style={lightPill}
                >
                  Join the waitlist
                  <span className="zahi-btn-icon" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}