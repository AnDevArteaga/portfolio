import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] })
import Head from "next/head"

export const metadata: Metadata = {
  title: "Portfolio | Andrés Felipe Arteage",
  description: "Portafolio profesional de Andrés Arteaga - Desarrollador Web",
  icons: {
    icon: "/porfo.png",
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
            <Head>
        <link rel="icon" type="image/png" href="/porfo.png" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

