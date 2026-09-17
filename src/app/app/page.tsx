"use client";

import { useState } from "react";

const nav = ["Generate", "Assets", "Models", "API keys", "Billing", "Settings"];

export default function AppPage() {
  const [active, setActive] = useState("Generate");
  const [queued, setQueued] = useState(false);

  return (
    <main className="mx-auto flex min-h-screen max-w-[1280px] gap-10 px-5 pt-28 pb-20">
      <aside className="hidden w-[200px] shrink-0 md:block">
        <div className="sticky top-28 flex flex-col gap-1">
          {nav.map((n) => (
            <button
              key={n}
              onClick={() => setActive(n)}
              className={`rounded-full px-4 py-2 text-left text-[13px] ${active === n ? "bg-ink-black text-canvas-white dark:bg-canvas-white dark:text-ink-black" : "text-pewter hover:text-ink-black dark:hover:text-canvas-white"}`}
            >
              {n}
            </button>
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-[27px] tracking-[-0.015em]">{active}</h1>
          <span className="rounded-full bg-canvas-white px-4 py-2 text-[12px] text-pewter dark:bg-coal-light">
            10 credits left
          </span>
        </div>

        {active === "Generate" && (
          <div className="mt-8 rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light">
            <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-[20px] border border-dashed border-ash dark:border-coal-light">
              <p className="text-[15px]">Drop a garment photo</p>
              <p className="mt-2 text-[12px] text-pewter">PNG or JPG, front view, plain background</p>
            </div>
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-20 w-16 shrink-0 animate-pulse rounded-[12px] bg-ash/60 dark:bg-coal-light/40" />
              ))}
            </div>
            <button
              onClick={() => setQueued(true)}
              className="mt-6 rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black"
            >
              {queued ? "Queued, keys pending" : "Generate"}
            </button>
            <p className="mt-4 text-[12px] text-pewter">Generation goes live once FASHN API keys are connected.</p>
          </div>
        )}

        {active === "Assets" && (
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="rounded-[20px] bg-canvas-white p-3 dark:bg-coal-light">
                <div className="aspect-[3/4] animate-pulse rounded-[14px] bg-ash/60 dark:bg-coal-light/40" />
                <p className="mt-2 text-[12px] font-medium">try-on_0{i + 1}</p>
                <p className="text-[11px] text-pewter">{i % 3 === 0 ? "processing" : "ready"}</p>
              </div>
            ))}
          </div>
        )}

        {active === "Models" && (
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[20px] bg-canvas-white p-3 dark:bg-coal-light">
                <div className="aspect-[3/4] animate-pulse rounded-[14px] bg-ash/60 dark:bg-coal-light/40" />
                <p className="mt-2 text-[12px] font-medium">base_0{i + 1}</p>
              </div>
            ))}
            <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-[20px] border border-dashed border-ash text-center dark:border-coal-light">
              <p className="text-[13px]">Train custom</p>
              <p className="mt-1 px-4 text-[11px] text-pewter">On your own fits</p>
            </div>
          </div>
        )}

        {active === "API keys" && (
          <div className="mt-8 rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light">
            <div className="flex items-center justify-between">
              <code className="text-[14px]">zk_live_••••••••4f2a</code>
              <span className="text-[12px] text-pewter">created 12 Sep 2026</span>
            </div>
            <div className="mt-6 flex gap-3">
              <span className="rounded-full bg-ink-black px-5 py-2.5 text-[13px] text-canvas-white">Create key</span>
              <span className="rounded-full border border-ash px-5 py-2.5 text-[13px] text-pewter dark:border-coal-light">Revoke</span>
            </div>
            <p className="mt-6 text-[12px] text-pewter">Full reference at /docs.</p>
          </div>
        )}

        {active === "Billing" && (
          <div className="mt-8 rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light">
            <div className="flex items-baseline justify-between">
              <p className="text-[20px] font-medium">Growth</p>
              <p className="text-[15px] text-pewter">$49 / month</p>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-ash dark:bg-coal">
              <div className="h-full w-[34%] rounded-full bg-ember-orange" />
            </div>
            <p className="mt-3 text-[12px] text-pewter">342 of 1,000 try-ons used this cycle</p>
            <span className="mt-6 inline-block rounded-full border border-ash px-5 py-2.5 text-[13px] text-pewter dark:border-coal-light">
              Manage billing
            </span>
          </div>
        )}

        {active === "Settings" && (
          <div className="mt-8 flex max-w-[480px] flex-col gap-4 rounded-[27px] bg-canvas-white p-8 dark:bg-coal-light">
            <input defaultValue="Zahi Studio" className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light" />
            <input defaultValue="you@yourstore.com" className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light" />
            <input defaultValue="https://yourstore.com" className="rounded-full border border-ash bg-transparent px-5 py-3 text-[14px] focus:border-ember-orange focus:outline-none dark:border-coal-light" />
            <span className="rounded-full bg-ink-black py-3 text-center text-[14px] font-medium text-canvas-white">Save</span>
          </div>
        )}
      </div>
    </main>
  );
}