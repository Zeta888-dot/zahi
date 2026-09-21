"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STEP_MS = 4500;

const steps = [
  {
    n: "01",
    title: "Upload garment",
    desc: "Drop a product photo. The garment is isolated automatically, no masking, no studio.",
    img: "/hero/garment.png",
    meta: "INPUT PNG",
    status: "Garment ready",
  },
  {
    n: "02",
    title: "Pick a model",
    desc: "Forty base models or your own. Pose, ethnicity and size dialed per campaign.",
    img: "/hero/model.png",
    meta: "BASE MODEL 04",
    status: "Model selected",
  },
  {
    n: "03",
    title: "Generate",
    desc: "Photorealistic try-on in 8 seconds. Fabric, drape and color preserved to the stitch.",
    img: "/hero/try-on-result.png",
    meta: "OUTPUT 8s",
    status: "Try-on ready",
  },
];

/* Tracks live visibility and also remembers if the element was ever seen */
function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible, seen };
}

function StatusPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#F2F9FC] px-3 py-1.5 text-[12px] font-medium text-[#46535A]"
      aria-live="polite"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#4DA878]" />
      {label}
    </span>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const { ref, seen } = useInView<HTMLDivElement>(0.12);
  const { ref: demoRef, visible: demoVisible } = useInView<HTMLDivElement>(0.3);

  // Autoplay stops while the demo is off screen or hovered with a mouse
  const paused = hovering || !demoVisible;

  // The progress bar drives autoplay: when it finishes, go to the next step
  const next = () => setActive((a) => (a + 1) % steps.length);

  const selectStep = (i: number) => {
    setActive(i);

    // On mobile the image stage sits above the steps, so bring it into view
    if (!window.matchMedia("(max-width: 1023px)").matches) return;
    const el = stageRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const fits = rect.top >= 88 && rect.bottom <= window.innerHeight - 16;
    if (fits) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      seen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <section id="how-it-works" className="zahi-section relative isolate scroll-mt-20 overflow-hidden">
      <style>{`
        @keyframes zahi-how-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zahi-how-bar { animation: none !important; width: 100% !important; }
        }
      `}</style>

      {/* Background, fades at top and bottom so it blends with neighbouring sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        <div className="absolute top-[10%] left-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
        <div className="absolute top-[26%] left-1/2 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.16),transparent)] blur-3xl" />
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
            <span className="block">Flat lay to fit,</span>
            <span className="zahi-blue block">in three moves.</span>
          </h2>

          <p
            className={`zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px] ${reveal(
              "delay-150"
            )}`}
          >
            From product photo to photorealistic try-on in a single session.
            No studio, no shoot, no waiting.
          </p>
        </div>

        {/* Demo */}
        <div
          ref={demoRef}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") setHovering(true);
          }}
          onPointerLeave={() => setHovering(false)}
          className="mx-auto mt-14 grid max-w-[1120px] gap-6 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-8"
        >
          {/* Steps */}
          <div className={`order-2 flex flex-col justify-center gap-3 lg:order-1 ${reveal("delay-300")}`}>
            {steps.map((s, i) => {
              const isActive = active === i;
              const isDone = i < active;

              return (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => selectStep(i)}
                  aria-current={isActive ? "step" : undefined}
                  className={`block w-full rounded-[24px] text-left transition-all duration-500 ${
                    isActive
                      ? "bg-white shadow-[0_30px_80px_-40px_rgba(17,19,21,0.3)] ring-1 ring-black/[0.06]"
                      : "bg-transparent hover:bg-white/60"
                  }`}
                >
                  <span className="flex items-start gap-4 p-5 lg:p-6">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-semibold transition-colors duration-500 ${
                        isActive ? "bg-[#111315] text-white" : "bg-[#F2F9FC] text-[#718087]"
                      }`}
                    >
                      {s.n}
                    </span>

                    <span className="block min-w-0 flex-1">
                      <span
                        className={`block text-[18px] font-semibold leading-[1.3] transition-colors duration-500 ${
                          isActive ? "text-[#111315]" : "text-[#718087]"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-2 block text-[14px] leading-[1.65] text-[#718087]">
                        {s.desc}
                      </span>

                      {/* Progress: active step fills, finished steps stay filled */}
                      <span className="mt-5 block h-[3px] w-full overflow-hidden rounded-full bg-[#E2EEF3]">
                        {isActive ? (
                          <span
                            key={active}
                            className="zahi-how-bar block h-full rounded-full bg-[#28769D]"
                            onAnimationEnd={next}
                            style={{
                              width: 0,
                              animationName: "zahi-how-progress",
                              animationDuration: `${STEP_MS}ms`,
                              animationTimingFunction: "linear",
                              animationFillMode: "forwards",
                              animationPlayState: paused ? "paused" : "running",
                            }}
                          />
                        ) : isDone ? (
                          <span className="block h-full w-full rounded-full bg-[#9CC3D6]" />
                        ) : null}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stage */}
          <div ref={stageRef} className={`order-1 lg:order-2 ${reveal("delay-500")}`}>
            <div className="h-full overflow-hidden rounded-[28px] bg-white shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)] ring-1 ring-black/[0.06]">
              {/* Window bar */}
              <div className="flex items-center justify-between gap-3 border-b border-[#E2EEF3] px-6 py-4 lg:px-7">
                <div className="flex items-center gap-4">
                  <div aria-hidden className="hidden gap-1.5 sm:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
                  </div>
                  <span className="rounded-full bg-[#F2F9FC] px-4 py-1.5 text-[12px] text-[#718087]">
                    zahi studio
                  </span>
                </div>
                <StatusPill label={steps[active].status} />
              </div>

              {/* Image stage */}
              <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-[#F8FCFE] to-[#EDF8FD] sm:h-[480px] lg:h-[560px]">
                {steps.map((s, i) => {
                  const on = active === i;
                  return (
                    <div
                      key={s.n}
                      aria-hidden={!on}
                      className={`absolute inset-0 flex items-center justify-center px-8 pt-8 pb-16 transition-all duration-[900ms] ease-out motion-reduce:transition-none ${
                        on ? "scale-100 opacity-100 blur-[0px]" : "scale-[1.06] opacity-0 blur-[8px]"
                      }`}
                    >
                      <div className="relative aspect-[3/4] h-full max-w-full overflow-hidden rounded-[18px] shadow-[0_30px_80px_-20px_rgba(54,103,126,0.35)] ring-1 ring-black/[0.04]">
                        <Image
                          src={s.img}
                          alt={s.title}
                          fill
                          priority={i === 0}
                          sizes="(min-width: 1024px) 360px, 260px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Grid overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(67,122,145,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(67,122,145,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
                />

                {/* Chips */}
                <span className="absolute bottom-5 left-5 rounded-full bg-white/85 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#28769D] ring-1 ring-[#C4DBE5] backdrop-blur-md">
                  {steps[active].meta}
                </span>
                <span className="absolute right-5 bottom-5 font-mono text-[12px] text-[#9BAAB1]">
                  {steps[active].n} / 0{steps.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className={`mt-8 text-center text-[13px] text-[#718087] ${reveal("delay-700")}`}>
          The average session takes 47 seconds from upload to result.
        </p>
      </div>
    </section>
  );
}