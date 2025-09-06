import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, GitHub],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn() {
      return true
    },

    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email ?? "no-email",
        },
      })

      token.roles = dbUser?.roles ?? []
      token.id = dbUser?.id ?? ""

      return token
    },

    async session({ session, token }) {
      if (session && session.user) {
        session.user.roles = token.roles
        session.user.id = token.id
      }
      return session
    },
  },
})
