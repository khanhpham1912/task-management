import { Show } from "../Show"

export const For = <T extends Object>({
  each = [],
  children,
}: {
  each: T[]
  children: (data: T, index?: number) => React.ReactNode
}) => {
  return (
    <Show when={!!each.length} fallback={<></>}>
      {each.map((data: T, index) => children(data, index))}
    </Show>
  )
}
