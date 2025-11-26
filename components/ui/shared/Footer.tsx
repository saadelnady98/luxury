"use client";
import useCurrentLang from "@/components/hooks/useCurrentLang";
import { dictionary } from "@/dictionaries/clientContent";
import { images } from "@/utils/exportsImages";
import { getData, postData } from "@/utils/fetchData";
import { Contacts_TP } from "contacts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeIn from "../motion-elements/FadeIn";
import { IMAGE_BLUR } from "@/components/constant/image-blure";
const Footer = () => {
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  const [links, setLinks] = useState<Contacts_TP>();

  const getLinks = async () => {
    const res = await getData({
      endpoint: "api/setting/social",
      lang,
    });
    setLinks(res);
  };

  useEffect(() => {
    getLinks();
  }, []);
 
  return (
    <footer>
      <FadeIn>
        <div className="container lg:px-20 xl:px-64 bg-black w-full static bottom-0 py-4">
          <div className="text-textColor flex flex-col lg:flex-row justify-start gap-7 my-10 lg:my-28">
            <div className="lg:w-2/5 lg:pr-10">
              <div className="h-20 w-20 flex justify-center items-center self-start gradient_text text-3xl">
                <Image
                  src={images.Logo}
                  alt={images.Logo}
                  width={1000}
                  placeholder="blur"
                 blurDataURL={IMAGE_BLUR}
                  height={1000}
                />
              </div>
              <p className="text-2xl my-6">{locale?.about}</p>
              <p className=" text-mainGray my-4 ltr:pr-8 ltr:lg:pr-0 leading-6">
                {locale?.footerAbout}
              </p>
              <div className="flex gap-3 mt-5">
                <Link target="_blank" href={`${links?.data?.social?.facebook}`}>
                  <Image
                    className=" bg-subDark w-10 h-10 rounded-full hover:bg-mainColor duration-200"
                    src={images.facebook}
                    alt="facebook"
                    placeholder="blur"
                   blurDataURL={IMAGE_BLUR}
                    width={20}
                    height={20}
                  />
                </Link>
                {/* <Link target="_blank" href={`${links?.data?.social?.twitter}`}>
                  <Image
                    className=" bg-subDark w-10 h-10 p-[9px] border border-transparent rounded-full hover:border-mainColor duration-200"
                    src={images.twitter}
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </Link> */}
                <Link
                  target="_blank"
                  href={`${links?.data?.social?.instagram}`}
                >
                  <Image
                    className=" bg-subDark w-10 h-10 rounded-full hover:bg-mainColor duration-200"
                    src={images.instagram}
                    placeholder="blur"
                   blurDataURL={IMAGE_BLUR}
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link target="_blank" href={`${links?.data?.social?.linkedin}`}>
                  <Image
                    className=" bg-subDark w-10 h-10 rounded-full hover:bg-mainColor duration-200"
                    src={images.linkedIn}
                    placeholder="blur"
                   blurDataURL={IMAGE_BLUR}
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            <div className="lg:flex items-end w-full lg:items-center pt-[80px]">
              <div className="w-full lg:border-x-[1px] max-lg:mt-10 border-subDark">
                <p className="text-2xl lg:px-5 border-b-[1px] py-4 border-subDark">
                  {locale?.importantLink}
                </p>
                <ul className="capitalize">
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/agents`}>{locale?.agents}</Link>
                  </li>
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/communities`}>
                      {locale?.communities}
                    </Link>
                  </li>
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/developers`}>
                      {locale?.developers}
                    </Link>
                  </li>
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/faq`}>{locale?.fAQs}</Link>
                  </li>
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:border-0 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/contact`}>{locale?.contactUs}</Link>
                  </li>
                  <li className="text-mainGray inline-block hover:text-mainColor duration-200 lg:hidden border-b-[1px] lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/terms`}>{locale?.terms}</Link>
                  </li>
                  <li className="text-mainGray inline-block hover:text-mainColor duration-200 lg:hidden border-0 lg:border-b-[1px] lg:px-5 py-4 border-subDark w-full">
                    <Link href={`/${lang}/privacy`}>{locale.privacy}</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full max-lg:mt-10">
                <p className="text-2xl lg:px-5 border-t-0 border-b-[1px] py-4 border-subDark">
                  {locale?.contactUs}
                </p>
                <ul>
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`mailto:${links?.data?.contacts?.email}`}>
                      {locale?.email}
                    </Link>
                  </li>
                  <li className="text-mainGray border-b-[1px] hover:text-mainColor duration-200 lg:px-5 py-4 border-subDark w-full">
                    <Link href={`tel:${links?.data?.contacts?.phone}`}>
                      {locale?.phone}
                    </Link>
                  </li>
                  <li className="text-mainGray border-0 lg:px-5 hover:text-mainColor duration-200 py-4 w-full">
                    <Link
                      onClick={async () => {
                        await postData({
                          endpoint: "api/whatsapp/click",
                          values: null,
                        });
                      }}
                      target="_blank"
                      href={`https://wa.me/${links?.data?.contacts?.whatsapp}`}
                    >
                      {locale?.whatsapp}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="capitalize px-8 lg:px-20 xl:px-64 py-4 text-subGray bg-subDark w-full">
          <div className="flex justify-center lg:justify-between">
            <div className="hidden lg:flex gap-12">
              <Link
                href={`/${lang}/privacy`}
                className="hover:text-mainColor duration-200"
              >
                {locale?.privacy}
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="hover:text-mainColor duration-200"
              >
                {locale?.terms}
              </Link>
            </div>
            <div>
              <p className="flex text-sm lg:text-base">
                luxury &#169; 2023 powered by
                <Link
                  href="https://dubisign.ae/"
                  className="text-[#A58C3B] px-2  hover:scale-105 duration-200"
                >
                  dubisign
                </Link>
                <Image
                  src={images.dubisign}
                  alt={images.dubisign}
                  placeholder="blur"
                 blurDataURL={IMAGE_BLUR}
                  width={16}
                  height={16}
                />
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
