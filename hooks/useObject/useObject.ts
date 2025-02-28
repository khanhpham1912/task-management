import { useCallback, useRef, useState } from "react"

export function useObject<T extends {} = {}>(
  defaultValue?: T,
): [T, (obj: Partial<T>) => void, () => void] {
  const initialValue = useRef<T>(defaultValue || ({} as T))
  const [value, setValue] = useState<T>(initialValue.current)

  const updateObject = useCallback((newObj: Partial<T>) => {
    setValue((prevObj: T) => ({ ...prevObj, ...newObj }))
  }, [])

  const reset = useCallback(() => {
    setValue(initialValue.current)
  }, [])

  return [value, updateObject, reset] as const
}
