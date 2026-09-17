"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-5">
      <p className="text-[12px] font-medium text-ember-orange">500</p>
      <h1 className="mt-4 text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Something snagged
        <br />
        <span className="text-pewter">on the seam.</span>
      </h1>
      <button
        onClick={reset}
        className="mt-10 w-fit rounded-full bg-ink-black px-6 py-3 text-[14px] font-medium text-canvas-white dark:bg-canvas-white dark:text-ink-black"
      >
        Try again
      </button>
    </main>
  );
}