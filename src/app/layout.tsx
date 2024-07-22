import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/Footer.component"
import Navbar from "@/components/Navbar.component"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gymbeam todo list",
  description: "Todo list app for gymbeam recruitment process",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="relative">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <main className="min-h-screen  bg-gradient-to-r gradient">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
