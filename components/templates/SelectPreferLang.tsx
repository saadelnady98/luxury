"use client"
import { dictionary } from "@/dictionaries/clientContent"
import useCurrentLang from "../hooks/useCurrentLang"
import SelectComp from "../ui/Select"
type SelectPreferLang_TP = {
    form: any
    reset?: boolean
}
const SelectPreferLang = ({ form, reset }: SelectPreferLang_TP) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const preferOptions: any = {
        ar: [
            {
                value: "عربي",
                label: "عربي",
            },
            {
                value: "انجليزي",
                label: "انجليزي",
            },
            {
                value: "روسي",
                label: "روسي",
            },
        ],
        en: [
            {
                value: "arabic",
                label: "arabic",
            },
            {
                value: "english",
                label: "english",
            },
            {
                value: "russian",
                label: "russian",
            },
        ],
        ru: [
            {
                value: "арабский",
                label: "арабский",
            },
            {
                value: "английский",
                label: "английский",
            },
            {
                value: "русский",
                label: "русский",
            },
        ],
    }

    return (
        <div className="h-fit  !bg-transparent">
            <SelectComp
                bgInput={false}
                placeholder={locale?.prefer_lang}
                form={form}
                options={preferOptions[lang]}
                name="language"
                reset={reset}
            />
        </div>
    )
}

export default SelectPreferLang
