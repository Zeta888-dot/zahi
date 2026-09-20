"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Lang = "cURL" | "Node";
type RunState = "idle" | "running" | "done";

const langs: Lang[] = ["cURL", "Node"];

const LATENCY_MS = 8120;
const RUN_MS = 1600;
const RESULT_PHOTO = "/hero/try-on-result.png";
const LINE_H = 24.7;

const samples: Record<Lang, string> = {
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
  "latency_ms": ${LATENCY_MS}
}`;

const endpoints = [
  {
    method: "POST",
    path: "/v1/try-on",
    desc: "Create a try-on from a garment image and a base model.",
  },
  {
    method: "GET",
    path: "/v1/try-on/{id}",
    desc: "Fetch the status and the result of a try-on.",
  },
  {
    method: "GET",
    path: "/v1/models",
    desc: "List the base models you can generate on.",
  },
] as const;

const MAX_LINES = Math.max(...Object.values(samples).map((s) => s.split("\n").length));
const CODE_MIN = Math.ceil(MAX_LINES * LINE_H + 40);

/*
  Buttons get their size, padding and font from inline styles on purpose.
  The global button reset in globals.css is outside any cascade layer, so it
  beats Tailwind padding, margin and font-size utilities on button elements.
*/
const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  height: 28,
  padding: "0 14px",
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1,
  whiteSpace: "nowrap",
  borderRadius: 9999,
  border: 0,
  cursor: "pointer",
};

const btnSmall: CSSProperties = {
  ...btnBase,
  padding: "0 12px",
  gap: 6,
};

const btnRun: CSSProperties = {
  ...btnBase,
  width: 92,
  padding: 0,
  gap: 6,
};

/* Tiny syntax highlighter, enough for cURL, Node and JSON */
const TOKEN_RE =
  /("(?:[^"\\]|\\.)*"(?=\s*:))|("(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|(\b(?:const|await|new|return|curl|POST)\b)|(\s-[XHd]\b)|(\b\d+\b)|(\b[A-Za-z_][A-Za-z0-9_]*(?=:\s))/g;

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = new RegExp(TOKEN_RE.source, "g");
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index));

    let cls = "text-[#7FB8D6]";
    if (m[2]) cls = "text-[#E8BE8F]";
    else if (m[3]) cls = "text-[#C6A2F0]";
    else if (m[4]) cls = "text-[#9CCFB0]";
    else if (m[5]) cls = "text-[#E8BE8F]";

    out.push(
      <span key={m.index} className={cls}>
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
  }

  if (last < line.length) out.push(line.slice(last));
  return out;
}

function CodeBlock({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <pre className="m-0 overflow-x-auto bg-transparent px-4 py-5 font-mono text-[13px] leading-[1.9] text-[#C9D6DC] sm:px-5">
      <code className="block min-w-max">
        {lines.map((line, i) => (
          <span
            key={i}
            className="zahi-api-line flex"
            style={{ animationDelay: `${Math.min(i, 14) * 40}ms` }}
          >
            <span
              aria-hidden
              className="w-7 shrink-0 select-none pr-4 text-right text-[#3F5560]"
            >
              {i + 1}
            </span>
            <span className="whitespace-pre">
              {line === "" ? "\u00A0" : highlight(line)}
            </span>
          </span>
        ))}
      </code>
    </pre>
  );
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function DarkStatus({ state }: { state: RunState }) {
  const dot =
    state === "done"
      ? "bg-[#4DA878]"
      : state === "running"
        ? "animate-pulse bg-[#5AA6D0]"
        : "bg-white/25";

  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-[#C9D6DC]">
      <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${dot}`} />
      {state === "done" ? (
        <>
          <span>200 OK</span>
          <span className="text-[#7C8B93]">{LATENCY_MS} ms</span>
        </>
      ) : state === "running" ? (
        "Pending"
      ) : (
        "Idle"
      )}
    </span>
  );
}

