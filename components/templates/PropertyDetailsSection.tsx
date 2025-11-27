import { images } from "@/utils/exportsImages";
import Image from "next/image";
import Link from "next/link";
import { PropertyData_TP } from "propertyData";
import AgentCard from "../ui/AgentCard";
import Map from "../ui/Map";
import DownloadBrochure from "./DownloadBrochure";
import { IMAGE_BLUR } from "../constant/image-blure";

const PropertyDetailsSection = ({
  propertyData,
  locale,
}: {
  propertyData: PropertyData_TP;
  locale: any;
}) => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-28 mt-8 lg:my-16">
      <div className=" lg:col-span-2 flex flex-col gap-4 lg:gap-10">

        {/* price + badge */}
        <div className="flex justify-between items-center gap-2 capitalize">
          <span className="text-lg sm:text-xl lg:text-4xl ">
            {locale?.starts_from} :{" "}
            {propertyData?.price?.toLocaleString("en-US")}
          </span>
          <span className="px-4 lg:px-6 py-2 bg-mainColor text-textColor text-xs lg:text-base ">
            {propertyData?.badge}
          </span>
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl capitalize">
          {propertyData?.title}
        </p>

        {/* address + date */}
        <div className="grid grid-cols-2 capitalize">

          {/* location */}
          <div className="flex items-center gap-2">
            <Image
              className="w-10 lg:w-12 h-8 lg:h-10 p-2 border-[1px] border-mainGray border-opacity-20 my-auto"
              src={images.locationCard}
              alt={images.locationCard}
              width={12}
              height={12}
              quality={70}
              
              sizes="(max-width: 768px) 40px, 48px"
              loading="lazy"
            />

            <p className="text-mainGray text-xs sm:text-sm md:text-base lg:text-lg">
              {propertyData?.address}
            </p>
          </div>

          {/* handover date */}
          <div className="flex items-center gap-2">
            <Image
              className="w-10 lg:w-12 h-8 lg:h-10 p-2 border-[1px] border-mainGray border-opacity-20 my-auto"
              src={images.DateIcon}
              alt={images.DateIcon}
              width={12}
              height={12}
              quality={70}
              
              sizes="(max-width: 768px) 40px, 48px"
              loading="lazy"
            />

            {propertyData?.handover_date ? (
              <p className="text-mainGray text-xs sm:text-sm md:text-base lg:text-lg">
                {propertyData?.handover_date}
              </p>
            ) : propertyData?.rental_period?.period ? (
              <p className="text-mainGray text-xs sm:text-sm md:text-base lg:text-lg">
                {propertyData?.rental_period?.period}
              </p>
            ) : null}
          </div>
        </div>

        {/* category + type + community */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 justify-between items-center py-3 sm:py-4 md:py-6 border-y-[1px] border-mainGray border-opacity-20 capitalize">
          <div className="flex gap-4 text-xs sm:text-sm md:text-base lg:text-lg">
            <span>{locale?.propertyType}</span>
            <span className="text-mainGray">
              {propertyData?.type?.map((t) => t?.name).join(" - ")}
            </span>
          </div>

          <div className="flex lg:justify-center gap-4 text-xs sm:text-sm md:text-base lg:text-lg">
            <span>{locale?.category}</span>
            <span className="text-mainGray">{propertyData?.category}</span>
          </div>

          <div className="flex lg:justify-end gap-4 text-xs sm:text-sm md:text-base lg:text-lg">
            <span>{locale?.community}</span>
            <span className="text-mainGray">{propertyData?.community}</span>
          </div>
        </div>

        {/* property details */}
        <div className="capitalize">
          <p className="text-xl md:text-2xl lg:text-4xl pb-8">
            {locale?.propertyDetails}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 justify-between items-center">

            {/* size */}
            <div className="flex items-center gap-4">
              <Image
                className="w-10 h-10 p-2 md:w-20 md:h-20 md:p-4 border-[1px] border-opacity-20 border-mainGray"
                src={images.propertyDetails1}
                alt="size"
                width={64}
                height={64}
                quality={70}
                
                sizes="(max-width: 768px) 40px, 64px"
                loading="lazy"
              />
              <span className="text-sm md:text-base">
                {propertyData?.details?.min_size} : {propertyData?.details?.max_size}{" "}
                {locale?.perSqft}
              </span>
            </div>

            {/* bathroom */}
            <div className="flex items-center gap-4">
              <Image
                className="w-10 h-10 p-2 md:w-20 md:h-20 md:p-4 border-[1px] border-opacity-20 border-mainGray"
                src={images.propertyDetails2}
                alt="bathroom"
                width={64}
                height={64}
                quality={70}
                
                sizes="(max-width: 768px) 40px, 64px"
                loading="lazy"
              />
              <span className="text-sm md:text-base">
                {propertyData?.details?.min_bathroom} :{" "}
                {propertyData?.details?.max_bathroom}
              </span>
            </div>

            {/* bedroom */}
            <div className="flex items-center gap-4">
              <Image
                className="w-10 h-10 p-2 md:w-20 md:h-20 md:p-4 border-[1px] border-opacity-20 border-mainGray"
                src={images.propertyDetails3}
                alt="bedroom"
                width={64}
                height={64}
                
                quality={70}
                sizes="(max-width: 768px) 40px, 64px"
                loading="lazy"
              />
              <span className="text-sm md:text-base">
                {propertyData?.details?.min_bedroom} :{" "}
                {propertyData?.details?.max_bedroom}
              </span>
            </div>
          </div>
        </div>

        {/* amenities */}
        <div className="capitalize">
          <p className="text-2xl pb-8">{locale?.amenities}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {propertyData?.amenities?.map((amenity) => (
              <div key={amenity?.slug} className="flex items-center gap-4">
                <Image
                  className="w-10 h-10 filter invert opacity-50 p-2 md:w-20 text-textColor md:h-20 md:p-4 border-[1px] border-opacity-20 border-mainGray"
                  src={amenity?.icon?.original_url}
                  alt={amenity?.icon?.file_name}
                  width={64}
                  height={64}
                  quality={70}
                  
                  sizes="(max-width: 768px) 40px, 64px"
                  loading="lazy"
                />
                <span className="text-sm md:text-base">{amenity?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* description */}
        <div>
          <p className="text-xl md:text-2xl lg:text-4xl pb-6">
            {locale?.description}
          </p>

          <div className="text-mainGray text-sm sm:text-base md:text-lg lg:text-xl lg:leading-10 flex flex-col gap-4">
            <p
              className="line-clamp-[12] lg:line-clamp-none"
              dangerouslySetInnerHTML={{
                __html: propertyData?.description?.replace(/\n/g, "<br>") || "",
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-1 flex flex-col lg:flex-col justify-start items-center md:items-start gap-8 w-full my-8 lg:my-0 capitalize">

        <DownloadBrochure locale={locale} propertyData={propertyData} />

        {propertyData?.agent ? (
          <AgentCard
            wrapperClassName="border-[1px] w-full lg:h-[250px] md:w-full border-mainGray border-opacity-20"
            imageClassName="w-20 h-20 md:w-24 md:h-24 xl:w-36 xl:h-36 my-1 md:my-2"
            isOpened={true}
            isAgent={false}
            agentData={propertyData?.agent}
            showImage={false}
          />
        ) : null}

        {/* Map */}
        <div className="min-h-[220px] w-full max-h-[50rem] aspect-auto lg:aspect-square border-[1px] border-mainGray border-opacity-20 p-4 xl:p-10 overflow-hidden">
          <div className=" w-full h-full aspect-auto lg:aspect-square overflow-hidden">
            <Map
              markerPositions={[propertyData?.location]}
              height="100%"
              width="100%"
              center={{
                lat: propertyData?.location?.lat,
                lng: propertyData?.location?.long,
              }}
              zoom={10}
            />
          </div>
        </div>

        {/* developer logo */}
        {propertyData?.developer ? (
          <Link
            href={`/developers/${propertyData?.developer?.slug}`}
            className="border-[1px] w-full h-full max-h-[200px] py-20 border-mainGray flex justify-center items-center border-opacity-20 overflow-hidden"
          >
            <Image
              className="object-cover object-center w-1/3 lg:w-1/2"
              src={propertyData?.developer?.image?.original_url}
              alt={propertyData?.developer?.name}
              width={900}
              height={900}
              quality={70}
              
              placeholder="blur"
              blurDataURL={IMAGE_BLUR}
              sizes="(max-width: 768px) 200px, 300px"
              loading="lazy"
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
