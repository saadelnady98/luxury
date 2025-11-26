import { getServerDictionary } from "@/lib/dictionary";
import SectionHeader from "../ui/SectionHeader";
import CommunitesSectionScroll from "../ui/CommunitesSectionScroll";

type CommunitesSection_TP = {
  lang: "ar" | "en" | "ru";
};
const CommunitesSection = async ({ lang }: CommunitesSection_TP) => {
  const locale: any = await getServerDictionary(lang);

  return (
    <div className="relative lg:my-24 overflow-hidden">
      <SectionHeader
        littelText={locale?.everyCommuniy}
        title={locale?.ourCommunites}
      />
      <CommunitesSectionScroll />
    </div>
  );
};

export default CommunitesSection;
