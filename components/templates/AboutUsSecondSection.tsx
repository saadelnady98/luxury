import { getServerDictionary } from "@/lib/dictionary";
import { getData } from "@/utils/fetchData";
import { Lang } from "lang";
import Image from "next/image";
import React from "react";
import FadeIn from "../ui/motion-elements/FadeIn";
import { IMAGE_BLUR } from "../constant/image-blure";

const AboutUsSecondSection = async ({ lang }: { lang: Lang }) => {
  const locale: any = await getServerDictionary(lang);
  const imagesData = await getData({
    endpoint: "api/about_us/why",
    lang,
  });
  return (
    <FadeIn>
      <div
        dir="ltr"
        className="text-center bg-subDark lg:bg-transparent -translate-y-[125px] lg:my-8"
      >
        <p className="text-base md:text-xl xl:text-2xl text-mainColor ">
          {locale.whyChoosingUs}
        </p>
        <p className="text-2xl lg:text-4xl xl:text-[42px] xl:leading-[60px]  w-4/5 md:w-2/3 lg:w-1/2 2xl:w-1/3 mx-auto mt-4 mb-8">
          {locale.missionToChange}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block h-[350px]">
            <Image
              className="w-full h-full object-cover"
              src={imagesData?.data?.images[0]?.original_url}
              alt={imagesData?.data?.images[0]?.file_name}
              width={600}
              height={500}
              quality={65}
              //  placeholder="blur"
              //  blurDataURL={IMAGE_BLUR}
            />
          </div>
          <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-8 lg:px-12 2xl:px-16 py-7 md:py-4 lg:py-0 border-t-[1px] border-l-[1px] border-opacity-80 border-mainColor lg:border-transparent">
            <span className="block lg:hidden absolute rounded-full left-0 -bottom-[1px] h-[1px] w-2/3 opacity-80 bg-gradient-to-r from-mainColor"></span>
            <span className="block lg:hidden absolute rounded-full -right-[1px] top-0 h-1/3 w-[1px] opacity-80 bg-gradient-to-b from-mainColor"></span>
            <p className="text-lg xl:text-2xl">{locale.bestProperty}</p>
            <p className="text-mainGray text-lg xl:text-2xl my-2 xl:my-4">
              {locale.theRelease}
            </p>
          </div>
          <div className="hidden lg:block h-[350px]">
            <Image
              className="w-full h-full object-cover"
              src={imagesData?.data?.images[1]?.original_url}
              alt={imagesData?.data?.images[1]?.file_name}
              width={600}
              height={500}
              quality={65}
              //    placeholder="blur"
              //     blurDataURL={IMAGE_BLUR}
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-8 lg:px-12 2xl:px-16 py-7 md:py-4 lg:py-0">
            <p className="text-lg xl:text-2xl">{locale.bestProperty}</p>
            <p className="text-mainGray text-lg xl:text-2xl my-2 xl:my-4">
              {locale.theRelease}
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-8 lg:px-12 2xl:px-16 py-7 md:py-4 lg:py-0 border-t-[1px] border-l-[1px] border-opacity-80 border-mainColor lg:border-transparent">
            <span className="block lg:hidden absolute rounded-full left-0 -bottom-[1px] h-[1px] w-2/3 opacity-80 bg-gradient-to-r from-mainColor"></span>
            <span className="block lg:hidden absolute rounded-full -right-[1px] top-0 h-1/3 w-[1px] opacity-80 bg-gradient-to-b from-mainColor"></span>
            <p className="text-lg xl:text-2xl">{locale.bestProperty}</p>
            <p className="text-mainGray text-lg xl:text-2xl my-2 xl:my-4">
              {locale.theRelease}
            </p>
          </div>
          <div className="hidden lg:block h-[350px]">
            <Image
              className="w-full h-full object-cover"
              src={imagesData?.data?.images[2]?.original_url}
              alt={imagesData?.data?.images[2]?.file_name}
              width={600}
              height={500}
              quality={65}
              // placeholder="blur"
              // blurDataURL={IMAGE_BLUR}
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-8 lg:px-12 2xl:px-16 py-7 md:py-4 lg:py-0">
            <p className="text-lg xl:text-2xl">{locale.bestProperty}</p>
            <p className="text-mainGray text-lg xl:text-2xl my-2 xl:my-4">
              {locale.theRelease}
            </p>
          </div>
          <div className="hidden lg:block h-[350px]">
            <Image
              className="w-full h-full object-cover"
              src={imagesData?.data?.images[3]?.original_url}
              alt={imagesData?.data?.images[3]?.file_name}
              width={600}
              height={500}
              quality={65}
              // placeholder="blur"
              //  blurDataURL={IMAGE_BLUR}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutUsSecondSection;
