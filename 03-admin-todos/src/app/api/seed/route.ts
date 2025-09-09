import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  await prisma.todo.deleteMany()
  await prisma.user.deleteMany()

  await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      todos: {
        create: [
          { description: "Aprender Next" },  
          { description: "Crear un proyecto de prueba", complete: true },
          { description: "Aprender Python" },
          { description: "Crear una API" }
        ]
      }
    }
  })



  return NextResponse.json({
    message: "ok",
  })
}
