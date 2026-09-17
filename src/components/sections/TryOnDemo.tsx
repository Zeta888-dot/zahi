"use client";

import { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductVisual({ index }: { index: number }) {
  const variations = [
    "bg-[linear-gradient(145deg,#c9966d,#71482f)]",
    "bg-[linear-gradient(145deg,#8d735f,#40352e)]",
    "bg-[linear-gradient(145deg,#b47a50,#5d3826)]",
    "bg-[linear-gradient(145deg,#777777,#292929)]",
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-[72%] w-[55%]">
        <div
          className={`absolute left-1/2 top-[16%] h-[18%] w-[35%] -translate-x-1/2 rounded-full ${variations[index]}`}
        />

        <div
          className={`absolute left-1/2 top-[30%] h-[52%] w-[68%] -translate-x-1/2 rounded-[18px_18px_28px_28px] ${variations[index]}`}
        />

        <div className="absolute left-[15%] top-[34%] h-[38%] w-[13%] -rotate-[8deg] rounded-full bg-[#76503d]" />

        <div className="absolute right-[15%] top-[34%] h-[38%] w-[13%] rotate-[8deg] rounded-full bg-[#76503d]" />

        <div className="absolute left-1/2 top-[37%] h-[43%] w-px -translate-x-1/2 bg-black/20" />
      </div>
    </div>
  );
}

export default function TryOnDemo() {
  const [url, setUrl] = useState("");

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#0a0a0a] shadow-[0_35px_90px_rgba(0,0,0,0.4)]">
      <div className="absolute right-[-140px] top-[-180px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,105,0,0.13),transparent_68%)] blur-2xl" />

      <div className="relative border-b border-white/[0.07] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex min-h-12 flex-1 items-center rounded-full border border-white/[0.09] bg-white/[0.018] px-5">
            <span className="mr-3 text-[8px] uppercase tracking-[0.1em] text-white/20">
              URL
            </span>

            <input
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://yourstore.com/products/linen-blazer"
              className="min-w-0 flex-1 bg-transparent text-[11px] text-white/60 outline-none placeholder:text-white/20"
            />
          </label>

          <button
            type="button"
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff6900] px-6 text-[9px] font-semibold uppercase tracking-[0.08em] text-black transition hover:brightness-105"
          >
            Generate
            <ArrowIcon />
          </button>
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:p-5">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="group relative aspect-[3/4] overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,105,0,0.08),transparent_58%)]" />

            <ProductVisual index={index} />

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

            <span className="absolute left-3 top-3 text-[7px] uppercase tracking-[0.1em] text-white/20">
              Model {String(index + 1).padStart(2, "0")}
            </span>

            <span className="absolute bottom-3 right-3 rounded-full border border-white/[0.08] bg-black/40 px-2.5 py-1 text-[7px] text-white/35 backdrop-blur-md">
              0.8s
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between gap-3 border-t border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center">
        <p className="text-[8px] uppercase tracking-[0.1em] text-white/20">
          4 model presets
          <span className="mx-2 text-white/10">/</span>
          Fabric, color and fit preserved
        </p>

        <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.1em] text-[#28c840]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          Demo preview
        </span>
      </div>
    </div>
  );
}