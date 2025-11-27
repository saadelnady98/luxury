"use client";
import { dictionary } from "@/dictionaries/clientContent";
import { images } from "@/utils/exportsImages";
import { formatMonthYear } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Product_TP } from "product";
import { memo, useMemo } from "react";
import useCurrentLang from "../hooks/useCurrentLang";
import { IMAGE_BLUR } from "../constant/image-blure";

type ProjectCardProps_TP = {
  product: Product_TP;
  imageWrapperStyle?: string;
  separator?: boolean;
};

const ProjectCard = memo(
  ({
    product,
    imageWrapperStyle = "",
    separator = false,
  }: ProjectCardProps_TP) => {
    const { lang } = useCurrentLang();
    const locale = dictionary[lang!];
    const pathname = usePathname();

    const isInCommunity = useMemo(
      () => pathname.includes("communities"),
      [pathname]
    );

    const formattedPrice = useMemo(
      () => product.price?.toLocaleString(),
      [product.price]
    );

    const formattedHandoverDate = useMemo(
      () =>
        product?.handover_date
          ? formatMonthYear(product.handover_date, lang)
          : null,
      [product?.handover_date, lang]
    );

    if (!product) return null;

    return (
      <Link href={`/properties/${product.slug}`} className="group">
        <div
          className={`relative flex justify-center items-center overflow-hidden min-h-[240px] max-h-[240px] xl:min-h-[300px] xl:max-h-[300px] ${imageWrapperStyle}`}
        >
          <div className="w-full h-full group-hover:scale-110 duration-700 will-change-transform">
            <Image
              src={product?.image?.original_url ?? images.bru1}
              alt={product?.image?.file_name || product?.title}
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-125 duration-700 will-change-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 300px"
              // placeholder="blur"
              // blurDataURL={IMAGE_BLUR}
              quality={75}
            />
          </div>

          {product?.badge && (
            <span className="px-6 py-2 absolute bg-mainColor text-textColor bottom-4 left-4 group-hover:-translate-y-1/2 transition-transform will-change-transform">
              {product.badge}
            </span>
          )}
        </div>

        <div className="capitalize flex flex-col gap-4 mt-4 text-darkText">
          <h3 className="text-xl lg:text-2xl leading-10">{product?.title}</h3>

          <div className="text-mainGray text-sm flex items-center gap-2">
            <div className="bg-mainGray w-7 h-6 p-[5px] bg-opacity-20 flex-shrink-0">
              <Image
                src={images.locationCard}
                alt="location"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                width={18}
                height={16}
              />
            </div>
            <span>{product.address}</span>
          </div>

          <div className="text-mainGray text-sm flex items-center gap-2">
            <div className="bg-mainGray w-7 h-6 p-[5px] bg-opacity-20 flex-shrink-0">
              <Image
                src={images.icon}
                alt="size"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                width={18}
                height={16}
              />
            </div>
            <span>
              {product?.size?.min} - {product?.size?.max} {locale.perSqft}
            </span>
          </div>

          {separator && (
            <div className="bg-mainGray opacity-20 h-[1px] w-full" />
          )}

          {isInCommunity && (
            <div className="space-y-1">
              {formattedHandoverDate && (
                <p>
                  {locale?.handover_date}
                  <span className="text-mainColor font-semibold ms-4">
                    {formattedHandoverDate}
                  </span>
                </p>
              )}
              {product?.rental_period?.period && (
                <p>
                  {locale?.period}
                  <span className="text-mainColor font-semibold ms-4">
                    {product.rental_period.period}
                  </span>
                </p>
              )}
            </div>
          )}

          <p className="text-xl lg:text-2xl">
            {locale?.starts_from} : {formattedPrice} {locale?.AED}
          </p>
        </div>
      </Link>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
