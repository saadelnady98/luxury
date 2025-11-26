"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useCallback } from "react";
import SearchForProject from "./SearchForProject";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Scroll({ image }: { image: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // const formAnimationRef = useRef<gsap.core.Tween | null>(null);

  // const initAnimation = useCallback(() => {
  //   // تنظيف الأنيميشن السابقة
  //   if (formAnimationRef.current) formAnimationRef.current.kill();
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  //   // أنيميشن الفورم من أسفل الشاشة لمنتصف الصورة
  //   formAnimationRef.current = gsap.fromTo(
  //     ".search-form-container",
  //     { y: "100%", opacity: 0 },
  //     {
  //       y: "50%",
  //       opacity: 1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top bottom", // يبدأ لما top الحاوية توصل لنهاية الحاوية
  //         end: "center center", // ينتهي عند منتصف الحاوية
  //         scrub: 1, // يتحرك مع scroll الماوس
  //         scroller: containerRef.current, // scroll داخل الحاوية نفسها
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     initAnimation();
  //   }, 100);

  //   return () => {
  //     clearTimeout(timer);
  //     if (formAnimationRef.current) formAnimationRef.current.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [initAnimation]);

  return (
    <div className="relative overflow-hidden container">
      <div className="relative">
        <div
          ref={containerRef}
          className="header-scroll-container relative min-h-[60vh] lg:h-[80vh] overflow-auto no-scrollbar"
        >
          {/* الصورة */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={image?.data?.image?.original_url}
              alt={image?.data?.title || "Header image"}
              className="object-cover object-center"
              fill
              priority
              quality={70}
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 90vw,
         70vw"
            />
          </div>

          {/* النص فوق الصورة */}
          <div className="box-text gradient_text w-full h-[100%] uppercase text-center absolute top-0 left-0 flex justify-center items-center z-10">
            <div>
              <p className="lg:text-xl font-light">{image?.data?.title}</p>
              <p className="text-4xl lg:text-5xl xl:text-7xl font-semibold mt-2 lg:mt-10 w-full px-4 lg:px-20">
                {image?.data?.description}
              </p>
            </div>
          </div>

          {/* الفورم */}
          <div className="search-form-container uppercase text-center absolute left-0 top-1/2 w-full flex justify-center items-center z-20 -translate-y-1/2">
            <div className="w-full">
              <SearchForProject backgroundImage={image} className="relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
