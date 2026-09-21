import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";

const tools = [
  {
    number: "01",
    title: "Virtual try-on",
    description: "Generate realistic model shots from any garment.",
    href: "/try-on",
  },
  {
    number: "02",
    title: "Store widget",
    description: "Give shoppers a try-on experience directly on product pages.",
    href: "/#widget",
  },
  {
    number: "03",
    title: "Developer API",
    description: "Build try-on into your own commerce workflow.",
    href: "/#api",
  },
];

const steps = [
  {
    number: "01",
    title: "Add a garment",
    description: "Upload a product image or connect your catalog.",
  },
  {
    number: "02",
    title: "Choose a model",
    description: "Select the look that fits your product and audience.",
  },
  {
    number: "03",
    title: "Generate",
    description: "Create a photorealistic try-on image in seconds.",
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

export default function AppPage() {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background, fades out at the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
      >
        <div className="absolute top-[-6%] left-1/2 h-[520px] w-[860px] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.2),transparent)] blur-3xl" />
        <div className="absolute top-[12%] right-[-10%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
        <div className="absolute top-[40%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.14),transparent)] blur-3xl" />
      </div>

      <div className="zahi-content relative pb-10 lg:pb-12">
        {/* Header */}
        <header className="pt-5 sm:pt-6">
          <div className="flex h-[58px] items-center justify-between rounded-full border border-[#D5E6ED] bg-white/90 pr-2.5 pl-6 shadow-[0_12px_40px_rgba(54,103,126,0.10)] backdrop-blur-xl">
            <Link
              href="/"
              className="text-[21px] leading-none font-medium tracking-[-0.055em] text-[#111315]"
            >
              zahi<span className="text-[#28769D]">.</span>
            </Link>

            <Link href="/" className="zahi-btn zahi-btn-secondary zahi-btn-sm">
              Back to site
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-[900px] pt-20 text-center lg:pt-28">
          <Reveal>
            <h1 className="zahi-display text-[44px] leading-[1.02] tracking-[-0.04em] sm:text-[64px] lg:text-[88px]">
              <span className="block">Build your</span>
              <span className="zahi-blue block">try-on store.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="zahi-body mx-auto mt-6 max-w-[540px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px]">
              Create product imagery, test virtual try-on, and prepare your
              storefront for AI-powered shopping.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-12">
              <Link href="/try-on" className="zahi-btn zahi-btn-primary zahi-btn-lg">
                Start a try-on
                <span className="zahi-btn-icon" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
              <Link href="/docs" className="zahi-btn zahi-btn-secondary zahi-btn-lg">
                Read documentation
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Tools */}
        <section className="mx-auto mt-24 max-w-[1120px] lg:mt-32">
          <Reveal>
            <h2 className="zahi-heading mx-auto max-w-[760px] text-center text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[56px]">
              <span className="block">What do you</span>
              <span className="zahi-blue block">want to build?</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {tools.map((tool, i) => (
              <Reveal key={tool.number} delay={i * 150} className="h-full">
                <Link
                  href={tool.href}
                  className={`${cardCls} group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-8`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111315] font-mono text-[13px] font-semibold text-white">
                      {tool.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#46535A] ring-1 ring-[#D5E6ED] transition-all duration-300 group-hover:bg-[#111315] group-hover:text-white group-hover:ring-[#111315]">
                      <span className="block h-4 w-4 transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight />
                      </span>
                    </span>
                  </div>

                  <h3 className="mt-14 text-[24px] leading-[1.2] font-semibold tracking-[-0.025em] text-[#111315]">
                    {tool.title}
                  </h3>
                  <p className="mt-3 max-w-[320px] text-[15px] leading-[1.7] text-[#718087]">
                    {tool.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="mx-auto mt-24 max-w-[1120px] lg:mt-32">
          <Reveal>
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="zahi-heading text-[34px] leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[56px]">
                <span className="block">From product image</span>
                <span className="zahi-blue block">to finished try-on.</span>
              </h2>
              <p className="zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:text-[18px]">
                No complicated production workflow, just three steps.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-12 lg:mt-14">
            <div className={`${cardCls} grid md:grid-cols-3`}>
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`p-7 lg:p-9 ${
                    i > 0 ? "border-t border-[#E2EEF3] md:border-t-0 md:border-l" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111315] font-mono text-[13px] font-semibold text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-[22px] leading-[1.25] font-semibold tracking-[-0.02em] text-[#111315]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#718087]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Call to action */}
        <section className="mx-auto mt-24 max-w-[1120px] lg:mt-32">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[32px] bg-[#0B1216] px-6 py-14 text-center shadow-[0_40px_100px_-40px_rgba(17,19,21,0.5)] ring-1 ring-white/10 sm:px-12 lg:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 h-[420px] w-[760px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.4),transparent)] blur-3xl" />
                <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
              </div>

              <h2 className="mx-auto max-w-[760px] text-[34px] leading-[1.05] font-medium tracking-[-0.04em] text-[#EAF4F9] sm:text-[48px] lg:text-[60px]">
                Turn your catalog into{" "}
                <span className="text-[#6FB6DD]">something shoppers can try.</span>
              </h2>

              <div className="mt-10 flex justify-center lg:mt-12">
                <Link
                  href="/#start"
                  className="zahi-btn zahi-btn-primary zahi-btn-lg"
                  style={lightPill}
                >
                  Get started
                  <span className="zahi-btn-icon" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-col gap-3 border-t border-[#D5E6ED] pt-6 text-[13px] text-[#718087] sm:flex-row sm:items-center sm:justify-between lg:mt-32">
          <span className="font-medium text-[#111315]">
            zahi<span className="text-[#28769D]">.</span>
          </span>
          <span>AI-powered virtual try-on</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}