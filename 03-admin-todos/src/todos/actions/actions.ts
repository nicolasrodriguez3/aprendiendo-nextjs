"use server"

import { Todo } from "@/generated/prisma"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) throw new Error("Todo not found")

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  })

  revalidatePath("/dashboard/server-todos")
  return updatedTodo
}

export const addTodo = async (description: string, userId: string) => {
  try {
    const todo = await prisma.todo.create({
      data: { description, userId},
    })
    revalidatePath("/dashboard/server-todos")

    return todo
  } catch (error) {
    return { message: "error creando el todo" }
  }
}

export const deleteCompleted = async (): Promise<void> => {
  try {
    await prisma.todo.deleteMany({ where: { complete: true } })
    revalidatePath("/dashboard/server-todos")
  } catch (error) {
    console.log(error)
  }
  return
}
