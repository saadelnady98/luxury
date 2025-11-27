import { IMAGE_BLUR } from "@/components/constant/image-blure"
import Header from "@/components/templates/Header"
import FadeY from "@/components/ui/motion-elements/FadeY"
import { getServerDictionary } from "@/lib/dictionary"
import { images } from "@/utils/exportsImages"
import { getData } from "@/utils/fetchData"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

type DevelopersProps_TP = {
    params: {
        lang: "ar" | "en" | "ru"
    }
}
export const metadata: Metadata = {
    title: `Developers | Luxurylivinhomes`,
    description:
        "Elevate your real estate development projects with our expertise and innovation. From concept to completion, we specialize in crafting exceptional properties that redefine modern living. Explore our portfolio of groundbreaking developments, featuring cutting-edge designs, sustainable practices, and unmatched quality. Partner with us to bring your vision to life and create iconic spaces that shape the future of communities",
}

const Developers = async ({ params: { lang } }: DevelopersProps_TP) => {
    const locale: any = await getServerDictionary(lang)
    const developersData = await getData({
        endpoint: "api/developer",
        lang,
    })
    return (
        <>
            <Header
                image={images.header}
                subTitle={"developers"}
                title={locale?.home}
                mainTitle={locale?.all_developers}
            />
            <div className="container grid gird-cols-2 lg:grid-cols-3 gap-9 -translate-y-16">
                {developersData?.data?.map((developer: any, index: number) => (
                    <FadeY once dir="top" delay={index * 0.01}>
                        <Link href={`/developers/${developer?.slug}`} key={developer?.slug}>
                            <div className="w-full h-28 md:h-44 overflow-hidden bg-mainGray bg-opacity-20 flex justify-center items-center">
                                <Image
                                    src={developer?.image?.original_url}
                                    width={600}
                                    height={500}
                                    loading="eager"
                                    //  placeholder="blur"
                                    // blurDataURL={IMAGE_BLUR}
                                    alt="community"
                                    className="object-cover object-center p-4 xl:p-8 w-1/3 lg:w-1/2"
                                    key={developer}
                                />
                            </div>
                        </Link>
                    </FadeY>
                ))}
            </div>
        </>
    )
}

export default Developers
