"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";

type Stage = "idle" | "generating" | "result";

const GENERATE_MS = 1800;

const GARMENT_PHOTO = "/hero/garment.png";
const MODEL_PHOTO = "/hero/model.png";
const RESULT_PHOTO = "/hero/try-on-result.png";

const models = ["01", "02", "03", "04"];

/*
  Chips get their size and font from inline styles on purpose, so they look
  the same even if a global button rule ever overrides Tailwind utilities.
*/
const chipStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  padding: 0,
  border: 0,
  borderRadius: 9999,
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1,
  cursor: "pointer",
};

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M5.5 4H12V10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatusPill({
  tone,
  label,
}: {
  tone: "green" | "blue";
  label: string;
}) {
  return (
    <span
      aria-live="polite"
      className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#F2F9FC] px-3 py-1.5 text-[12px] font-medium text-[#46535A]"
    >
      <span
        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
          tone === "green" ? "bg-[#4DA878]" : "animate-pulse bg-[#28769D]"
        }`}
      />
      {label}
    </span>
  );
}

const chipLabelCls =
  "absolute top-3 left-3 rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] backdrop-blur-md";

export default function TryOnDemo() {
  const [url, setUrl] = useState("");
  const [model, setModel] = useState("04");
  const [stage, setStage] = useState<Stage>("idle");

  // Fake generation, runs while the stage is "generating"
  useEffect(() => {
    if (stage !== "generating") return;
    const t = setTimeout(() => setStage("result"), GENERATE_MS);
    return () => clearTimeout(t);
  }, [stage]);

  const generating = stage === "generating";
  const done = stage === "result";

  const generate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (generating) return;
    setStage("generating");
  };

  const selectModel = (m: string) => {
    setModel(m);
    // A finished result belongs to the old model, so go back to the start
    if (stage === "result") setStage("idle");
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white ring-1 ring-black/[0.06] shadow-[0_40px_100px_-40px_rgba(17,19,21,0.25)]">
      <style>{`
        @keyframes zahi-demo-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .zahi-demo-scan { animation: zahi-demo-scan 1.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .zahi-demo-scan { animation: none; }
        }
      `}</style>

      {/* Window bar */}
      <div className="flex items-center justify-between gap-3 border-b border-[#E2EEF3] px-6 py-4 lg:px-7">
        <div className="flex items-center gap-4">
          <div aria-hidden="true" className="hidden gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E2EEF3]" />
          </div>
          <span className="rounded-full bg-[#F2F9FC] px-4 py-1.5 text-[12px] text-[#718087]">
            zahi studio
          </span>
        </div>

        <StatusPill
          tone={generating ? "blue" : "green"}
          label={generating ? "Generating" : done ? "Try-on ready" : "Demo preview"}
        />
      </div>

      <div className="p-6 lg:p-8">
        {/* URL and generate */}
        <form
          onSubmit={generate}
          noValidate
          className="flex flex-col gap-3 sm:flex-row"
        >
          <label className="flex h-12 min-w-0 flex-1 items-center rounded-full bg-[#F2F9FC] px-5 ring-1 ring-[#D5E6ED] transition-all duration-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#28769D]">
            <span className="mr-3 shrink-0 text-[12px] font-semibold tracking-[0.14em] text-[#718087]">
              URL
            </span>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-label="Product URL"
              autoComplete="off"
              placeholder="https://yourstore.com/products/linen-blazer"
              className="min-w-0 flex-1 bg-transparent text-[16px] text-[#111315] outline-none placeholder:text-[#9BAAB1]"
            />
          </label>

          <button
            type="submit"
            disabled={generating}
            className="zahi-btn zahi-btn-primary w-full shrink-0 sm:w-auto"
          >
            {generating ? "Generating" : done ? "Generate again" : "Generate"}
            <span className="zahi-btn-icon" aria-hidden="true">
              {generating ? (
                <span className="block h-1/2 w-1/2 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <ArrowUpRight />
              )}
            </span>
          </button>
        </form>

        {/* Model presets */}
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#718087]">
            MODEL
          </p>
          <div role="radiogroup" aria-label="Base model" className="flex gap-2">
            {models.map((m) => {
              const active = model === m;
              return (
                <button
                  key={m}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  aria-label={`Model ${m}`}
                  onClick={() => selectModel(m)}
                  style={chipStyle}
                  className={`ring-1 transition-all duration-200 ${
                    active
                      ? "bg-[#111315] text-white ring-[#111315]"
                      : "bg-white text-[#46535A] ring-[#D5E6ED] hover:ring-[#111315]"
                  }`}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage: garment and model in, try-on out */}
        <div className="mx-auto mt-7 grid max-w-[560px] grid-cols-2 gap-3 sm:gap-4">
          {/* Garment */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#F2F9FC] ring-1 ring-black/[0.04]">
            <Image
              src={GARMENT_PHOTO}
              alt="Garment from the product page"
              fill
              sizes="(min-width: 640px) 280px, 45vw"
              className="object-cover"
            />
            <span className={`${chipLabelCls} bg-white/85 text-[#46535A]`}>GARMENT</span>
          </div>

          {/* Model, then result */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#F2F9FC] ring-1 ring-black/[0.04]">
            <Image
              src={MODEL_PHOTO}
              alt="Base model"
              fill
              sizes="(min-width: 640px) 280px, 45vw"
              className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                done ? "opacity-0" : generating ? "opacity-70" : "opacity-100"
              }`}
            />
            <Image
              src={RESULT_PHOTO}
              alt={done ? "Try-on result" : ""}
              aria-hidden={!done}
              fill
              sizes="(min-width: 640px) 280px, 45vw"
              className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                done ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Scan line while generating */}
            {generating && (
              <div
                aria-hidden="true"
                className="zahi-demo-scan pointer-events-none absolute inset-x-0 top-0 h-1/4"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(40,118,157,0.35), transparent)",
                }}
              />
            )}

            <span
              className={`${chipLabelCls} ${
                done ? "bg-[#111315]/85 text-white" : "bg-white/85 text-[#46535A]"
              }`}
            >
              {done ? "READY IN 8s" : `BASE MODEL ${model}`}
            </span>

            {stage === "idle" && (
              <span className="pointer-events-none absolute right-3 bottom-3 left-3 rounded-full bg-[#111315]/80 px-3 py-2 text-center text-[12px] font-medium text-white backdrop-blur-md">
                Press Generate
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-2 border-t border-[#E2EEF3] px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-[13px] text-[#718087]">Fabric, color and fit preserved.</p>
        <p className="text-[13px] text-[#718087]">
          Demo preview. Any URL shows the same sample result.
        </p>
      </div>
    </div>
  );
}