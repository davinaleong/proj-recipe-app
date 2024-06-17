import type { Metadata } from "next"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Ivy's Bistro",
  description: "Recipes by my nana.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
