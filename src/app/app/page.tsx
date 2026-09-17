import Link from "next/link";

const tools = [
  {
    number: "01",
    title: "Virtual try-on",
    description: "Generate realistic model shots from any garment.",
    href: "/#try-on",
  },
  {
    number: "02",
    title: "Store widget",
    description: "Give shoppers a try-on experience directly on product pages.",
    href: "/#widget",
  },
  {
    number: "03",
    title: "Developer API",
    description: "Build try-on into your own commerce workflow.",
    href: "/#api",
  },
];

const steps = [
  {
    number: "01",
    title: "Add a garment",
    description: "Upload a product image or connect your catalog.",
  },
  {
    number: "02",
    title: "Choose a model",
    description: "Select the look that fits your product and audience.",
  },
  {
    number: "03",
    title: "Generate",
    description: "Create a photorealistic try-on image in seconds.",
  },
];

export default function AppPage() {
  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-7 sm:px-7 sm:py-9 lg:px-10">
        <header className="flex items-center justify-between border-b border-black/10 pb-6 dark:border-white/10">
          <Link
            href="/"
            className="text-[22px] font-medium leading-none tracking-[-0.055em]"
          >
            zahi<span className="text-ember-orange">.</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] uppercase tracking-[0.14em] text-pewter sm:block">
              Workspace
            </span>

            <Link
              href="/"
              className="rounded-full border border-black/10 px-4 py-2.5 text-[10px] font-medium transition-colors hover:border-ember-orange hover:text-ember-orange dark:border-white/10"
            >
              Back to site
            </Link>
          </div>
        </header>

        <section className="py-24 sm:py-32 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                Zahi workspace
              </p>

              <p className="mt-8 max-w-[250px] text-[12px] leading-[1.7] text-pewter">
                Everything you need to turn product images into try-on
                experiences.
              </p>
            </div>

            <div>
              <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
                Build your
                <br />
                <span className="text-pewter">try-on store.</span>
              </h1>

              <p className="mt-8 max-w-[560px] text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
                Create product imagery, test virtual try-on, and prepare your
                storefront for AI-powered shopping.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/#try-on"
                  className="rounded-full bg-ink-black px-7 py-4 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
                >
                  Start a try-on
                </Link>

                <Link
                  href="/docs"
                  className="rounded-full border border-black/10 px-7 py-4 text-[11px] font-medium transition-colors duration-300 hover:border-ember-orange hover:text-ember-orange dark:border-white/10"
                >
                  Read documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 py-16 dark:border-white/10 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Workspace
              </p>

              <h2 className="mt-4 text-[36px] font-medium leading-none tracking-[-0.04em] sm:text-[48px]">
                What do you want to build?
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.12em] text-pewter sm:block">
              03 tools
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.number}
                href={tool.href}
                className="group rounded-[24px] border border-black/10 bg-canvas-white p-7 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-coal-light"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-ember-orange">
                    {tool.number}
                  </span>

                  <span className="text-[11px] text-pewter transition-transform duration-300 group-hover:translate-x-1">
                    Open
                  </span>
                </div>

                <h3 className="mt-16 text-[27px] font-medium tracking-[-0.025em]">
                  {tool.title}
                </h3>

                <p className="mt-3 max-w-[300px] text-[14px] leading-[1.6] text-pewter">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-black/10 py-20 dark:border-white/10 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Workflow
              </p>

              <p className="mt-6 max-w-[230px] text-[12px] leading-[1.7] text-pewter">
                From product image to finished try-on without a complicated
                production workflow.
              </p>
            </div>

            <div className="divide-y divide-black/10 dark:divide-white/10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 py-8 first:pt-0 md:grid-cols-[70px_1fr]"
                >
                  <span className="text-[10px] text-ember-orange">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-[25px] font-medium tracking-[-0.02em]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-pewter">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 py-20 dark:border-white/10 sm:py-28">
          <div className="rounded-[28px] bg-ink-black p-8 text-white sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                  Ready when you are
                </p>

                <h2 className="mt-5 max-w-[780px] text-[43px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[62px]">
                  Turn your catalog into something shoppers can try.
                </h2>
              </div>

              <Link
                href="/#start"
                className="w-fit rounded-full bg-ember-orange px-7 py-4 text-[11px] font-medium text-ink-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get started
              </Link>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-black/10 pt-6 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>zahi.</span>
          <span>AI-powered virtual try-on</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}