import { IMAGE_BLUR } from "@/components/constant/image-blure"
import Header from "@/components/templates/Header"
import ListForm from "@/components/templates/ListForm"
import { getServerDictionary } from "@/lib/dictionary"
import { images } from "@/utils/exportsImages"
import { getData } from "@/utils/fetchData"
import { Image_TP } from "image"
import { Metadata } from "next"
import Image from "next/image"
type AddListProps_TP = {
    params: {
        lang: "ar" | "en" | "ru"
    }
}
export const metadata: Metadata = {
    title: "List Your Property | Luxurylivinhomes",
    description: "Add your list",
}
const AddList = async ({ params: { lang } }: AddListProps_TP) => {
    const locale: any = await getServerDictionary(lang)
    const imagesData = await getData({
        endpoint: "api/formImage/list",
    })
    return (
        <div className="bg-black">
            <Header image={images.header} subTitle={"listyourProperty"} title={locale.home} />
            <div dir="ltr" className="relative overflow-x-hidden -translate-y-[124px]">
                <div className="w-full hidden lg:flex overflow-hidden">
                    {imagesData?.data?.images?.map((image: Image_TP) => (
                        <Image
                            placeholder="blur"
                            blurDataURL={IMAGE_BLUR}
                            src={image?.original_url}
                            key={image?.id}
                            width={2400}
                            height={2400}
                            alt={`${image?.file_name}`}
                            className="object-cover min-h-[1280px] w-1/5"
                        />
                    ))}
                </div>
                <div className="lg:absolute top-0 left-20  w-full">
                    <ListForm />
                </div>
            </div>
        </div>
    )
}

export default AddList
