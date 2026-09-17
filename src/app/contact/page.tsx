"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Contact</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Talk to
        <br />
        <span className="text-pewter">a human.</span>
      </h1>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <div className="flex flex-col gap-6 text-[15px] text-pewter">
          <div>
            <p className="text-[12px] text-steel dark:text-pewter">Email</p>
            <p className="mt-1 text-ink-black dark:text-canvas-white">hello@zahi.pk</p>
          </div>
          <div>
            <p className="text-[12px] text-steel dark:text-pewter">Support</p>
            <p className="mt-1 text-ink-black dark:text-canvas-white">support@zahi.pk</p>
          </div>
          <div>
            <p className="text-[12px] text-steel dark:text-pewter">Office</p>
            <p className="mt-1 text-ink-black dark:text-canvas-white">
              Floor 3, Tech Hub, Khayaban-e-Ittehad, DHA Phase 6, Karachi
            </p>
          </div>
          <div>
            <p className="text-[12px] text-steel dark:text-pewter">Response time</p>
            <p className="mt-1 text-ink-black dark:text-canvas-white">Within one business day, PKT</p>
          </div>
        </div>

        {sent ? (
          <p className="text-[15px] text-ember-orange">Thank you! We will reply within one business day.</p>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              required
              placeholder="Your name"
              className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light"
            />
            <input
              required
              type="email"
              placeholder="Work email"
              className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light"
            />
            <textarea
              required
              rows={5}
              placeholder="Tell us about your store"
              className="rounded-[20px] border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light"
            />
            <button type="submit" className="rounded-full bg-ink-black py-3 text-[14px] font-medium text-canvas-white dark:bg-canvas-white dark:text-ink-black">
              Send message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}