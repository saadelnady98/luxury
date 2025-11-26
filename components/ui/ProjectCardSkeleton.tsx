"use client";
import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent";

export default function ProjectCardSkeleton() {
  return (
    <div className="group animate-pulse">
      {/* IMAGE SKELETON */}
      <div
        className={`relative flex justify-center items-center overflow-hidden min-h-[240px] max-h-[240px] xl:min-h-[300px] xl:max-h-[300px] bg-gray-300/30 rounded-md ${shimmer}`}
      ></div>

      {/* TEXT SKELETON */}
      <div className="capitalize flex flex-col gap-4 mt-4 text-darkText">
        <div className="h-6 w-3/4 bg-gray-300/30 rounded-md"></div>

        <div className="flex items-center gap-2">
          <div className="bg-gray-300/40 w-7 h-6 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300/30 rounded-md"></div>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-gray-300/40 w-7 h-6 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-300/30 rounded-md"></div>
        </div>

        <div className="bg-mainGray opacity-20 h-[1px] w-full"></div>

        <div className="h-6 w-2/3 bg-gray-300/30 rounded-md"></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
