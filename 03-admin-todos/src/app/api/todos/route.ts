import prisma from "@/lib/prisma"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const skip = Number(searchParams.get("skip")) || 0
  const take = Number(searchParams.get("take")) || 10

  const todos = await prisma.todo.findMany({ skip, take })
  return NextResponse.json(todos)
}
