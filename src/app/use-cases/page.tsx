import Link from "next/link";

const cases = [
  {
    t: "Fashion brands",
    d: "Replace seasonal shoots with on-demand generation. New drop, same day imagery.",
    points: ["Catalog shoots in minutes", "Consistent lighting across SKUs", "A/B test looks before production"],
  },
  {
    t: "Marketplaces",
    d: "Every seller gets catalog grade photos, regardless of their camera or budget.",
    points: ["Seller upload to try-on in one step", "Uniform listing quality", "Fewer returns from size surprises"],
  },
  {
    t: "Agencies and ads",
    d: "Ship campaign variants across models and markets without re-shooting.",
    points: ["Localize models per market", "Hundreds of creative variants", "Brand-safe, licensed outputs"],
  },
  {
    t: "Resellers and thrift",
    d: "One-off garments photographed once, worn by many. Perfect for pre-loved catalogs.",
    points: ["Single photo per piece", "Try-on boosts listing trust", "Faster sell-through"],
  },
];

export default function UseCasesPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Use cases</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Built for anyone
        <br />
        <span className="text-pewter">selling fashion.</span>
      </h1>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <div key={c.t} className="flex flex-col rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light">
            <p className="text-[20px] font-medium tracking-[-0.01em]">{c.t}</p>
            <p className="mt-3 text-[15px] leading-[1.6] text-pewter">{c.d}</p>
            <div className="mt-6 flex flex-col gap-2">
              {c.points.map((p) => (
                <span key={p} className="text-[13px] text-pewter">· {p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Your case not listed? Tell us.</p>
        <Link href="/contact" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Contact us
        </Link>
      </div>
    </main>
  );
}
