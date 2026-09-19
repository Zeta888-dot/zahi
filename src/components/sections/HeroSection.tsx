"use client";

import Image from "next/image";
import { useState } from "react";

type State = "idle" | "generating" | "complete";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  const [state, setState] = useState<State>("idle");

  const tryOn = () => {
    setState("generating");
    window.setTimeout(() => setState("complete"), 2200);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FCFE]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-260px] h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(151,216,239,.28) 0%, rgba(234,246,252,0) 70%)" }} />
      </div>

      <div className="zahi-container relative py-20 md:py-28">
        <div className="mb-10 max-w-[720px]">
          <p className="zahi-eyebrow">AI virtual try-on for fashion</p>
          <h1 className="mt-6 font-medium tracking-[-0.065em] text-[#111315]"
            style={{ fontSize: "clamp(52px, 7vw, 96px)", lineHeight: .92 }}>
            Let shoppers
            <br />
            <span className="text-[#28769D]">try before they buy.</span>
          </h1>
          <p className="mt-7 max-w-[520px] text-[15px] leading-[1.75] text-[#46535A] md:text-[17px]">
            Zahi lives directly inside the product page, turning a normal fashion store into an AI try-on experience.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#D5E6ED] bg-white shadow-[0_30px_90px_rgba(54,103,126,.10)]">
          <div className="flex items-center justify-between border-b border-[#E2EEF3] px-5 py-4 sm:px-7">
            <div className="flex items-center gap-7">
              <span className="text-[15px] font-semibold tracking-[-.03em]">yourstore</span>
              <span className="hidden text-[10px] text-[#9BAAB1] sm:block">New arrivals</span>
              <span className="hidden text-[10px] text-[#9BAAB1] sm:block">Clothing</span>
              <span className="hidden text-[10px] text-[#9BAAB1] sm:block">About</span>
            </div>
            <span className="text-[10px] text-[#9BAAB1]">Bag (0)</span>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_.92fr]">
            <div className="grid gap-4 p-5 sm:p-7 md:grid-cols-[1fr_1fr]">
              <div className="overflow-hidden rounded-[20px] bg-[#F4F8FA]">
                <div className="relative aspect-[.82]">
                  <Image src="/hero/garment.png" alt="Essential Shirt" fill className="object-contain p-10" sizes="500px" priority />
                </div>
              </div>

              <div className="flex flex-col justify-center px-1 sm:px-3">
                <p className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#9BAAB1]">Zahi Studio</p>
                <h2 className="mt-3 text-[28px] font-medium tracking-[-.045em] text-[#111315]">Essential Shirt</h2>
                <p className="mt-2 text-[16px] font-medium text-[#111315]">Rs. 4,990</p>
                <p className="mt-4 max-w-[280px] text-[11px] leading-[1.65] text-[#718087]">
                  Premium everyday shirt with a relaxed modern fit.
                </p>

                <div className="mt-6">
                  <p className="mb-2 text-[9px] font-medium text-[#46535A]">Size</p>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button key={size} className={`h-9 w-9 rounded-[8px] border text-[9px] ${size === "M" ? "border-[#111315] bg-[#111315] text-white" : "border-[#D5E6ED] text-[#718087]"}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="mt-6 min-h-[44px] rounded-full bg-[#111315] text-[9px] font-semibold text-white">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="border-t border-[#E2EEF3] bg-[#F8FCFE] p-5 sm:p-7 lg:border-l lg:border-t-0">
              {state !== "complete" ? (
                <div className="rounded-[20px] border border-[#C8E0EA] bg-[#EDF8FD] p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-[#D5E6ED] pb-4">
                    <div>
                      <p className="text-[11px] font-semibold text-[#111315]">Try on with Zahi</p>
                      <p className="mt-1 text-[8px] text-[#718087]">See this product on you</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1.5 text-[7px] font-semibold text-[#28769D]">AI</span>
                  </div>

                  {state === "idle" ? (
                    <>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-[15px] border border-[#D5E6ED] bg-white">
                          <div className="relative aspect-[.82]"><Image src="/hero/model.png" alt="Customer photo" fill className="object-cover" sizes="250px" /></div>
                          <p className="border-t border-[#E2EEF3] px-3 py-2 text-[8px] font-medium text-[#46535A]">Your photo</p>
                        </div>
                        <div className="overflow-hidden rounded-[15px] border border-[#D5E6ED] bg-white">
                          <div className="relative aspect-[.82]"><Image src="/hero/garment.png" alt="Selected garment" fill className="object-contain p-5" sizes="250px" /></div>
                          <p className="border-t border-[#E2EEF3] px-3 py-2 text-[8px] font-medium text-[#46535A]">Selected product</p>
                        </div>
                      </div>
                      <button onClick={tryOn} className="mt-3 flex min-h-[45px] w-full items-center justify-center gap-2 rounded-full bg-[#111315] text-[9px] font-semibold text-white">
                        Try it on <Arrow />
                      </button>
                    </>
                  ) : (
                    <div className="mt-4 rounded-[15px] border border-[#D5E6ED] bg-white p-5">
                      <p className="text-[10px] font-semibold text-[#111315]">Creating your try-on</p>
                      <p className="mt-1 text-[8px] text-[#718087]">Applying the product to your photo</p>
                      <div className="mt-6 h-[3px] overflow-hidden rounded-full bg-[#E4F0F5]">
                        <div className="h-full w-full origin-left animate-[zahi-progress_2.2s_ease-in-out] rounded-full bg-[#5C9FC2]" />
                      </div>
                      <p className="mt-4 text-[8px] text-[#718087]">Generating realistic preview…</p>
                    </div>
                  )}

                  <div className="mt-4 border-t border-[#D5E6ED] pt-3 text-[7px] text-[#9BAAB1]">Secure image processing · Powered by Zahi</div>
                </div>
              ) : (
                <div className="rounded-[20px] border border-[#C8E0EA] bg-[#EDF8FD] p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-[#111315]">Your try-on</p>
                      <p className="mt-1 text-[8px] text-[#718087]">Generated by Zahi AI</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1.5 text-[7px] font-semibold text-[#28769D]">READY</span>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-[15px] bg-white">
                    <div className="relative aspect-[.78]"><Image src="/hero/try-on-result.png" alt="AI virtual try-on result" fill className="object-cover" sizes="500px" /></div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button onClick={() => setState("idle")} className="min-h-[40px] rounded-full border border-[#D5E6ED] bg-white text-[8px] font-medium text-[#46535A]">Try again</button>
                    <button className="min-h-[40px] rounded-full bg-[#111315] text-[8px] font-semibold text-white">Add to cart</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[.14em] text-[#9BAAB1]">
          The product page becomes the demo.
        </p>
      </div>

      <style jsx>{`
        @keyframes zahi-progress {
          0% { transform: scaleX(0); }
          35% { transform: scaleX(.35); }
          70% { transform: scaleX(.72); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
