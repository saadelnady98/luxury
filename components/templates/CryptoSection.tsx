// @ts-nocheck
import Image from "next/image"
import SectionHeader from "../ui/SectionHeader"
import { getData } from "@/utils/fetchData"
import { getServerDictionary } from "@/lib/dictionary"
import FadeIn from "../ui/motion-elements/FadeIn"
import { IMAGE_BLUR } from "../constant/image-blure"
type DesignSectionProps_TP = {
    lang: "ar" | "en" | "ru"
}
const CryptoSection = async ({ lang }: DesignSectionProps_TP) => {
    const locale: any = await getServerDictionary(lang)

    const cryptoData = await getData({
        endpoint: "api/setting/currency",
        lang,
    })

    return (
        <FadeIn className="my-4 lg:my-24">
            <SectionHeader littelText={locale?.everyCommunity} title={locale?.cryptoCurrency} />
            <div className="w-full h-[30vh] lg:h-[60vh] overflow-hidden">
                <Image
                    className="object-cover object-center w-full h-full mt-8 lg:mt-16"
                    src={cryptoData?.data?.image?.original_url}
                    alt={cryptoData?.data?.image?.file_name}
                    width={1920}
                    height={1080}
                    quality={65}
                    loading="lazy"
                    //  placeholder="blur"
                    // blurDataURL={IMAGE_BLUR}
                />
            </div>
            <p className="container text-sm lg:text-2xl text-darkText lg: text-center leading-8 lg:leading-[50px] mt-8 lg:mt-10">
                {cryptoData?.data?.description}
            </p>
        </FadeIn>
    )
}

export default CryptoSection
