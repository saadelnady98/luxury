import { getServerDictionary } from "@/lib/dictionary";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import Image from "next/image";
import React from "react";
import FadeIn from "../ui/motion-elements/FadeIn";
// import { IMAGE_BLUR } from "../constant/image-blure";

const AboutUsThirdSection = async ({ lang }: any) => {
  const locale: any = await getServerDictionary(lang);
  const benefotsData = await getData({
    endpoint: "api/about_us/benefits",
    lang,
  });
  return (
    <FadeIn className="relative max-h-[450px] min-h-[420px] overflow-hidden">
      <div className="max-h-[450px] min-h-[330px] ">
        <Image
          className="object-cover overlay w-full h-full"
          src={images.Benfits}
          alt="benefits images"
          width={1024}
          height={1080}
          loading="lazy"
          // placeholder="blur"
          // blurDataURL={IMAGE_BLUR}
        />
      </div>
      <span className="absolute w-full h-full top-0 left-0  bg-gradient-to-t from-black via-black/75 to-transparent"></span>
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:w-2/3">
        <p className=" text-mainColor text-base lg:text-2xl">
          {locale.benefits}
        </p>
        <p className="relative  text-2xl lg:text-[42px] lg:leading-[60px] my-2 md:my-4">
          {benefotsData?.data?.title}
          <span className="absolute -bottom-[1px] lg:bottom-0 left-1/2 -translate-x-1/2 w-[150px] lg:w-[250px] h-2 lg:h-3 bg-mainColor -z-10"></span>
        </p>
        <p className="text-mainGray text-base lg:text-2xl xl:leading-[50px] line-clamp-5 md:leading-[30px]">
          {benefotsData?.data?.description}
        </p>
      </div>
    </FadeIn>
  );
};

export default AboutUsThirdSection;
