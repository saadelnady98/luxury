"use client"
import { getData } from "@/utils/fetchData"
import { useEffect, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
type SelectCategory_TP = {
    form: any
    reset?: boolean
    placeholder?: string
}
const SelectCategory = ({ form, reset, placeholder }: SelectCategory_TP) => {
    const [options, setOptions] = useState([])
    const { lang } = useCurrentLang()
    const getCategories = async () => {
        const data = await getData({
            endpoint: "api/category",
            lang,
        })
        const options = data?.data?.map((category: { slug: string; name: string }) => ({
            slug: category?.slug,
            value: category?.slug,
            label: category?.name,
        }))
        setOptions(options)
    }
    useEffect(() => {
        if (!options.length) getCategories()
    }, [])
    return (
        <div className="h-[58px]">
            <SelectComp form={form} name="category" options={options} reset={reset} placeholder={placeholder} />
        </div>
    )
}

export default SelectCategory
