import CommunityCard from "@/components/templates/community-card/CommunityCard";
import Header from "@/components/templates/Header";
import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { Community_TP } from "community";
import { Metadata } from "next";
type Communities_TP = {
  data: Community_TP[];
};
type CommunitiesProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
  };
};
export const metadata: Metadata = {
  title: "Communities | Luxurylivinhomes",
  description:
    "Explore our diverse range of real estate properties, from luxurious condominiums to spacious family homes and thriving commercial spaces. Discover meticulously planned neighborhoods designed for modern living, with amenities that cater to every lifestyle. Find your perfect property in prime locations, where convenience meets sophistication, and make your dream of owning a home a reality with us",
};
const communities = async ({ params: { lang } }: CommunitiesProps_TP) => {
  const communitiesData: Communities_TP = await getData({
    endpoint: `api/community`,
    lang,
  });
  const locale: any = await getServerDictionary(lang);

  return (
    <>
      <Header
        image={images.header}
        subTitle="all_communities"
        title={locale.home}
        mainTitle={locale.all_communities}
      />
      <div className="lg:px-10 px-4 -translate-y-16">
        <div className="grid lg:grid-cols-12 justify-center items-center gap-8">
          {communitiesData?.data?.map((community, index) => (
            <CommunityCard
              lang={lang}
              community={{ ...community, index }}
              key={community?.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default communities;
