import { Todo } from "@/generated/prisma"

export const updateTodoStatus = async (id: string, complete: boolean): Promise<Todo> => {
  const body = { complete }
  const response = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description }
  const response = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}


export const deleteCompletedTodos = async (): Promise<Todo> => {
  const response = await fetch(`/api/todos`, {
    method: "DELETE",
  })
  return response.json()
}
