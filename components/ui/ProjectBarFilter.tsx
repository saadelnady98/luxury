"use client";
import { useState } from "react";
import MostTrendingSlider from "./MostTrendingSlider";
import TrendingCategoryBar from "./TrendingCategoryBar";

const ProjectBarFilter = () => {
  const [category, setCategory] = useState<string>("");
  return (
    <div>
      <TrendingCategoryBar setCategory={setCategory}/>
      <MostTrendingSlider category={category}/>
    </div>
  );
};

export default ProjectBarFilter;
