"use client";

import { useState } from "react";

export default function StartSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="start" className="rounded-[27px] bg-ink-black p-10 text-canvas-white md:p-16">
      <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
        Start selling
        <br />
        <span className="text-ember-orange">try-ons</span> today.
      </h2>
      <p className="mt-5 max-w-[480px] text-[17px] text-canvas-white/70">
        Join the waitlist. We will set up your store with 10 free try-ons, no
        credit card needed.
      </p>
      {sent ? (
        <p className="mt-8 text-[15px] text-ember-orange">Shukriya! We will be in touch soon.</p>
      ) : (
        <form
          className="mt-8 flex max-w-[480px] flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSent(true);
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourstore.com"
            className="flex-1 rounded-full border border-canvas-white/25 bg-transparent px-5 py-3 text-[14px] placeholder:text-canvas-white/40 focus:border-ember-orange focus:outline-none"
          />
          <button type="submit" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
            Join waitlist
          </button>
        </form>
      )}
    </section>
  );
}