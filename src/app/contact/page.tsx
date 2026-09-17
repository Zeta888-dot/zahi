"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-28 sm:px-7 sm:py-32 lg:px-10 lg:py-40">
        <section className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Contact zahi
            </p>

            <div className="mt-10 space-y-7 text-[12px] leading-[1.7] text-pewter">
              <div>
                <p className="uppercase tracking-[0.1em] text-ink-black dark:text-white">
                  General
                </p>
                <p className="mt-1">hello@zahi.pk</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.1em] text-ink-black dark:text-white">
                  Support
                </p>
                <p className="mt-1">support@zahi.pk</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.1em] text-ink-black dark:text-white">
                  Based in
                </p>
                <p className="mt-1">Chitral, Pakistan</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
              Let&apos;s build
              <br />
              <span className="text-pewter">something useful.</span>
            </h1>

            <p className="mt-9 max-w-[600px] text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
              Whether you run a fashion store, want to integrate virtual
              try-on, or simply want to understand what zahi can do, send us a
              note.
            </p>

            <div className="mt-14 max-w-[700px]">
              {sent ? (
                <div className="rounded-[24px] bg-ink-black p-8 text-white sm:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                    Message received
                  </p>

                  <h2 className="mt-5 text-[35px] font-medium leading-[1] tracking-[-0.035em] sm:text-[48px]">
                    Thanks for reaching out.
                  </h2>

                  <p className="mt-5 max-w-[480px] text-[14px] leading-[1.7] text-white/55">
                    Your message has been received. We&apos;ll get back to you
                    as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Your name"
                      className="h-14 rounded-full border border-black/10 bg-transparent px-5 text-[14px] outline-none transition-colors placeholder:text-pewter focus:border-ember-orange dark:border-white/10"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Work email"
                      className="h-14 rounded-full border border-black/10 bg-transparent px-5 text-[14px] outline-none transition-colors placeholder:text-pewter focus:border-ember-orange dark:border-white/10"
                    />
                  </div>

                  <input
                    required
                    placeholder="Company or store"
                    className="h-14 w-full rounded-full border border-black/10 bg-transparent px-5 text-[14px] outline-none transition-colors placeholder:text-pewter focus:border-ember-orange dark:border-white/10"
                  />

                  <textarea
                    required
                    rows={7}
                    placeholder="How can we help?"
                    className="w-full resize-none rounded-[24px] border border-black/10 bg-transparent px-5 py-4 text-[14px] leading-[1.6] outline-none transition-colors placeholder:text-pewter focus:border-ember-orange dark:border-white/10"
                  />

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[330px] text-[10px] leading-[1.6] text-pewter">
                      We&apos;ll only use your details to respond to this
                      message.
                    </p>

                    <button
                      type="submit"
                      className="rounded-full bg-ink-black px-7 py-4 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="mt-28 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-36">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                Product
              </p>
              <p className="mt-3 text-[13px]">
                Virtual try-on for commerce
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                Availability
              </p>
              <p className="mt-3 text-[13px]">Online, worldwide</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                zahi.
              </p>
              <p className="mt-3 text-[13px]">Founded in Chitral</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}