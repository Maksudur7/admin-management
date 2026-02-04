// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Geist er bodole Inter use kora bhalo clean look er jonno
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ApproveNexus | Approval Management System",
    template: "%s | ApproveNexus"
  },
  description: "Enterprise-grade workflow automation and approval system.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-primary`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}