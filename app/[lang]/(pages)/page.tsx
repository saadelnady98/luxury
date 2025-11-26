import AboutUsSection from "@/components/templates/AboutUsSection";
import AgentsSection from "@/components/templates/AgentsSection";
import BrochureSection from "@/components/templates/BrochureSection";
import CommunitesSection from "@/components/templates/CommunitesSection";
import CryptoSection from "@/components/templates/CryptoSection";
import DevelopersSection from "@/components/templates/DevelopersSection";
import ProjectSection from "@/components/templates/ProjectSection";
import PropertySection from "@/components/templates/PropertySection";
import RegisterInterestSection from "@/components/templates/RegisterInterestSection";
import ServicesSection from "@/components/templates/ServicesSection";
import DesignSection from "@/components/ui/DesignSection";
import ScrollHome from "@/components/ui/ScrollHome";
// import SubpropertySection from "@/components/templates/SubpropertySection";
import { Metadata } from "next";
type HomeProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};
export const metadata: Metadata = {
  title:
    "Luxurylivinhomes | Premier Real Estate in the UAE | Find Your Dream Property",
  description: `Explore the finest real estate properties in the UAE with Luxurylivinhomes. Discover luxurious villas, elegant apartments, and prime commercial spaces across the Emirates. Start your property search today and find your perfect home or investment opportunity`,
  keywords: `Real estate UAE, luxury properties, villas for sale, apartments in UAE, commercial spaces, property investment, Luxurylivinhomes`,
};
const main = ({ params: { lang } }: HomeProps_TP) => {
  return (
    <div className="wrapper">
      <ScrollHome lang={lang} />
      <DesignSection lang={lang} />
      <ProjectSection lang={lang} />
      <CommunitesSection lang={lang} />
      <ServicesSection lang={lang} />
      <BrochureSection />
      {/* <PropertySection lang={lang} /> */}
      <CryptoSection lang={lang} />
      <DevelopersSection lang={lang} />
      <AgentsSection lang={lang} />
      <AboutUsSection lang={lang} />
      <RegisterInterestSection />
    </div>
  );
};

export default main;
