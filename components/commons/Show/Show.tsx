export interface ShowProps {
  when: boolean
  fallback?: React.ReactNode
  children: React.ReactNode
}
export const Show = ({ when, fallback = <></>, children }: ShowProps) => {
  return <>{when ? children : fallback}</>
}
