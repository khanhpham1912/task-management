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
