"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-[100svh] bg-paper px-5 text-ink-black dark:bg-coal dark:text-canvas-white sm:px-7 lg:px-10">
      <div className="mx-auto flex min-h-[100svh] max-w-[1560px] flex-col justify-between py-7 sm:py-9">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-[22px] font-medium leading-none tracking-[-0.055em]"
          >
            zahi<span className="text-ember-orange">.</span>
          </a>

          <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] uppercase tracking-[0.12em] text-pewter dark:border-white/10">
            Error 500
          </span>
        </div>

        <section className="py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-ember-orange" />
                Something went wrong
              </div>

              <p className="mt-8 text-[11px] text-pewter">
                500 / zahi
              </p>
            </div>

            <div>
              <h1 className="max-w-[900px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[112px]">
                Something snagged
                <br />
                <span className="text-pewter">on the seam.</span>
              </h1>

              <p className="mt-8 max-w-[500px] text-[15px] leading-[1.6] text-pewter sm:text-[16px]">
                Something went wrong while loading this experience. Try
                again, or head back to zahi and continue from there.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full bg-ink-black px-6 py-3.5 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
                >
                  Try again
                </button>

                <a
                  href="/"
                  className="rounded-full border border-black/10 px-6 py-3.5 text-[11px] font-medium transition-colors duration-300 hover:border-ember-orange hover:text-ember-orange dark:border-white/10"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 border-t border-black/10 pt-6 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>AI-powered virtual try-on</span>
          <span>zahi.</span>
        </div>
      </div>
    </main>
  );
}