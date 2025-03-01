import { NextApiRequest, NextApiResponse } from "next"

const employeeGrowthData = [
  { month: "02-2023", employees: 110 },
  { month: "03-2023", employees: 130 },
  { month: "04-2023", employees: 140 },
  { month: "05-2023", employees: 155 },
  { month: "06-2023", employees: 150 },
  { month: "07-2023", employees: 170 },
  { month: "08-2023", employees: 185 },
  { month: "09-2023", employees: 190 },
  { month: "10-2023", employees: 200 },
  { month: "11-2023", employees: 215 },
  { month: "12-2023", employees: 220 },
  { month: "01-2024", employees: 230 },
  { month: "02-2024", employees: 240 },
  { month: "03-2024", employees: 250 },
  { month: "04-2024", employees: 260 },
  { month: "05-2024", employees: 270 },
  { month: "06-2024", employees: 240 },
  { month: "07-2024", employees: 290 },
  { month: "08-2024", employees: 300 },
  { month: "09-2024", employees: 310 },
  { month: "10-2024", employees: 320 },
  { month: "11-2024", employees: 330 },
  { month: "12-2024", employees: 340 },
  { month: "01-2025", employees: 350 },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(employeeGrowthData)
  }
  return res.status(405).json({ message: "Not Allowed" })
}
