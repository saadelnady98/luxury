// @ts-nocheck
"use client"
import { getData } from "@/utils/fetchData"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import useCurrentLang from "../hooks/useCurrentLang"
import HomeCommunityCard from "./HomeCommunityCard/HomeCommunityCard"

const CommunitesSlider = () => {
    const { lang } = useCurrentLang()
    const [communites, setCommunites] = useState(null)
    const [activeSlide, setActiveSlide] = useState(0)
    const [hideArrows, setHideArrows] = useState(false)

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex)
    }

    const handleCommunites = async () => {
        const communitesData = await getData({
            endpoint: `api/community?status=1`,
            lang,
        })
        setCommunites(communitesData)
    }

    useEffect(() => {
        handleCommunites()
    }, [])
    useEffect(() => {
        setHideArrows(communites?.data?.length < 5)
    }, [communites])
    return (
        <div className="relative !overflow-hidden lg:!overflow-visible">
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                centeredSlides={true}
                navigation={{
                    nextEl: ".review-swiper-button-next",
                    prevEl: ".review-swiper-button-prev",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                centeredSlidesBounds={true}
                className="mySwiper h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[440px] z-40"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 4,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
            >
                {communites?.data?.map((community, index) => (
                    <SwiperSlide
                        className={`${activeSlide === index ? "py-0" : "py-3 sm:py-4 lg:py-10"} !aspect-[605/451]`}
                        key={community.slug}
                    >
                        <HomeCommunityCard lang={lang} communityData={community} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {!hideArrows ? (
                <>
                    <ArrowRight
                        className={`review-swiper-button-next bg-subDark cursor-pointer w-8 lg:w-11 h-8 lg:h-11 p-2 border-[1px] rounded-full absolute bottom-[6px] right-8 z-40 hidden lg:!block`}
                    />
                    <ArrowLeft
                        className={`review-swiper-button-prev bg-subDark cursor-pointer w-8 lg:w-11 h-8 lg:h-11 p-2 border-[1px] rounded-full absolute bottom-[6px] right-24 z-40 hidden lg:!block`}
                    />
                </>
            ) : null}
        </div>
    )
}

export default CommunitesSlider
