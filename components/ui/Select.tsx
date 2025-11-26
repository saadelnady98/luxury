"use client"
import { Options_TP } from "options"
import { CSSProperties, useEffect, useState } from "react"
import Select from "react-select"
import { FormControl, FormField, FormItem } from "./form"

type SelectCompProps_TP = {
    options: Options_TP[]
    form: any
    name: string
    isLoading?: boolean
    required?: boolean
    isDisabled?: boolean
    bgInput?: boolean
    className?: string
    styles?: CSSProperties
    defaultValue?: {
        id: number
        value: string
        label: string
    }
    [x: string]: unknown
    reset?: boolean
}

export default function SelectComp({
    form,
    name,
    bgColor,
    options,
    isLoading,
    isDisabled,
    defaultValue,
    className,
    bgInput = true,
    reset,
    styles,
    ...props
}: SelectCompProps_TP) {
    const [optionValue, setValue] = useState<any>([])
    useEffect(() => {
        setValue([])
    }, [reset])
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="h-full w-full">
                        <FormControl>
                            <Select
                                defaultValue={defaultValue}
                                isSearchable
                                isLoading={isLoading}
                                options={options as any}
                                isDisabled={isDisabled}
                                className={`h-full w-full capitalize ${bgColor ? bgColor : bgInput && "bg-inputBg"}`}
                                placeholder={(props.placeholder as string) || name}
                                {...field}
                                {...props}
                                value={optionValue}
                                onChange={(value) => {
                                    setValue(value)
                                    form.setValue(name, value)
                                }}
                                // styles={{
                                //     control: (baseStyle) => ({
                                //         ...baseStyle,
                                //         ...styles,
                                //     }),
                                // }}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </>
    )
}
