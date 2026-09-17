import Link from "next/link";

type Integration = {
  name: string;
  description: string;
  status: string;
  logo: string;
  logoClassName: string;
};

const integrations: Integration[] = [
  {
    name: "Shopify",
    description:
      "Bring virtual try-on directly into your Shopify product experience.",
    status: "Integration",
    logo: "https://cdn.simpleicons.org/shopify",
    logoClassName: "h-8 w-8",
  },
  {
    name: "WooCommerce",
    description:
      "Connect your WooCommerce catalog with a dedicated try-on workflow.",
    status: "Integration",
    logo: "https://cdn.simpleicons.org/woocommerce",
    logoClassName: "h-8 w-8",
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

function StorePreview() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#0b0b0b]">
      <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>

        <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">
          your-store.com
        </span>

        <span className="h-5 w-5 rounded-md border border-white/[0.07]" />
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[1fr_0.8fr] sm:p-5">
        <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#141414]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,105,0,0.12),transparent_60%)]" />

          <div className="relative h-[145px] w-[100px]">
            <div className="absolute left-[24px] top-0 h-[40px] w-[52px] rounded-[16px_16px_7px_7px] bg-[linear-gradient(145deg,#c9946b,#71472f)]" />

            <div className="absolute left-[12px] top-[31px] h-[98px] w-[76px] rounded-[10px_10px_17px_17px] bg-[linear-gradient(145deg,#bb8055,#70462f_70%,#402a20)]" />

            <div className="absolute left-[49px] top-[35px] h-[86px] w-px bg-black/25" />

            <div className="absolute left-[13px] top-[37px] h-[74px] w-[13px] -rotate-[8deg] rounded-full bg-[#84583f]" />

            <div className="absolute right-[13px] top-[37px] h-[74px] w-[13px] rotate-[8deg] rounded-full bg-[#84583f]" />
          </div>

          <span className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.1em] text-white/20">
            Product / blazer
          </span>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="h-2.5 w-24 rounded-full bg-white/[0.08]" />
            <div className="mt-2 h-2 w-16 rounded-full bg-white/[0.05]" />

            <div className="mt-8 h-3 w-28 rounded-full bg-white/[0.08]" />

            <div className="mt-4 grid grid-cols-3 gap-2">
              <span className="h-7 rounded-md border border-white/[0.06] bg-white/[0.02]" />
              <span className="h-7 rounded-md border border-white/[0.06] bg-white/[0.02]" />
              <span className="h-7 rounded-md border border-white/[0.06] bg-white/[0.02]" />
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#ff6900]/30 bg-[#ff6900]/[0.07] p-3">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-medium text-white/65">
                AI Try-On
              </span>

              <span className="text-[#ff6900]">
                <ArrowIcon />
              </span>
            </div>

            <p className="mt-2 text-[7px] leading-[1.5] text-white/25">
              See this product on a model
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PluginsSection() {
  return (
    <section id="plugins" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="zahi-glow right-[-260px] top-[5%] h-[500px] w-[500px] opacity-40" />

        <div className="zahi-container zahi-section-inner relative">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="zahi-label">Store integrations</div>

              <h2 className="mt-7 max-w-[500px] text-[43px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[57px]">
                Bring try-on
                <br />
                into the store.
              </h2>

              <p className="mt-7 max-w-[410px] text-[14px] leading-[1.7] text-[var(--zahi-text-soft)]">
                Connect your existing commerce platform and give shoppers an
                AI-powered way to experience your products.
              </p>

              <Link
                href="#widget"
                className="mt-8 inline-flex items-center gap-3 border-t border-white/10 pt-5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/55 transition-colors hover:text-white"
              >
                See storefront experience
                <ArrowIcon />
              </Link>
            </div>

            <div>
              <StorePreview />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {integrations.map((integration) => (
                  <article
                    key={integration.name}
                    className="zahi-card group p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                        <img
                          src={integration.logo}
                          alt={`${integration.name} logo`}
                          className={integration.logoClassName}
                        />
                      </div>

                      <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[7px] uppercase tracking-[0.08em] text-white/25">
                        {integration.status}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[21px] font-medium tracking-[-0.025em]">
                      {integration.name}
                    </h3>

                    <p className="mt-3 max-w-[280px] text-[12px] leading-[1.65] text-[var(--zahi-text-muted)]">
                      {integration.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.1em] text-white/35 transition-colors group-hover:text-[var(--zahi-orange)]">
                      Explore integration
                      <ArrowIcon />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}