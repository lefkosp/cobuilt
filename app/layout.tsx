import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { EasterEggs } from "@/components/easter-eggs"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["300", "400", "600"],
})

export const metadata: Metadata = {
  title: "CoBuilt — Blueprint Meets Craft",
  description: "We help founders turn clarity into growth — by building alongside them.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <EasterEggs />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
