import ApiSection from "@/components/sections/ApiSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PluginsSection from "@/components/sections/PluginsSection";
import PricingSection from "@/components/sections/PricingSection";
import StartSection from "@/components/sections/StartSection";
import TrustedBy from "@/components/sections/TrustedBy";
import WidgetSection from "@/components/sections/WidgetSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <TrustedBy />

        <PluginsSection />

        <WidgetSection />

        <ApiSection />

        <HowItWorks />

        <PricingSection />

        <FaqSection />

        <StartSection />
      </main>

      <Footer />
    </>
  );
}