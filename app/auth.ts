import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";

export const config = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_KEY as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    authorized({ request, auth }) {
      // console.log("🚀 ~ file: auth.ts:14 ~ authorized ~ auth:", auth)
      return !!auth;
    }
  }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
