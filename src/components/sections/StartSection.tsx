"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

/*
  Light variant of the pill button, for dark sections.
  These custom properties feed the .zahi-btn rules in globals.css, so the
  hover, active and disabled states all keep working.
*/
const darkBtn = {
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

export default function StartSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>();

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Connect your backend here (Sanity, Formspree, a Next.js route handler)
    setSent(true);
  };

  const reset = () => {
    setEmail("");
    setSent(false);
  };

  return (
    <section id="start" className="relative isolate scroll-mt-20 overflow-hidden bg-[#0B1216]">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[860px] max-w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.38),transparent)] blur-3xl" />
        <div className="absolute top-[-10%] right-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent)] blur-3xl" />
        <div className="absolute bottom-[-12%] left-[-8%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.14),transparent)] blur-3xl" />

        {/* Fine grid */}
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{ backgroundImage: NOISE }}
        />
      </div>

      <div ref={ref} className="zahi-content relative py-24 lg:py-32">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className={`text-[40px] font-medium leading-[1] tracking-[-0.045em] text-[#EAF4F9] sm:text-[64px] lg:text-[84px] ${reveal(
              "delay-0"
            )}`}
          >
            <span className="block">Your first try-on</span>
            <span className="block text-[#6FB6DD]">in 30 seconds.</span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[#9BAAB1] lg:mt-8 lg:text-[18px] ${reveal(
              "delay-150"
            )}`}
          >
            Join the waitlist. We onboard a small batch of stores every week
            and reply with a personal invite and a live demo.
          </p>

          <div className={`mx-auto mt-10 max-w-[560px] lg:mt-12 ${reveal("delay-300")}`}>
            {sent ? (
              <div
                role="status"
                className="rounded-[28px] bg-white/[0.06] p-7 text-center ring-1 ring-white/[0.12] backdrop-blur"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#6FB6DD]/15 text-[#6FB6DD]">
                  <svg width="18" height="18" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2.5 6.2L5 8.7L9.5 3.7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="mt-4 text-[18px] font-semibold text-white">Request received</p>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#9BAAB1]">
                  Thanks, we will reach out within one business day with an
                  invite and a live demo.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 text-[13px] font-semibold text-[#6FB6DD] transition-colors duration-200 hover:text-white"
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourstore.com"
                  className="h-14 w-full min-w-0 rounded-full border border-white/[0.14] bg-white/[0.06] px-6 text-[16px] text-[#EAF4F9] outline-none backdrop-blur transition-all duration-300 focus:border-[#6FB6DD] focus:bg-white/[0.09] focus:ring-4 focus:ring-[#6FB6DD]/15 min-[481px]:h-[60px] sm:flex-1"
                />
                <button
                  type="submit"
                  className="zahi-btn zahi-btn-primary zahi-btn-lg w-full shrink-0 sm:w-auto"
                  style={darkBtn}
                >
                  Join waitlist
                  <span className="zahi-btn-icon" aria-hidden>
                    <ArrowUpRight />
                  </span>
                </button>
              </form>
            )}
          </div>

          <p className={`mt-6 text-[13px] text-[#7D97A3] ${reveal("delay-500")}`}>
            200+ stores on the waitlist. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}