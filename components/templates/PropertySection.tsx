import { getData } from "@/utils/fetchData";
import AnimationSection from "../ui/AnimationSection";
type lang_TP = {
  lang: "ar" | "en" | "ru";
};
const PropertySection = async ({ lang }: lang_TP) => {
  const statisticsTitle = await getData({
    endpoint: "api/setting/statistics_title",
    lang,
  });

  const cardsData = await getData({
    endpoint: "api/statistics/card",
    lang,
  });
  const tableTitle = await getData({
    endpoint: "api/setting/table_title",
  });

  const tableHeader = await getData({
    endpoint: "api/statistics/header",
    lang,
  });
  const tableStatistics = await getData({
    endpoint: "api/statistics",
    lang,
  });

  return (
    <div className="bg-black max-h-[850px] overflow-scroll hide_scroll">
      <AnimationSection
        statisticsTitle={statisticsTitle}
        cardsData={cardsData}
        tableHeader={tableHeader}
        tableStatistics={tableStatistics}
        tableTitle={tableTitle}
      />
    </div>
  );
};

export default PropertySection;
