import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return null

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    const newUser = await createUser(email, password)
    console.log({newUser})
    return newUser
  }

  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null
  }

  return user
}

const createUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password),
        name: email.split("@")[0],
      },
    })
    console.log({user})
    return user
  } catch (error) {
    console.log("Error " + error)
    return null
  }
}
