// @ts-nocheck
"use client"

import { getData } from "@/utils/fetchData"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import useCurrentLang from "../hooks/useCurrentLang"
import AgentCard from "./AgentCard"
import Link from "next/link"
import { images } from "@/utils/exportsImages"
import Image from "next/image"

const AgentSlider = () => {
    const { lang } = useCurrentLang()
    const [agents, setAgents] = useState(null)
    const [activeSlide, setActiveSlide] = useState(0)
    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex)
    }

    const handleAgents = async () => {
        const agentsData = await getData({
            endpoint: `api/agent`,
            lang,
        })
        setAgents(agentsData)
    }

    useEffect(() => {
        handleAgents()
    }, [])

    return (
        <div className="relative" dir="ltr">
            <Swiper
                loop={agents?.data?.length > 3}
                freeMode
                centeredSlides={agents?.data?.length < 3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                navigation={{
                    nextEl: ".swiper-next-button",
                    prevEl: ".swiper-prev-button",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                modules={[FreeMode, Navigation]}
                className="h-[240px] sm:h-[280px] xl:h-[380px]"
            >
                {agents?.data?.map((agent, index) => (
                    <SwiperSlide>
                        <AgentCard
                            wrapperClassName={`${
                                activeSlide === index ? "border-mainColor" : "border-transparent"
                            } border-[1px] cursor-pointer border-opacity-60 bg-mainGray bg-opacity-10 hover:border-transparent hover:bg-transparent`}
                            agentData={agent}
                            isOpened={false}
                            isAgent={false}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <ArrowLeft className="hidden sm:block swiper-next-button bg-subDark cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute top-1/2 -translate-y-1/2 left-5 z-50" />
            <ArrowRight className="hidden sm:block swiper-prev-button bg-subDark cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute top-1/2 -translate-y-1/2 right-5 z-50" />
        </div>
    )
}

export default AgentSlider
