const plans = [
  { name: "Pay as you go", price: "$0.10", per: "/ image", features: ["No minimums", "FASHN v1.6 quality", "Widget + plugins included"], dark: false },
  { name: "Studio", price: "$45", per: "/ 500 images", features: ["$0.09 per image", "Priority queue", "Team review"], dark: true },
  { name: "Scale", price: "$160", per: "/ 2,000 images", features: ["$0.08 per image", "Dedicated support", "Custom models"], dark: false },
];

export default function PricingSection() {
  return (
    <section id="pricing">
      <p className="mb-3 text-[12px] font-medium">↑ Pricing</p>
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        Simple math.
        <br />
        <span className="text-ember-orange">Ten cents</span> a try-on.
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`flex flex-col rounded-[27px] p-7 ${p.dark ? "bg-ink-black text-canvas-white" : "bg-canvas-white"}`}>
            <p className="text-[14px] font-medium">{p.name}</p>
            <p className="mt-6 text-[43px] leading-none tracking-[-0.015em]">
              {p.price}
              <span className={`text-[14px] ${p.dark ? "text-canvas-white/60" : "text-pewter"}`}> {p.per}</span>
            </p>
            <div className={`my-6 h-px ${p.dark ? "bg-canvas-white/20" : "bg-ash"}`} />
            {p.features.map((f) => (
              <p key={f} className={`py-1 text-[14px] ${p.dark ? "text-canvas-white/80" : "text-steel"}`}>{f}</p>
            ))}
            <button className={`mt-8 rounded-full py-3 text-[14px] font-medium ${p.dark ? "bg-ember-orange text-ink-black" : "border border-charcoal"}`}>
              Start generating
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}