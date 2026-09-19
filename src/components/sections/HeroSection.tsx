import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-[-260px] h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(151, 216, 239, 0.38) 0%, rgba(234, 246, 252, 0) 70%)",
          }}
        />
      </div>

      <div className="zahi-container relative">
        <div className="flex min-h-[calc(100vh-90px)] items-center justify-center py-28 md:py-32 lg:py-36">
          <div className="w-full max-w-[1100px] text-center">
            <p className="zahi-eyebrow mb-8 justify-center">
              AI virtual try-on for fashion
            </p>

            <h1
              className="mx-auto max-w-[1000px] font-medium tracking-[-0.065em] text-[#111315]"
              style={{
                fontSize: "clamp(64px, 9.2vw, 138px)",
                lineHeight: 0.9,
              }}
            >
              Virtual try-on
              <br />
              <span className="text-[#28769D]">that feels real.</span>
            </h1>

            <p className="mx-auto mt-9 max-w-[570px] text-[15px] leading-[1.75] text-[#46535A] md:text-[17px]">
              Let shoppers see how your products look on them before they
              buy, powered by realistic AI.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#try-on"
                className="zahi-button-primary"
              >
                Try the demo
                <ArrowIcon />
              </Link>

              <Link
                href="#api"
                className="zahi-button-secondary"
              >
                Explore the API
              </Link>
            </div>

            <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.14em] text-[#9BAAB1]">
              Built for modern fashion commerce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
