export default function TryOnDemo() {
  return (
    <div className="mt-10 overflow-hidden rounded-[27px] bg-canvas-white dark:bg-coal-light">
      <div className="flex flex-col gap-3 border-b border-ash p-5 dark:border-coal-light sm:flex-row">
        <div className="flex flex-1 items-center rounded-full border border-ash px-5 py-3 text-[13px] text-pewter dark:border-coal-light">
          https://yourstore.com/products/linen-blazer
        </div>
        <span className="rounded-full bg-ember-orange px-6 py-3 text-center text-[13px] font-medium text-ink-black">
          Generate
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 p-5 md:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-paper dark:bg-coal">
            <div className="absolute inset-0 animate-pulse bg-ash/60 dark:bg-coal-light/40" />
            <span className="absolute right-3 bottom-3 rounded-full bg-ink-black/70 px-2.5 py-1 text-[10px] text-canvas-white">
              0.8s
            </span>
          </div>
        ))}
      </div>
      <p className="px-5 pb-5 text-[12px] text-pewter">
        4 model presets · fabric, color and fit preserved
      </p>
    </div>
  );
}