"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Section3({ locale }: { locale: any }) {
  useEffect(() => {
    gsap.from(".box7", {
      scrollTrigger: {
        trigger: ".box2",
        start: "top center",
        end: "+=1000",
        toggleActions: "play none play reverse",
      },
      top: 0,
      opacity: 0,
      duration: 0.8,
    });
    gsap.to(".box7", {
      scrollTrigger: {
        trigger: ".box2",
        start: "top center",
        end: "+=1000",
        toggleActions: "play none play reverse",
      },
      top: 0,
      opacity: 1,
      duration: 0.8,
    });
  }, []);

  return (
    <div className="box7 opacity-0 top-[457px] border-[0.5px] border-opacity-40 border-mainColor relative lg:h-[320px] w-full px-4 py-8 sm:py-12 flex lg:flex-col justify-center gap-4">
      <span className="text-xs lg:absolute top-4 left-4 pt-1 lg:pt-0  text-subGray">
        03
      </span>
      <span className="border-tick opacity-0 hidden lg:block absolute w-[1px] h-8 -top-[1px] -right-[1px] bg-mainColor"></span>
      <div>
        <p className=" text-xl lg:text-3xl pb-2 lg:py-4">
          {locale?.real_estate}
        </p>
        <p className=" text-mainGray text-sm lg:text-base pr-8">
          {locale?.real_estate_details}
        </p>
      </div>
    </div>
  );
}

export default Section3;
