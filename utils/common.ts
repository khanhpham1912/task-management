import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from "@internationalized/date"

export const objectToQueryString = (params: Record<string, any>) => {
  if (!params) return ""
  return Object.entries(params)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map(
            (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`,
          )
          .join("&")
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .join("&")
}

export const dateToCalendarDateTime = (date?: Date) => {
  if (!date) return
  const value = new Date(date)

  return new CalendarDateTime(
    value.getFullYear(),
    value.getMonth() + 1,
    value.getDate(),
  )
}

export const calendarToDate = (
  calendarValue?: ZonedDateTime | CalendarDate | CalendarDateTime | null,
): Date | null => {
  if (!calendarValue) return null

  if (calendarValue instanceof CalendarDate) {
    return new Date(
      calendarValue.year,
      calendarValue.month - 1,
      calendarValue.day,
    )
  }

  if (calendarValue instanceof CalendarDateTime) {
    return new Date(
      calendarValue.year,
      calendarValue.month - 1,
      calendarValue.day,
      // calendarValue.hour,
      // calendarValue.minute,
    )
  }

  throw new Error("Invalid CalendarDate or CalendarDateTime object provided")
}

export const displayDate = (dateString: string | Date) => {
  const date = new Date(dateString)

  const day = String(date.getUTCDate()).padStart(2, "0")
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  const year = date.getUTCFullYear()

  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}
