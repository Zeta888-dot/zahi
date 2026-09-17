import Link from "next/link";

const navigation = [
  {
    title: "Product",
    links: [
      { label: "Try-on", href: "#widget" },
      { label: "Integrations", href: "#plugins" },
      { label: "API", href: "#api" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Get started", href: "#start" },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08]">
      <div className="zahi-glow right-[-250px] top-[-280px] h-[520px] w-[520px] opacity-20" />

      <div className="zahi-container relative">
        <div className="grid gap-14 py-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:gap-20 lg:py-20">
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-[22px] font-semibold tracking-[-0.06em]"
            >
              zahi<span className="text-[#ff6900]">.</span>
            </Link>

            <p className="mt-6 max-w-[360px] text-[12px] leading-[1.75] text-white/25">
              AI-powered virtual try-on for fashion commerce. Turn your
              existing catalog into experiences shoppers can see themselves
              in.
            </p>

            <Link
              href="#start"
              className="mt-7 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.1em] text-white/45 transition-colors hover:text-white"
            >
              Start building
              <ArrowIcon />
            </Link>
          </div>

          {navigation.map((group) => (
            <div key={group.title}>
              <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/20">
                {group.title}
              </p>

              <nav className="mt-6 flex flex-col items-start gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[11px] text-white/35 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] uppercase tracking-[0.1em] text-white/15">
            <span>© {new Date().getFullYear()} Zahi</span>
            <span>AI virtual try-on</span>
          </div>

          <div className="flex items-center gap-5 text-[8px] uppercase tracking-[0.1em] text-white/15">
            <span>Shopify</span>
            <span>WooCommerce</span>
            <span>API</span>
          </div>
        </div>
      </div>
    </footer>
  );
}