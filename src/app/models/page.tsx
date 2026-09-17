"use client";

import { useState } from "react";
import Link from "next/link";

const models = [
  {
    id: "base_01",
    name: "Studio One",
    type: "Base model",
    detail: "Clean editorial",
    tag: "Female",
  },
  {
    id: "base_02",
    name: "Studio Two",
    type: "Base model",
    detail: "Natural lifestyle",
    tag: "Female",
  },
  {
    id: "base_03",
    name: "Studio Three",
    type: "Base model",
    detail: "Minimal studio",
    tag: "Male",
  },
  {
    id: "base_04",
    name: "Studio Four",
    type: "Base model",
    detail: "Street editorial",
    tag: "Male",
  },
  {
    id: "base_05",
    name: "Studio Five",
    type: "Base model",
    detail: "Soft daylight",
    tag: "Female",
  },
  {
    id: "base_06",
    name: "Studio Six",
    type: "Base model",
    detail: "Modern campaign",
    tag: "Male",
  },
];

const filters = ["All", "Female", "Male"];

export default function ModelsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredModels =
    activeFilter === "All"
      ? models
      : models.filter((model) => model.tag === activeFilter);

  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-36">
        {/* Hero */}
        <section className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Model library
            </p>

            <p className="mt-8 max-w-[260px] text-[12px] leading-[1.7] text-pewter">
              Choose a model for your virtual try-on generation and keep your
              catalog visually consistent.
            </p>

            <div className="mt-10">
              <span className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                {models.length.toString().padStart(2, "0")} models
              </span>
            </div>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.87] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
              Find the
              <br />
              <span className="text-pewter">right model.</span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
              Select a base model that fits the look of your product catalog.
              More model controls can be added as your workflow grows.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Browse models
              </p>
            </div>

            <div className="flex w-fit rounded-full border border-black/10 p-1 dark:border-white/10">
              {filters.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-[10px] font-medium uppercase tracking-[0.08em] transition-all ${
                      active
                        ? "bg-ink-black text-white dark:bg-white dark:text-ink-black"
                        : "text-pewter hover:text-ink-black dark:hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Model grid */}
        <section className="mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredModels.map((model, index) => (
              <article
                key={model.id}
                className="group overflow-hidden rounded-[26px] border border-black/10 bg-canvas-white dark:border-white/10 dark:bg-coal-light"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ash dark:bg-coal">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.85),transparent_32%),linear-gradient(145deg,#e9e5df,#d5d0c8)] dark:bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(145deg,#252525,#151515)]" />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="rounded-full bg-white/75 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.1em] text-ink-black backdrop-blur-sm dark:bg-black/40 dark:text-white">
                      {model.tag}
                    </span>

                    <span className="rounded-full bg-white/75 px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] text-pewter backdrop-blur-sm dark:bg-black/40">
                      {model.id}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-1/2 h-[76%] w-[58%] -translate-x-1/2 rounded-t-[48%] bg-gradient-to-b from-white/80 via-white/30 to-black/10 dark:from-white/10 dark:via-white/5 dark:to-black/30" />

                  <div className="absolute bottom-[14%] left-1/2 h-[38%] w-[40%] -translate-x-1/2 rounded-[45%_45%_22%_22%] bg-black/10 blur-2xl dark:bg-black/40" />

                  <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-ink-black/50 dark:text-white/40">
                      Preview
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-black backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 dark:bg-black/50 dark:text-white">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10h11M10 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.1em] text-pewter">
                        {model.type}
                      </p>

                      <h2 className="mt-2 text-[25px] font-medium tracking-[-0.025em]">
                        {model.name}
                      </h2>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.1em] text-pewter">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
                    <span className="text-[11px] text-pewter">
                      {model.detail}
                    </span>

                    <span className="text-[10px] font-medium text-ember-orange">
                      Available
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Custom model */}
        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Custom models
              </p>

              <p className="mt-6 max-w-[240px] text-[12px] leading-[1.7] text-pewter">
                Need a specific look for your brand? Custom model workflows
                can be added around your catalog requirements.
              </p>
            </div>

            <div className="rounded-[28px] bg-ink-black p-8 text-white sm:p-12 lg:p-14">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                    Custom
                  </p>

                  <h2 className="mt-5 max-w-[700px] text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[58px]">
                    Keep your brand look consistent.
                  </h2>
                </div>

                <span className="hidden text-[10px] uppercase tracking-[0.1em] text-white/35 sm:block">
                  Optional
                </span>
              </div>

              <p className="mt-7 max-w-[560px] text-[14px] leading-[1.7] text-white/50">
                Talk to the zahi team about a model setup tailored to your
                product photography and customer experience.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-ember-orange px-6 py-3.5 text-[11px] font-medium text-ink-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28 border-t border-black/10 pt-10 dark:border-white/10 sm:mt-36">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                Ready to generate?
              </p>

              <h2 className="mt-5 max-w-[720px] text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[58px]">
                Pick a model and put your catalog to work.
              </h2>
            </div>

            <Link
              href="/#try-on"
              className="w-fit rounded-full bg-ink-black px-7 py-4 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
            >
              Try virtual try-on
            </Link>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-6 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>zahi.</span>
          <span>Model library</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}