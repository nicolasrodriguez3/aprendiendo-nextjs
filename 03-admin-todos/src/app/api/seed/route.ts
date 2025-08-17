import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  await prisma.todo.deleteMany()

  await prisma.todo.createMany({
    data: [
      { description: "Aprender Next" },
      { description: "Crear un proyecto de prueba", complete: true },
      { description: "Aprender Python" },
      { description: "Crear una API" },
    ],
  })

  return NextResponse.json({
    message: "ok",
  })
}
