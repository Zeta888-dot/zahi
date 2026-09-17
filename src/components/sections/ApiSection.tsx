import Link from "next/link";

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

const codeLines = [
  <><span className="text-white/25">{"{"}</span></>,
  <>
    <span className="text-[#ff6900]">"model"</span>
    <span className="text-white/30">: </span>
    <span className="text-white/60">"fashn-v1.6"</span>
    <span className="text-white/25">,</span>
  </>,
  <>
    <span className="text-[#ff6900]">"model_image"</span>
    <span className="text-white/30">: </span>
    <span className="text-white/60">"https://..."</span>
    <span className="text-white/25">,</span>
  </>,
  <>
    <span className="text-[#ff6900]">"garment_image"</span>
    <span className="text-white/30">: </span>
    <span className="text-white/60">"https://..."</span>
    <span className="text-white/25">,</span>
  </>,
  <>
    <span className="text-[#ff6900]">"category"</span>
    <span className="text-white/30">: </span>
    <span className="text-white/60">"tops"</span>
  </>,
  <><span className="text-white/25">{"}"}</span></>,
];

function EndpointRow({
  method,
  path,
  description,
}: {
  method: string;
  path: string;
  description: string;
}) {
  return (
    <div className="group grid gap-4 border-b border-white/[0.07] py-5 sm:grid-cols-[72px_1fr_auto] sm:items-center">
      <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#ff6900]">
        {method}
      </span>

      <div>
        <code className="text-[11px] text-white/65">{path}</code>

        <p className="mt-1.5 text-[9px] leading-[1.5] text-white/20 sm:hidden">
          {description}
        </p>
      </div>

      <span className="hidden text-[9px] text-white/20 sm:block">
        {description}
      </span>
    </div>
  );
}

export default function ApiSection() {
  return (
    <section id="api" className="zahi-section">
      <div className="relative overflow-hidden">
        <div className="zahi-glow right-[-280px] top-[20%] h-[560px] w-[560px] opacity-35" />

        <div className="zahi-container zahi-section-inner relative">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="zahi-label">Developer API</div>

              <h2 className="mt-7 max-w-[560px] text-[43px] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[59px]">
                Your product.
                <br />
                Your stack.
                <br />
                <span className="zahi-orange">Our AI.</span>
              </h2>

              <p className="mt-7 max-w-[450px] text-[14px] leading-[1.7] text-[var(--zahi-text-soft)]">
                Build virtual try-on directly into your own product, app, or
                commerce workflow with a simple API-first architecture.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="#start" className="zahi-button-primary">
                  Start building
                  <ArrowIcon />
                </Link>

                <Link href="#faq" className="zahi-button-secondary">
                  Read FAQ
                </Link>
              </div>

              <div className="mt-12 grid max-w-[450px] grid-cols-3 border-t border-white/[0.08]">
                <div className="border-r border-white/[0.08] py-5 pr-4">
                  <p className="text-[20px] font-medium tracking-[-0.04em]">
                    API
                  </p>
                  <p className="mt-2 text-[8px] uppercase tracking-[0.1em] text-white/20">
                    First
                  </p>
                </div>

                <div className="border-r border-white/[0.08] px-4 py-5">
                  <p className="text-[20px] font-medium tracking-[-0.04em]">
                    JSON
                  </p>
                  <p className="mt-2 text-[8px] uppercase tracking-[0.1em] text-white/20">
                    Native
                  </p>
                </div>

                <div className="py-5 pl-4">
                  <p className="text-[20px] font-medium tracking-[-0.04em]">
                    AI
                  </p>
                  <p className="mt-2 text-[8px] uppercase tracking-[0.1em] text-white/20">
                    Powered
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="zahi-terminal">
                <div className="zahi-terminal-bar">
                  <div className="zahi-terminal-dots">
                    <span className="bg-[#ff5f57]" />
                    <span className="bg-[#febc2e]" />
                    <span className="bg-[#28c840]" />
                  </div>

                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">
                    request.json
                  </span>

                  <span className="rounded-md border border-white/[0.07] px-2 py-1 text-[7px] uppercase tracking-[0.08em] text-white/20">
                    POST
                  </span>
                </div>

                <div className="border-b border-white/[0.07] px-5 py-4 sm:px-6">
                  <code className="text-[10px] text-white/35">
                    /api/v1/tryon
                  </code>
                </div>

                <div className="zahi-terminal-code">
                  <div className="mb-4 text-[9px] uppercase tracking-[0.12em] text-white/15">
                    Body
                  </div>

                  <div className="space-y-1">
                    {codeLines.map((line, index) => (
                      <div key={index} className="min-h-[20px]">
                        <span className="mr-5 inline-block w-3 select-none text-right text-white/10">
                          {index + 1}
                        </span>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid border-t border-white/[0.07] sm:grid-cols-3">
                  <div className="border-b border-white/[0.07] px-5 py-4 sm:border-b-0 sm:border-r">
                    <p className="text-[8px] uppercase tracking-[0.1em] text-white/15">
                      Input
                    </p>
                    <p className="mt-2 text-[10px] text-white/45">
                      Images
                    </p>
                  </div>

                  <div className="border-b border-white/[0.07] px-5 py-4 sm:border-b-0 sm:border-r">
                    <p className="text-[8px] uppercase tracking-[0.1em] text-white/15">
                      Processing
                    </p>
                    <p className="mt-2 text-[10px] text-white/45">
                      FASHN AI
                    </p>
                  </div>

                  <div className="px-5 py-4">
                    <p className="text-[8px] uppercase tracking-[0.1em] text-white/15">
                      Output
                    </p>
                    <p className="mt-2 text-[10px] text-[#ff6900]">
                      Image URL
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-1 flex items-center justify-between">
                  <span className="zahi-label">Core endpoints</span>

                  <span className="text-[8px] uppercase tracking-[0.1em] text-white/15">
                    v1
                  </span>
                </div>

                <div className="mt-3 border-t border-white/[0.07]">
                  <EndpointRow
                    method="POST"
                    path="/api/v1/tryon"
                    description="Create a generation"
                  />

                  <EndpointRow
                    method="GET"
                    path="/api/v1/tryon/:id"
                    description="Check generation"
                  />

                  <EndpointRow
                    method="GET"
                    path="/api/v1/models"
                    description="List available models"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}