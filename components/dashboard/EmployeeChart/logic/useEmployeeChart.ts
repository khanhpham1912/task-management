// services
import { getEmployeeGrowthData } from "@/services/statistic.service"

// hooks
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

export const useEmployeeChart = () => {
  const employeeStatisticQuery = useQuery({
    queryKey: ["employee-statistic"],
    queryFn: getEmployeeGrowthData,
  })
  const employeeStatistic = useMemo(
    () => employeeStatisticQuery.data,
    [employeeStatisticQuery],
  )
  return {
    employeeStatistic,
    isLoading: employeeStatisticQuery.isFetching,
  }
}
