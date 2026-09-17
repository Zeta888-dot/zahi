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

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="m7 5 7 5-7 5V5Z" fill="currentColor" />
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="7.5"
        cy="7.5"
        r="1.3"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="m5 14 3.5-3.2 2.4 2.1 1.8-1.7 2.3 2.8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ModelSilhouette() {
  return (
    <div className="relative h-[230px] w-[150px]">
      <div className="absolute left-1/2 top-2 h-[50px] w-[44px] -translate-x-1/2 rounded-full bg-[linear-gradient(145deg,#d7ae92,#8c624d)]" />

      <div className="absolute left-1/2 top-[43px] h-[128px] w-[104px] -translate-x-1/2 rounded-[34px_34px_20px_20px] bg-[linear-gradient(145deg,#c18a60,#70472f_72%,#3d281d)]" />

      <div className="absolute left-[25px] top-[54px] h-[118px] w-[20px] -rotate-[8deg] rounded-full bg-[linear-gradient(#cfa184,#765342)]" />

      <div className="absolute right-[25px] top-[54px] h-[118px] w-[20px] rotate-[8deg] rounded-full bg-[linear-gradient(#cfa184,#765342)]" />

      <div className="absolute left-[48px] top-[164px] h-[66px] w-[23px] -rotate-[3deg] rounded-full bg-[linear-gradient(#2b2928,#0e0e0e)]" />

      <div className="absolute right-[48px] top-[164px] h-[66px] w-[23px] rotate-[3deg] rounded-full bg-[linear-gradient(#2b2928,#0e0e0e)]" />

      <div className="absolute left-[71px] top-[57px] h-[91px] w-px bg-black/20" />
    </div>
  );
}

