import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PluginsSection from "@/components/sections/PluginsSection";
import WidgetSection from "@/components/sections/WidgetSection";
import ApiSection from "@/components/sections/ApiSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import StartSection from "@/components/sections/StartSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import TryOnDemo from "@/components/sections/TryOnDemo";

const tags = ["Try-On", "PDPs", "Model shots", "Widget", "Plugins", "API"];

export default async function Home() {
  const heroImages = await client.fetch(
    `*[_type == "heroImage"] | order(_createdAt asc){ title, alt, image }`
  );

  return (
    <main className="px-5">
      <section className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center pt-24 pb-14 md:h-screen md:justify-end md:pt-0">
        <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex">
          {tags.map((t, i) => (
            <span
              key={t}
              className="rounded-full border border-ash bg-canvas-white px-4 py-2 text-[13px] text-pewter animate-[float-y_5s_ease-in-out_infinite] dark:border-coal-light dark:bg-coal-light"
              style={{ marginRight: `${(i % 3) * 20}px`, animationDelay: `${i * 0.4}s` }}
            >
              {t}
            </span>
          ))}
        </div>

        {heroImages.length >= 2 && (
          <div className="relative mx-auto mb-12 w-full max-w-[320px] md:absolute md:top-20 md:right-0 md:mb-0 md:w-[380px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[27px]">
              <img
                src={urlFor(heroImages[0].image).width(800).height(1000).url()}
                alt={heroImages[0].alt || "garment"}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 animate-[wipe_6s_ease-in-out_infinite_alternate]">
                <img
                  src={urlFor(heroImages[1].image).width(800).height(1000).url()}
                  alt={heroImages[1].alt || "try-on"}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute top-0 bottom-0 w-[2px] bg-canvas-white animate-[wipe-line_6s_ease-in-out_infinite_alternate]" />
              <span className="absolute top-4 left-4 rounded-full bg-ink-black/60 px-3 py-1 text-[11px] text-canvas-white backdrop-blur">
                garment
              </span>
              <span className="absolute top-4 right-4 rounded-full bg-ember-orange px-3 py-1 text-[11px] font-medium text-ink-black">
                try-on · 0.8s
              </span>
            </div>
          </div>
        )}

        <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[100px]">
          <span className="block overflow-hidden">
            <span className="block animate-[line-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">Your store,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-pewter animate-[line-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.12s_both]">instantly try-on.</span>
          </span>
        </h1>
        <div className="mt-10 flex items-center justify-end text-[11px] text-ink-black dark:text-canvas-white">
          <span>SCROLL DOWN</span>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1280px] gap-20 pt-32 pb-40">
        <Sidebar />
        <div className="min-w-0 flex-1 space-y-32">
          <Reveal>
            <section id="try-on">
              <p className="mb-3 text-[12px] font-medium">↑ AI Virtual Try-On</p>
              <h2 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">
                Try clothes on,
                <br />
                <span className="text-ember-orange">before</span> you buy.
              </h2>
              <p className="mt-5 max-w-[520px] text-[17px] text-pewter">
                Paste a product link or upload a garment photo. Pick a model.
                Get photorealistic try-on in under a second, with fabric, color
                and fit preserved.
              </p>
             <TryOnDemo />
            </section>
          </Reveal>

          <Reveal><PluginsSection /></Reveal>
          <Reveal><WidgetSection /></Reveal>
          <Reveal><ApiSection /></Reveal>
          <Reveal><HowItWorks /></Reveal>
          <Reveal><PricingSection /></Reveal>
          <Reveal><FaqSection /></Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px]">
        <Reveal><StartSection /></Reveal>
      </div>

      <Footer />
    </main>
  );
}