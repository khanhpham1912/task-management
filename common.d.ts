type AnyProps = Record<string, any>

interface CommonColumn {
  name: React.ReactNode
  key: string | number
}

interface Task {
  id: string
  title: string
  description: string
  status: ETaskStatus
  createdAt: Date
  updatedAt: Date
  expiredAt: Date
}

enum ETaskStatus {
  TODO,
  IN_PROGRESS,
  DONE,
}
