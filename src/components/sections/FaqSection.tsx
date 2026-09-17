"use client";

import { useState } from "react";

const faqs = [
  { q: "What can zahi create for my store?", a: "Photorealistic virtual try-ons, model shots, PDP images and ad creatives from a single garment photo." },
  { q: "What do I need to start?", a: "Just a product photo or a store link. Shopify and WooCommerce plugins set everything up in minutes." },
  { q: "Will try-ons match the real garment?", a: "Yes. FASHN v1.6 preserves fabric, color, fit and drape in every generation." },
  { q: "Do I own the generated assets?", a: "Yes. All outputs are yours to use across any channel, forever." },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq">
      <p className="mb-3 text-[12px] font-medium">↑ FAQs</p>
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        Real <span className="text-ember-orange">answers</span> here.
      </h2>
      <div className="mt-10 divide-y divide-ash border-y border-ash dark:divide-coal-light dark:border-coal-light">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between py-5 text-left text-[17px] tracking-[-0.009em]">
              {f.q}
              <span className="text-[20px] text-pewter">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="pb-5 text-[15px] leading-[1.5] text-pewter">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}