function Garment() {
  return (
    <div className="relative h-[170px] w-[125px]">
      <div className="absolute left-[35px] top-0 h-[48px] w-[55px] rounded-[18px_18px_8px_8px] bg-[linear-gradient(145deg,#d39a6a,#77482e)]" />

      <div className="absolute left-[19px] top-[34px] h-[115px] w-[87px] rounded-[12px_12px_20px_20px] bg-[linear-gradient(145deg,#c48a5b,#815137_65%,#493024)]" />

      <div className="absolute left-[61px] top-[39px] h-[101px] w-px bg-black/25" />

      <div className="absolute left-[20px] top-[42px] h-[89px] w-[15px] -rotate-[9deg] rounded-full bg-[linear-gradient(#b77a51,#5e3d2b)]" />

      <div className="absolute right-[20px] top-[42px] h-[89px] w-[15px] rotate-[9deg] rounded-full bg-[linear-gradient(#b77a51,#5e3d2b)]" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="zahi-glow right-[-220px] top-[-280px] h-[720px] w-[720px]" />

      <div className="zahi-glow bottom-[-220px] left-[35%] h-[430px] w-[430px] opacity-50" />

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="zahi-grid absolute inset-x-0 top-0 h-[620px]" />
      </div>

      <div className="zahi-container relative">
        <div className="grid min-h-[calc(100svh-76px)] items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-4 lg:py-24">
          <div className="relative z-10">
            <div className="zahi-label">
              AI virtual try-on for modern commerce
            </div>

            <h1 className="mt-8 max-w-[760px] text-[62px] font-medium leading-[0.86] tracking-[-0.065em] sm:text-[82px] lg:text-[96px]">
              Turn your
              <br />
              catalog into
              <br />
              <span className="zahi-orange">try-ons.</span>
            </h1>

            <p className="mt-8 max-w-[510px] text-[15px] leading-[1.7] text-[var(--zahi-text-soft)] sm:text-[17px]">
              Help your customers see clothes on real people with AI-powered
              virtual try-on. No studio, no photoshoot, no complicated
              production workflow.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#start" className="zahi-button-primary">
                Get started
                <ArrowIcon />
              </Link>

              <Link href="#product" className="zahi-button-secondary">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10">
                  <PlayIcon />
                </span>
                Watch demo
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.1em] text-[var(--zahi-text-faint)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
              Built for fashion commerce
            </div>
          </div>

          <div className="relative min-h-[470px] lg:min-h-[560px]">
            <div className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,105,0,0.13),transparent_68%)] blur-2xl sm:h-[520px] sm:w-[520px]" />

            <div className="absolute right-[2%] top-[8%] w-[94%] max-w-[620px] rotate-[-3deg] rounded-[26px] border border-white/[0.1] bg-[#0b0b0b]/95 shadow-[0_40px_110px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.12em] text-white/25">
                  zahi / try-on
                </span>

                <div className="h-5 w-5 rounded-md border border-white/[0.08]" />
              </div>

              <div className="grid grid-cols-[72px_1fr] p-3 sm:grid-cols-[88px_1fr] sm:p-4">
                <div className="space-y-2 border-r border-white/[0.07] pr-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`flex aspect-square items-center justify-center rounded-lg border ${
                        index === 1
                          ? "border-[#ff6900]/40 bg-[#ff6900]/[0.07]"
                          : "border-white/[0.06] bg-white/[0.02]"
                      }`}
                    >
                      {index === 1 ? (
                        <Garment />
                      ) : (
                        <div className="h-[48%] w-[34%] rounded bg-white/[0.07]" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="pl-3 sm:pl-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ProductIcon />

                      <span className="text-[8px] uppercase tracking-[0.1em] text-white/30">
                        Selected product
                      </span>
                    </div>

                    <span className="rounded-full border border-[#ff6900]/25 bg-[#ff6900]/[0.05] px-2 py-1 text-[7px] uppercase tracking-[0.08em] text-[#ff6900]">
                      Ready
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[0.75fr_1.25fr]">
                    <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#151515]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,105,0,0.11),transparent_58%)]" />

                      <Garment />

                      <div className="absolute bottom-3 left-3">
                        <p className="text-[7px] uppercase tracking-[0.1em] text-white/25">
                          blazer
                        </p>
                        <p className="mt-1 text-[8px] text-white/45">
                          Brown / wool
                        </p>
                      </div>
                    </div>

                    <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[linear-gradient(160deg,#202020,#0f0f0f)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,105,0,0.15),transparent_42%)]" />

                      <ModelSilhouette />

                      <div className="absolute bottom-3 left-3">
                        <p className="text-[7px] uppercase tracking-[0.1em] text-white/25">
                          Model
                        </p>
                        <p className="mt-1 text-[8px] text-white/45">
                          Base 04
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.018] px-3 py-2.5">
                    <span className="text-[8px] text-white/25">
                      Virtual try-on preview
                    </span>

                    <span className="flex items-center gap-2 text-[8px] text-[#28c840]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                      Complete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-[-1%] top-[2%] z-20 rounded-full border border-white/10 bg-[#101010]/95 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff6900]" />

                <span className="text-[8px] uppercase tracking-[0.1em] text-white/65">
                  Generated in seconds
                </span>
              </div>
            </div>

            <div className="absolute bottom-[5%] right-[-1%] z-30 w-[195px] rounded-[18px] border border-white/[0.1] bg-[#0e0e0e]/95 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-[215px]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />

                <span className="text-[9px] font-medium text-white/70">
                  Try-on complete
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-white/[0.06] bg-[#181818]">
                  <div className="h-6 w-4 rounded-sm bg-[linear-gradient(#b77c4e,#593b2b)]" />
                </div>

                <div>
                  <p className="text-[8px] text-white/60">try_8f2a...</p>
                  <p className="mt-1 text-[7px] text-white/25">
                    1024 x 1536
                  </p>
                </div>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-auto h-4 w-4 text-white/35"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3v10M6 10l4 4 4-4M4 17h12"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-[2%] left-[8%] h-[150px] w-[150px] rounded-full bg-[#ff6900]/20 blur-[80px]" />
          </div>
        </div>

        <div className="grid border-t border-white/[0.07] sm:grid-cols-4">
          <div className="flex items-center py-7 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/30">
            Built for modern commerce
          </div>

          <div className="flex items-center py-7 text-[16px] font-semibold tracking-[-0.03em] text-white/45 sm:justify-center">
            Shopify
          </div>

          <div className="flex items-center py-7 text-[16px] font-semibold tracking-[-0.03em] text-white/45 sm:justify-center">
            WooCommerce
          </div>

          <div className="flex items-center py-7 text-[9px] uppercase tracking-[0.14em] text-white/20 sm:justify-end">
            Store + API
          </div>
        </div>
      </div>
    </section>
  );
}