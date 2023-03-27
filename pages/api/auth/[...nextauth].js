import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import JWT from "next-auth/jwt"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        // ...add more providers here
    ],
    session: {
        jwt: true,
        // Other options
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)