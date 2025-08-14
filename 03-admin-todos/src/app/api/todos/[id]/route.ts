import prisma from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = await params

  const todo = await prisma.todo.findFirst({ where: { id: id } })
  return NextResponse.json(todo)
}
