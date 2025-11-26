"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import ProjectBarFilter from "./ProjectBarFilter";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection({locale}: {locale:any}) {
  useEffect(() => {
    gsap.to(".box5", {
      scrollTrigger: {
        trigger: ".box5",
        start: 'top bottom',
        end: '+=700',
        toggleActions: 'play none play reverse'
      },
      top: 0,
      opacity: 1,
      duration: 0.8
    });
  }, []);

  return (
    <div className="box5 top-[457px] relative opacity-0 container my-8 lg:my-20">
      <SectionHeader
        littelText={locale?.covering}
        title={locale?.mostTrending}
      />
      <ProjectBarFilter />
    </div>
  );
}

export default ProjectsSection;
