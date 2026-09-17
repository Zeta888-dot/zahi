export default function Loading() {
  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto flex min-h-[100svh] max-w-[1560px] flex-col justify-between px-5 py-7 sm:px-7 sm:py-9 lg:px-10">
        <div className="flex items-center justify-between">
          <p className="text-[22px] font-medium leading-none tracking-[-0.055em]">
            zahi<span className="text-ember-orange">.</span>
          </p>

          <span className="text-[10px] uppercase tracking-[0.12em] text-pewter">
            Loading
          </span>
        </div>

        <div>
          <div className="h-px w-full overflow-hidden bg-black/10 dark:bg-white/10">
            <div className="h-full w-1/3 animate-pulse bg-ember-orange" />
          </div>

          <div className="mt-6 flex items-end justify-between gap-6">
            <p className="text-[12px] text-pewter">
              Preparing your experience
            </p>

            <p className="text-[10px] uppercase tracking-[0.12em] text-pewter">
              Please wait
            </p>
          </div>
        </div>

        <div className="border-t border-black/10 pt-5 text-[10px] text-pewter dark:border-white/10">
          AI-powered virtual try-on
        </div>
      </div>
    </main>
  );
}