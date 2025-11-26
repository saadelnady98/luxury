import { IMAGE_BLUR } from "@/components/constant/image-blure"
import ProjectCard from "@/components/ui/ProjectCard"
import { getServerDictionary } from "@/lib/dictionary"
import { getData } from "@/utils/fetchData"
import { Metadata } from "next"
import Image from "next/image"
import { Product_TP } from "product"

type CommunityProps_TP = {
    params: {
        lang: "ar" | "en" | "ru"
        slug: string
    }
}
export async function generateMetadata({ params: { lang, slug } }: CommunityProps_TP): Promise<Metadata> {
    const developerData = await getData({
        endpoint: `api/developer/${slug}`,
        lang,
    })
    return {
        title: ` ${developerData?.data?.name}| Luxurylivinhomes`,
        description: developerData?.data?.description,
    }
}
const Developers = async ({ params: { lang, slug } }: CommunityProps_TP) => {
    const locale: any = await getServerDictionary(lang)
    const developerData = await getData({
        endpoint: `api/developer/${slug}`,
        lang,
    })
    const productsData = await getData({
        endpoint: `api/product?developer_slug=${slug}`,
        lang,
    })
    return (
        <div className="container overflow-hidden my-4 md:my-6 lg:my-10">
            <div className="flex flex-col justify-center items-center mb-4 md:mb-10 bg-mainGray  bg-opacity-20">
                <Image
                    className="w-20 md:w-40 p-2 md:p-4 mt-4 md:mt-6 object-cover"
                    src={developerData?.data?.image?.original_url}
                    alt={developerData?.data?.name}
                     placeholder="blur"
                     blurDataURL={IMAGE_BLUR}
                    width={1200}
                    height={600}
                />
                <p className="text-mainGray px-16 text-center my-4 lg:my-10">{developerData?.data?.description}</p>
            </div>
            <div className="mb-4 sm:mb-10 lg:mb-20">
                {productsData?.data?.length !== 0 && (
                    <>
                        <p className="md:text-3xl mb-4 md:mb-10">{locale?.allAvailableProperties}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                            {productsData?.data?.map((product: Product_TP) => (
                                <div key={product.slug} className="bg-mainGray w-full bg-opacity-10 p-4 lg:p-8 ">
                                    <ProjectCard separator={true} product={product} />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Developers
