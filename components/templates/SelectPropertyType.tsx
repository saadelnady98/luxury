"use client"
import { getData } from "@/utils/fetchData"
import { useEffect, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
type SelectPropertyType_TP = {
    form: any
    reset?: boolean
    placeholder?: string
}
const SelectPropertyType = ({ form, reset, placeholder }: SelectPropertyType_TP) => {
    const [options, setOptions] = useState([])
    const { lang } = useCurrentLang()
    const getPropertyTypes = async () => {
        const data = await getData({
            endpoint: "api/type",
            lang,
        })
        const options = data?.data?.map((propertyType: { slug: string; name: string; id: number }) => ({
            slug: propertyType?.slug,
            value: propertyType?.slug,
            label: propertyType?.name,
            id: propertyType?.id,
        }))
        setOptions(options)
    }
    useEffect(() => {
        if (!options.length) getPropertyTypes()
    }, [])
    return (
        <div className="h-[58px]">
            <SelectComp
                form={form}
                name="type"
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

export default SelectPropertyType
