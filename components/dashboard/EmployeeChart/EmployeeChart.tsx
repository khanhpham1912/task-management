import { useEmployeeChart } from "./logic"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export const EmployeeChart = () => {
  const { employeeStatistic, isLoading } = useEmployeeChart()
  return (
    <div className="w-full rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">
        Company A's number of employees over the past 24 months
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={employeeStatistic}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="employees"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
