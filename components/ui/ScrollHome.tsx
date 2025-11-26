import { getData } from "@/utils/fetchData"
import Scroll from "./Scroll"

type DesignSectionProps_TP = {
    lang: "ar" | "en" | "ru"
}

async function ScrollHome({ lang }: DesignSectionProps_TP) {
    const imageHome = await getData({
        endpoint: "api/slider",
        lang,
    })

    return (
        <>
            <div className="relative">
                <Scroll image={imageHome}></Scroll>
            </div>
        </>
    )
}

export default ScrollHome
