import { Task, ETaskStatus } from "@/models/task"
import { NextApiRequest, NextApiResponse } from "next"
import { v7 as uuidv7 } from "uuid"

// Fake data
export const data: Task[] = [
  {
    id: uuidv7(),
    title: "Implement authentication",
    description: "Set up user authentication with JWT",
    status: ETaskStatus.IN_PROGRESS,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-25"),
    subTasks: [
      {
        id: uuidv7(),
        title: "Create login API",
        status: ETaskStatus.DONE,
        createdAt: new Date("2024-02-20"),
        updatedAt: new Date("2024-02-22"),
      },
    ],
  },
  {
    id: uuidv7(),
    title: "Setup database",
    description: "Configure PostgreSQL database",
    status: ETaskStatus.TODO,
    createdAt: new Date("2024-02-22"),
    updatedAt: new Date("2024-02-23"),
    subTasks: [],
  },
  {
    id: uuidv7(),
    title: "Implement authentication",
    description: "Set up user authentication with JWT",
    status: ETaskStatus.IN_PROGRESS,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-25"),
    subTasks: [
      {
        id: uuidv7(),
        title: "Create login API",
        status: ETaskStatus.DONE,
        createdAt: new Date("2024-02-20"),
        updatedAt: new Date("2024-02-22"),
      },
    ],
  },
  {
    id: uuidv7(),
    title: "Setup database",
    description: "Configure PostgreSQL database",
    status: ETaskStatus.TODO,
    createdAt: new Date("2024-02-22"),
    updatedAt: new Date("2024-02-23"),
    subTasks: [],
  },
  {
    id: uuidv7(),
    title: "Implement authentication",
    description: "Set up user authentication with JWT",
    status: ETaskStatus.IN_PROGRESS,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-25"),
    subTasks: [
      {
        id: uuidv7(),
        title: "Create login API",
        status: ETaskStatus.DONE,
        createdAt: new Date("2024-02-20"),
        updatedAt: new Date("2024-02-22"),
      },
    ],
  },
  {
    id: uuidv7(),
    title: "Setup database",
    description: "Configure PostgreSQL database",
    status: ETaskStatus.TODO,
    createdAt: new Date("2024-02-22"),
    updatedAt: new Date("2024-02-23"),
    subTasks: [
      {
        id: uuidv7(),
        title: "Create login API",
        status: ETaskStatus.DONE,
        createdAt: new Date("2024-02-20"),
        updatedAt: new Date("2024-02-22"),
      },
    ],
  },
  {
    id: uuidv7(),
    title: "Implement authentication",
    description: "Set up user authentication with JWT",
    status: ETaskStatus.IN_PROGRESS,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-25"),
    subTasks: [
      {
        id: uuidv7(),
        title: "Create login API",
        status: ETaskStatus.IN_PROGRESS,
        createdAt: new Date("2024-02-20"),
        updatedAt: new Date("2024-02-22"),
      },
    ],
  },
  {
    id: uuidv7(),
    title: "Setup database",
    description: "Configure PostgreSQL database",
    status: ETaskStatus.DONE,
    createdAt: new Date("2024-02-22"),
    updatedAt: new Date("2024-02-23"),
    subTasks: [
      {
        id: uuidv7(),
        title: "Create login API",
        status: ETaskStatus.DONE,
        createdAt: new Date("2024-02-20"),
        updatedAt: new Date("2024-02-22"),
      },
    ],
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getTasks(req, res)
    case "POST":
      return createTask(req, res)
    default:
      return res.status(405).json({ message: "Method Not Allowed" })
  }
}

function getTasks(req: NextApiRequest, res: NextApiResponse) {
  const { status, title } = req.query
  let filteredTasks = data

  if (status) {
    const statusArray = Array.isArray(status) ? status : status.split(",")
    filteredTasks = filteredTasks.filter((task) =>
      statusArray.includes(task.status),
    )
  }

  if (title && typeof title === "string") {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(title.toLowerCase()),
    )
  }

  return res.status(200).json(filteredTasks)
}

function createTask(req: NextApiRequest, res: NextApiResponse) {
  const { title, description, subTasks, status, deadline } = req.body

  if (!title) {
    return res.status(400).json({ message: "Title are required" })
  }

  const newTask: Task = {
    id: uuidv7(),
    title,
    description,
    status,
    deadline,
    createdAt: new Date(),
    updatedAt: new Date(),
    subTasks: subTasks || [],
  }

  data.push(newTask)
  return res.status(201).json(newTask)
}
