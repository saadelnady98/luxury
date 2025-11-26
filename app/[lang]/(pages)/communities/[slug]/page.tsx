"use client";
import useCurrentLang from "@/components/hooks/useCurrentLang";
import Header from "@/components/templates/Header";
import ProductFilterBar from "@/components/templates/ProductFilterBar";
import Map from "@/components/ui/Map";
import PaginationButtons from "@/components/ui/PaginationButtons";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";
import Loader from "@/components/ui/loader/Loader";
import { dictionary } from "@/dictionaries/clientContent";
import { images } from "@/utils/exportsImages";
import { getData } from "@/utils/fetchData";
import { usePathname } from "next/navigation";
import { Product_TP } from "product";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
type CommunityProps_TP = {
  params: {
    slug: string;
  };
};

const Community = ({ params: { slug } }: CommunityProps_TP) => {
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
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const { lang } = useCurrentLang();
  const locale = dictionary[lang!];
  const [amenity, setAmenity] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [params, setParams] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [reset, setReset] = useState(false);
  const [hide, setHide] = useState(false);
  const [page, setPage] = useState(1);
  const [productsData, setProductsData] = useState<{
    data: Product_TP[];
    pagination: any;
  }>([] as never);
  const form = useForm<any>();
  const getProductsData = async () => {
    const navbarSlugs = ["luxury", "buy", "sell", "rent", "new-project"];
    const currentNavbarSlug = navbarSlugs.find((currSlug) => currSlug === slug);
    const navBarSlugParam = !!currentNavbarSlug
      ? `&category_slug=${currentNavbarSlug}`
      : "";
    // const typeParam = type !== "all" ? `&type_slug=${type}` : "";
    const types = propertyType.length
      ? `&${encodeURIComponent(JSON.stringify(propertyType))}`
      : "";
    const typesSearchParams = new URLSearchParams();
    propertyType.forEach((item, index) =>
      typesSearchParams.append(`type[${index}]`, item.toString())
    );
    const additionalParams = params
      ? `&${params
          .replace("category", "category_slug")
          .replace("New+project", "new-project")
          .replace("community", "community_slug")
          .replace("period", "rental_period")}`
      : "";
    const paramsWithFilter = `${navBarSlugParam}${additionalParams}&${typesSearchParams}`;
    try {
      const data = await getData({
        endpoint: `api/product?sort=price&order=${order}${paramsWithFilter}&per_page=10&page=${page}`,
        lang,
      });

      setProductsData(data);
      setLoading(false);
    } catch (error) {
      throw new Error("Error getting data", error as ErrorOptions);
    } finally {
      setHide(false);
    }
  };

  useEffect(() => {
    getProductsData();
    setLoading(true);
  }, [order, isFormSubmitted, reset, propertyType, page]);

  const submitHandler = (values: any) => {
    const allValues = {
      ...values,
      category: values?.category?.value,
      community: values?.community?.value,
      period: values?.period?.value,
      furnishing: values?.furnishing?.value,
    };

    const nonEmptyFields = Object.fromEntries(
      Object.entries(allValues).filter(([_, value]) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        } else {
          return value !== "" && value !== undefined;
        }
      })
    );
    //@ts-ignore
    const queryParams = new URLSearchParams(nonEmptyFields);
    amenity.forEach((item, index) =>
      queryParams.append(`amenities[${index}]`, item.toString())
    );
    setParams(queryParams.toString());
    setIsFormSubmitted((prev) => !prev);
  };

  if (!productsData) return null;

  return (
    <>
      {showMap ? (
        <div className="w-full flex justify-center relative -translate-y-4 fade_out z-50">
          <button
            className="absolute top-2 left-2 bg-white text-black px-16 py-4 z-50"
            onClick={() => setShowMap(false)}
          >
            {locale?.exit_map}
          </button>
          <Map
            zoom={3.2}
            center={{
              lat: +productsData?.data[0]?.location?.lat,
              lng: +productsData?.data[0]?.location?.long,
            }}
            width="100%"
            height="830px"
            markerPositions={productsData?.data?.map(
              (product) => product?.location
            )}
          />
        </div>
      ) : (
        <div>
          <Header
            image={images.header}
            title={locale?.home}
            subTitle={slug === "new-project" ? "newProject" : slug}
          />
          <div
            className={`mb-4 lg:mb-16 px-4 lg:px-10 ${
              navbarTransparent.some((path) => path == `/${lastSegment}`)
                ? "-translate-y-16"
                : "mt-8"
            }`}
          >
            <ProductFilterBar
              form={form}
              setAmenity={setAmenity}
              setPropertyType={setPropertyType}
              submitHandler={submitHandler}
              setParams={setParams}
              setShowMap={setShowMap}
              setOrder={setOrder}
              setReset={setReset}
              reset={reset}
              hide={hide}
              setHide={setHide}
            />
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 lg:px-8 gap-8 mt-4 lg:mt-8 min-h-[300px]">
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div className="bg-[#171717] p-8" key={index}>
                      <ProjectCardSkeleton />
                    </div>
                  ))
                : productsData?.data?.map((product: any) => (
                    <div className="bg-[#171717] p-8" key={product.id}>
                      <ProjectCard
                        product={product}
                        imageWrapperStyle=" "
                        separator
                      />
                    </div>
                  ))}
            </div>

            {!loading && productsData?.data?.length > 1 && (
              <PaginationButtons
                locale={locale}
                pages={Math.ceil(productsData?.pagination?.total / 4)}
                setPage={setPage}
                currentPage={page}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Community;
