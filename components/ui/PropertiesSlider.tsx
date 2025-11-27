// @ts-nocheck
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

export default function PropertiesSlider({ propertyImages }) {
  return (
    <Swiper
      loop
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
        0: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      }}
    >
      {propertyImages?.map((image) => {
        const [loaded, setLoaded] = useState(false);

        return (
          <SwiperSlide key={image?.id} className="mx-auto relative">
            {!loaded && (
              <div
                className={`relative overflow-hidden w-full min-h-[560px] bg-gray-300/30 ${shimmer}`}
              ></div>
            )}

            <Image
              src={image?.original_url}
              alt={image?.file_name}
              width={721} 
              height={993}
              quality={70}
              priority
              sizes="(max-width: 768px) 100vw, 721px"
              className={`object-cover w-full min-h-[560px] transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => setLoaded(true)}
            />
          </SwiperSlide>
        );
      })}
      <ArrowRight className="review-swiper-button-next-property bg-white text-darkMode cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border rounded-full absolute bottom-4 right-8 lg:right-20 top-[calc(50%-1.5rem)] z-50" />
      <ArrowLeft className="review-swiper-button-prev-property bg-white text-darkMode cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border rounded-full absolute bottom-4 left-8 lg:left-20 top-[calc(50%-1.5rem)] z-50" />
    </Swiper>
  );
}
