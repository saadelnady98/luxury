import { getServerDictionary } from "@/lib/dictionary";
import SectionHeader from "../ui/SectionHeader";
import SectionsSlider from "../ui/SectionsSlider";
type DesignSectionProps_TP = {
  lang: "ar" | "en" | "ru";
};
const ServicesSection = async ({ lang }: DesignSectionProps_TP) => {
  const locale: any = await getServerDictionary(lang);

  return (
    <div className="container my-28">
      <SectionHeader
        littelText={locale?.coveringDevelopers}
        title={locale?.ourServices}
      />
      <SectionsSlider />
    </div>
  );
};

export default ServicesSection;
