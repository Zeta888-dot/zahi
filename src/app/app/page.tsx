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
import TryOnDemo from "@/components/sections/TryOnDemo";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const heroImages = await client.fetch(
    `*[_type == "heroImage"] | order(_createdAt asc){ title, alt, image }`
  );

  return (
    <main className="px-5">
      {/* HERO */}
      <section className="relative mx-auto flex min-h-[100svh] max-w-[1560px] flex-col justify-end pb-8 pt-32 sm:pb-10 md:pb-12">
        {/* Hero image */}
        {heroImages.length >= 2 && (
          <>
            {/* Desktop */}
            <div className="absolute right-0 top-[18%] hidden w-[300px] lg:block xl:w-[360px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-ash dark:bg-coal-light">
                <img
                  src={urlFor(heroImages[0].image)
                    .width(800)
                    .height(1000)
                    .url()}
                  alt={heroImages[0].alt || "garment"}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 animate-[wipe_6s_ease-in-out_infinite_alternate]">
                  <img
                    src={urlFor(heroImages[1].image)
                      .width(800)
                      .height(1000)
                      .url()}
                    alt={heroImages[1].alt || "try-on"}
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-ink-black/60 px-3 py-1.5 text-[10px] text-canvas-white backdrop-blur">
                  garment
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-ember-orange px-3 py-1.5 text-[10px] font-medium text-ink-black">
                  try-on · 0.8s
                </span>
              </div>
            </div>

            {/* Mobile */}
            <div className="relative mx-auto mb-12 w-full max-w-[340px] lg:hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-ash dark:bg-coal-light">
                <img
                  src={urlFor(heroImages[0].image)
                    .width(800)
                    .height(1000)
                    .url()}
                  alt={heroImages[0].alt || "garment"}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 animate-[wipe_6s_ease-in-out_infinite_alternate]">
                  <img
                    src={urlFor(heroImages[1].image)
                      .width(800)
                      .height(1000)
                      .url()}
                    alt={heroImages[1].alt || "try-on"}
                    className="h-full w-full object-cover"
                  />
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-ink-black/60 px-3 py-1.5 text-[10px] text-canvas-white backdrop-blur">
                  garment
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-ember-orange px-3 py-1.5 text-[10px] font-medium text-ink-black">
                  try-on · 0.8s
                </span>
              </div>
            </div>
          </>
        )}

        {/* Hero content */}
        <div className="relative z-10 max-w-[1080px]">
          <h1 className="text-[56px] font-medium leading-[0.9] tracking-[-0.055em] sm:text-[76px] md:text-[92px] lg:text-[112px] xl:text-[124px]">
            <span className="block overflow-hidden">
              <span className="block animate-[line-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">
                Your store,
              </span>
            </span>

            <span className="block overflow-hidden">
              <span className="block text-pewter animate-[line-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.12s_both]">
                instantly try-on.
              </span>
            </span>
          </h1>
        </div>

        {/* Hero bottom */}
        <div className="relative z-10 mt-10 flex flex-col gap-6 sm:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[390px] text-[15px] leading-[1.4] text-pewter sm:text-[16px]">
            Turn any product photo into a photorealistic try-on experience.
            No studio. No reshoots. Just upload, try on, and ship.
          </p>

          <div className="text-[11px] font-medium tracking-[0.02em] text-ink-black dark:text-canvas-white">
            SCROLL DOWN
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto flex max-w-[1560px] gap-16 pt-28 pb-32 lg:gap-20 lg:pt-36 lg:pb-40">
        {/* Sidebar */}
        <Sidebar />

        {/* Sections */}
        <div className="min-w-0 flex-1 space-y-28 sm:space-y-32 lg:space-y-40">
          {/* Virtual Try-On */}
          <Reveal>
            <section id="try-on">
              <p className="mb-4 text-[12px] font-medium">
                AI Virtual Try-On
              </p>

              <h2 className="max-w-[760px] text-[43px] leading-[1.02] tracking-[-0.035em] sm:text-[50px] md:text-[58px]">
                Try clothes on,
                <br />
                <span className="text-ember-orange">before</span> you buy.
              </h2>

              <p className="mt-6 max-w-[560px] text-[16px] leading-[1.45] text-pewter sm:text-[17px]">
                Paste a product link or upload a garment photo. Pick a model.
                Get photorealistic try-on with fabric, color and fit preserved.
              </p>

              <div className="mt-12">
                <TryOnDemo />
              </div>
            </section>
          </Reveal>

          {/* Plugins */}
          <Reveal>
            <PluginsSection />
          </Reveal>

          {/* Widget */}
          <Reveal>
            <WidgetSection />
          </Reveal>

          {/* API */}
          <Reveal>
            <ApiSection />
          </Reveal>

          {/* How it works */}
          <Reveal>
            <HowItWorks />
          </Reveal>

          {/* Pricing */}
          <Reveal>
            <PricingSection />
          </Reveal>

          {/* FAQ */}
          <Reveal>
            <FaqSection />
          </Reveal>
        </div>
      </div>

      {/* Start */}
      <div className="mx-auto max-w-[1560px]">
        <Reveal>
          <StartSection />
        </Reveal>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}