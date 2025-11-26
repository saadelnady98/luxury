// @ts-nocheck
"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image_TP } from "@/types";
import { IMAGE_BLUR } from "../constant/image-blure";

type PropertyImage_TP = {
  propertyImages: Image_TP[];
};

const PropertiesSlider = ({ propertyImages }: PropertyImage_TP) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      pagination={false}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1000}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper max-h-[560px]"
      navigation={{
        nextEl: ".review-swiper-button-next-property",
        prevEl: ".review-swiper-button-prev-property",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
    >
      {propertyImages?.map((image, index) => (
        <SwiperSlide key={image?.id} className="mx-auto">
          <Image
            priority
            quality={70}
            // loading="eager"
            className="object-center object-cover w-full min-h-[560px]"
            src={image?.original_url}
            alt={image?.file_name}
            // placeholder="blur"
            // blurDataURL={IMAGE_BLUR}
            width={800}
            height={600}
          />
        </SwiperSlide>
      ))}
      <ArrowRight className="review-swiper-button-next-property bg-white text-darkMode cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute bottom-4 right-8 lg:right-20 top-[calc(50%-1.5rem)] z-50" />
      <ArrowLeft className="review-swiper-button-prev-property bg-white text-darkMode cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute bottom-4 left-8 lg:left-20 top-[calc(50%-1.5rem)] z-50" />
    </Swiper>
  );
};

export default PropertiesSlider;
