"use client";

import Image from "next/image";
import { useState } from "react";

type TryOnState = "idle" | "generating" | "complete";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 3.5H4L5.1 10.2C5.2 10.8 5.7 11.2 6.3 11.2H12.1C12.6 11.2 13.1 10.8 13.2 10.3L14 5.5H4.4"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.4" cy="13.2" r="1" fill="currentColor" />
      <circle cx="12" cy="13.2" r="1" fill="currentColor" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M3.5 13C3.9 10.8 5.4 9.5 8 9.5C10.6 9.5 12.1 10.8 12.5 13"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 12V3.5M5.5 7L9 3.5L12.5 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14.5H14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 6.5L5.2 9L10.5 3.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TryOnPanel() {
  const [state, setState] = useState<TryOnState>("idle");

  const startTryOn = () => {
    if (state === "generating") return;

    setState("generating");

    window.setTimeout(() => {
      setState("complete");
    }, 2200);
  };

  return (
    <div className="rounded-[20px] border border-[#C8E0EA] bg-[#EDF8FD] p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-[#D5E6ED] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#28769D]">
            <UserIcon />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-[#111315]">
              Try on with Zahi
            </p>

            <p className="mt-0.5 text-[7px] text-[#718087]">
              See this product on you
            </p>
          </div>
        </div>

        <span className="rounded-full bg-white px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#28769D]">
          AI
        </span>
      </div>

      {state === "idle" && (
        <>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-[14px] border border-[#D5E6ED] bg-white">
              <div className="relative aspect-[0.82] bg-[#F4F8FA]">
                <Image
                  src="/hero/model.png"
                  alt="Model wearing a product"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              <div className="border-t border-[#E2EEF3] px-3 py-2.5">
                <p className="text-[8px] font-medium text-[#46535A]">
                  Your photo
                </p>

                <p className="mt-0.5 text-[7px] text-[#9BAAB1]">
                  Ready
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[14px] border border-[#D5E6ED] bg-white">
              <div className="relative aspect-[0.82] bg-[#F4F8FA]">
                <Image
                  src="/hero/garment.png"
                  alt="Selected garment"
                  fill
                  className="object-contain p-5"
                  sizes="240px"
                />
              </div>

              <div className="border-t border-[#E2EEF3] px-3 py-2.5">
                <p className="text-[8px] font-medium text-[#46535A]">
                  Selected product
                </p>

                <p className="mt-0.5 text-[7px] text-[#9BAAB1]">
                  Essential Shirt
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={startTryOn}
            className="mt-3 flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full bg-[#111315] text-[9px] font-semibold text-white transition-transform duration-200 hover:scale-[0.99]"
          >
            Try it on
            <ArrowIcon />
          </button>
        </>
      )}

      {state === "generating" && (
        <div className="mt-4 rounded-[15px] border border-[#D5E6ED] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold text-[#111315]">
                Creating your try-on
              </p>

              <p className="mt-1 text-[7px] text-[#718087]">
                Applying the product to your photo
              </p>
            </div>

            <span className="text-[8px] font-semibold text-[#28769D]">
              AI
            </span>
          </div>

          <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-[#E4F0F5]">
            <div className="h-full w-full origin-left animate-[zahi-progress_2.2s_ease-in-out] rounded-full bg-[#5C9FC2]" />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5C9FC2]" />

            <span className="text-[7px] text-[#718087]">
              Generating realistic preview
            </span>
          </div>
        </div>
      )}

      {state === "complete" && (
        <>
          <div className="mt-4 overflow-hidden rounded-[15px] border border-[#C5E0EB] bg-white">
            <div className="flex items-center justify-between border-b border-[#E2EEF3] px-3.5 py-3">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#46535A]">
                  Try-on result
                </p>

                <p className="mt-1 text-[7px] text-[#9BAAB1]">
                  Generated by Zahi AI
                </p>
              </div>

              <span className="flex items-center gap-1 rounded-full bg-[#EDF8FD] px-2.5 py-1.5 text-[7px] font-medium text-[#28769D]">
                <CheckIcon />
                Ready
              </span>
            </div>

            <div className="relative aspect-[0.78] bg-[#F4F8FA]">
              <Image
                src="/hero/try-on-result.png"
                alt="Virtual try-on result"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setState("idle")}
              className="min-h-[40px] rounded-full border border-[#D5E6ED] bg-white text-[8px] font-medium text-[#46535A]"
            >
              Try again
            </button>

            <button
              type="button"
              className="flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[#111315] text-[8px] font-semibold text-white"
            >
              <CartIcon />
              Add to cart
            </button>
          </div>
        </>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-[#D5E6ED] pt-3">
        <span className="text-[7px] text-[#9BAAB1]">
          Secure image processing
        </span>

        <span className="text-[7px] text-[#9BAAB1]">
          Powered by Zahi
        </span>
      </div>
    </div>
  );
}

export default function WidgetSection() {
  return (
    <section id="try-on" className="zahi-section">
      <style jsx>{`
        @keyframes zahi-progress {
          0% {
            transform: scaleX(0);
          }

          30% {
            transform: scaleX(0.32);
          }

          65% {
            transform: scaleX(0.7);
          }

          100% {
            transform: scaleX(1);
          }
        }
      `}</style>

      <div className="relative overflow-hidden bg-[#F8FCFE]">
        <div
          className="pointer-events-none absolute right-[-180px] top-[15%] h-[450px] w-[450px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(151,216,239,0.22) 0%, rgba(151,216,239,0) 70%)",
          }}
          aria-hidden="true"
        />

        <div className="zahi-container zahi-section-inner relative">
          <div className="mb-10 max-w-[600px]">
            <p className="zahi-eyebrow">
              Virtual try-on
            </p>

            <h2 className="zahi-heading mt-6 text-[42px] sm:text-[54px] lg:text-[62px]">
              See the product.
              <br />
              <span className="zahi-blue">Then try it on.</span>
            </h2>

            <p className="zahi-body mt-6 max-w-[500px]">
              Give shoppers a simple way to see how a product looks on them
              before they add it to their cart.
            </p>
          </div>

          {/* ONLY THE COMMERCE DEMO */}
          <div className="grid overflow-hidden rounded-[24px] border border-[#D5E6ED] bg-white shadow-[0_24px_70px_rgba(54,103,126,0.09)] lg:grid-cols-[1fr_0.82fr]">
            {/* Product card */}
            <div className="p-5 sm:p-7 lg:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[7px] font-semibold uppercase tracking-[0.13em] text-[#9BAAB1]">
                  New collection
                </span>

                <span className="text-[7px] text-[#9BAAB1]">
                  In stock
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-[1.02fr_0.98fr]">
                {/* Product */}
                <div>
                  <div className="overflow-hidden rounded-[18px] bg-[#F4F8FA]">
                    <div className="relative aspect-[0.9]">
                      <Image
                        src="/hero/garment.png"
                        alt="Essential Shirt"
                        fill
                        className="object-contain p-8"
                        sizes="500px"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-[#9BAAB1]">
                      Zahi Studio
                    </p>

                    <h3 className="mt-2 text-[22px] font-medium tracking-[-0.045em] text-[#111315]">
                      Essential Shirt
                    </h3>

                    <p className="mt-2 text-[15px] font-medium text-[#111315]">
                      Rs. 4,990
                    </p>

                    <p className="mt-3 text-[9px] leading-[1.6] text-[#718087]">
                      Premium everyday shirt with a relaxed modern fit.
                    </p>

                    <div className="mt-4 flex gap-2">
                      {["S", "M", "L", "XL"].map((size) => (
                        <button
                          key={size}
                          type="button"
                          className={`flex h-8 w-8 items-center justify-center rounded-[7px] border text-[7px] font-medium ${
                            size === "M"
                              ? "border-[#111315] bg-[#111315] text-white"
                              : "border-[#D5E6ED] bg-white text-[#718087]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        className="flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full bg-[#111315] text-[8px] font-semibold text-white"
                      >
                        <CartIcon />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Model */}
                <div className="overflow-hidden rounded-[18px] bg-[#F4F8FA]">
                  <div className="relative aspect-[0.9] h-full min-h-[320px]">
                    <Image
                      src="/hero/model.png"
                      alt="Model preview"
                      fill
                      className="object-cover"
                      sizes="500px"
                    />

                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#46535A] backdrop-blur-sm">
                      Customer preview
                    </div>

                    <div className="absolute inset-x-3 bottom-3 rounded-[12px] border border-white/70 bg-white/90 px-3 py-2.5 backdrop-blur-md">
                      <p className="text-[8px] font-medium text-[#111315]">
                        Your photo
                      </p>

                      <p className="mt-0.5 text-[7px] text-[#718087]">
                        Ready for virtual try-on
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zahi widget */}
            <div className="border-t border-[#E2EEF3] bg-[#F8FCFE] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
              <div className="mb-5">
                <p className="text-[7px] font-semibold uppercase tracking-[0.13em] text-[#9BAAB1]">
                  Built into the product experience
                </p>

                <h3 className="mt-2 text-[20px] font-medium tracking-[-0.04em] text-[#111315]">
                  Try it before you buy
                </h3>
              </div>

              <TryOnPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}