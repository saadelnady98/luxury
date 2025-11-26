import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import Image from "next/image";
import React from "react";
import FadeIn from "../ui/motion-elements/FadeIn";
import { IMAGE_BLUR } from "../constant/image-blure";
type Lang_TP = {
  lang: "ar" | "en" | "ru";
};
const AboutUsSection = async ({ lang }: Lang_TP) => {
  const locale: any = await getServerDictionary(lang);
  const aboutUsData = await getData({
    endpoint: "api/about_us/about",
    lang,
  });

  return (
    <section className="container relative pb-20">
      <FadeIn>
        <div className="relative border-r border-mainColor border-opacity-80">
          <span className="absolute block -right-[1px] -top-[1px] h-[1px] w-full opacity-80  bg-gradient-to-r from-transparent to-mainColor"></span>
          <span className="absolute block -right-[1px] z-20 -bottom-[1px] h-[1px] w-1/2 opacity-80  bg-gradient-to-r from-transparent to-mainColor"></span>
          <Image
            className="min-h-[320px] h-[340px] lg:h-[490px] w-full object-cover"
            src={images.aboutUsSection}
            alt="about us background"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR}
            width={1024}
            height={1080}
          />
        </div>
        <div className="absolute top-[40%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <p className="text-mainGray text-sm md:text-base">
            {locale?.moreAboutLuxury}
          </p>
          <p className="text-2xl md:text-4xl xl:text-[50px] text-mainColor font-bold uppercase pt-1 lg:pt-4">
            {aboutUsData?.data?.title}
          </p>
          <p className="bg-gradient-to-b from-white from-[5%] to-[#A96D57E5] text-transparent bg-clip-text text-sm sm:text-base lg:text-xl xl:text-2xl px-8 lg:px-32 lg:pt-8 py-5 lg:pb-12 leading-4 sm:leading-6 lg:leading-8 xl:leading-[48px]">
            {aboutUsData?.data?.description}
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default AboutUsSection;
