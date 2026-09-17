import Link from "next/link";

const endpoints = [
  { m: "POST", p: "/v1/try-on", d: "Create a try-on job from a garment URL or image" },
  { m: "GET", p: "/v1/try-on/{id}", d: "Poll job status and fetch the result image" },
  { m: "GET", p: "/v1/models", d: "List all base and custom models" },
];

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ API Docs</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Build on
        <br />
        <span className="text-pewter">zahi.</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] text-pewter">
        Three endpoints. REST, JSON, API keys. Generate try-ons from your own
        backend, CMS or app.
      </p>

      <div className="mt-16 flex flex-col divide-y divide-ash rounded-[27px] bg-canvas-white dark:divide-coal-light dark:bg-coal-light">
        {endpoints.map((e) => (
          <div key={e.p} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:gap-6">
            <span className={`w-16 shrink-0 text-[12px] font-medium ${e.m === "POST" ? "text-ember-orange" : "text-pewter"}`}>
              {e.m}
            </span>
            <code className="text-[14px] font-medium">{e.p}</code>
            <span className="text-[13px] text-pewter sm:ml-auto sm:text-right">{e.d}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[27px] bg-ink-black p-8">
          <p className="text-[12px] text-canvas-white/60">cURL</p>
          <pre className="mt-4 overflow-x-auto text-[13px] leading-[1.7] text-canvas-white">
{`curl -X POST https://api.zahi.pk/v1/try-on \\
  -H "Authorization: Bearer zk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "garment_url": "https://.../blazer.jpg",
    "model_id": "base_04"
  }'`}
          </pre>
        </div>
        <div className="rounded-[27px] bg-ink-black p-8">
          <p className="text-[12px] text-canvas-white/60">Node.js</p>
          <pre className="mt-4 overflow-x-auto text-[13px] leading-[1.7] text-canvas-white">
{`const res = await fetch(
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
);`}
          </pre>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Keys in your dashboard.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Request access
        </Link>
      </div>
    </main>
  );
}