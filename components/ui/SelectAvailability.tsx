"use client"
import { getData } from "@/utils/fetchData"
import { useEffect, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "./Select"
type SelectAvailability_TP = {
    form: any
    reset?: boolean
    placeholder?: string
}
const SelectAvailability = ({ form, reset, placeholder }: SelectAvailability_TP) => {
    const [options, setOptions] = useState([])
    const { lang } = useCurrentLang()
    const getCategories = async () => {
        const data = await getData({
            endpoint: "api/availability",
            lang,
        })
        const options = data?.data?.map((availability: { slug: string; name: string; id: number }) => ({
            slug: availability?.slug,
            value: availability?.slug,
            label: availability?.name,
            id: availability?.id,
        }))
        setOptions(options)
    }
    useEffect(() => {
        if (!options.length) getCategories()
    }, [])
    return (
        <div className="h-[58px]">
            <SelectComp
                form={form}
                name="availability"
                options={options}
                reset={reset}
                placeholder={placeholder}
                styles={{
                    minHeight: 80,
                }}
            />
        </div>
    )
}

export default SelectAvailability
