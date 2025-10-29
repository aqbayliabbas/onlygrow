import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
})

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "OnlyGrow Agency - Build Brands That Convert & Scale",
  description:
    "We help ambitious founders build brands that don't just look good — they grow. Growth strategy, brand systems, and execution that converts.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
