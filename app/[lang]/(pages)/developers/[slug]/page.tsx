import { IMAGE_BLUR } from "@/components/constant/image-blure";
import SimilarProperties from "@/components/templates/SimilarProperties";
import ProjectCard from "@/components/ui/ProjectCard";
import { getServerDictionary } from "@/lib/dictionary";
import { getData } from "@/utils/fetchData";
import { Metadata } from "next";
import Image from "next/image";
import { Product_TP } from "product";

type CommunityProps_TP = {
  params: {
    lang: "ar" | "en" | "ru";
    slug: string;
  };
};

// Shimmer CSS class
const shimmer = `relative overflow-hidden bg-gray-300/30 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent`;

export async function generateMetadata({ params: { lang, slug } }: CommunityProps_TP): Promise<Metadata> {
  const developerData = await getData({
    endpoint: `api/developer/${slug}`,
    lang,
  });
  return {
    title: ` ${developerData?.data?.name} | Luxurylivinhomes`,
    description: developerData?.data?.description,
  };
}

const Developers = async ({ params: { lang, slug } }: CommunityProps_TP) => {
  const locale: any = await getServerDictionary(lang);

  // fetch developer & products
  const [developerData, productsData] = await Promise.all([
    getData({ endpoint: `api/developer/${slug}`, lang }),
    getData({ endpoint: `api/product?developer_slug=${slug}`, lang }),
  ]);

  return (
    <div className="container overflow-hidden my-4 md:my-6 lg:my-10">
      {/* Developer Section */}
      <div className="flex flex-col justify-center items-center mb-4 md:mb-10 bg-mainGray bg-opacity-20">
        {developerData?.data?.image?.original_url ? (
          <Image
            className="w-20 md:w-40 p-2 md:p-4 mt-4 md:mt-6 object-cover"
            src={developerData?.data?.image?.original_url}
            alt={developerData?.data?.name}
            quality={70}
            priority
            width={600}
            height={500}
          />
        ) : (
          <div className={`w-40 h-40 md:w-80 md:h-80 ${shimmer} rounded-md mt-4 md:mt-6`}></div>
        )}

        {developerData?.data?.description ? (
          <p className="text-mainGray px-16 text-center my-4 lg:my-10">
            {developerData?.data?.description}
          </p>
        ) : (
          <div className="w-full max-w-3xl h-6 md:h-8 my-4 lg:my-10 mx-auto rounded-md shimmer"></div>
        )}
      </div>

    <SimilarProperties products={productsData?.data} isLoading={!productsData?.data} />

    </div>
  );
};

export default Developers;
