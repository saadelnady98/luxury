"use client"
import { getData } from "@/utils/fetchData"
import { CSSProperties, useEffect, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
type SelectCommunity_TP = {
    form: any
    reset?: boolean
    bgInput?: boolean
    placeholder?: string
    styles?: CSSProperties
    name?: "address" | "community"
}
const SelectCommunity = ({ form, reset, placeholder, bgInput, styles, name = "community" }: SelectCommunity_TP) => {
    const [options, setOptions] = useState([])
    const { lang } = useCurrentLang()
    const getCommunities = async () => {
        const data = await getData({
            endpoint: "api/community",
            lang,
        })
        const options = data?.data?.map((community: { slug: string; name: string }) => ({
            slug: community?.slug,
            value: community?.slug,
            label: community?.name,
        }))
        setOptions(options)
    }
    useEffect(() => {
        if (!options.length) getCommunities()
    }, [])
    return (
        <div className="h-[58px]">
            <SelectComp
                form={form}
                name={name}
                options={options}
                reset={reset}
                placeholder={placeholder}
                bgInput={bgInput}
                styles={styles}
            />
        </div>
    )
}

export default SelectCommunity
