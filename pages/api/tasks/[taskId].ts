import { NextApiRequest, NextApiResponse } from "next"
import { data } from "."

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { taskId } = req.query

  switch (req.method) {
    case "GET":
      return getTaskById(req, res, taskId as string)
    case "PUT":
      return updateTask(req, res, taskId as string)
    case "DELETE":
      return deleteTask(req, res, taskId as string)
    default:
      return res.status(405).json({ message: "Not Allowed" })
  }
}

function getTaskById(
  req: NextApiRequest,
  res: NextApiResponse,
  taskId: string,
) {
  const task = data.find((t) => t.id === taskId)

  if (!task) {
    return res.status(404).json({ message: "Task not found" })
  }

  return res.status(200).json(task)
}

function updateTask(req: NextApiRequest, res: NextApiResponse, taskId: string) {
  const { title, description, status, subTasks } = req.body
  const taskIndex = data.findIndex((t) => t.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" })
  }

  data[taskIndex] = {
    ...data[taskIndex],
    title: title || data[taskIndex].title,
    description: description || data[taskIndex].description,
    status: status || data[taskIndex].status,
    subTasks: subTasks || data[taskIndex].subTasks,
    updatedAt: new Date(),
  }

  return res.status(200).json(data[taskIndex])
}

function deleteTask(req: NextApiRequest, res: NextApiResponse, taskId: string) {
  const taskIndex = data.findIndex((t) => t.id === taskId)

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" })
  }
  data.splice(taskIndex, 1)
  return res.status(200).json({ message: "Task deleted successfully" })
}
