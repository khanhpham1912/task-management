import { Spinner } from "@heroui/react"
import { useEmployeeChart } from "./logic"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts"

export const EmployeeChart = () => {
  const { employeeStatistic, isLoading } = useEmployeeChart()
  return (
    <div className="w-full rounded-md bg-white pb-4 pr-4 shadow-md">
      <div className="py-4 pl-4 text-lg font-semibold">
        Number of employees over the past 24 months
      </div>
      {isLoading ? (
        <div className="flex h-[350px] flex-col items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={employeeStatistic}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month">
              <Label value="Month" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label
                value="Number of employees"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="employees"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
