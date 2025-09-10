import { getUserSession } from "@/auth/actions/auth"
import prisma from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"
import * as yup from "yup"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const skip = Number(searchParams.get("skip")) || 0
  const take = Number(searchParams.get("take")) || 10

  const todos = await prisma.todo.findMany({ skip, take })
  return NextResponse.json(todos)
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
})

export async function POST(request: Request) {
  const user = await getUserSession()
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

  try {
    const { description, complete } = await postSchema.validate(await request.json())

    const todo = await prisma.todo.create({
      data: {
        description,
        complete,
        userId: user.id,
      },
    })

    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}

export async function DELETE() {
  const user = await getUserSession()
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

  try {
    await prisma.todo.deleteMany({ where: { complete: true, userId: user.id } })
    return NextResponse.json({}, { status: 204 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
