import { EmployeeGrowth, Revenue } from "@/models/statistic"
import httpClient from "@/utils/httpClient"

const API_ENDPOINT = "/statistic"

export const getEmployeeGrowthData = async (): Promise<EmployeeGrowth[]> => {
  return await httpClient<EmployeeGrowth[]>(`${API_ENDPOINT}/employee`, {
    method: "GET",
  })
}

export const getRevenueData = async (): Promise<Revenue[]> => {
  return await httpClient<Revenue[]>(`${API_ENDPOINT}/revenue`, {
    method: "GET",
  })
}
