"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const platforms = [
  {
    name: "Shopify",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 7.5h14l-1 13H6l-1-13z" fill="#95BF47" />
        <path
          d="M8.5 7.5V6.5a3.5 3.5 0 017 0v1"
          stroke="#5E8E3E"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "WooCommerce",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2.5c-6.1 0-11 4.2-11 9.4 0 3 1.7 5.7 4.3 7.4-.1.9-.6 2.2-1.5 3.2 0 0 2.7-.4 4.6-1.7 1.1.3 2.4.5 3.6.5 6.1 0 11-4.2 11-9.4S18.1 2.5 12 2.5z"
          fill="#7F54B3"
        />
        <path
          d="M5.8 9.5l1.4 4.6 1.9-3.9 1.9 3.9 1.4-4.6"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14.6" cy="12.2" r="1.9" stroke="#fff" strokeWidth="1.4" />
        <circle cx="19" cy="12.2" r="1.9" stroke="#fff" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const installSteps = [
  "Connect to store",
  "Register webhooks",
  "Inject try-on button",
  "Sync product catalog",
];

const sizes = ["S", "M", "L", "XL"];
const STEP_MS = 750;

/*
  Buttons get their size, padding and font from inline styles on purpose.
  Global button rules in this project override Tailwind padding, margin and
  font-size utilities, so anything that must be exact lives here.
*/
const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  height: 38,
  padding: "0 18px",
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1,
  whiteSpace: "nowrap",
  borderRadius: 9999,
  border: 0,
  cursor: "pointer",
};

const btnBlock: CSSProperties = {
  ...btnBase,
  display: "flex",
  width: "100%",
  height: 48,
};

const btnChip: CSSProperties = {
  ...btnBase,
  width: 40,
  height: 40,
  padding: 0,
  gap: 0,
};

const btnLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  height: 24,
  padding: 0,
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1,
  background: "transparent",
  border: 0,
  cursor: "pointer",
};

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

