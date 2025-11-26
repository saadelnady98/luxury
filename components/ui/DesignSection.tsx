import { getServerDictionary } from "@/lib/dictionary"
import { getData } from "@/utils/fetchData"
import Section3 from "./Section3"
import Section4 from "./Section4"
import StrategyImageSection from "./StrategyImageSection"
import WhatWeDo from "./WhatWeDo"
type DesignSectionProps_TP = {
    lang: "ar" | "en" | "ru"
}
async function DesignSection({ lang }: DesignSectionProps_TP) {
    const locale: any = await getServerDictionary(lang)

    const image = await getData({
        endpoint: "api/setting/about",
    })

 
    return (
        <div dir="ltr" className="box2 container sm:my-10 overflow-hidden">
            <div className="lg:container lg:px-28 2xl:px-40 lg:grid lg:grid-cols-4 grid-rows-2 relative">
                <WhatWeDo locale={locale} />

                <div className="border-[0.5px] border-opacity-40 border-mainColor relative lg:h-[320px] w-full px-4 py-8 sm:py-12 flex lg:flex-col justify-center gap-4">
                    <span className="text-xs lg:absolute top-4 left-4 pt-1 lg:pt-0  text-subGray">01</span>
                    <div>
                        <p className=" text-xl lg:text-3xl pb-2 lg:py-4">{locale?.mission}</p>
                        <p className=" text-mainGray text-sm lg:text-base pr-8">{locale?.mission_details}</p>
                    </div>
                    <span className=" absolute lg:hidden w-8 h-[1px] -top-[1px] -right-0 bg-mainColor"></span>
                    <span className=" absolute lg:hidden w-[1px] h-8 -top-0 -right-[1px] bg-mainColor"></span>
                    <span className="border-tick opacity-0 absolute w-8 h-[1px] -bottom-[1px] -left-[2px] bg-mainColor"></span>
                </div>
                <div></div>

                <div className="border-[0.5px] border-opacity-40 border-mainColor relative lg:h-[320px] w-full px-4 py-8 sm:py-12 flex lg:flex-col justify-center gap-4">
                    <span className="text-xs lg:absolute top-4 left-4 pt-1 lg:pt-0  text-subGray">02</span>
                    <span className="border-tick opacity-0 absolute hidden lg:block w-[1px] h-8 -bottom-[1px] -left-[1px] bg-mainColor"></span>
                    <span className="absolute lg:hidden w-8 h-[1px] -bottom-[1px] right-0 bg-mainColor"></span>
                    <div>
                        <p className=" text-xl lg:text-3xl pb-2 lg:py-4">{locale?.customer}</p>
                        <p className=" text-mainGray text-sm lg:text-base pr-8">{locale?.customer_details}</p>
                    </div>
                </div>

                <Section3 locale={locale} />
                <div></div>

                <Section4 locale={locale} />
                <StrategyImageSection image={image} />
            </div>
        </div>
    )
}

export default DesignSection
