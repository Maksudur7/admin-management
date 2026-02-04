// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/src/lib/prisma";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Ekhane user check hobe database theke
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                });

                if (user) return user;
                return null;
            }
        })
    ],
    callbacks: {
        async session({ session, user }: any) {
            if (session.user) {
                session.user.id = user.id;
                session.user.role = user.role; // Admin ba User role
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };