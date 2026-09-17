const steps = [
  { n: "01", t: "Add product & brand", d: "Store your garments, models and brand look in one place.", b: "14+ model presets" },
  { n: "02", t: "AI generates try-ons", d: "Fabric, color and fit preserved — every angle and pose.", b: "Multiple pose options" },
  { n: "03", t: "Choose the best", d: "Side-by-side comparison, easy selection and review.", b: "Team review built-in" },
  { n: "04", t: "Export ready assets", d: "Push to your store, ads and social in one click.", b: "Optimized for PDP & ads" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <p className="mb-3 text-[12px] font-medium">↑ How it works</p>
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        From product to PDP
        <br />
        in <span className="text-ember-orange">four</span> steps.
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="flex flex-col rounded-[27px] bg-canvas-white p-6 dark:bg-coal-light">
            <span className="text-[12px] text-pewter">{s.n}</span>
            <h3 className="mt-4 text-[20px] leading-[1.2] tracking-[-0.01em]">{s.t}</h3>
            <p className="mt-3 text-[14px] leading-[1.5] text-pewter">{s.d}</p>
            <p className="mt-auto pt-6 text-[12px] text-ember-orange">{s.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}