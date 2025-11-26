"uce client"
import { dictionary } from "@/dictionaries/clientContent"
import { images } from "@/utils/exportsImages"
import Image from "next/image"
import { UseFormReturn } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import Dropdown from "../ui/Dropdown"
import FilterMenu from "./FilterMenu"
import PropertyTypeFilterBar from "./PropertyTypeFilterBar"
import { IMAGE_BLUR } from "../constant/image-blure"
type ProductFilterBar = {
    form: UseFormReturn<any, any, undefined>
    setParams: React.Dispatch<React.SetStateAction<string>>
    setAmenity: React.Dispatch<React.SetStateAction<string[]>>
    setPropertyType: React.Dispatch<React.SetStateAction<string[]>>
    setOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>
    setShowMap: React.Dispatch<React.SetStateAction<boolean>>
    setReset: React.Dispatch<React.SetStateAction<boolean>>
    setHide: React.Dispatch<React.SetStateAction<boolean>>
    hide: boolean
    reset: boolean
    submitHandler: (values: any) => void
}
const ProductFilterBar = ({
    form,
    setAmenity,
    setPropertyType,
    submitHandler,
    setParams,
    setShowMap,
    setOrder,
    setReset,
    reset,
    setHide,
    hide,
}: ProductFilterBar) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]

    return (
        <div className="grid lg:grid-cols-8 grid-cols-1 lg:justify-between lg:px-0 px-4 items-center relative">
            <div className="lg:static relative col-span-1 -bottom-[5.6rem] right-6 w-[200px]">
                <Dropdown title={locale?.price} className="border p-3 border-[#171717]" showIcon={true}>
                    <div className="flex flex-col gap-y-4">
                        <button onClick={() => setOrder("asc")}>{locale?.highest_price}</button>
                        <button onClick={() => setOrder("desc")}>{locale?.lowest_price}</button>
                    </div>
                </Dropdown>
            </div>
            <PropertyTypeFilterBar reset={reset} setPropertyType={setPropertyType} />
            <div className="flex gap-x-2 justify-end md:static relative left-6 col-span-2">
                <button className="flex gap-x-2 border border-[#171717]  p-3" onClick={() => setShowMap(true)}>
                    <Image
                        src={images?.map}
                        width={20}
                        height={20}
                         placeholder="blur"
                        blurDataURL={IMAGE_BLUR}
                        alt="map"
                    />
                    <span>{locale?.map_view}</span>
                </button>
                <button className="flex gap-x-2 border border-[#171717]  p-3" onClick={() => setHide((prev) => !prev)}>
                    <Image
                        src={images.filter}
                        width={20}
                        height={20}
                        placeholder="blur"
                       blurDataURL={IMAGE_BLUR}
                        alt="map"
                    />
                    <span>{locale?.filter}</span>
                </button>
                <div className={`${!hide ? "hidden" : "block"}`}>
                    <FilterMenu
                        setHide={setHide}
                        form={form}
                        setAmenity={setAmenity}
                        setPropertyType={setPropertyType}
                        submitHandler={submitHandler}
                        setParams={setParams}
                        setReset={setReset}
                        reset={reset}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductFilterBar
