  "use client";
  import { images } from "@/utils/exportsImages";
  import { Agent_TP } from "agent";
  import Image from "next/image";
  import Link from "next/link";
  import useCurrentLang from "../hooks/useCurrentLang";
  import { IMAGE_BLUR } from "../constant/image-blure";
  type AgentCard_TP = {
    isAgent?: boolean;
    isOpened?: boolean;
    imageClassName?: string;
    agentData: Agent_TP;
    className?: string;
    wrapperClassName?: string;
    showImage?: boolean;
  };

  const AgentCard = ({
    isAgent = true,
    isOpened = true,
    imageClassName,
    agentData,
    wrapperClassName,
    showImage = true,
  }: AgentCard_TP) => {
    const { lang } = useCurrentLang();
    return (
      <div
        className={`${wrapperClassName} duration-500 flex group px-4 py-3 xl:py-6  h-full flex-col justify-evenly items-center gap-2 capitalize`}
      >
        {/* {isAgent ? (
          <p className="text-xs xl:text-base hidden group-hover:block duration-500">
            agent
          </p>
        ) : null} */}
        <Link
          href={`/agents`}
          className="flex flex-col items-center gap-2"
        >
          {showImage && (
            <Image
              className={`rounded-full object-cover object-center ${
                imageClassName
                  ? imageClassName
                  : "w-8 sm:w-10 h-8 sm:h-10 xl:w-[80px] xl:h-[80px]"
              }`}
              src={agentData?.image?.original_url ?? images.Agent}
              alt={agentData?.image?.file_name}
              // placeholder="blur"
              // blurDataURL={IMAGE_BLUR}

              width={1000}
              height={1000}
              quality={65}
              loading="lazy"
            />
          )}

          <p className="text-[10px] md:text-sm lg:text-base xl:text-lg text-center mt-1 xl:mt-3 font-semibold">{`${agentData?.first_name} ${agentData?.last_name}`}</p>
          <p className="text-[10px] md:text-sm lg:text-base xl:text-lg text-center text-mainGray">
            {agentData?.position}
          </p>
        </Link>
        <div
          className={` ${
            isOpened ? "block opacity-100" : "hidden opacity-0"
          } duration-200 group-hover:block group-hover:opacity-100 text-center`}
        >
          <p className="text-[10px] md:text-sm lg:text-base xl:text-lg line-clamp-1 text-mainGray duration-500">
            {agentData?.language}
          </p>

          <div className="flex duration-500 justify-center items-center mt-1 md:mt-2 xl:mt-4 gap-4">
            <Link
              target="_blank"
              href={`tel:+${agentData?.phone?.replace(/\s+/g, "")}`}
            >
              <div className="">
                <Image
                  className="bg-subDark h-4 w-8 px-2 py-1 sm:w-10 sm:h-6 sm:px-3 xl:w-16 xl:h-8 xl:px-3 xl:py-[5px] 2xl:py-[8px] "
                  src={images.Call}
                  alt={images.Call}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  width={24}
                  height={24}
                  quality={70}
                  loading="eager"
                />
              </div>
            </Link>
            <Link
              target="_blank"
              href={`https://wa.me/+${agentData?.whatsapp?.replace(/\s+/g, "")}`}
            >
              <div className="">
                <Image
                  className="bg-subDark h-4 w-8 px-2 py-1 sm:w-10 sm:h-6 sm:px-3 xl:w-16 xl:h-8 xl:px-3 xl:py-[5px] 2xl:py-[8px] "
                  src={images.WhatsApp}
                  alt={images.WhatsApp}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  width={24}
                  height={24}
                  quality={70}
                  loading="eager"
                />
              </div>
            </Link>
            <Link target="_blank" href={`mailto:${agentData?.email}`}>
              <div className="">
                <Image
                  className="bg-subDark h-4 w-8 px-2 py-1 sm:w-10 sm:h-6 sm:px-3 xl:w-16 xl:h-8 xl:px-3 xl:py-[5px] 2xl:py-[8px] "
                  src={images.Message}
                  alt={images.Message}
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                  width={24}
                  height={24}
                  quality={70}
                  loading="eager"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  export default AgentCard;
