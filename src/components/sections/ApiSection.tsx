"use client";

import { useState } from "react";

const samples: Record<string, string> = {
  cURL: `curl -X POST https://api.zahi.pk/v1/try-on \\
  -H "Authorization: Bearer zk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "garment_url": "https://.../racing-tee.png",
    "model_id": "base_04"
  }'`,
  Node: `const res = await fetch(
  "https://api.zahi.pk/v1/try-on",
  {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${process.env.ZAHI_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      garment_url: "https://.../racing-tee.png",
      model_id: "base_04",
    }),
  }
);`,
};

const response = `{
  "id": "try_9f2c",
  "status": "completed",
  "result_url": "https://cdn.zahi.pk/r/9f2c.png",
  "model_id": "base_04",
  "latency_ms": 812
}`;

function Code({ text }: { text: string }) {
  return (
    <pre className="zahi-terminal-code">
      {text.split("\n").map((line, i) => (
        <span key={i} className="zahi-term-line" style={{ animationDelay: `${i * 70}ms` }}>
          {line}
        </span>
      ))}
      <span className="zahi-cursor" />
    </pre>
  );
}

export default function ApiSection() {
  const [lang, setLang] = useState<"cURL" | "Node">("cURL");
  const [state, setState] = useState<"idle" | "running" | "done">("idle");

  const run = () => {
    if (state === "running") return;
    setState("running");
    setTimeout(() => setState("done"), 1200);
  };

  return (
    <section className="zahi-section" id="api">
      <div className="zahi-content zahi-section-inner">
        <div className="zahi-eyebrow mb-8">Developer API</div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left: copy + request terminal */}
          <div>
            <h2 className="zahi-heading text-[40px] lg:text-[56px]">
              Three endpoints.
              <br />
              <span className="zahi-blue">Zero magic.</span>
            </h2>

            <p className="zahi-body mt-8 max-w-[440px] text-[16px]">
              REST, JSON, API keys. Generate try-ons from your own backend,
              CMS or app. Run the request right here to see the response.
            </p>

            <div className="zahi-terminal mt-10">
              <div className="zahi-terminal-bar">
                <div className="flex items-center gap-2">
                  {(["cURL", "Node"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: 9999,
                        fontSize: 10,
                        fontWeight: 600,
                        background: lang === l ? "#28769D" : "transparent",
                        color: lang === l ? "#ffffff" : "#7d97a3",
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <button
                  onClick={run}
                  style={{
                    padding: "7px 14px",
                    borderRadius: 9999,
                    fontSize: 10,
                    fontWeight: 600,
                    background: "#4DA878",
                    color: "#ffffff",
                  }}
                >
                  {state === "running" ? "Running..." : "Run"}
                </button>
              </div>
              <div key={lang}>
                <Code text={samples[lang]} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["POST /v1/try-on", "GET /v1/try-on/{id}", "GET /v1/models"].map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-[#D5E6ED] bg-white px-4 py-2"
                  style={{ fontSize: 10, fontWeight: 600, color: "#46535A" }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Right: response panel */}
          <div className="zahi-terminal">
            <div className="zahi-terminal-bar">
              <span className="zahi-small">response</span>
              <span className="zahi-status">
                {state === "done" ? (
                  <>
                    <span className="zahi-status-dot" />
                    200 · 812ms
                  </>
                ) : state === "running" ? (
                  <>
                    <span className="zahi-status-dot zahi-status-dot-blue animate-pulse" />
                    pending
                  </>
                ) : (
                  <>
                    <span className="zahi-status-dot opacity-30" />
                    idle
                  </>
                )}
              </span>
            </div>

            {state === "idle" && (
              <div className="flex h-64 flex-col items-center justify-center gap-3 p-6">
                <p style={{ fontSize: 12, color: "#7d97a3" }}>No request sent yet</p>
                <p style={{ fontSize: 10, color: "#52707e" }}>
                  Press Run to call the try-on endpoint
                </p>
              </div>
            )}

            {state === "running" && (
              <div className="flex h-64 flex-col items-center justify-center gap-4 p-6">
                <div className="h-1 w-[60%] overflow-hidden rounded-full bg-[#1c2b34]">
                  <div className="h-full w-full animate-pulse rounded-full bg-[#28769D]" />
                </div>
                <p style={{ fontSize: 10, color: "#7d97a3" }}>Generating try-on...</p>
              </div>
            )}

            {state === "done" && (
              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <Code text={response} />
                <div className="relative overflow-hidden rounded-[14px]">
                  <img
                    src="/hero/try-on-result.png"
                    alt="Try-on result"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 rounded-full bg-[#111315]/85 px-3 py-1 text-[9px] font-semibold tracking-[0.12em] text-white">
                    RESULT · 0.8s
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}