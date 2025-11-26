"use client"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { formatDate } from "@/utils/functions"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { Button } from "./button"

type DatePickerProps_TP = {
  form: any
  name: string
  dataValue: Date
}
function DatePicker({ form, name, dataValue }: DatePickerProps_TP) {
  const [date, setDate] = React.useState<Date>(dataValue || new Date)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formatDate(date) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date: Date) => {
            setDate(date)
            form.setValue(name, formatDate(date))
          }}
          initialFocus
          {...form.register(name)}
        />
      </PopoverContent>
    </Popover>
  )
}
export default DatePicker