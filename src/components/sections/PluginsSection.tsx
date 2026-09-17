const rows = [
  { label: "Try-on button on product pages", on: true },
  { label: "Auto-generate for new products", on: true },
  { label: "Show zahi branding on widget", on: false },
];

export default function PluginsSection() {
  return (
    <section id="plugins">
      <p className="mb-3 text-[12px] font-medium">↑ Plugins</p>
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        One-click install,
        <br />
        <span className="text-ember-orange">every</span> store.
      </h2>
      <p className="mt-5 max-w-[520px] text-[17px] text-pewter">
        Native plugins for Shopify and WooCommerce. Shoppers try on directly
        from your product page, no redirect, no code paste.
      </p>
      <div className="mt-10 overflow-hidden rounded-[27px] bg-canvas-white dark:bg-coal-light">
        <div className="flex items-center gap-2 bg-ink-black px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d95f59]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5b567]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7fbf7a]" />
          <span className="ml-4 text-[12px] text-canvas-white/70">zahi · Shopify plugin</span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-[15px] font-medium">zahi Try-On</p>
            <span className="flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-[11px] text-pewter dark:bg-coal">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7fbf7a]" /> Connected
            </span>
          </div>
          <div className="mt-5 flex flex-col divide-y divide-ash dark:divide-coal-light">
            {rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between py-4">
                <span className="text-[14px]">{r.label}</span>
                <span className={`flex h-6 w-11 items-center rounded-full p-1 ${r.on ? "justify-end bg-ember-orange" : "justify-start bg-ash dark:bg-coal"}`}>
                  <span className="h-4 w-4 rounded-full bg-canvas-white" />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <span className="rounded-full bg-ink-black px-5 py-2.5 text-[13px] text-canvas-white">Save</span>
            <span className="rounded-full border border-ash px-5 py-2.5 text-[13px] text-pewter dark:border-coal-light">Uninstall</span>
          </div>
        </div>
      </div>
    </section>
  );
}