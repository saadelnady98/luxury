"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { FormControl, FormField, FormItem } from "./form"
import { Label } from "./label"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    form: any
    name: string
    label?: string
    reset?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, name, form, label, reset, ...props }) => {
        const [value, setValue] = React.useState("")
        React.useEffect(() => {
            setValue("")
        }, [reset])
        const classes = cn({
            "py-4 px-4 focus:outline-none bg-inputBg bg-opacity-50 placeholder-mainGray border border-[#d9d9d9] border-opacity-20 capitalize h-[58px]":
                true,
            "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none":
                type === "number",
        })
        return (
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="w-full flex flex-col">
                        <Label htmlFor={name} className="text-start text-mainGray">
                            {label}
                        </Label>
                        <FormControl>
                            <input
                                placeholder={props.placeholder}
                                type={type}
                                id={name}
                                className={cn(`${classes}`, className)}
                                {...props}
                                {...field}
                                value={value}
                                onChange={({ target }) => {
                                    setValue(target.value)
                                    form.setValue(name, target.value)
                                }}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
