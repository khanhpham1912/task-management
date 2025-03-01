// services
import { getRevenueData } from "@/services/statistic.service"

// hooks
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

export const useRevenueChart = () => {
  const revenueQuery = useQuery({
    queryKey: ["revenue-statistic"],
    queryFn: getRevenueData,
  })
  const revenue = useMemo(() => revenueQuery.data, [revenueQuery])
  return {
    revenue,
    isLoading: revenueQuery.isFetching,
  }
}
