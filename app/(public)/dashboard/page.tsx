"use client"

import { EmployeeChart, RevenueChart } from "@/components/dashboard"

export default function Home() {
  return (
    <div className="app-content">
      <EmployeeChart />
      <div className="flex items-center justify-between gap-4">
        <RevenueChart />
      </div>
    </div>
  )
}
