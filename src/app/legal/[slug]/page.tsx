import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Use of the service",
    text: "zahi provides AI-powered virtual try-on and related commerce tools. You are responsible for the content, product imagery, and information you submit to the service.",
  },
  {
    number: "02",
    title: "Your content",
    text: "You retain responsibility for the images, product data, and other materials you provide. You should only upload content that you have the necessary rights and permissions to use.",
  },
  {
    number: "03",
    title: "Generated content",
    text: "AI-generated outputs can vary and may not always be perfectly accurate. Review generated imagery before using it in customer-facing commerce, advertising, or other important contexts.",
  },
  {
    number: "04",
    title: "Acceptable use",
    text: "You agree not to misuse the service, interfere with its operation, attempt unauthorized access, or use it in ways that violate applicable laws or third-party rights.",
  },
  {
    number: "05",
    title: "Availability",
    text: "Features, integrations, models, limits, and other parts of the service may change as zahi develops the product. We may also temporarily limit availability for maintenance or technical reasons.",
  },
  {
    number: "06",
    title: "Contact",
    text: "If you have questions about these terms or how they apply to your use of zahi, contact the team through the contact page.",
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-36">
        <header className="flex items-center justify-between border-b border-black/10 pb-6 dark:border-white/10">
          <Link
            href="/"
            className="text-[22px] font-medium leading-none tracking-[-0.055em]"
          >
            zahi<span className="text-ember-orange">.</span>
          </Link>

          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.12em] text-pewter transition-colors hover:text-ember-orange"
          >
            Back to site
          </Link>
        </header>

        {/* Hero */}
        <section className="grid gap-14 py-24 sm:py-32 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:py-40">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Legal
            </p>

            <div className="mt-9 space-y-3 text-[11px] text-pewter">
              <p>Terms of service</p>
              <p>Last updated: September 2026</p>
            </div>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.87] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
              Simple rules
              <br />
              <span className="text-pewter">for using zahi.</span>
            </h1>

            <p className="mt-9 max-w-[650px] text-[16px] leading-[1.75] text-pewter sm:text-[18px]">
              These terms describe the basic rules for using zahi and its
              virtual try-on services. Please read them before using the
              product.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="border-y border-black/10 py-10 dark:border-white/10">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
              Overview
            </p>

            <p className="max-w-[720px] text-[16px] leading-[1.75] text-pewter sm:text-[18px]">
              By accessing or using zahi, you agree to these terms. If you are
              using zahi on behalf of a company or organization, you confirm
              that you have authority to accept these terms on its behalf.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="mt-20 sm:mt-28">
          <div className="divide-y divide-black/10 dark:divide-white/10">
            {sections.map((section) => (
              <article
                key={section.number}
                className="grid gap-6 py-10 lg:grid-cols-[70px_0.8fr_1fr] lg:gap-10"
              >
                <span className="text-[10px] text-ember-orange">
                  {section.number}
                </span>

                <h2 className="text-[25px] font-medium leading-[1.05] tracking-[-0.025em]">
                  {section.title}
                </h2>

                <p className="max-w-[600px] text-[14px] leading-[1.75] text-pewter">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Important note */}
        <section className="mt-20 sm:mt-28">
          <div className="rounded-[28px] bg-ink-black p-8 text-white sm:p-12 lg:p-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Important
            </p>

            <h2 className="mt-5 max-w-[780px] text-[38px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[52px]">
              Review AI-generated imagery before publishing it.
            </h2>

            <p className="mt-6 max-w-[620px] text-[14px] leading-[1.75] text-white/50">
              Virtual try-on is an AI-generated experience. Outputs can
              contain visual differences from the original garment or source
              image, so human review remains important for customer-facing
              content.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="grid gap-5 sm:grid-cols-2">
            <Link
              href="/privacy"
              className="group rounded-[24px] border border-black/10 p-7 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10"
            >
              <p className="text-[9px] uppercase tracking-[0.12em] text-pewter">
                Next
              </p>

              <div className="mt-5 flex items-center justify-between">
                <h2 className="text-[25px] font-medium tracking-[-0.025em]">
                  Privacy policy
                </h2>

                <span className="text-ember-orange transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group rounded-[24px] border border-black/10 p-7 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10"
            >
              <p className="text-[9px] uppercase tracking-[0.12em] text-pewter">
                Questions?
              </p>

              <div className="mt-5 flex items-center justify-between">
                <h2 className="text-[25px] font-medium tracking-[-0.025em]">
                  Contact zahi
                </h2>

                <span className="text-ember-orange transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-6 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>zahi.</span>
          <span>Legal</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}