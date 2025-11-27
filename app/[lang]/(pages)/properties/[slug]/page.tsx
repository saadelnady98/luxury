import PropertyDetailsSection from "@/components/templates/PropertyDetailsSection"
import PropertiesSlider from "@/components/ui/PropertiesSlider"
import SimilarProperities from "@/components/ui/SimilarProperities"
import { getServerDictionary } from "@/lib/dictionary"
import { getData } from "@/utils/fetchData"

type PropertiesProps_TP = {
    params: {
        lang: "ar" | "en" | "ru"
        slug: string
    }
}

const Properties = async ({ params: { lang, slug } }: PropertiesProps_TP) => {
    const locale = await getServerDictionary(lang)
    const property = await getData({
        endpoint: `api/product/${slug}`,
        lang,
    })

    return (
        <>
            <PropertiesSlider propertyImages={property?.data?.images} />
            <PropertyDetailsSection locale={locale} propertyData={property?.data} />
            <SimilarProperities propertyData={property?.data} />
        </>
    )
}

export default Properties
