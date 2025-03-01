// components
import { useBoolean, useObject } from "@/hooks"
import { Task } from "@/models/task"
import { deleteTask, getTasks } from "@/services/tasks.service"
import { Chip, Selection, SharedSelection } from "@heroui/react"
import { toast } from "sonner"

// hooks
import { Key, useCallback, useMemo, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

// icons
import { TrashIcon } from "@heroicons/react/24/outline"

export const useTaskTable = () => {
  const queryClient = useQueryClient()
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState<Selection>()

  const [filterParams, updateFilterParams] = useObject<{
    title?: string
    status?: string[] | Key[]
  }>()

  const [selectedTask, setSelectedTask] = useState<Task>()

  const {
    value: showTaskModal,
    setTrue: openTaskModal,
    setValue: onShowTaskModalChange,
  } = useBoolean()

  const tasksQuery = useQuery({
    queryKey: ["tasks", filterParams],
    queryFn: () => getTasks(filterParams),
  })

  const tasks = useMemo(() => tasksQuery?.data || [], [tasksQuery])
  console.log("tasks:", tasks)

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      updateFilterParams({ title: value })
      setPage(1)
    } else {
      setSearchValue("")
    }
  }, [])

  const handleClickRow = useCallback((task: Task) => {
    setSelectedTask(task)
    openTaskModal()
  }, [])

  const handleCreateTask = useCallback(() => {
    openTaskModal()
  }, [])

  const handleChangeFilterStatus = (keys: SharedSelection) => {
    setStatusFilter(keys)
    if (keys) {
      updateFilterParams({ status: Array.from(keys) })
    }
  }

  const removeTaskMutation = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      toast.success("Task deleted successfully")
    },
    onError: () => {
      toast.error("Failed to delete task")
    },
  })

  const handleRemoveTask = (taskId: string) => {
    removeTaskMutation.mutate(taskId)
  }

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
            <TrashIcon
              className="size-6 hover:text-danger"
              onClick={() => handleRemoveTask(task.id)}
            />
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return {
    tasks,
    searchValue,
    page,
    statusFilter,
    selectedTask,
    showTaskModal,
    handleChangeFilterStatus,
    setPage,
    renderCell,
    onSearchChange,
    handleClickRow,
    handleCreateTask,
    onShowTaskModalChange,
  }
}
