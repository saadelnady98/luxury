"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import { IMAGE_BLUR } from "../constant/image-blure";

gsap.registerPlugin(ScrollTrigger);

function StrategyImageSection({ image }: { image: any }) {
  useEffect(() => {
    gsap.to(".box9", {
      scrollTrigger: {
        trigger: ".box2",
        start: "top center",
        end: "+=400",
        toggleActions: "play none play reverse",
      },
      left: 0,
      opacity: 1,
      duration: 0.8,
    });
  }, []);

  return (
    <div className="box9 opacity-0 left-[457px] h-full z-20 relative">
      <div className="absolute overflow-hidden flex flex-col justify-center items-end left-0 w-[900px] h-full">
        <Image
          className="object-cover"
          src={image?.data?.image?.original_url}
          alt="home image"
          fill
          placeholder="blur"
          loading="eager"
          quality={70}
          blurDataURL={IMAGE_BLUR}
        />
      </div>
    </div>
  );
}

export default StrategyImageSection;
