"use client";

import { useState } from "react";
import Link from "next/link";

const endpoints = [
  {
    number: "01",
    method: "POST",
    path: "/v1/try-on",
    description: "Create a new virtual try-on generation job.",
  },
  {
    number: "02",
    method: "GET",
    path: "/v1/try-on/{id}",
    description: "Retrieve generation status and output.",
  },
  {
    number: "03",
    method: "GET",
    path: "/v1/models",
    description: "Retrieve available models.",
  },
];

const requestCode = `{
  "garment_url": "https://.../blazer.jpg",
  "model_id": "base_04"
}`;

const responseCode = `{
  "id": "try_8f2a...",
  "status": "complete",
  "result": {
    "image_url": "https://.../result.jpg"
  }
}`;

const javascriptCode = `const response = await fetch(
  "https://api.zahi.pk/v1/try-on",
  {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${process.env.ZAHI_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      garment_url: "https://.../blazer.jpg",
      model_id: "base_04",
    }),
  }
);

const data = await response.json();`;

function CopyIcon({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyCode}
      aria-label={copied ? "Copied" : "Copy code"}
      title={copied ? "Copied" : "Copy code"}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/45 transition-colors hover:border-white/20 hover:text-white"
    >
      {copied ? (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path
            d="M4 10.5 8 14l8-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <rect
            x="7"
            y="7"
            width="9"
            height="9"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M13 7V5.5A1.5 1.5 0 0 0 11.5 4H5.5A1.5 1.5 0 0 0 4 5.5v6A1.5 1.5 0 0 0 5.5 13H7"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      )}
    </button>
  );
}

function Terminal({
  label,
  meta,
  code,
  status,
}: {
  label: string;
  meta: string;
  code: string;
  status?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-black/10 bg-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
      <div className="flex h-14 items-center justify-between border-b border-white/10 px-4 sm:px-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "#ff5f57" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "#febc2e" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "#28c840" }}
            />
          </div>

          <span className="text-[10px] uppercase tracking-[0.12em] text-white/40">
            {label}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {status ? (
            <span className="rounded-full bg-[#28c840]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#28c840]">
              {status}
            </span>
          ) : (
            <span className="hidden text-[10px] uppercase tracking-[0.1em] text-white/25 sm:block">
              {meta}
            </span>
          )}

          <CopyIcon value={code} />
        </div>
      </div>

      <div className="border-b border-white/5 bg-[#0d0d0d] px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em]">
          <span className="text-[#28c840]">●</span>
          <span className="text-white/30">{meta}</span>
        </div>
      </div>

      <pre className="overflow-x-auto px-5 py-6 text-[12px] leading-[1.9] text-white/70 sm:px-7 sm:py-7 sm:text-[13px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DocsPage() {
  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-36">
        {/* Hero */}
        <section className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Developer docs
            </p>

            <p className="mt-8 max-w-[270px] text-[12px] leading-[1.7] text-pewter">
              A simple API surface for bringing AI-powered virtual try-on into
              your own commerce workflow.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {["REST", "JSON", "HTTPS"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-3.5 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-pewter dark:border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.87] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
              Build on
              <br />
              <span className="text-pewter">zahi.</span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
              Connect your backend, CMS, storefront, or application to a
              virtual try-on workflow through a clean HTTP API.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#endpoints"
                className="rounded-full bg-ink-black px-6 py-3.5 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
              >
                Explore endpoints
              </Link>

              <Link
                href="/#start"
                className="rounded-full border border-black/10 px-6 py-3.5 text-[11px] font-medium transition-colors hover:border-ember-orange hover:text-ember-orange dark:border-white/10"
              >
                Request access
              </Link>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="mt-24 grid gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-3 sm:mt-32">
          {[
            ["Protocol", "HTTPS"],
            ["Format", "JSON"],
            ["Auth", "API key"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-paper px-6 py-5 dark:bg-coal sm:px-7"
            >
              <p className="text-[9px] uppercase tracking-[0.12em] text-pewter">
                {label}
              </p>

              <p className="mt-2 text-[14px] font-medium">{value}</p>
            </div>
          ))}
        </section>

        {/* Endpoints */}
        <section
          id="endpoints"
          className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32"
        >
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                API surface
              </p>

              <h2 className="mt-4 text-[38px] font-medium leading-none tracking-[-0.04em] sm:text-[52px]">
                Endpoints
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.12em] text-pewter sm:block">
              03 routes
            </span>
          </div>

          <div className="divide-y divide-black/10 dark:divide-white/10">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.path}
                className="group grid gap-5 py-8 lg:grid-cols-[70px_90px_1fr_0.9fr] lg:items-center"
              >
                <span className="text-[10px] text-ember-orange">
                  {endpoint.number}
                </span>

                <span
                  className={`w-fit rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] ${
                    endpoint.method === "POST"
                      ? "bg-ember-orange/10 text-ember-orange"
                      : "bg-black/5 text-pewter dark:bg-white/5"
                  }`}
                >
                  {endpoint.method}
                </span>

                <code className="text-[14px] font-medium transition-colors group-hover:text-ember-orange sm:text-[15px]">
                  {endpoint.path}
                </code>

                <p className="text-[13px] leading-[1.6] text-pewter lg:text-right">
                  {endpoint.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Request / Response */}
        <section className="mt-24 sm:mt-32">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
              First request
            </p>

            <h2 className="mt-4 max-w-[700px] text-[38px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[52px]">
              Send a garment.
              <br />
              Get a generation job.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <Terminal
              label="Request"
              meta="POST /v1/try-on"
              code={requestCode}
            />

            <Terminal
              label="Response"
              meta="GET /v1/try-on/{id}"
              status="200 OK"
              code={responseCode}
            />
          </div>
        </section>

        {/* JavaScript */}
        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Example
              </p>

              <h2 className="mt-4 text-[34px] font-medium leading-none tracking-[-0.035em] sm:text-[44px]">
                JavaScript
              </h2>

              <p className="mt-5 max-w-[250px] text-[12px] leading-[1.7] text-pewter">
                Use fetch or any HTTP client to submit a generation request
                from your application.
              </p>
            </div>

            <Terminal
              label="JavaScript"
              meta="fetch"
              code={javascriptCode}
            />
          </div>
        </section>

        {/* Workflow */}
        <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Workflow
              </p>
            </div>

            <div className="divide-y divide-black/10 dark:divide-white/10">
              {[
                [
                  "01",
                  "Create a job",
                  "Send the garment image and selected model.",
                ],
                [
                  "02",
                  "Track the job",
                  "Use the returned ID to check generation status.",
                ],
                [
                  "03",
                  "Use the result",
                  "Retrieve the generated output when processing is complete.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid gap-5 py-8 first:pt-0 md:grid-cols-[70px_1fr]"
                >
                  <span className="text-[10px] text-ember-orange">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-[24px] font-medium tracking-[-0.02em]">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-pewter">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="mt-24 grid gap-5 md:grid-cols-3 sm:mt-32">
          {[
            {
              label: "Authentication",
              text: "Authenticate requests with your API key.",
            },
            {
              label: "Generation",
              text: "Submit a garment and model, then track the job.",
            },
            {
              label: "Integration",
              text: "Use the API wherever your commerce workflow needs it.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-black/10 p-7 dark:border-white/10"
            >
              <p className="text-[9px] uppercase tracking-[0.12em] text-ember-orange">
                {item.label}
              </p>

              <p className="mt-5 text-[14px] leading-[1.65] text-pewter">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-28 border-t border-black/10 pt-10 dark:border-white/10 sm:mt-36">
          <div className="rounded-[28px] bg-ink-black p-8 text-white sm:p-12 lg:p-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              API access
            </p>

            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-[780px] text-[43px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[62px]">
                  Build the try-on layer your store needs.
                </h2>

                <p className="mt-6 max-w-[520px] text-[14px] leading-[1.7] text-white/50">
                  API examples on this page are currently illustrative while
                  the production integration is being connected.
                </p>
              </div>

              <Link
                href="/#start"
                className="w-fit rounded-full bg-ember-orange px-7 py-4 text-[11px] font-medium text-ink-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request access
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-6 text-[10px] text-pewter dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>zahi.</span>
          <span>Developer documentation</span>
          <span>Founded in Chitral</span>
        </footer>
      </div>
    </main>
  );
}