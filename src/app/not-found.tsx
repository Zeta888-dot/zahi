import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-5">
      <p className="text-[12px] font-medium text-ember-orange">404</p>
      <h1 className="mt-4 text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        This page tried on
        <br />
        <span className="text-pewter">the wrong size.</span>
      </h1>
      <Link href="/" className="mt-10 w-fit rounded-full bg-ink-black px-6 py-3 text-[14px] font-medium text-canvas-white dark:bg-canvas-white dark:text-ink-black">
        Back to home
      </Link>
    </main>
  );
}