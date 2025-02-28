import { useCallback, useState } from "react"

import type { Dispatch, SetStateAction } from "react"

type UseBooleanReturn = {
  /** The current boolean state value. */
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  /** Function to toggle the boolean state. */
  toggle: () => void
}

export function useBoolean(defaultValue = false): UseBooleanReturn {
  if (typeof defaultValue !== "boolean") {
    throw new Error("defaultValue must be `true` or `false`")
  }
  const [value, setValue] = useState(defaultValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toggle = useCallback(() => {
    setValue((x) => !x)
  }, [])

  return { value, setValue, setTrue, setFalse, toggle }
}
