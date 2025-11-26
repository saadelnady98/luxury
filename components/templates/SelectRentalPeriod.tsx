"use client"
import { getData } from "@/utils/fetchData"
import { useEffect, useState } from "react"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
type SelectRentalPeriod_TP = {
    form: any
    reset?: boolean
    bgInput?: boolean
    placeholder?: string
}
const SelectRentalPeriod = ({ form, reset, placeholder, bgInput }: SelectRentalPeriod_TP) => {
    const [options, setOptions] = useState([])
    const { lang } = useCurrentLang()
    const getRentalPeriods = async () => {
        const data = await getData({
            endpoint: "api/period",
            lang,
        })
        const options = data?.data?.map((rentalPeriod: { period: string; id: number }) => ({
            value: rentalPeriod?.id,
            label: rentalPeriod?.period,
            id: rentalPeriod?.id,
        }))
        setOptions(options)
    }
    useEffect(() => {
        if (!options.length) getRentalPeriods()
    }, [])
    return (
        <div className="h-[58px]">
            <SelectComp
                form={form}
                name="period"
                options={options}
                reset={reset}
                placeholder={placeholder}
                bgInput={bgInput}
            />
        </div>
    )
}

export default SelectRentalPeriod
