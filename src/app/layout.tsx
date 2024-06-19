import type { Metadata } from "next"
import PrimaryHeader from "./components/primaryHeader/primaryHeader"
import FulfillmentDialog from "./components/dialogs/fulfillmentDialog"
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
        <PrimaryHeader />

        {children}

        <FulfillmentDialog label="Please enter the password to proceed:" />
        <BackToTopButton />
      </body>
    </html>
  )
}
