import { useRevenueChart } from "./logic"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

export const RevenueChart = () => {
  const { revenue, isLoading } = useRevenueChart()
  return (
    <div className="w-full rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">
        Company A's revenue over 5 years
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={revenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
