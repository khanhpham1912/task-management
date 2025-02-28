// TODO: implement deep clone, deep compare function
import { useCallback, useRef, useState } from "react"

export interface ArrayActions<T> {
  /**
   * @description Replace all items.
   */
  update: (newItems: T[]) => void

  /**
   * @description Add item(s) at the end of list
   */
  push: (...items: T[]) => void

  /**
   * @description Pop item at the end of list
   */
  pop: () => T | undefined
  /**
   * @description shift item at the first of list
   */
  shift: () => T | undefined
  /**
   * @description Add item at the first of list
   */
  unshift: (item: T) => void
  /**
   * @description Add item at the first of list
   */
  prepend: (...items: T[]) => void
  /**
   * @description Make the list empty
   */
  clear: () => void
  /**
   * @description Reset list to initial value
   */
  reset: () => void
  /**
   * @description Get value at given position
   */
  valueAt: (index: number) => T | undefined
  /**
   * @description Replace item at given position. If item at given position not exists it will be set.
   */
  updateAt: (index: number, item: T) => void
  /**
   * @description Insert item at given position
   */
  insertAt: (index: number, item: T) => void
  /**
   * @description Removes item at given position. All items to the right from removed will be shifted.
   */
  removeAt: (index: number) => void
}

export function useArray<T>(initialValue?: T[]): [T[], ArrayActions<T>] {
  const initialValueRef = useRef(initialValue ? [...initialValue] : [])
  const [array, setArray] = useState<T[]>(initialValue || [])

  const update = useCallback((newItems: T[]) => {
    setArray(newItems)
  }, [])

  const push = useCallback((...items: T[]) => {
    setArray((prev) => prev.concat(items))
  }, [])

  const pop = useCallback(() => {
    const _array: T[] = [...array]
    const popValue = _array.pop()
    setArray(_array)
    return popValue
  }, [array])

  const shift = useCallback(() => {
    const _array: T[] = [...array]
    const shiftValue = _array.shift()
    setArray(_array)
    return shiftValue
  }, [array])

  const unshift = useCallback(
    (item: T) => {
      const _array: T[] = [...array]
      _array.unshift(item)
      setArray(_array)
    },
    [array],
  )

  const prepend = useCallback((...items: T[]) => {
    setArray((prev) => [...items, ...prev])
  }, [])

  const clear = useCallback(() => {
    setArray([])
  }, [])

  const reset = useCallback(() => {
    setArray(initialValueRef.current)
  }, [])

  const valueAt = useCallback(
    (index: number) => {
      return array.at(index)
    },
    [array],
  )

  const updateAt = useCallback(
    (index: number, item: T) => {
      const _array: T[] = [...array]
      if (!!_array.length) {
        _array[index] = item
      } else {
        _array[0] = item
      }
      setArray(_array)
    },
    [array],
  )

  const insertAt = useCallback(
    (index: number, item: T) => {
      const _array: T[] = [...array]
      _array.splice(index, 0, item)
      setArray(_array)
    },
    [array],
  )

  const removeAt = useCallback(
    (index: number) => {
      const _array: T[] = [...array]
      delete _array[index]
      setArray(_array.filter((item) => !!item))
    },
    [array],
  )

  return [
    array,
    {
      update,
      push,
      pop,
      shift,
      unshift,
      prepend,
      clear,
      reset,
      valueAt,
      updateAt,
      insertAt,
      removeAt,
    },
  ]
}
