import Link from "next/link";

const stats = [
  { n: "2026", l: "Founded in Chitral" },
  { n: "0.8s", l: "Median generation time" },
  { n: "40+", l: "Base models in library" },
  { n: "10x", l: "Cheaper than studio shoots" },
];

const principles = [
  {
    t: "Merchants first",
    d: "Every feature starts with a store owner's problem, not a model's benchmark.",
  },
  {
    t: "Honest imagery",
    d: "Try-ons should stay faithful to the real garment, so shoppers know what to expect.",
  },
  {
    t: "Fast is a feature",
    d: "Generation should feel instant, whether it happens in a dashboard or inside a storefront.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-28 sm:px-7 sm:py-32 lg:px-10 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              About zahi
            </p>

            <p className="mt-8 max-w-[240px] text-[12px] leading-[1.6] text-pewter">
              The visual layer for modern fashion commerce.
            </p>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.9] tracking-[-0.055em] sm:text-[82px] lg:text-[112px]">
              Fashion commerce,
              <br />
              <span className="text-pewter">rebuilt for AI.</span>
            </h1>

            <div className="mt-12 max-w-[650px] space-y-5 text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
              <p>
                zahi is building virtual try-on infrastructure for stores that
                want better product imagery without rebuilding their entire
                workflow.
              </p>

              <p>
                Upload a garment, choose a model, and generate a realistic
                product experience that can live across your store, campaigns,
                widgets, and API.
              </p>

              <p>
                The goal is simple: make high-quality fashion imagery easier to
                create, easier to deploy, and easier for shoppers to use.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-28 grid border-y border-black/10 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, index) => (
            <div
              key={s.l}
              className={`px-5 py-8 sm:px-7 lg:px-8 ${
                index > 0
                  ? "border-t border-black/10 sm:border-l sm:border-t-0 dark:border-white/10"
                  : ""
              } ${
                index > 1
                  ? "lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <p className="text-[42px] font-medium tracking-[-0.04em] text-ember-orange">
                {s.n}
              </p>
              <p className="mt-2 text-[12px] text-pewter">{s.l}</p>
            </div>
          ))}
        </div>

        <section className="mt-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Principles
              </p>
            </div>

            <div className="divide-y divide-black/10 dark:divide-white/10">
              {principles.map((p, index) => (
                <div
                  key={p.t}
                  className="grid gap-5 py-8 first:pt-0 md:grid-cols-[80px_1fr]"
                >
                  <span className="text-[10px] text-ember-orange">
                    0{index + 1}
                  </span>

                  <div>
                    <h2 className="text-[25px] font-medium tracking-[-0.02em]">
                      {p.t}
                    </h2>
                    <p className="mt-3 max-w-[560px] text-[14px] leading-[1.7] text-pewter">
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-28 border-t border-black/10 pt-10 dark:border-white/10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                Work with zahi
              </p>

              <h2 className="mt-5 max-w-[700px] text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[58px]">
                Build the next layer of fashion commerce.
              </h2>
            </div>

            <Link
              href="/#start"
              className="w-fit rounded-full bg-ink-black px-7 py-4 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
            >
              Join the waitlist
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}