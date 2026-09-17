export default function WidgetSection() {
  return (
    <section id="widget">
      <p className="mb-3 text-[12px] font-medium">↑ Widget</p>
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        Lives on <span className="text-ember-orange">your</span> product page.
      </h2>
      <p className="mt-5 max-w-[520px] text-[17px] text-pewter">
        A lightweight embeddable widget. One script tag, and every product page
        gets a "Try it on" button with your branding.
      </p>
      <div className="mt-10 rounded-[27px] bg-canvas-white p-7 dark:bg-coal-light">
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 rounded-[20px] bg-paper dark:bg-coal">
          <div className="h-40 w-32 rounded-[13px] bg-ash dark:bg-coal-light" />
          <p className="text-[14px] font-medium">Lavender Oversized Blazer — $148</p>
          <button className="rounded-full bg-ink-black px-5 py-2.5 text-[13px] text-canvas-white">
            Try it on
          </button>
          <p className="text-[11px] text-pewter">Powered by zahi · 0.8s</p>
        </div>
      </div>
    </section>
  );
}