import { ETaskStatus } from "@/models/task"

export const statusOptions = [
  {
    label: "Todo",
    key: ETaskStatus.TODO,
  },
  {
    label: "In Progress",
    key: ETaskStatus.IN_PROGRESS,
  },
  {
    label: "Done",
    key: ETaskStatus.DONE,
  },
]

export const statusColors = {
  [ETaskStatus.TODO]: "default",
  [ETaskStatus.IN_PROGRESS]: "warning",
  [ETaskStatus.DONE]: "success",
}

export const columns = [
  { name: "TITLE", uid: "title", width: 250 },
  { name: "STATUS", uid: "status", width: 100 },
  { name: "ACTIONS", uid: "actions", width: 30 },
]
