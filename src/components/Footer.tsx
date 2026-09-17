export default function Footer() {
  return (
    <footer className="mt-40 border-t border-ash px-5 pt-32 pb-10 dark:border-coal-light">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="max-w-[900px] text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[73px]">
          Ready to see it
          <br />
          <span className="text-pewter">on <span className="text-ember-orange">you</span>?</span>
        </h2>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#start" className="rounded-full bg-ink-black px-6 py-3 text-[14px] font-medium text-canvas-white">Get started free</a>
          <a href="#api" className="rounded-full border border-charcoal px-6 py-3 text-[14px] font-medium dark:border-canvas-white/25">Read the docs</a>
        </div>
        <div className="mt-24 flex flex-wrap justify-between gap-10 border-t border-ash pt-8 text-[13px] dark:border-coal-light">
          <p className="font-medium">zahi<span className="text-ember-orange">.</span></p>
          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <p className="mb-1 text-[11px] text-steel dark:text-pewter">Product</p>
              <a href="#try-on">Try-On</a><a href="#plugins">Plugins</a><a href="#widget">Widget</a><a href="#api">API</a>
            </div>
<div className="flex flex-col gap-2">
  <p className="mb-1 text-[11px] text-steel dark:text-pewter">Company</p>
  <a href="/about">About</a>
  <a href="/blog">Blog</a>
  <a href="/use-cases">Use cases</a>
  <a href="/contact">Contact</a>
</div>
            <div className="flex flex-col gap-2">
              <p className="mb-1 text-[11px] text-steel dark:text-pewter">Social</p>
              <a href="#">Instagram</a><a href="#">X</a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-[11px] text-pewter">zahi · Virtual try-on for eCommerce</p>
      </div>
    </footer>
  );
}