"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { images } from "@/utils/exportsImages";
import Image from "next/image";
import TableStatistics from "../ui/TableStatistics";
import StatisticsForm from "../ui/StatisticsForm";
import StatisticsCard from "../ui/StatisticsCard";

gsap.registerPlugin(ScrollTrigger);

function PropertySectionScroll({
  statisticsTitle,
  lang,
}: {
  statisticsTitle: any;
  lang: any;
}) {
  useEffect(() => {
    gsap.to(".ps-box-container", {
      scrollTrigger: {
        trigger: ".ps-box-container",
        start: 'top top',
        end: '+=5000',
        pin: true,
        // pinSpacing: false,
        anticipatePin: 1,
      },
    });

    gsap.to(".ps-box1", {
      scrollTrigger: {
        trigger: ".ps-box1",
        start: "center top",
        end: "+=600",
        toggleActions: "play none play reverse",
      },
      scale: 0.7,
      height: "auto",
      duration: 0.8,
    });

  }, []);

  return (
    <>
    </>
  );
}

export default PropertySectionScroll;
