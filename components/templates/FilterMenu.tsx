"use client"
import { dictionary } from "@/dictionaries/clientContent"
import { X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { UseFormReturn } from "react-hook-form"
import useCurrentLang from "../hooks/useCurrentLang"
import PickDate from "../ui/PickDate"
import SelectComp from "../ui/Select"
import SubButton from "../ui/button/SubButton"
import { Form } from "../ui/form"
import { Input } from "../ui/input"
import AllAmenitiesFilterBar from "./AllAmenitiesFilterBar"
import SelectCategory from "./SelectCategory"
import SelectCommunity from "./SelectCommunity"
import SelectRentalPeriod from "./SelectRentalPeriod"

type FilterMenu = {
    form: UseFormReturn<any, any, undefined>
    setAmenity: React.Dispatch<React.SetStateAction<string[]>>
    setPropertyType: React.Dispatch<React.SetStateAction<string[]>>
    setParams: React.Dispatch<React.SetStateAction<string>>
    setHide: React.Dispatch<React.SetStateAction<boolean>>
    setReset: React.Dispatch<React.SetStateAction<boolean>>
    reset: boolean
    submitHandler: (values: any) => void
}
const FilterMenu = ({
    form,
    setAmenity,
    setPropertyType,
    submitHandler,
    setParams,
    setHide,
    reset,
    setReset,
}: FilterMenu) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const pathname = usePathname()
    const parts = pathname.split("/")
    const lastEndpointOfUrl = parts[parts.length - 1]
    const notDisplayCategoriesFilter = ["luxury", "buy", "sell", "rent", "new-project"]
    const isNotDisplayCategory = notDisplayCategoriesFilter.some((path) => path === lastEndpointOfUrl)
    const isNotDisplayCommunity = notDisplayCategoriesFilter.some((path) => path === lastEndpointOfUrl)
    const displayHandoverDate = ["new-project", "buy", "luxury"]
    const isDisplayHandoverDate = displayHandoverDate.some((path) => path === lastEndpointOfUrl)
    const resetFields = () => {
        form.reset()
        setParams("")
        setReset((prev) => !prev)
        // @ts-ignore
        setAmenity([])
        setPropertyType([])
        window.scrollTo({
            top: 200,
            behavior: "smooth", // This makes the scrolling smooth
        })
    }
    const furnishingOptions = [
        {
            id: 1,
            value: "1",
            label: "Yes",
        },
        {
            id: 2,
            value: "0",
            label: "No",
        },
    ]
    // styling select input
    useEffect(() => {
        if (typeof window !== "undefined") {
            const selectWrapper = Array.from(document.querySelectorAll(".css-b62m3t-container > div")) as HTMLElement[]
            if (!!selectWrapper) {
                selectWrapper.forEach((element) => {
                    element.style.cssText = "height:57px !important; background-color:transparent !important"
                })
            }
        }
    }, [])

    return (
        <div className="lg:absolute fixed z-50 bg-[#111010] lg:p-4 p-2 lg:w-[535px] w-full lg:h-auto h-screen ltr:right-0 lg:top-20 top-0  rtl:left-0 ">
            <div className="flex justify-between">
                <h6 className="text-start text-xl ">{locale?.perfect_place}</h6>
                <button
                    onClick={() => setHide(false)}
                    className="lg:hidden bg-red-500 rounded-full w-8 h-8 scale-75 flex justify-center items-center"
                >
                    <X />
                </button>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)} className="bg-[#111010] overflow-hidden capitalize">
                    <Input
                        reset={reset}
                        form={form}
                        name="search"
                        placeholder={locale?.search}
                        label={locale?.search}
                        className="!py-3 bg-transparent "
                    />
                    {!isNotDisplayCategory ? (
                        <div className="my-4">
                            <p className="text-start text-mainGray text-sm mb-2">{locale?.category}</p>
                            <SelectCategory form={form} reset={reset} placeholder={locale?.category} />
                        </div>
                    ) : null}
                    {lastEndpointOfUrl === "rent" ? (
                        <div className="my-4">
                            <p className="text-start text-mainGray text-sm mb-2">{locale?.period}</p>
                            <SelectRentalPeriod
                                form={form}
                                reset={reset}
                                placeholder={locale?.period}
                                bgInput={false}
                            />
                        </div>
                    ) : null}
                    {isNotDisplayCommunity ? (
                        <div className="my-4">
                            <p className="text-start text-mainGray text-sm mb-2">{locale?.community}</p>
                            <SelectCommunity
                                form={form}
                                reset={reset}
                                placeholder={locale?.community}
                                bgInput={false}
                            />
                        </div>
                    ) : null}
                    {isDisplayHandoverDate ? (
                        <div className="my-4">
                            <p className="text-start text-mainGray text-sm mb-2">{locale?.handover_date}</p>
                            <PickDate form={form} name="handover_date" reset={reset} />
                        </div>
                    ) : null}
                    {/* price */}
                    <div className="my-4">
                        <p className="text-start text-mainGray text-sm">{locale?.price} (AED)</p>
                        <div className="flex gap-x-4">
                            <Input
                                reset={reset}
                                form={form}
                                name="price_min"
                                placeholder={locale?.min}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                            <Input
                                reset={reset}
                                form={form}
                                name="price_max"
                                placeholder={locale?.max}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                        </div>
                    </div>
                    {/* bedrooms */}
                    <div className="my-4">
                        <p className="text-start text-mainGray text-sm">{locale?.beds}</p>
                        <div className="flex gap-x-4">
                            <Input
                                reset={reset}
                                form={form}
                                name="bedroom_min"
                                placeholder={locale?.min}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                            <Input
                                reset={reset}
                                form={form}
                                name="bedroom_max"
                                placeholder={locale?.max}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                        </div>
                    </div>
                    {/* baths */}
                    <div className="my-4">
                        <p className="text-start text-mainGray text-sm">{locale?.baths}</p>
                        <div className="flex gap-x-4">
                            <Input
                                reset={reset}
                                form={form}
                                name="bathroom_min"
                                placeholder={locale?.min}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                            <Input
                                reset={reset}
                                form={form}
                                name="bathroom_max"
                                placeholder={locale?.max}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                        </div>
                    </div>
                    {/* size */}
                    <div className="my-4">
                        <p className="text-start text-mainGray text-sm">{locale?.size}</p>
                        <div className="flex gap-x-4">
                            <Input
                                reset={reset}
                                form={form}
                                name="size_min"
                                placeholder={locale.min}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                            <Input
                                reset={reset}
                                form={form}
                                name="size_max"
                                placeholder={locale.max}
                                type="number"
                                className="!py-3 bg-transparent md:max-w-full"
                            />
                        </div>
                    </div>
                    {/* amenities */}
                    <div className="my-4">
                        <p className="text-start text-mainGray text-sm mb-2">{locale?.amenities}</p>
                        <AllAmenitiesFilterBar setAmenity={setAmenity} reset={reset} />
                    </div>
                    {/* furnishing */}
                    <div className="my-4">
                        <p className="text-start text-mainGray text-sm mb-2">{locale?.furnishing}</p>
                        <div className="h-[58px] ">
                            <SelectComp
                                form={form}
                                name="furnishing"
                                placeholder={locale?.furnishing}
                                options={furnishingOptions as any}
                                reset={reset}
                                bgInput={false}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <SubButton type="submit" className="!py-2">
                            {locale?.filter}
                        </SubButton>
                        <button type="button" className="text-mainGray" onClick={resetFields}>
                            {locale?.reset}
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default FilterMenu
