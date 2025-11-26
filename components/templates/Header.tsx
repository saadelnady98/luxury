"use client";
import { dictionary } from "@/dictionaries/clientContent";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCurrentLang from "../hooks/useCurrentLang";
import { IMAGE_BLUR } from "../constant/image-blure";

type HeaderProps_TP = {
  mainTitle?: string;
  title: string;
  subTitle: string;
  image: any;
};

const Header = ({ mainTitle, image, title, subTitle }: HeaderProps_TP) => {
  const navbarTransparent = [
    "/luxury",
    "/buy",
    "/sell",
    "/add-list",
    "/rent",
    "/new-project",
    "/blogs",
    "/about",
    "/terms",
    "/contact",
    "/privacy",
    "/communities",
    "/agents",
    "/faqs",
    "/developers",
  ];
  const pathname = usePathname();
  const { lang } = useCurrentLang();
  const locale = dictionary[lang];
  const isTransparent = navbarTransparent.some((navString) =>
    pathname.endsWith(navString)
  );
  const classes = clsx({
    relative: true,
    "-translate-y-1/3 z-10": isTransparent,
  });

  return (
    <div className={clsx(classes)}>
      <div className="relative lg:max-h-[374px] lg:min-h-[200px] h-[450px] ">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="w-full h-full object-cover object-center"
          // placeholder="blur"
          // blurDataURL={IMAGE_BLUR}
        />
        <p className="center text-textColor lg:text-3xl text-md  w-full text-center capitalize">
          {mainTitle || locale[subTitle]}
        </p>
        <div className="center text-textColor mt-14 flex justify-center w-full container">
          <Link
            href={`/${lang}`}
            className="text-textColor font-normal text-md h-full hover:text-mainColor "
          >
            {title}
          </Link>
          <span className="lg:mx-4 mx-2 flex items-center justify-center">
            <svg
              fill="#fcd1ba"
              height="12px"
              width="12px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>{" "}
              </g>
            </svg>{" "}
          </span>
          <span className="text-mainColor text-md font-medium capitalize">
            {locale[subTitle] || subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
