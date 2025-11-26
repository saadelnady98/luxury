// @ts-nocheck
"use client"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ProjectCard from "./ProjectCard"
import ProjectCardSkeleton from "./ProjectCardSkeleton"

import { dictionary } from "@/dictionaries/clientContent"
import { getData } from "@/utils/fetchData"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import useCurrentLang from "../hooks/useCurrentLang"
import { Product_TP } from "product"

type Products = {
    data: Product_TP[]
}

const MostTrendingSlider = ({ category }) => {
    const [products, setProducts] = useState<Products | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]

    const handleProduct = async () => {
        setIsLoading(true)
        const products = await getData({
            endpoint: `api/product?status=1&type[]=${category || 1}`,
            lang,
        })
        setProducts(products)
        setIsLoading(false)
    }

    useEffect(() => {
        handleProduct()
    }, [category])

    return (
        <div className="bg-subDark relative container my-8 lg:my-12 py-4 lg:py-10 px-4 lg:px-16">
            <Swiper
                loop
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={2000}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                navigation={{
                    nextEl: ".swiper-next-button",
                    prevEl: ".swiper-prev-button",
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {isLoading
                    ? Array.from({ length: 3}).map((_, i) => (
                          <SwiperSlide className="h-full" key={i}>
                              <ProjectCardSkeleton />
                          </SwiperSlide>
                      ))
                    : products?.data?.length
                    ? products?.data.map((product) => (
                          <SwiperSlide className="h-full" key={product?.id}>
                              <ProjectCard product={product} />
                          </SwiperSlide>
                      ))
                    : (
                        <div className="text-4xl text-center py-40">
                            {locale.noResultFound}
                        </div>
                      )
                }
                <ArrowLeft className="hidden sm:block swiper-next-button bg-subDark cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute top-[calc(25%+33px)] -translate-y-1/2 left-5 z-50" />
                <ArrowRight className="hidden sm:block swiper-prev-button bg-subDark cursor-pointer w-8 lg:w-14 h-8 lg:h-14 p-2 lg:p-4 border-[1px] rounded-full absolute top-[calc(25%+33px)] -translate-y-1/2 right-5 z-50" />
            </Swiper>
        </div>
    )
}

export default MostTrendingSlider
