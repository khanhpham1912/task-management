import { Task } from "@/models/task"
import { objectToQueryString } from "@/utils/common"
import httpClient from "@/utils/httpClient"

const API_ENDPOINT = "/tasks"

export const getTasks = async (
  filter: Record<string, any>,
): Promise<Task[]> => {
  const query = objectToQueryString(filter)
  return await httpClient<Task[]>(`${API_ENDPOINT}/list?${query}`, {
    method: "GET",
  })
}

export const getTask = async (taskId: string): Promise<Task> => {
  return await httpClient<Task>(`${API_ENDPOINT}/${taskId}`, {
    method: "GET",
  })
}

export const createTask = async (data: Task): Promise<Task> => {
  return await httpClient<Task>(`${API_ENDPOINT}`, {
    method: "POST",
    data,
  })
}

export const updateTask = async (taskId: string, data: Task): Promise<Task> => {
  return await httpClient<Task>(`${API_ENDPOINT}/${taskId}`, {
    method: "PUT",
    data,
  })
}

export const deleteTask = async (taskId: string): Promise<Task> => {
  return await httpClient<Task>(`${API_ENDPOINT}/${taskId}`, {
    method: "DELETE",
  })
}
