import Link from "next/link";

const comparisons = [
  {
    title: "Store integrations",
    description:
      "Connect the try-on experience to the commerce layer your store already uses.",
    zahi: "Shopify + WooCommerce",
    category: "Integrations",
  },
  {
    title: "Embeddable experience",
    description:
      "Add virtual try-on to a product page without rebuilding the entire storefront.",
    zahi: "Embeddable widget",
    category: "Storefront",
  },
  {
    title: "Developer access",
    description:
      "Build your own workflow when a ready-made storefront component is not enough.",
    zahi: "API access",
    category: "Developer",
  },
  {
    title: "Model flexibility",
    description:
      "Create try-on imagery around the garments and models that fit your catalog.",
    zahi: "Model selection",
    category: "Generation",
  },
];

const questions = [
  "What kind of store are you building?",
  "Do you need a widget or a custom integration?",
  "How much control do you need over generation?",
];

export default function ComparePage() {
  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-28 sm:px-7 sm:py-32 lg:px-10 lg:py-40">
        <section className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Compare
            </p>

            <p className="mt-8 max-w-[250px] text-[12px] leading-[1.7] text-pewter">
              A practical way to think about virtual try-on tools and what
              matters when choosing one.
            </p>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
              Choose the
              <br />
              <span className="text-pewter">right workflow.</span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
              Different tools solve different problems. Here are the parts of
              the workflow worth comparing before you integrate anything into
              your store.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="mb-10 flex items-center justify-between gap-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
              What to compare
            </p>

            <span className="text-[10px] uppercase tracking-[0.12em] text-pewter">
              04 areas
            </span>
          </div>

          <div className="divide-y divide-black/10 dark:divide-white/10">
            {comparisons.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-8 py-10 lg:grid-cols-[80px_0.8fr_1fr] lg:items-start"
              >
                <span className="text-[10px] text-ember-orange">
                  0{index + 1}
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                    {item.category}
                  </p>

                  <h2 className="mt-3 text-[30px] font-medium leading-[1] tracking-[-0.025em]">
                    {item.title}
                  </h2>
                </div>

                <div>
                  <p className="max-w-[520px] text-[14px] leading-[1.7] text-pewter">
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex rounded-full border border-black/10 px-4 py-2 text-[10px] uppercase tracking-[0.1em] dark:border-white/10">
                    {item.zahi}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Before you choose
              </p>
            </div>

            <div>
              <h2 className="max-w-[850px] text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[58px]">
                Start with the workflow, not the feature list.
              </h2>

              <div className="mt-10 divide-y divide-black/10 dark:divide-white/10">
                {questions.map((question, index) => (
                  <div
                    key={question}
                    className="flex gap-6 py-6 first:pt-0"
                  >
                    <span className="text-[10px] text-ember-orange">
                      0{index + 1}
                    </span>

                    <p className="text-[15px] leading-[1.5]">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-28 border-t border-black/10 pt-10 dark:border-white/10 sm:mt-36">
          <div className="rounded-[28px] bg-ink-black p-8 text-white sm:p-12 lg:p-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Try the workflow
            </p>

            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-[780px] text-[43px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[62px]">
                See how virtual try-on fits into your store.
              </h2>

              <Link
                href="/#try-on"
                className="w-fit rounded-full bg-ember-orange px-7 py-4 text-[11px] font-medium text-ink-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Try zahi
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-6 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>zahi.</span>
          <span>Virtual try-on for modern commerce</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}