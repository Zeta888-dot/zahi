const LABEL = "Trusted by early stores across Pakistan";

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

/*
  Each copy of the row holds the brand list twice, so one copy is wider than
  most screens. Two copies with a -50% shift make a seamless loop.
*/
const rowBrands = [...brands, ...brands];

export default function TrustedBy() {
  return (
    <section aria-label={LABEL} className="zahi-section py-14 lg:py-20">
      <style>{`
        @keyframes zahi-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .zahi-marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
        .zahi-marquee-track {
          animation: zahi-marquee 70s linear infinite;
        }
        .zahi-marquee:hover .zahi-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .zahi-marquee {
            -webkit-mask-image: none;
            mask-image: none;
            padding-inline: 24px;
          }
          .zahi-marquee-track {
            animation: none;
            width: auto;
            justify-content: center;
          }
          .zahi-marquee-copy {
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 24px;
            padding-right: 0;
          }
          .zahi-marquee-copy:last-child,
          .zahi-marquee-dup {
            display: none;
          }
        }
      `}</style>

      <p className="mx-auto max-w-[520px] px-6 text-center text-[12px] font-semibold tracking-[0.14em] text-[#718087] uppercase">
        {LABEL}
      </p>

      <div className="zahi-marquee mt-10">
        <div className="zahi-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="zahi-marquee-copy flex shrink-0 items-center gap-16 pr-16"
            >
              {rowBrands.map((b, i) => (
                <li
                  key={`${copy}-${i}`}
                  className={`flex items-center gap-3 whitespace-nowrap text-[#9BAAB1] transition-colors duration-300 hover:text-[#111315] ${
                    i >= brands.length ? "zahi-marquee-dup" : ""
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-[12px] font-bold ring-1 ring-[#D5E6ED]">
                    {b[0]}
                  </span>
                  <span className="text-[18px] font-semibold tracking-[-0.02em]">{b}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}