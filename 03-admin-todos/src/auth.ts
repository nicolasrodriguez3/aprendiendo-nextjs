import NextAuth, { type DefaultSession } from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      roles: string[]
      id: string
    } & DefaultSession["user"]
  }
}

import { JWT } from "next-auth/jwt"
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string
    roles: string[]
  }
}

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

      console.log(dbUser)
      if (dbUser?.isActive === false) {
        throw new Error("User is not active")
      }

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
