import { Spinner } from "@heroui/react"
import { useRevenueChart } from "./logic"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label,
} from "recharts"

export const RevenueChart = () => {
  const { revenue, isLoading } = useRevenueChart()
  return (
    <div className="w-full rounded-md bg-white pb-4 pr-4 shadow-md">
      <div className="py-4 pl-4 text-lg font-semibold">
        Revenue over 5 years
      </div>
      {isLoading ? (
        <div className="flex h-[350px] flex-col items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year">
              <Label value="Year" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label
                value="Revenue ($)"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip />
            <Bar dataKey="revenue" fill="#8884d8" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
