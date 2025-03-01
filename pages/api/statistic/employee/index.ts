import { NextApiRequest, NextApiResponse } from "next"

const employeeGrowthData = [
  { month: "2023-02", employees: 120 },
  { month: "2023-03", employees: 130 },
  { month: "2023-04", employees: 140 },
  { month: "2023-05", employees: 155 },
  { month: "2023-06", employees: 160 },
  { month: "2023-07", employees: 170 },
  { month: "2023-08", employees: 185 },
  { month: "2023-09", employees: 190 },
  { month: "2023-10", employees: 200 },
  { month: "2023-11", employees: 215 },
  { month: "2023-12", employees: 220 },
  { month: "2024-01", employees: 230 },
  { month: "2024-02", employees: 240 },
  { month: "2024-03", employees: 250 },
  { month: "2024-04", employees: 260 },
  { month: "2024-05", employees: 270 },
  { month: "2024-06", employees: 280 },
  { month: "2024-07", employees: 290 },
  { month: "2024-08", employees: 300 },
  { month: "2024-09", employees: 310 },
  { month: "2024-10", employees: 320 },
  { month: "2024-11", employees: 330 },
  { month: "2024-12", employees: 340 },
  { month: "2025-01", employees: 350 },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(employeeGrowthData)
  }
  return res.status(405).json({ message: "Not Allowed" })
}
