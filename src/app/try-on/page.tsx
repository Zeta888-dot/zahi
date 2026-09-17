import Link from "next/link";
import TryOnDemo from "@/components/sections/TryOnDemo";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const steps = [
  { n: "01", t: "Upload or paste", d: "Product photo ya store link. Hum garment ko automatically isolate kar lete hain." },
  { n: "02", t: "Pick a model", d: "40+ base models, ya apni brand ki fits pe custom model train karo." },
  { n: "03", t: "Generate", d: "Under a second mein photorealistic try-on. Fabric, color aur fit preserved." },
];

export default async function TryOnPage() {
  const heroImages = await client.fetch(
    `*[_type == "heroImage"] | order(_createdAt asc){ title, alt, image }`
  );

  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ AI Virtual Try-On</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        The try-on
        <br />
        <span className="text-pewter">engine.</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] text-pewter">
        Ek garment, har model pe. Studio shoots ke baghair catalog grade
        imagery, aapke browser se seedha.
      </p>

      {heroImages.length >= 2 && (
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {heroImages.slice(0, 2).map((img: any, i: number) => (
            <div key={img.title} className="relative overflow-hidden rounded-[27px]">
              <img
                src={urlFor(img.image).width(900).height(1100).url()}
                alt={img.alt || img.title}
                className="aspect-[4/5] w-full object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-ink-black/60 px-3 py-1 text-[11px] text-canvas-white backdrop-blur">
                {i === 0 ? "garment in" : "try-on out"}
              </span>
            </div>
          ))}
        </div>
      )}

      <TryOnDemo />

      <div className="mt-24 grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="border-t border-ash pt-6 dark:border-coal-light">
            <p className="text-[12px] text-ember-orange">{s.n}</p>
            <p className="mt-3 text-[20px] font-medium tracking-[-0.01em]">{s.t}</p>
            <p className="mt-3 text-[14px] leading-[1.6] text-pewter">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Apna pehla try-on 30 second mein.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Start free
        </Link>
      </div>
    </main>
  );
}