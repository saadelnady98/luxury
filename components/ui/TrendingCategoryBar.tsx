"use client";
import { useEffect, useState } from "react";
import { getData } from "@/utils/fetchData";
import useCurrentLang from "../hooks/useCurrentLang";

type HighLightedType = {
  data: {
    slug: string;
    id: string;
    name: string;
  }[];
};
type TrendingCategoryBar_TP = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const TrendingCategoryBar = ({ setCategory }: TrendingCategoryBar_TP) => {
  const [highLighted, setHighLighted] = useState<HighLightedType | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const { lang } = useCurrentLang();
  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const highLightedData: HighLightedType = await getData({
          endpoint: "api/type?status=1",
          lang,
        });
        setHighLighted(highLightedData);
      } catch (error) {
        console.error("Error fetching trends:", error);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div dir="ltr" className="mx-auto flex justify-center bg-subDark whitespace-nowrap overflow-scroll md:overflow-hidden w-full md:w-fit">
      {highLighted?.data?.map((type, index) => (
        <button
          onClick={() => {
            setCategory(type.id);
            setActiveIndex(index);
          }}
          key={type.slug}
          className={`${
            activeIndex == index ? "text-mainColor" : "text-mainGray"
          } capitalize text-xs sm:text-base lg:text-xl border-r-[1px] high-light border-mainGray border-opacity-50 my-4 md:my-6 px-4 lg:px-10 py-2 lg:py-2 hover:text-mainColor duration-200`}>
          {type.name}
        </button>
      ))}
    </div>
  );
};

export default TrendingCategoryBar;
