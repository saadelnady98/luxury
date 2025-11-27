import clsx from "clsx";
import { Community_TP } from "community";
import Image from "next/image";
import Link from "next/link";
import styles from "./CommunityCard.module.scss";
import FadeY from "@/components/ui/motion-elements/FadeY";
import { IMAGE_BLUR } from "@/components/constant/image-blure";
import { images } from "@/utils/exportsImages";
interface CommunityCardProps {
  community?: Community_TP;
  lang?: string;
  index?: number;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  community,
  lang,
  index,
}) => {
  const colSpan8Indices = [
    0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23, 24, 27, 28, 31, 32, 35, 36, 39,
    40, 43, 44, 47, 48, 51, 52, 55, 56, 59, 60, 63, 64, 67, 68, 71, 72, 75, 76,
    79, 80, 83, 84, 87, 88, 91, 92, 95, 96, 99, 100, 103, 104, 107, 108, 111,
    112, 115, 116, 119, 120, 123, 124, 127, 128, 131, 132, 135, 136, 139, 140,
    143, 144, 147, 148, 151, 152, 155, 156, 159, 160, 163, 164, 167, 168, 171,
    172, 175, 176, 179, 180, 183, 184, 187, 188, 191, 192, 195, 196, 199, 200,
    203, 204, 207, 208, 211, 212, 215, 216, 219, 220, 223, 224, 227, 228, 231,
    232, 235, 236, 239, 240, 243, 244, 247, 248, 251, 252, 255, 256, 259, 260,
    263, 264, 267, 268, 271, 272, 275, 276, 279, 280, 283, 284, 287, 288, 291,
    292, 295, 296, 299, 300, 303, 304, 307, 308, 311, 312, 315, 316, 319, 320,
    323, 324, 327, 328, 331, 332, 335, 336, 339, 340, 343, 344, 347, 348, 351,
    352, 355, 356, 359, 360, 363, 364, 367, 368, 371, 372, 375, 376, 379, 380,
    383, 384, 387, 388, 391, 392, 395, 396, 399, 400, 403, 404, 407, 408, 411,
    412, 415, 416, 419, 420, 423, 424, 427, 428, 431, 432, 435, 436, 439, 440,
    443, 444, 447, 448, 451, 452, 455, 456, 459, 460, 463, 464, 467, 468, 471,
    472, 475, 476, 479, 480, 483, 484, 487, 488, 491, 492, 495, 496, 499, 500,
  ]; // i do not have solution for it please forgive me for this bad scenario
  const isColSpan8 = colSpan8Indices.includes(community?.index!) ? 1 : 0;
  const classes = clsx({
    "text-center relative overflow-hidden group flex justify-center items-center":
      true,
    "lg:col-span-8": isColSpan8 === 1,
    "lg:col-span-4": isColSpan8 === 0,
  });

  if (!community) return null;
  return (
    <FadeY
      dir="top"
      delay={index ? index * 0.02 : 0}
      once
      className={`${clsx(classes)} ${styles.hover__effect}`}
    >
      <Link
        href={`/${lang}/communities/${community?.slug}`}
        className="w-full lg:h-[446px]"
      >
        <Image
          className="w-full h-full bg-white object-cover"
          src={community?.image?.original_url ?? images.bru1}
          alt={community?.image?.file_name}
          width={600}
          height={400}
          quality={85}
          priority={true}
          // placeholder="blur"
          // blurDataURL={IMAGE_BLUR}
        />
        <p className="group-hover:bottom-1/2 duration-500  group-hover:translate-y-1/2 absolute  text-2xl text-textColor bottom-4 left-1/2 -translate-x-1/2">
          {community?.name}
        </p>
      </Link>
    </FadeY>
  );
};

export default CommunityCard;
