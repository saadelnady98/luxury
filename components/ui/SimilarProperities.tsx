import ProjectCard from "./ProjectCard"
import { getData } from "@/utils/fetchData"
import { PropertyData_TP } from "propertyData"

const SimilarProperities = async ({ propertyData }: { propertyData: PropertyData_TP }) => {
    const similarsArray = await getData({
        // endpoint: `api/product/?type_slug=${propertyData?.type}&category_slug=${propertyData?.category}`,
        endpoint: `api/product?per_page=9&type=${propertyData?.type[0]?.id}&category_slug=${propertyData?.category_slug}`,
    })

    return (
        <>
            {similarsArray?.data?.filter((product) => product?.slug != propertyData?.slug).length ? (
                <div className="container mb-16 lg:mb-32">
                    <p className="text-2xl md:text-4xl lg:text-5xl  py-10">Similar Properities</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {similarsArray?.data.length > 3
                            ? similarsArray?.data?.slice(0, 3)?.map((product: any) => (
                                  <div key={product?.slug} className="bg-mainGray bg-opacity-10 p-4 lg:p-10 ">
                                      <ProjectCard product={product} />
                                  </div>
                              ))
                            : similarsArray?.data?.map((product: any) => (
                                  <div key={product?.slug} className="bg-mainGray bg-opacity-10 p-4 lg:p-10 ">
                                      <ProjectCard product={product} />
                                  </div>
                              ))}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default SimilarProperities
