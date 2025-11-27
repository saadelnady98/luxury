import { getServerDictionary } from "@/lib/dictionary"
import { getData } from "@/utils/fetchData"
import dynamic from "next/dynamic"

type PropertiesProps_TP = {
  params: {
    lang: "ar" | "en" | "ru"
    slug: string
  }
}

// dynamic import
const PropertiesSlider = dynamic(
  () => import("@/components/ui/PropertiesSlider"),
  { ssr: false } // فقط إذا تريد تحميله في العميل
)

const PropertyDetailsSection = dynamic(
  () => import("@/components/templates/PropertyDetailsSection"),
  { ssr: true } // ممكن يكون server-side rendering
)

const SimilarProperities = dynamic(
  () => import("@/components/ui/SimilarProperities"),
  { ssr: false }
)

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
