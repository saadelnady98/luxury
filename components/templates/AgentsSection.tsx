import { getServerDictionary } from "@/lib/dictionary";
import AgentSlider from "../ui/AgentSlider";
import SectionHeader from "../ui/SectionHeader";
import FadeY from "../ui/motion-elements/FadeY";
type AgentSectionProps_TP = {
  lang: "ar" | "en" | "ru";
};
const AgentsSection = async ({ lang }: AgentSectionProps_TP) => {
  const locale: any = await getServerDictionary(lang);

  return (
    <FadeY dir="bottom" className="container mt-16 lg:my-20">
      <div className="md:px-28 lg:px-40 xl:px-64">
        <SectionHeader
          littelText={locale?.coveringDevelopers}
          title={locale?.agents}
        />
      </div>
      <AgentSlider />
    </FadeY>
  );
};

export default AgentsSection;
