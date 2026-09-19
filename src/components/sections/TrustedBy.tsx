const brands = [
  "Libas",
  "Sutra Studio",
  "Rangreza",
  "Baagh",
  "Mehrun",
  "Dastak",
  "Noorjah",
  "Silai Co.",
];

export default function TrustedBy() {
  return (
    <section className="zahi-section" style={{ paddingBlock: 56 }}>
      <div className="zahi-content">
        <p className="zahi-label" style={{ textAlign: "center" }}>
          Trusted by early stores across Pakistan
        </p>
      </div>

      <div
        className="relative mt-8 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max" style={{ animation: "zahi-marquee 30s linear infinite" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-16 pr-16">
              {brands.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-3"
                  style={{ whiteSpace: "nowrap", color: "#9BAAB1" }}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full"
                    style={{ border: "1px solid #D5E6ED", fontSize: 10, fontWeight: 700 }}
                  >
                    {b[0]}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {b}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes zahi-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}