"use client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import CommunitesSlider from "./CommunitesSlider"

gsap.registerPlugin(ScrollTrigger)

function CommunitesSectionScroll() {
    useEffect(() => {
        gsap.to(".box7", {
            scrollTrigger: {
                trigger: ".box10",
                start: "top center",
                end: "+=700",
                toggleActions: "play none play reverse",
            },
            // opacity:0,
            top: "-100%",
            duration: 0.8,
        })
        gsap.to(".box8", {
            scrollTrigger: {
                trigger: ".box10",
                start: "top center",
                end: "+=700",
                toggleActions: "play none play reverse",
            },
            // opacity: 0,
            top: "100%",
            duration: 0.8,
        })
    }, [])

    return (
        <div className="box10 relative overflow-hidden">
            <div className="box7 bg-darkMode h-full w-full absolute top-[-50%] left-0 z-20"></div>
            <div className="box8 bg-darkMode h-full w-full absolute top-[50%] left-0 z-20"></div>
            <CommunitesSlider />
        </div>
    )
}

export default CommunitesSectionScroll
