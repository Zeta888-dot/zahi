import Link from "next/link";

const platforms = [
  {
    name: "Shopify",
    steps: [
      "Install zahi from the Shopify App Store",
      "Connect your store with one click",
      "Try-on button appears on every product page",
    ],
    cta: "Install for Shopify",
  },
  {
    name: "WooCommerce",
    steps: [
      "Download the zahi plugin zip",
      "Upload in WordPress and activate",
      "Paste your API key, done",
    ],
    cta: "Download plugin",
  },
];

export default function PluginsPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Plugins</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Native plugins,
        <br />
        <span className="text-pewter">zero code.</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] text-pewter">
        No theme edits, no scripts to paste. Install once and the try-on
        button goes live on every product page.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {platforms.map((p) => (
          <div key={p.name} className="flex flex-col rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light">
            <p className="text-[20px] font-medium tracking-[-0.01em]">{p.name}</p>
            <div className="mt-6 flex flex-col gap-4">
              {p.steps.map((s, i) => (
                <div key={s} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-[12px] text-pewter dark:bg-coal">
                    {i + 1}
                  </span>
                  <span className="text-[14px] leading-[1.5] text-pewter">{s}</span>
                </div>
              ))}
            </div>
            <span className="mt-8 rounded-full bg-ink-black py-3 text-center text-[14px] font-medium text-canvas-white">
              {p.cta}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-24 rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light md:p-12">
        <h2 className="text-[27px] tracking-[-0.015em]">What shoppers see</h2>
        <p className="mt-3 max-w-[520px] text-[15px] text-pewter">
          A "Try it on" button on every product page. One click opens the
          widget: pick a model, pick a size, see the result. All on your
          domain, in your brand colors.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {["Brand colors", "Custom position", "Mobile first", "Analytics built-in"].map((f) => (
            <span key={f} className="rounded-full border border-ash px-4 py-2 text-[13px] text-pewter dark:border-coal-light">
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Connect your store in 2 minutes.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Join waitlist
        </Link>
      </div>
    </main>
  );
}