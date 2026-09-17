import Link from "next/link";

const colors = ["#ff5c1f", "#0a0a0a", "#f1f0ee", "#2f6f4f"];

export default function WidgetPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Widget</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        One script tag,
        <br />
        <span className="text-pewter">any stack.</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] text-pewter">
        Not on Shopify or WooCommerce? Paste one line and the try-on widget
        lives on any site, from custom builds to headless stores.
      </p>

      <div className="mt-16 overflow-hidden rounded-[27px] bg-canvas-white dark:bg-coal-light">
        <div className="relative flex aspect-[16/9] flex-col items-center justify-center bg-paper dark:bg-coal">
          <p className="text-[15px] text-pewter">yourstore.com</p>
          <p className="mt-2 text-[27px] tracking-[-0.015em]">Linen Blazer</p>
          <p className="mt-1 text-[15px] text-pewter">PKR 12,500</p>
          <div className="absolute right-6 bottom-6 flex items-center gap-3 rounded-full bg-ink-black py-3 pl-5 pr-6 text-[14px] text-canvas-white">
            <span className="h-2 w-2 rounded-full bg-ember-orange" />
            Try it on
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ash p-6 dark:border-coal-light">
          <div className="flex items-center gap-3">
            <p className="mr-2 text-[13px] text-pewter">Accent</p>
            {colors.map((c) => (
              <span key={c} className="h-6 w-6 rounded-full border border-ash dark:border-coal-light" style={{ background: c }} />
            ))}
          </div>
          <div className="flex gap-2">
            {["Bottom right", "Bottom left", "Inline"].map((pos, i) => (
              <span key={pos} className={`rounded-full px-4 py-2 text-[12px] ${i === 0 ? "bg-ink-black text-canvas-white" : "border border-ash text-pewter dark:border-coal-light"}`}>
                {pos}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 rounded-[27px] bg-ink-black p-8 md:p-12">
        <p className="text-[12px] text-canvas-white/60">Embed code</p>
        <pre className="mt-4 overflow-x-auto text-[14px] text-canvas-white">
{`<script
  src="https://cdn.zahi.pk/widget.js"
  data-store="yourstore"
  data-accent="#ff5c1f"
  async
></script>`}
        </pre>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Works with any framework.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Get the widget
        </Link>
      </div>
    </main>
  );
}
