"use client";
import ProjectCard from "../ui/ProjectCard";
 import { Product_TP } from "product";
import ProjectCardSkeleton from "../ui/ProjectCardSkeleton";

interface SimilarPropertiesProps {
  products?: Product_TP[]; // بيانات المنتجات المشابهة
  isLoading?: boolean; // حالة التحميل
}

export default function SimilarProperties({
  products,
  isLoading = false,
}: SimilarPropertiesProps) {
  const placeholderCount = 6; // عدد skeletons أثناء التحميل

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {isLoading
        ? Array.from({ length: placeholderCount }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))
        : products?.map((product: Product_TP) => (
            <div
              key={product.slug}
              className="bg-mainGray w-full bg-opacity-10 p-4 lg:p-8"
            >
              <ProjectCard separator={true} product={product} />
            </div>
          ))}
    </div>
  );
}
