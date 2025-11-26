"use client"
import { images } from "@/utils/exportsImages"
import Image from "next/image"
import { IMAGE_BLUR } from "../constant/image-blure"
function PropertySectionScroll({ statisticsTitle }: { statisticsTitle: any; cardsData: any }) {
    return (
        <div className="text-textColor">
            {/* text */}
            <div className="ps-box1 relative h-[100vh] py-16 scale-[1] capitalize flex flex-col justify-center items-center">
                <p className="text-lg sm:text-xl md:text-2xl px-8">{statisticsTitle?.data?.description}</p>
                <div className="h-[40vh]">
                    <Image
                        className="p-10 lg:p-0 w-full h-full object-cover city_image duration-200"
                        src={images.City}
                        alt={images.City}
                        placeholder="blur"
                       blurDataURL={IMAGE_BLUR}
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            <div className="cursor" />
        </div>
    )
}

export default PropertySectionScroll
