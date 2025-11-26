import { getServerDictionary } from "@/lib/dictionary";
import { AboutUs_TP } from "aboutUs";
import { Lang } from "lang";
import Image from "next/image";
import { IMAGE_BLUR } from "../constant/image-blure";

const AboutUsFirstSection = async ({
  aboutUsData,
  lang,
}: {
  aboutUsData: AboutUs_TP;
  lang: Lang;
}) => {
  const locale: any = await getServerDictionary(lang);

  return (
    <div className="lg:container overflow-hidden -translate-y-[150px] lg:-translate-y-[125px]">
      <div className="relative w-full h-full mb-0 lg:mb-16 xl:mb-28 2xl:mb-40">
        <div className="ml-auto w-full lg:w-7/12 z-20 bg-subDark p-4 pb-0 py-8 md:p-12 lg:pb-8">
          <p className="text-mainColor text-base md:text-xl lg:text-2xl ">
            {locale.ourStory}
          </p>
          <p className="text-2xl md:text-4xl xl:text-[42px]  md:leading-[50px] xl:leading-[60px] my-4 md:my-6">
            {aboutUsData?.title}
          </p>
          <p
            className="text-base xl:text-xl 2xl:text-2xl leading-[30px] xl:leading-[40px] 2xl:leading-[50px] text-mainGray"
            dangerouslySetInnerHTML={{
              __html: aboutUsData?.description?.replace(/\n/g, "<br>") || "",
            }}
          />
        </div>
        <div className="w-9/12 hidden lg:block absolute top-0 translate-y-20 left-0  -z-10">
          <Image
            className="w-full h-full"
            src={aboutUsData?.image?.original_url ?? "../../public/bru0.webp"}
            alt={aboutUsData?.image?.file_name}
            width={800}
            height={600}
            quality={60}
            priority
            loading="eager"
            // placeholder="blur"
            // blurDataURL={IMAGE_BLUR}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsFirstSection;
