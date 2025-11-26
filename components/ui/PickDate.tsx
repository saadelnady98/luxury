"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import { formatDate } from "@/utils/functions"
import { useEffect, useState } from 'react'
import { Button } from "./button"
import useCurrentLang from "../hooks/useCurrentLang"
import { dictionary } from "@/dictionaries/clientContent"

type PickDateProps_TP = {
    form: any
    name: string
    reset?: boolean
}
const PickDate = ({ form, name, reset }: PickDateProps_TP) => {
    const { lang } = useCurrentLang()
    const locale = dictionary[lang!]
    const [date, setDate] = useState<Date>()
    useEffect(() => {
        setDate(null as any)
        form.setValue(name, '')
    }, [reset])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-mainGray hover:text-mainGray"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{locale?.pick_date}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-none">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                        setDate(date)
                        form.setValue(name, formatDate(date!))
                    }}
                    initialFocus
                    className="!max-h-[400px]"
                />
            </PopoverContent>
        </Popover>
    )
}

export default PickDate