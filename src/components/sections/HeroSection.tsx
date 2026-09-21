"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

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

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      mounted ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[6px]"
    }`;

  return (
    <section className="zahi-section relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden">
      <style>{`
        @keyframes zahi-drift-a {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(40px, 30px, 0) scale(1.08); }
        }
        @keyframes zahi-drift-b {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-50px, 40px, 0) scale(1.1); }
        }
        @keyframes zahi-drift-c {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(45px, -35px, 0) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .zahi-aurora { animation: none !important; }
        }
      `}</style>

      {/* Background system, fades out at the bottom so it blends into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
      >
        {/* Blue core, top center */}
        <div className="absolute top-[-12%] left-1/2 -translate-x-1/2">
          <div
            className="zahi-aurora h-[560px] w-[860px] max-w-[150vw] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.32),transparent)] blur-3xl"
            style={{ animation: "zahi-drift-a 18s ease-in-out infinite" }}
          />
        </div>

        {/* Violet, right */}
        <div className="absolute top-[8%] right-[-12%]">
          <div
            className="zahi-aurora h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent)] blur-3xl"
            style={{ animation: "zahi-drift-b 22s ease-in-out infinite" }}
          />
        </div>

        {/* Warm rose and peach, bottom left */}
        <div className="absolute bottom-[-6%] left-[-10%]">
          <div
            className="zahi-aurora h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.2),transparent)] blur-3xl"
            style={{ animation: "zahi-drift-c 26s ease-in-out infinite" }}
          />
        </div>

        {/* Fine grid */}
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(17,19,21,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,19,21,0.05)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_68%)]" />

        {/* Grain, removes gradient banding and adds a printed feel */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: NOISE }}
        />
      </div>

      <div className="zahi-content relative w-full pt-32 pb-28 lg:pt-40 lg:pb-32">
        <div className="mx-auto flex max-w-[1040px] flex-col items-center text-center">
          <h1
            className={`zahi-display text-[48px] leading-[1] tracking-[-0.04em] sm:text-[72px] lg:text-[108px] ${reveal(
              "delay-100"
            )}`}
          >
            <span className="block">Every garment,</span>
            <span className="zahi-blue block">on every body.</span>
          </h1>

          <p
            className={`zahi-body mx-auto mt-8 max-w-[540px] text-[16px] leading-[1.7] lg:mt-10 lg:text-[19px] ${reveal(
              "delay-300"
            )}`}
          >
            Generate photorealistic try-ons in 8 seconds. One product photo,
            forty models, infinite customers.
          </p>

          <div
            className={`mt-12 flex flex-wrap items-center justify-center gap-4 lg:mt-14 ${reveal(
              "delay-500"
            )}`}
          >
            <Link href="/try-on" className="zahi-btn zahi-btn-primary zahi-btn-lg">
              Try it now
              <span className="zahi-btn-icon" aria-hidden>
                <ArrowUpRight />
              </span>
            </Link>
            <a href="#how-it-works" className="zahi-btn zahi-btn-secondary zahi-btn-lg">
              See how it works
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-[900ms] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-14 w-px animate-pulse bg-gradient-to-b from-[#111315]/40 to-transparent" />
      </div>
    </section>
  );
}