import type { Metadata } from "next"
import BackToTopButton from "./components/buttons/backToTopButton"
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
      <body id="top" className="relative">
        {children}

        <BackToTopButton />
      </body>
    </html>
  )
}
