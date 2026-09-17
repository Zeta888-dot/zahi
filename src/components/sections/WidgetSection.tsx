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

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M10 13V4M6.5 7.5 10 4l3.5 3.5M5 16h10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M10 2.8c.45 3.85 3.35 6.75 7.2 7.2-3.85.45-6.75 3.35-7.2 7.2-.45-3.85-3.35-6.75-7.2-7.2 3.85-.45 6.75-3.35 7.2-7.2Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TryOnPreview() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
      <div className="flex h-12 items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>

        <span className="text-[8px] uppercase tracking-[0.13em] text-white/20">
          zahi / widget
        </span>

        <div className="h-5 w-5 rounded-md border border-white/[0.07]" />
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-white/[0.07] p-4 lg:border-b-0 lg:border-r sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.1em] text-white/30">
              Upload
            </span>

            <span className="text-[8px] text-white/20">01</span>
          </div>

          <div className="mt-4 flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.11] bg-white/[0.018]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/35">
              <UploadIcon />
            </div>

            <p className="mt-4 text-[10px] font-medium text-white/55">
              Upload a model photo
            </p>

            <p className="mt-2 max-w-[160px] text-center text-[8px] leading-[1.6] text-white/20">
              JPG or PNG
              <br />
              Up to 10MB
            </p>

            <div className="mt-5 rounded-full border border-white/[0.08] px-3 py-1.5 text-[7px] uppercase tracking-[0.1em] text-white/30">
              Choose image
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.018] px-3 py-2.5">
            <span className="text-[8px] text-white/25">
              Model image
            </span>

            <span className="text-[8px] text-white/15">
              Required
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.1em] text-white/30">
              Select product
            </span>

            <span className="text-[8px] text-white/20">02</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="relative aspect-[0.82] overflow-hidden rounded-xl border border-[#ff6900]/35 bg-[#151515]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,105,0,0.14),transparent_62%)]" />

              <div className="absolute left-1/2 top-[25%] h-[42%] w-[48%] -translate-x-1/2 rounded-[12px_12px_20px_20px] bg-[linear-gradient(145deg,#c89168,#70472f_68%,#3d281e)]" />

              <div className="absolute left-1/2 top-[17%] h-[17%] w-[25%] -translate-x-1/2 rounded-full bg-[linear-gradient(145deg,#d8ae91,#855b47)]" />

              <span className="absolute bottom-3 left-3 rounded-full border border-[#ff6900]/25 bg-black/30 px-2 py-1 text-[7px] uppercase tracking-[0.08em] text-[#ff6900]">
                Selected
              </span>
            </div>

            <div className="relative aspect-[0.82] overflow-hidden rounded-xl border border-white/[0.06] bg-[#111111]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.045),transparent_60%)]" />

              <div className="absolute left-1/2 top-[25%] h-[42%] w-[48%] -translate-x-1/2 rounded-[12px_12px_20px_20px] bg-[linear-gradient(145deg,#6e6e6e,#292929)]" />

              <div className="absolute left-1/2 top-[17%] h-[17%] w-[25%] -translate-x-1/2 rounded-full bg-[linear-gradient(145deg,#b9a18f,#5d4c42)]" />

              <span className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.08em] text-white/20">
                Preview
              </span>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-white/[0.06] bg-white/[0.018] p-3.5">
            <div className="flex items-center gap-2">
              <span className="text-white/35">
                <SparkIcon />
              </span>

              <div>
                <p className="text-[9px] font-medium text-white/60">
                  AI virtual try-on
                </p>

                <p className="mt-1 text-[7px] text-white/20">
                  Generate a realistic product preview
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#ff6900] text-[8px] font-semibold uppercase tracking-[0.08em] text-black transition hover:brightness-105"
            >
              Generate try-on
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-3.5 sm:px-5">
        <span className="text-[7px] uppercase tracking-[0.1em] text-white/20">
          Powered by Zahi AI
        </span>

        <span className="flex items-center gap-2 text-[7px] uppercase tracking-[0.08em] text-white/25">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          Ready
        </span>
      </div>
    </div>
  );
}

export default function WidgetSection() {
  return (
    <section id="widget" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="zahi-glow left-[-260px] top-[10%] h-[520px] w-[520px] opacity-35" />

        <div className="zahi-container zahi-section-inner relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div className="order-2 lg:order-1">
              <TryOnPreview />
            </div>

            <div className="order-1 lg:order-2">
              <div className="zahi-label">
                Embedded try-on
              </div>

              <h2 className="mt-7 max-w-[600px] text-[43px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[58px]">
                A try-on
                <br />
                experience
                <br />
                <span className="zahi-orange">inside your store.</span>
              </h2>

              <p className="mt-7 max-w-[470px] text-[14px] leading-[1.7] text-[var(--zahi-text-soft)]">
                Give shoppers a simple way to upload a photo, select a
                product, and see how it looks. The experience stays inside
                your existing storefront.
              </p>

              <div className="mt-9 grid max-w-[500px] gap-3 sm:grid-cols-2">
                <div className="zahi-card p-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#ff6900]">
                    01
                  </span>

                  <h3 className="mt-5 text-[17px] font-medium tracking-[-0.025em]">
                    Upload
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.6] text-white/30">
                    Shopper adds a photo of themselves.
                  </p>
                </div>

                <div className="zahi-card p-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#ff6900]">
                    02
                  </span>

                  <h3 className="mt-5 text-[17px] font-medium tracking-[-0.025em]">
                    Try on
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.6] text-white/30">
                    AI generates the product on the shopper.
                  </p>
                </div>
              </div>

              <Link
                href="#api"
                className="mt-8 inline-flex items-center gap-3 border-t border-white/10 pt-5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/50 transition-colors hover:text-white"
              >
                Explore the API
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}