import Link from "next/link";

const stats = [
  { n: "2026", l: "Founded in Karachi" },
  { n: "0.8s", l: "Median generation time" },
  { n: "40+", l: "Base models in library" },
  { n: "10x", l: "Cheaper than studio shoots" },
];

const principles = [
  { t: "Merchants first", d: "Every feature starts with a store owner's problem, not a model's benchmark." },
  { t: "Honest imagery", d: "Try-ons must match the real garment. What shoppers see is what arrives." },
  { t: "Fast is a feature", d: "Sub-second generation, everywhere. Waiting kills conversion." },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ About</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Fashion commerce,
        <br />
        <span className="text-pewter">rebuilt here.</span>
      </h1>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-5 text-[17px] leading-[1.6] text-pewter">
          <p>
            zahi started with a simple frustration: a Karachi boutique selling
            online with photos from a five-year-old shoot, while their real
            catalog lived in boxes.
          </p>
          <p>
            Studio shoots cost more than most Pakistani stores make in a
            month. AI try-on changed that equation, but the tools were built
            for Silicon Valley, not for a store on Zamzama or a WooCommerce
            shop in Lahore.
          </p>
          <p>
            So we built zahi: try-on infrastructure that speaks Shopify,
            WooCommerce and plain HTML, priced in rupees, and fast enough to
            feel like magic on a 3G connection.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="rounded-[20px] bg-canvas-white p-6 dark:bg-coal-light">
              <p className="text-[33px] tracking-[-0.02em] text-ember-orange">{s.n}</p>
              <p className="mt-2 text-[13px] text-pewter">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-10 md:grid-cols-3">
        {principles.map((p) => (
          <div key={p.t} className="border-t border-ash pt-6 dark:border-coal-light">
            <p className="text-[20px] font-medium tracking-[-0.01em]">{p.t}</p>
            <p className="mt-3 text-[14px] leading-[1.6] text-pewter">{p.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Build with us.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Join waitlist
        </Link>
      </div>
    </main>
  );
}