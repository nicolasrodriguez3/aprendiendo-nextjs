import { getUserSession } from "@/auth/actions/auth"
import { Todo } from "@/generated/prisma"
import prisma from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"
import * as yup from "yup"

interface Params {
  params: {
    id: string
  }
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const user = await getUserSession()
  if (!user) return null

  const todo = await prisma.todo.findFirst({ where: { id: id } })

  if (user.id !== todo?.userId) return null

  return todo
}

export async function GET(request: Request, { params }: Params) {
  const { id } = await params
  const todo = await getTodo(id)

  if (!todo) {
    return NextResponse.json(
      {
        message: "Todo not found",
      },
      { status: 404 }
    )
  }

  return NextResponse.json(todo)
}

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
})

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params
  const todo = await getTodo(id)

  if (!todo) {
    return NextResponse.json(
      {
        message: "Todo not found",
      },
      { status: 404 }
    )
  }

  try {
    const { description, complete } = await putSchema.validate(await request.json())

    const updatedTodo = await prisma.todo.update({
      where: { id: id },
      data: { description, complete },
    })

    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
