// @ts-nocheck
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getData } from "@/utils/fetchData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import useCurrentLang from "../hooks/useCurrentLang";
import { IMAGE_BLUR } from "../constant/image-blure";
import { images } from "@/utils/exportsImages";
const DeveloperSlider = () => {
  const { lang } = useCurrentLang();
  const [developers, setDevelopers] = useState(null);

  const handleDeveloper = async () => {
    const developersData = await getData({
      endpoint: `api/developer`,
    });
    setDevelopers(developersData);
  };

  useEffect(() => {
    handleDeveloper();
  }, []);

  return (
    <>
      <Swiper
        loop
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        navigation={{
          nextEl: ".swiper-next-button",
          prevEl: ".swiper-prev-button",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {developers?.data?.map((developer) => (
          <SwiperSlide className="my-auto" key={developer?.slug}>
            <Link href={`${lang}/developers/${developer?.slug}`}>
              <Image
                src={developer?.image?.original_url ?? images.Developer}
                alt={developer?.image?.file_name}
                width={600}
                height={500}
                quality={75}
                loading="lazy"
                // placeholder="blur"
                // blurDataURL={IMAGE_BLUR}
              />
            </Link>
          </SwiperSlide>
        ))}
        {/* <ArrowLeft className="hidden sm:block swiper-next-button bg-subDark cursor-pointer w-8 lg:w-16 h-8 lg:h-16 p-2 lg:p-4 border-[1px] rounded-full absolute top-1/2 -translate-y-1/2 left-5 z-50" />
                <ArrowRight className="hidden sm:block swiper-prev-button bg-subDark cursor-pointer w-8 lg:w-16 h-8 lg:h-16 p-2 lg:p-4 border-[1px] rounded-full absolute top-1/2 -translate-y-1/2 right-5 z-50" /> */}
      </Swiper>
    </>
  );
};

export default DeveloperSlider;
