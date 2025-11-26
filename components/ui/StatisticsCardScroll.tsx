"use client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUp } from "lucide-react"
import FadeX from "./motion-elements/FadeX"

gsap.registerPlugin(ScrollTrigger)

function StatisticsCardScroll({ cardsData }: any) {
    return (
        <>
            {cardsData?.data?.map((card: any, index: number) => (
                <FadeX
                    dir={`${index % 2 === 0 ? "left" : "right"}`}
                    key={card?.id || index}
                    className="relative border-[1px] statistics-card border-mainGray border-opacity-40  w-3/4 lg:w-full h-fit px-6 py-6 lg:py-12"
                >
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl "> {card?.number} </p>
                    <p className="text-mainGray text-xs sm:text-sm md:text-base my-2 lg:my-4"> {card?.description} </p>
                    <p className="flex gap-1">
                        <span className="text-green-600 text-xs sm:text-sm md:text-base flex">
                            <ArrowUp /> {card?.Percentage} %{" "}
                        </span>
                        YoY Change
                    </p>
                </FadeX>
            ))}
        </>
    )
}

export default StatisticsCardScroll
