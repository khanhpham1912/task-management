export interface Task {
  id: string
  title: string
  description?: string
  status: ETaskStatus
  createdAt: Date
  updatedAt: Date
  deadline?: Date
  subTasks?: SubTasks[]
}

export interface SubTasks {
  id: string
  title: string
  status: ETaskStatus
  createdAt: Date
  deadline?: Date
  updatedAt: Date
}

export enum ETaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
