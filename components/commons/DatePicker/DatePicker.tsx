import { calendarToDate, dateToCalendarDateTime } from "@/utils/common"
import { DatePickerProps, DatePicker as HeroDatePicker } from "@heroui/react"
import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from "@internationalized/date"

export const DatePicker = ({
  value,
  onChange,
  ...props
}: { value?: Date; onChange: (date?: Date | null) => void } & Omit<
  DatePickerProps,
  "value" | "onChange"
>) => {
  const handleChangeDate = (
    date?: ZonedDateTime | CalendarDate | CalendarDateTime | null,
  ) => {
    const value = calendarToDate(date)
    onChange(value)
  }
  return (
    <HeroDatePicker
      {...props}
      value={dateToCalendarDateTime(value)}
      onChange={handleChangeDate}
    />
  )
}
