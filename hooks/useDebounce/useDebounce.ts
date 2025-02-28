import { useRef, useState } from "react"
import { DebouncedState, useDebounceFn } from "../useDebounceFn"

type UseDebounceValueOptions<T> = {
  leading?: boolean
  trailing?: boolean
  maxWait?: number
  equalityFn?: (left: T, right: T) => boolean
}

export function useDebounce<T>(
  initialValue: T | (() => T),
  delay: number,
  options?: UseDebounceValueOptions<T>,
): [T, DebouncedState<(value: T) => void>] {
  const eq = options?.equalityFn ?? ((left: T, right: T) => left === right)
  const unwrappedInitialValue =
    initialValue instanceof Function ? initialValue() : initialValue
  const [debouncedValue, setDebouncedValue] = useState<T>(unwrappedInitialValue)
  const previousValueRef = useRef<T | undefined>(unwrappedInitialValue)

  const updateDebouncedValue = useDebounceFn(setDebouncedValue, delay, options)

  // Update the debounced value if the initial value changes
  if (!eq(previousValueRef.current as T, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue)
    previousValueRef.current = unwrappedInitialValue
  }

  return [debouncedValue, updateDebouncedValue]
}
