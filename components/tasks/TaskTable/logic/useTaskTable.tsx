// components
import { useBoolean } from "@/hooks"
import { Chip } from "@heroui/react"

// hooks
import { Key, useCallback, useMemo, useState } from "react"

export const useTaskTable = () => {
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState<Set<any>>(new Set(["all"]))
  const [selectedTask, setSelectedTask] = useState<Task>()
  const hasSearchFilter = useMemo(() => !!searchValue, [searchValue])
  const selectedStatus = useMemo(
    () => Array.from(statusFilter).join(", ").replaceAll("_", " "),
    [statusFilter],
  )
  const pages = useMemo(() => Math.ceil(100 / 20), [])

  const {
    value: showTaskDetail,
    setTrue: openTaskDetail,
    setFalse: closeTaskDetail,
  } = useBoolean()

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setSearchValue(value)
      setPage(1)
    } else {
      setSearchValue("")
    }
  }, [])

  const handleClickRow = useCallback((task: Task) => {
    setSelectedTask(task)
    openTaskDetail()
  }, [])

  const renderCell = useCallback((task: Task, columnKey: string | Key) => {
    if (typeof columnKey === "bigint") return
    // cannot get the value with key like index
    const cellValue = (task as any)?.[columnKey]

    switch (columnKey) {
      case "status":
        return (
          <Chip
            className="gap-1 border-none capitalize text-default-600"
            color="default"
            size="sm"
          >
            {cellValue}
          </Chip>
        )
      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            Delete
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return {
    tasks: [],
    searchValue,
    page,
    hasSearchFilter,
    statusFilter,
    pages,
    selectedTask,
    setStatusFilter,
    setPage,
    renderCell,
    onSearchChange,
    handleClickRow,
  }
}
