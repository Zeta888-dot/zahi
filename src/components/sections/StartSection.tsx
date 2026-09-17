import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerMark({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positionClass = {
    "top-left": "left-5 top-5 border-l border-t",
    "top-right": "right-5 top-5 border-r border-t",
    "bottom-left": "bottom-5 left-5 border-b border-l",
    "bottom-right": "bottom-5 right-5 border-b border-r",
  }[position];

  return (
    <span
      className={`absolute h-5 w-5 border-white/[0.13] ${positionClass}`}
      aria-hidden="true"
    />
  );
}

export default function StartSection() {
  return (
    <section id="start" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,105,0,0.1),transparent_48%)]" />

        <div className="zahi-container relative py-[150px] sm:py-[190px]">
          <div className="relative mx-auto max-w-[1050px] overflow-hidden border border-white/[0.08] bg-[#090909] px-6 py-20 text-center sm:px-12 sm:py-28 lg:px-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

            <div className="zahi-glow left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-35" />

            <CornerMark position="top-left" />
            <CornerMark position="top-right" />
            <CornerMark position="bottom-left" />
            <CornerMark position="bottom-right" />

            <div className="relative z-10">
              <div className="zahi-label">
                Start building
              </div>

              <h2 className="mx-auto mt-8 max-w-[850px] text-[48px] font-medium leading-[0.9] tracking-[-0.06em] sm:text-[72px] lg:text-[94px]">
                Make every
                <br />
                product
                <br />
                <span className="zahi-orange">try-on ready.</span>
              </h2>

              <p className="mx-auto mt-8 max-w-[510px] text-[13px] leading-[1.75] text-white/35 sm:text-[14px]">
                Bring AI virtual try-on to your storefront, product, or
                commerce workflow. Start with the experience you need and
                scale from there.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="#widget" className="zahi-button-primary">
                  Try the experience
                  <ArrowIcon />
                </Link>

                <Link href="#api" className="zahi-button-secondary">
                  Build with API
                  <ArrowIcon />
                </Link>
              </div>

              <div className="mx-auto mt-12 flex max-w-[460px] items-center justify-center gap-4">
                <span className="h-px flex-1 bg-white/[0.07]" />

                <span className="text-[7px] uppercase tracking-[0.14em] text-white/15">
                  Commerce / AI / Try-on
                </span>

                <span className="h-px flex-1 bg-white/[0.07]" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-[1050px] flex-col justify-between gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center">
            <span className="text-[8px] uppercase tracking-[0.12em] text-white/15">
              Zahi virtual try-on
            </span>

            <div className="flex items-center gap-5 text-[8px] uppercase tracking-[0.1em] text-white/20">
              <span>Storefront</span>
              <span>API</span>
              <span>FASHN AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}