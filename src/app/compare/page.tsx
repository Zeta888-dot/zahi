import Link from "next/link";

const rows = [
  ["Entry price", "Free, 50 try-ons", "Paid only", "Credit packs", "Paid only"],
  ["Sub-second generation", "✓", "No", "No", "No"],
  ["Shopify + WooCommerce plugins", "✓", "Partial", "No", "Partial"],
  ["Embeddable widget for any site", "✓", "No", "No", "No"],
  ["Public API", "✓", "No", "✓", "No"],
  ["Custom models on your fits", "✓", "No", "✓", "No"],
  ["PKR billing, local support", "✓", "No", "No", "No"],
];

export default function ComparePage() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Compare</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        How zahi
        <br />
        <span className="text-pewter">stacks up.</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] text-pewter">
        Honest comparison with the tools stores usually evaluate us against.
      </p>

      <div className="mt-16 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-[14px]">
          <thead>
            <tr className="border-b border-ash text-[12px] text-pewter dark:border-coal-light">
              <th className="py-4 pr-4 font-medium">Feature</th>
              <th className="py-4 pr-4 font-medium text-ember-orange">zahi</th>
              <th className="py-4 pr-4 font-medium">Tryverse</th>
              <th className="py-4 pr-4 font-medium">Fashn</th>
              <th className="py-4 pr-4 font-medium">Botika</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-ash dark:border-coal-light">
                {r.map((c, i) => (
                  <td key={i} className={`py-4 pr-4 ${i === 0 ? "font-medium" : i === 1 ? "text-ink-black dark:text-canvas-white" : "text-pewter"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-[12px] text-pewter">
        Comparison based on public pricing pages, September 2026. Spotted an error? Tell us at hello@zahi.pk.
      </p>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">See the difference yourself.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Start free
        </Link>
      </div>
    </main>
  );
}