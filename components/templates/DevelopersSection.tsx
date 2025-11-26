import { getServerDictionary } from "@/lib/dictionary"
import DeveloperSlider from "../ui/DeveloperSlider"
import SectionHeader from "../ui/SectionHeader"
import FadeY from "../ui/motion-elements/FadeY"
type DesignSectionProps_TP = {
    lang: "ar" | "en" | "ru"
}
const DevelopersSection = async ({ lang }: DesignSectionProps_TP) => {
    const locale: any = await getServerDictionary(lang)

    return (
        <FadeY dir="top" className="container bg-darkMode py-10 lg:pt-16">
            <SectionHeader littelText={locale?.coveringDevelopers} title={locale?.developers} />
            <DeveloperSlider />
        </FadeY>
    )
}

export default DevelopersSection