function StatusPill({
  tone,
  label,
}: {
  tone: "green" | "blue" | "muted";
  label: string;
}) {
  const dot =
    tone === "green"
      ? "bg-[#4DA878]"
      : tone === "blue"
        ? "animate-pulse bg-[#28769D]"
        : "bg-[#C4DBE5]";

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#F2F9FC] px-3 py-1.5 text-[12px] font-medium text-[#46535A]">
      <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${dot}`} />
      {label}
    </span>
  );
}

export default function PluginsSection() {
  const [platform, setPlatform] = useState(platforms[0]);
  const [step, setStep] = useState(-1);
  const [size, setSize] = useState("M");
  const { ref, inView } = useInView<HTMLDivElement>();
  const tryOnRef = useRef<HTMLDivElement>(null);

  const total = installSteps.length;
  const installing = step >= 0 && step < total;
  const installed = step === total;

  useEffect(() => {
    if (step < 0 || step >= total) return;
    const t = setTimeout(() => setStep(step + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [step, total]);

  // On mobile the store preview sits below the fold, so once the install
  // finishes we bring the try-on button into view.
  useEffect(() => {
    if (!installed) return;
    if (!window.matchMedia("(max-width: 1023px)").matches) return;

    const t = setTimeout(() => {
      const el = tryOnRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top >= 96 && rect.bottom <= window.innerHeight - 24;
      if (alreadyVisible) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });
    }, 500);

    return () => clearTimeout(t);
  }, [installed]);

  const install = () => {
    if (installing || installed) return;
    setStep(0);
  };

  const switchPlatform = (p: (typeof platforms)[number]) => {
    setPlatform(p);
    setStep(-1);
  };

  const progress = installed ? 100 : installing ? ((step + 1) / total) * 100 : 0;

  const setupLabel = installed
    ? "Complete"
    : installing
      ? `Step ${step + 1} of ${total}`
      : "Not started";

  const caption = installed
    ? "Live now. Shoppers see the try-on button on every product page."
    : installing
      ? "Setting things up, one moment."
      : "Click Install to see the widget go live.";

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <section id="plugins" className="zahi-section relative isolate scroll-mt-20 overflow-hidden">
      <style>{`
        @keyframes zahi-pop {
          0% { opacity: 0; transform: translateY(10px) scale(0.94); }
          60% { transform: translateY(-2px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .zahi-pop-anim { animation: zahi-pop 500ms ease both; }
        @media (prefers-reduced-motion: reduce) {
          .zahi-pop-anim { animation: none; }
        }
      `}</style>

      {/* Background, fades at top and bottom so it blends with neighbouring sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        <div className="absolute top-[10%] left-1/2 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.16),transparent)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
      </div>

      <div ref={ref} className="zahi-content relative py-24 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className={`zahi-heading text-[40px] leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[68px] ${reveal(
              "delay-0"
            )}`}
          >
            <span className="block">Install once,</span>
            <span className="zahi-blue block">sell everywhere.</span>
          </h2>

          <p
            className={`zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px] ${reveal(
              "delay-150"
            )}`}
          >
            No theme edits, no code paste. One click in your store admin and
            the try-on button goes live on every product page.
          </p>

          {/* Platform tabs */}
          <div className={`mt-10 ${reveal("delay-300")}`}>
            <div
              role="tablist"
              aria-label="Store platform"
              className="inline-flex items-center gap-1 rounded-full bg-white/70 p-1 ring-1 ring-black/[0.06] shadow-[0_8px_30px_-12px_rgba(17,19,21,0.15)] backdrop-blur"
            >
              {platforms.map((p) => {
                const active = p.name === platform.name;
                return (
                  <button
                    key={p.name}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => switchPlatform(p)}
                    style={btnBase}
                    className={`transition-all duration-300 ${
                      active
                        ? "bg-[#111315] text-white shadow-sm"
                        : "bg-transparent text-[#46535A] hover:text-[#111315]"
                    }`}
                  >
                    {p.icon}
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Demo */}
        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Left: admin */}
          <div className={reveal("delay-300")}>
            <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)]">
              <div className="flex items-center justify-between gap-3 border-b border-[#E2EEF3] px-6 py-4 lg:px-7">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-[#718087]">
                  {platform.name.toUpperCase()} ADMIN
                </span>
                <StatusPill tone="green" label="Store connected" />
              </div>

              <div className="flex items-center gap-4 p-6 lg:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#111315] text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(17,19,21,0.5)]">
                  z.
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold text-[#111315]">zahi Try-On</p>
                  <div className="mt-1 flex items-center gap-2 text-[12px] text-[#718087]">
                    <span aria-hidden className="text-[11px] tracking-[0.1em] text-[#F2B33D]">
                      ★★★★★
                    </span>
                    <span>214 reviews</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={install}
                  aria-busy={installing}
                  style={{ ...btnBase, width: 112, padding: 0 }}
                  className={`shrink-0 text-white transition-all duration-300 ${
                    installed
                      ? "cursor-default bg-[#4DA878]"
                      : installing
                        ? "cursor-wait bg-[#111315] opacity-80"
                        : "bg-[#111315] hover:bg-[#28769D]"
                  }`}
                >
                  {installed ? "Connected" : installing ? "Installing..." : "Install"}
                </button>
              </div>

              {/* Setup checklist, always rendered so nothing shifts on install */}
              <div className="flex flex-1 flex-col border-t border-[#E2EEF3] px-6 py-6 lg:px-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-[#718087]">
                    SETUP
                  </span>
                  <span className="text-[12px] text-[#718087]" aria-live="polite">
                    {setupLabel}
                  </span>
                </div>

                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[#E2EEF3]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: installed ? "#4DA878" : "#28769D",
                      transition: "width 700ms ease, background 300ms ease",
                    }}
                  />
                </div>

                <ul className="mt-6 space-y-4">
                  {installSteps.map((label, i) => {
                    const done = installed || i < step;
                    const active = installing && i === step;
                    return (
                      <li key={label} className="flex items-center gap-3">
                        {done ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4DA878] text-white">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                              <path
                                d="M2.5 6.2L5 8.7L9.5 3.7"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        ) : active ? (
                          <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-[#C4DBE5] border-t-[#28769D]" />
                        ) : (
                          <span className="h-5 w-5 shrink-0 rounded-full border-2 border-[#D5E6ED]" />
                        )}
                        <span
                          className={`text-[14px] transition-colors duration-300 ${
                            done || active ? "text-[#111315]" : "text-[#9BAAB1]"
                          }`}
                        >
                          {label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Spacing lives on the wrapper, not on the button */}
                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    onClick={() => setStep(-1)}
                    disabled={!installed}
                    style={btnLink}
                    className={`text-[#28769D] transition-all duration-300 hover:text-[#111315] ${
                      installed ? "opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    Replay demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M3 12a9 9 0 1 0 3-6.7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 4v5h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: store preview */}
          <div className={reveal("delay-500")}>
            <div className="flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)]">
              <div className="flex items-center justify-between gap-3 border-b border-[#E2EEF3] px-6 py-4 lg:px-7">
                <div className="flex items-center gap-4">
                  <div aria-hidden className="hidden gap-1.5 sm:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
                  </div>
                  <span className="rounded-full bg-[#F2F9FC] px-4 py-1.5 text-[12px] text-[#718087]">
                    yourstore.com
                  </span>
                </div>
                <StatusPill
                  tone={installed ? "green" : installing ? "blue" : "muted"}
                  label={installed ? "Widget live" : installing ? "Installing" : "Widget off"}
                />
              </div>

              <div className="grid flex-1 gap-6 p-6 sm:grid-cols-2 sm:items-center lg:gap-8 lg:p-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#F2F9FC]">
                  <Image
                    src="/hero/garment.png"
                    alt="Racing Graphic Tee"
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-[12px] tracking-[0.04em] text-[#718087]">Home / Tees</p>
                  <h3 className="zahi-heading mt-3 text-[22px] leading-[1.15]">
                    Racing Graphic Tee
                  </h3>
                  <p className="zahi-display mt-3 text-[22px]">PKR 4,900</p>

                  <div className="mt-6">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-[#718087]">
                      SIZE
                    </p>
                    <div role="radiogroup" aria-label="Size" className="mt-3 flex gap-2">
                      {sizes.map((s) => (
                        <button
                          key={s}
                          type="button"
                          role="radio"
                          aria-checked={size === s}
                          onClick={() => setSize(s)}
                          style={btnChip}
                          className={`ring-1 transition-all duration-200 ${
                            size === s
                              ? "bg-[#111315] text-white ring-[#111315]"
                              : "bg-white text-[#46535A] ring-[#D5E6ED] hover:ring-[#111315]"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Gap comes from the parent, so the two buttons can never touch */}
                  <div className="mt-7 flex flex-col gap-4">
                    <button
                      type="button"
                      style={btnBlock}
                      className="bg-[#111315] text-white transition-colors duration-300 hover:bg-[#28769D]"
                    >
                      Add to cart
                    </button>

                    {/* Fixed height slot, so the layout never jumps */}
                    <div ref={tryOnRef} className="h-12">
                      {installed ? (
                        <button
                          type="button"
                          style={btnBlock}
                          className="zahi-pop-anim bg-[#28769D] text-white shadow-[0_14px_30px_-12px_rgba(40,118,157,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#28769D]">
                            z.
                          </span>
                          Try it on
                        </button>
                      ) : (
                        <span className="flex h-12 w-full items-center justify-center rounded-full border border-dashed border-[#C4DBE5] px-5 text-[12px] text-[#9BAAB1]">
                          Widget appears here after install
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          className={`mt-8 text-center text-[13px] text-[#718087] ${reveal("delay-700")}`}
          aria-live="polite"
        >
          {caption}
        </p>
      </div>
    </section>
  );
}