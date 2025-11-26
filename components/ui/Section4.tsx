"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Section4({ locale }: { locale: any }) {
  useEffect(() => {
    gsap.from(".box8", {
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
    gsap.to(".box8", {
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
    <div className="box8 opacity-0 top-[457px] border-[0.5px] border-opacity-40 border-mainColor relative lg:h-[320px] w-full px-4 py-8 sm:py-12 flex lg:flex-col justify-center gap-4">
      <span className="text-xs lg:absolute top-4 left-4 pt-1 lg:pt-0 text-subGray">
        04
      </span>
      <span className="border-tick opacity-0 hidden lg:block absolute w-8 h-[1px] -top-[1px] -right-[1px] bg-mainColor"></span>
      <span className="lg:hidden absolute w-8 h-[1px] -top-[1px] left-0 bg-mainColor"></span>
      <span className="lg:hidden absolute w-8 h-[1px] -bottom-[1px] left-0 bg-mainColor"></span>
      <span className="lg:hidden absolute w-[1px] h-8 -bottom-[1px] left-0 bg-mainColor"></span>
      <div className="mt-4">
        <p className="text-xl lg:text-3xl pb-2 lg:py-4">{locale?.innovative}</p>
        <p className=" text-mainGray text-sm lg:text-base pr-8">
          {locale?.innovative_details}
        </p>
      </div>
    </div>
  );
}

export default Section4;
