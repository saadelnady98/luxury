"use client";
import { Community_TP } from "community";
import Image from "next/image";
import Link from "next/link";
import useCurrentLang from "../../hooks/useCurrentLang";
import styles from "./CommunityCard.module.scss";
import { IMAGE_BLUR } from "@/components/constant/image-blure";
import CommunityFallbackImage from "../../../public/community.webp";

const HomeCommunityCard = ({
  communityData,
}: {
  communityData: Community_TP;
}) => {
  const { lang } = useCurrentLang();
  return (
    <div className="w-full h-full">
      <Link
        href={`${lang}/communities/${communityData.slug}`}
        className={`${styles.hover__effect} relative group h-full w-full`}
      >
        <Image
          className="w-full h-full object-center object-cover"
          src={communityData?.image?.original_url ?? CommunityFallbackImage}
          alt={communityData?.image?.file_name}
          width={400}
          height={300}
          quality={65}
          loading="lazy"
          // placeholder="blur"
          // blurDataURL={IMAGE_BLUR}
        />
        <p className="gradient_text z-20 group-hover:bottom-1/2 duration-500 group-hover:translate-y-1/2 absolute  text-base sm:text-lg md:text-xl lg:text-2xl text-textColor bottom-4 left-1/2 w-full text-center -translate-x-1/2">
          {communityData?.name}
        </p>
      </Link>
    </div>
  );
};

export default HomeCommunityCard;
