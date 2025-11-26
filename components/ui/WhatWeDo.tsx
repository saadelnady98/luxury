"use client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useCallback } from "react"

gsap.registerPlugin(ScrollTrigger)

function WhatWeDo({ locale }: { locale: any }) {
    const box6Ref = useRef<HTMLDivElement>(null)
    const animationsRef = useRef<gsap.core.Tween[]>([])

    const initAnimations = useCallback(() => {
        // تنظيف الأنيميشن السابقة
        animationsRef.current.forEach(anim => anim.kill())
        animationsRef.current = []

        if (!box6Ref.current) return

        // أنيميشن Box6
        const box6Anim = gsap.to(box6Ref.current, {
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "+=400",
                toggleActions: "play none play reverse",
                invalidateOnRefresh: true,
            },
            right: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
        })

        // أنيميشن Border-tick
        const tickAnim = gsap.to(".border-tick", {
            scrollTrigger: {
                trigger: box6Ref.current,
                start: "top center",
                end: "+=400",
                toggleActions: "play none play reverse",
                invalidateOnRefresh: true,
            },
            delay: 0.8,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
        })

        animationsRef.current.push(box6Anim, tickAnim)
    }, [])

    useEffect(() => {
        // انتظار قصير للتأكد من تحميل العناصر
        const timer = setTimeout(() => {
            initAnimations()
        }, 100)

        return () => {
            clearTimeout(timer)
            // تنظيف كل الأنيميشن
            animationsRef.current.forEach(anim => anim.kill())
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [initAnimations])

    return (
        <div 
            ref={box6Ref}
            className="box6 relative right-[457px] opacity-0 lg:h-[320px] w-full px-4 z-20 will-change-[right,opacity]"
        >
            <div className="bg-darkMode lg:absolute flex flex-col justify-center items-center lg:items-end xl:pr-10 right-0 lg:w-[600px] h-full">
                <p className="text-xl lg:text-5xl text-center lg:text-left capitalize text-mainColor leading-[64px] sm:w-64">
                    {locale?.whatWe} {locale?.do}
                </p>
            </div>
        </div>
    )
}

export default WhatWeDo