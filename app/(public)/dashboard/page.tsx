"use client"

import { EmployeeChart, RevenueChart } from "@/components/dashboard"

export default function Home() {
  return (
    <div className="app-content gap-4">
      <EmployeeChart />
      <RevenueChart />
    </div>
  )
}
