export default function ApiSection() {
  return (
    <section id="api">
      <p className="mb-3 text-[12px] font-medium">↑ Developer API</p>
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        One endpoint.
        <br />
        <span className="text-ember-orange">Every</span> integration.
      </h2>
      <p className="mt-5 max-w-[520px] text-[17px] text-pewter">
        A clean REST API on top of FASHN v1.6. Send a garment and a model, get a
        photorealistic try-on back. $0.10 per image, no minimums.
      </p>
      <div className="mt-10 overflow-hidden rounded-[27px] bg-ink-black p-7">
        <p className="mb-4 text-[12px] text-canvas-white/50">POST https://api.zahi.ai/v1/try-on</p>
        <pre className="text-[13px] leading-[1.6] text-canvas-white/90">
{`{
  "garment": "https://store.com/blazer.jpg",
  "model": "zahi-model-04",
  "callback": "https://store.com/hooks/zahi"
}`}
        </pre>
        <p className="mt-6 inline-block rounded-full border border-canvas-white/25 px-4 py-2 text-[12px] text-canvas-white">
          $0.10 / image
        </p>
      </div>
    </section>
  );
}