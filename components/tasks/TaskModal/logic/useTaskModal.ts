// models
import { Task } from "@/models/task"

// services
import { createTask, updateTask } from "@/services/tasks.service"

// components
import { toast } from "sonner"

// hooks
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo, useEffect, useCallback } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export const useTaskModal = ({
  task,
  onOpenChange,
}: {
  task?: Task
  onOpenChange: (isOpen: boolean) => void
}) => {
  const { register, handleSubmit, reset } = useForm<Task>()
  const queryClient = useQueryClient()

  const isEdit = useMemo(() => {
    return !!task
  }, [task])

  const createTaskMutation = useMutation({
    mutationFn: (request: Task) => createTask(request),
    onSuccess: () => {
      toast.success("Task created successfully")
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      handleOpenChange(false)
    },
    onError: () => {
      toast.error("Failed to create task")
    },
  })

  const updateTaskMutation = useMutation({
    mutationFn: (request: Task) => updateTask(task?.id as string, request),
    onSuccess: () => {
      toast.success("Task updated successfully")
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      handleOpenChange(false)
    },
    onError: () => {
      toast.error("Failed to update task")
    },
  })

  const onSubmit: SubmitHandler<Task> = useCallback(
    (data) => {
      console.log("data:", data)
      if (isEdit) {
        if (!!task?.id) {
          updateTaskMutation.mutate(data)
        }
      } else {
        createTaskMutation.mutate(data)
      }
    },
    [isEdit, task],
  )

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen) {
        reset()
      }
      onOpenChange(isOpen)
    },
    [reset, onOpenChange],
  )

  useEffect(() => {
    if (!!task) {
      reset(task, { keepDefaultValues: true })
    }
  }, [task])

  return { isEdit, register, handleSubmit, onSubmit, handleOpenChange }
}
