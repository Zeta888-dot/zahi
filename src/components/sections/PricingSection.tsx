import Link from "next/link";

type Plan = {
  name: string;
  description: string;
  price: string;
  suffix: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "For teams exploring AI virtual try-on.",
    price: "$0",
    suffix: "to start",
    features: [
      "Try-on generations",
      "Basic image workflow",
      "API access",
      "Developer sandbox",
    ],
  },
  {
    name: "Growth",
    description: "For stores adding try-on to their customer journey.",
    price: "Custom",
    suffix: "usage based",
    featured: true,
    features: [
      "Higher generation volume",
      "Store integrations",
      "Production API access",
      "Priority processing",
    ],
  },
  {
    name: "Scale",
    description: "For larger commerce and platform workflows.",
    price: "Custom",
    suffix: "tailored",
    features: [
      "High-volume generation",
      "Custom integrations",
      "Dedicated support",
      "Enterprise workflows",
    ],
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="zahi-glow left-[38%] top-[-220px] h-[500px] w-[500px] opacity-25" />

        <div className="zahi-container zahi-section-inner relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="zahi-label">Pricing</div>

              <h2 className="mt-7 max-w-[700px] text-[43px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[60px]">
                Start small.
                <br />
                <span className="zahi-orange">Scale with demand.</span>
              </h2>
            </div>

            <p className="max-w-[360px] text-[12px] leading-[1.7] text-white/30 lg:pb-1">
              Choose the workflow that fits your stage. Production pricing can
              scale with your generation volume and integration needs.
            </p>
          </div>

          <div className="mt-14 grid gap-3 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-[24px] border p-7 ${
                  plan.featured
                    ? "border-[#ff6900]/35 bg-[#ff6900]/[0.045]"
                    : "border-white/[0.08] bg-white/[0.018]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-6 top-6 rounded-full border border-[#ff6900]/25 bg-[#ff6900]/[0.08] px-2.5 py-1 text-[7px] font-medium uppercase tracking-[0.1em] text-[#ff6900]">
                    Production
                  </div>
                )}

                <div className="min-h-[118px]">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    {plan.name}
                  </p>

                  <p className="mt-4 max-w-[250px] text-[11px] leading-[1.6] text-white/25">
                    {plan.description}
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-6">
                  <div className="flex items-end gap-2">
                    <span className="text-[34px] font-medium leading-none tracking-[-0.05em]">
                      {plan.price}
                    </span>

                    <span className="pb-1 text-[8px] uppercase tracking-[0.1em] text-white/20">
                      {plan.suffix}
                    </span>
                  </div>
                </div>

                <div className="mt-7 space-y-3 border-t border-white/[0.08] pt-6">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-[10px] text-white/40"
                    >
                      <span
                        className={
                          plan.featured
                            ? "text-[#ff6900]"
                            : "text-white/25"
                        }
                      >
                        <CheckIcon />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="#start"
                  className={`mt-8 flex min-h-11 w-full items-center justify-center gap-2 rounded-full text-[9px] font-medium uppercase tracking-[0.08em] transition ${
                    plan.featured
                      ? "bg-[#ff6900] text-black hover:brightness-105"
                      : "border border-white/[0.1] bg-white/[0.025] text-white/50 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {plan.name === "Starter"
                    ? "Get started"
                    : "Talk to us"}

                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center">
            <span className="text-[8px] uppercase tracking-[0.1em] text-white/15">
              All plans can be adapted to your workflow
            </span>

            <Link
              href="#faq"
              className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.1em] text-white/30 transition-colors hover:text-white"
            >
              Pricing questions
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}