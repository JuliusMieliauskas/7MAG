import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "7MAG",
  description: "Stock information for the Magnificent 7 companies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-center items-center min-h-screen">
            <Navbar />
            <main className="w-full pt-12 flex justify-center h-full">
              {children}

              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
