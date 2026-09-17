const steps = [
  {
    number: "01",
    title: "Add your product",
    description:
      "Upload a garment image or connect your existing product catalog.",
  },
  {
    number: "02",
    title: "Add a model",
    description:
      "Use a customer photo or provide a model image for the virtual try-on.",
  },
  {
    number: "03",
    title: "Generate",
    description:
      "Zahi processes both images and creates a realistic try-on result.",
  },
];

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

function ProcessVisual() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,105,0,0.1),transparent_45%)]" />

      <div className="absolute left-[8%] top-[10%] text-[7px] uppercase tracking-[0.14em] text-white/15">
        Generation flow
      </div>

      <div className="absolute left-[9%] top-[26%] h-[125px] w-[95px] rotate-[-6deg] rounded-2xl border border-white/[0.09] bg-[#111111] shadow-2xl">
        <div className="absolute inset-2 rounded-xl bg-[#181818]">
          <div className="absolute left-1/2 top-[18%] h-[27px] w-[27px] -translate-x-1/2 rounded-full bg-[linear-gradient(145deg,#d3aa8e,#755141)]" />

          <div className="absolute left-1/2 top-[39%] h-[53px] w-[42px] -translate-x-1/2 rounded-[13px_13px_8px_8px] bg-[linear-gradient(145deg,#c38a60,#65422f)]" />

          <div className="absolute bottom-[8%] left-1/2 h-[30px] w-[9px] -translate-x-[12px] rounded-full bg-[#292929]" />

          <div className="absolute bottom-[8%] left-1/2 h-[30px] w-[9px] translate-x-[3px] rounded-full bg-[#292929]" />
        </div>

        <span className="absolute -bottom-7 left-0 text-[7px] uppercase tracking-[0.1em] text-white/20">
          Model
        </span>
      </div>

      <div className="absolute left-[39%] top-[43%] flex h-9 w-9 items-center justify-center rounded-full border border-[#ff6900]/30 bg-[#ff6900]/[0.08] text-[#ff6900]">
        <ArrowIcon />
      </div>

      <div className="absolute right-[9%] top-[21%] h-[155px] w-[115px] rotate-[5deg] rounded-2xl border border-[#ff6900]/20 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-2 rounded-xl bg-[linear-gradient(160deg,#252525,#101010)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,105,0,0.16),transparent_55%)]" />

          <div className="absolute left-1/2 top-[14%] h-[30px] w-[28px] -translate-x-1/2 rounded-full bg-[linear-gradient(145deg,#d3aa8e,#755141)]" />

          <div className="absolute left-1/2 top-[34%] h-[62px] w-[50px] -translate-x-1/2 rounded-[15px_15px_9px_9px] bg-[linear-gradient(145deg,#c58c62,#704831)]" />

          <div className="absolute bottom-[5%] left-1/2 h-[38px] w-[10px] -translate-x-[13px] rounded-full bg-[#252525]" />

          <div className="absolute bottom-[5%] left-1/2 h-[38px] w-[10px] translate-x-[3px] rounded-full bg-[#252525]" />
        </div>

        <div className="absolute -bottom-7 right-0 flex items-center gap-1.5 text-[7px] uppercase tracking-[0.1em] text-[#ff6900]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6900]" />
          Generated
        </div>
      </div>

      <div className="absolute bottom-[12%] left-[17%] h-[115px] w-[90px] rotate-[4deg] rounded-2xl border border-white/[0.08] bg-[#101010]">
        <div className="absolute inset-3 rounded-xl border border-white/[0.05] bg-[#161616]">
          <div className="absolute left-1/2 top-[22%] h-[48px] w-[38px] -translate-x-1/2 rounded-[8px_8px_13px_13px] bg-[linear-gradient(145deg,#bd855a,#75482f)]" />

          <div className="absolute left-[19%] top-[25%] h-[40px] w-[7px] -rotate-[8deg] rounded-full bg-[#76503c]" />

          <div className="absolute right-[19%] top-[25%] h-[40px] w-[7px] rotate-[8deg] rounded-full bg-[#76503c]" />
        </div>

        <span className="absolute -bottom-7 left-0 text-[7px] uppercase tracking-[0.1em] text-white/20">
          Garment
        </span>
      </div>

      <div className="absolute bottom-[18%] left-[45%] flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] bg-[#111111] text-white/30">
        <span className="text-[10px] font-medium">+</span>
      </div>

      <div className="absolute bottom-[9%] right-[10%] flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#111111] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />

        <span className="text-[7px] uppercase tracking-[0.09em] text-white/30">
          Ready for storefront
        </span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="zahi-container zahi-section-inner">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <div className="zahi-label">How it works</div>

              <h2 className="mt-7 max-w-[560px] text-[43px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[59px]">
                From product
                <br />
                image to
                <br />
                <span className="zahi-orange">try-on.</span>
              </h2>

              <p className="mt-7 max-w-[430px] text-[14px] leading-[1.7] text-[var(--zahi-text-soft)]">
                A simple workflow designed to fit into the way your team
                already works. No manual compositing or expensive studio
                production.
              </p>

              <div className="mt-10 border-t border-white/[0.08]">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="grid grid-cols-[45px_1fr] gap-4 border-b border-white/[0.08] py-6"
                  >
                    <span className="text-[9px] font-semibold tracking-[0.1em] text-[#ff6900]">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="text-[17px] font-medium tracking-[-0.02em]">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[370px] text-[11px] leading-[1.65] text-white/30">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <ProcessVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}