// @ts-nocheck
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect, useRef, useState } from "react"
import ServicesCard from "./ServicesCard"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getData } from "@/utils/fetchData"
import useCurrentLang from "../hooks/useCurrentLang"

const SectionsSlider = () => {
    const [services, setServices] = useState(null)
    const { lang } = useCurrentLang()

    const handleServices = async () => {
        const serviceData = await getData({
            endpoint: `api/service`,
            lang,
        })
        setServices(serviceData)
    }

    useEffect(() => {
        handleServices()
    }, [])
    return (
        <>
            <Swiper
                loop
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                navigation={{
                    nextEl: ".swiper-next-button",
                    prevEl: ".swiper-prev-button",
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                className="mySwiper text-center lg:my-16"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {services?.data?.map((service) => (
                    <SwiperSlide key={service.slug}>
                        <ServicesCard serviceData={service} />
                    </SwiperSlide>
                ))}
                <ArrowLeft className="hidden sm:block swiper-next-button bg-subDark cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute top-[calc(50%-1.5rem)] -translate-y-1/2 left-5 z-50" />
                <ArrowRight className="hidden sm:block swiper-prev-button bg-subDark cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute top-[calc(50%-1.5rem)] -translate-y-1/2 right-5 z-50" />
            </Swiper>
        </>
    )
}

export default SectionsSlider
