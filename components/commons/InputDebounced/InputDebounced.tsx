import { useDebounceFn } from "@/hooks"
import { Input, InputProps } from "@heroui/react"
import { useState } from "react"

export const InputDebounced = ({
  onChange,
  ...props
}: { onChange: (value: string) => void } & Omit<InputProps, "onChange">) => {
  const [value, setValue] = useState<string>(props?.value ?? "")
  const onChangeDebounced = useDebounceFn(onChange, 300)
  const handleChangeValue = (value: string) => {
    setValue(value)
    onChangeDebounced(value)
  }
  return <Input {...props} onValueChange={handleChangeValue} value={value} />
}
