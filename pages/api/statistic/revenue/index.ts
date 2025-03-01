import { NextApiRequest, NextApiResponse } from "next"

const revenueData = [
  { year: 2020, revenue: 5.2 },
  { year: 2021, revenue: 6.8 },
  { year: 2022, revenue: 8.1 },
  { year: 2023, revenue: 9.5 },
  { year: 2024, revenue: 11.3 },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(revenueData)
  }
  return res.status(405).json({ message: "Not Allowed" })
}