export default function ApiSection() {
  const [lang, setLang] = useState<Lang>("cURL");
  const [runState, setRunState] = useState<RunState>("idle");
  const [prog, setProg] = useState(0);
  const [copied, setCopied] = useState(false);

  const responseRef = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>();

  // Fake request, runs while the state is "running"
  useEffect(() => {
    if (runState !== "running") return;
    const t = setTimeout(() => setProg(100), 60);
    const t2 = setTimeout(() => setRunState("done"), RUN_MS);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [runState]);

  // On mobile the response card sits below the request card, so bring it into view
  useEffect(() => {
    if (runState !== "running") return;
    if (!window.matchMedia("(max-width: 1023px)").matches) return;

    const t = setTimeout(() => {
      const el = responseRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top >= 96 && rect.bottom <= window.innerHeight - 16;
      if (visible) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });
    }, 200);

    return () => clearTimeout(t);
  }, [runState]);

  const run = () => {
    if (runState === "running") return;
    setProg(0);
    setRunState("running");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(samples[lang]);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard can be blocked, nothing to do */
    }
  };

  const caption =
    runState === "done"
      ? "Request complete. The result URL is ready to use in your storefront."
      : runState === "running"
        ? "Sending request to the try-on endpoint."
        : "Press Run to call the try-on endpoint.";

  const reveal = (delay: string) =>
    `transition-all duration-1000 ease-out motion-reduce:transition-none ${delay} ${
      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  const cardCls =
    "flex h-full flex-col overflow-hidden rounded-[28px] bg-[#0F1418] ring-1 ring-black/10 shadow-[0_40px_100px_-40px_rgba(17,19,21,0.5)]";

  return (
    <section id="api" className="zahi-section relative isolate scroll-mt-20 overflow-hidden">
      <style>{`
        @keyframes zahi-api-line {
          0% { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .zahi-api-line { animation: zahi-api-line 400ms ease both; }
        @media (prefers-reduced-motion: reduce) {
          .zahi-api-line { animation: none; }
        }
      `}</style>

      {/* Background, fades at top and bottom so it blends with neighbouring sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      >
        <div className="absolute top-[8%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),transparent)] blur-3xl" />
        <div className="absolute top-[24%] left-1/2 h-[520px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.16),transparent)] blur-3xl" />
        <div className="absolute bottom-[6%] left-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(251,146,120,0.14),transparent)] blur-3xl" />
      </div>

      <div ref={ref} className="zahi-content relative py-24 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className={`zahi-heading text-[40px] leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[68px] ${reveal(
              "delay-0"
            )}`}
          >
            <span className="block">Three endpoints.</span>
            <span className="zahi-blue block">Zero magic.</span>
          </h2>

          <p
            className={`zahi-body mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.7] lg:mt-8 lg:text-[18px] ${reveal(
              "delay-150"
            )}`}
          >
            REST, JSON, API keys. Generate try-ons from your own backend, CMS
            or app. Run the request right here to see the response.
          </p>
        </div>

        {/* Terminals */}
        <div className="mx-auto mt-14 grid max-w-[1120px] gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Request */}
          <div className={reveal("delay-300")}>
            <div className={cardCls}>
              <div className="flex h-16 items-center justify-between gap-2 border-b border-white/[0.08] px-4 sm:px-5">
                <div
                  role="tablist"
                  aria-label="Language"
                  className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] p-1"
                >
                  {langs.map((l) => {
                    const active = lang === l;
                    return (
                      <button
                        key={l}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setLang(l)}
                        style={btnBase}
                        className={`transition-colors duration-200 ${
                          active
                            ? "bg-[#28769D] text-white"
                            : "bg-transparent text-[#7C8B93] hover:text-white"
                        }`}
                      >
                        {l}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copy}
                    aria-label="Copy code"
                    style={btnSmall}
                    className="bg-white/[0.08] text-[#C9D6DC] transition-colors duration-200 hover:bg-white/[0.14] hover:text-white"
                  >
                    {copied ? (
                      <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path
                          d="M2.5 6.2L5 8.7L9.5 3.7"
                          stroke="#7FD1A0"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <rect x="9" y="9" width="11" height="11" rx="2.5" stroke="currentColor" strokeWidth="2" />
                        <path
                          d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    <span className="hidden sm:inline" aria-live="polite">
                      {copied ? "Copied" : "Copy"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={run}
                    aria-busy={runState === "running"}
                    style={btnRun}
                    className={`text-white transition-colors duration-200 ${
                      runState === "running"
                        ? "cursor-wait bg-[#4DA878] opacity-80"
                        : "bg-[#4DA878] hover:bg-[#3E9868]"
                    }`}
                  >
                    {runState === "running" ? (
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                        <path d="M2 1.2L8.6 5L2 8.8V1.2Z" fill="currentColor" />
                      </svg>
                    )}
                    {runState === "running" ? "Running" : runState === "done" ? "Rerun" : "Run"}
                  </button>
                </div>
              </div>

              {/* Same height for every language, so the section never jumps */}
              <div key={lang} className="flex-1" style={{ minHeight: CODE_MIN }}>
                <CodeBlock text={samples[lang]} />
              </div>
            </div>
          </div>

          {/* Response */}
          <div ref={responseRef} className={reveal("delay-500")}>
            <div className={cardCls}>
              <div className="flex h-16 items-center justify-between gap-3 border-b border-white/[0.08] px-4 sm:px-5">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-[#7C8B93]">
                  RESPONSE
                </span>
                <DarkStatus state={runState} />
              </div>

              <div className="flex flex-1 flex-col" style={{ minHeight: CODE_MIN }}>
                {runState === "idle" && (
                  <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.06] text-[#7C8B93]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M5 7l5 5-5 5M12 18h7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="mt-5 text-[14px] font-semibold text-white">No request sent yet</p>
                    <p className="mt-1.5 text-[12px] leading-[1.6] text-[#7C8B93]">
                      Press Run to call the try-on endpoint.
                    </p>
                  </div>
                )}

                {runState === "running" && (
                  <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                    <div className="h-1 w-[60%] max-w-[260px] overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#5AA6D0]"
                        style={{
                          width: `${prog}%`,
                          transition: `width ${RUN_MS - 100}ms linear`,
                        }}
                      />
                    </div>
                    <p className="mt-5 text-[13px] text-[#9FB0B8]">Generating try-on</p>
                  </div>
                )}

                {runState === "done" && (
                  <div className="flex flex-1 flex-col">
                    <CodeBlock text={response} />

                    <div className="mt-auto flex items-center gap-5 border-t border-white/[0.08] px-4 py-5 sm:px-5">
                      <div className="relative h-[128px] w-[96px] shrink-0 overflow-hidden rounded-[14px] bg-white/[0.06] ring-1 ring-white/10">
                        <Image
                          src={RESULT_PHOTO}
                          alt="Try-on result"
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-white">Result image</p>
                        <p className="mt-1 truncate font-mono text-[12px] text-[#7C8B93]">
                          cdn.zahi.pk/r/9f2c.png
                        </p>
                        <p className="mt-3 text-[12px] text-[#9CCFB0]">
                          Generated in {(LATENCY_MS / 1000).toFixed(1)}s
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <p
          className={`mt-8 text-center text-[13px] text-[#718087] ${reveal("delay-700")}`}
          aria-live="polite"
        >
          {caption}
        </p>

        {/* Endpoints */}
        <div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-3 sm:gap-6">
          {endpoints.map((e, i) => (
            <div
              key={e.path}
              className={`rounded-[22px] bg-white/70 p-6 ring-1 ring-black/[0.06] backdrop-blur ${reveal(
                i === 0 ? "delay-700" : i === 1 ? "delay-1000" : "delay-1000"
              )}`}
            >
              <span
                className={`inline-flex h-6 items-center rounded-full px-3 text-[11px] font-semibold tracking-[0.08em] ${
                  e.method === "POST"
                    ? "bg-[#E7F5EE] text-[#2F7D57]"
                    : "bg-[#E6F1F7] text-[#28769D]"
                }`}
              >
                {e.method}
              </span>
              <p className="mt-4 font-mono text-[14px] font-medium text-[#111315]">{e.path}</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#718087]">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}