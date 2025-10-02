import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnDashboard = nextUrl.pathname.startsWith("/checkout");
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return Response.redirect(new URL("/auth/login", nextUrl));
      // } else
      if (isLoggedIn) {
        // return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
