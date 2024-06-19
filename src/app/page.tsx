import Image from "next/image"
import Link from "next/link"
import Card from "./components/card/card"
import FulfillmentDialog from "./components/dialogs/fulfillmentDialog"
import potIcon from "./../assets/images/ib-favicon.svg"
import { getContentfulEntries } from "./lib/contentful/sdk"
import "./home-page.scss"

async function getData() {
  return getContentfulEntries()
}

export default async function Home() {
  const recipes = await getData()

  return (
    <main className="page page-home wrapper wrapper-centered flow relative">
      <header>
        <h1 className="text-ibGreen-500 font-serif text-4xl font-black flex align-center gap-2">
          {`Welcome to Ivy's Bistro`}
        </h1>
      </header>

      <p className="flex align-center gap-2">
        <Link href="/" className="home-logo">
          <Image src={potIcon} alt="Pot icon" width="32" />
          <span className="sr-only">Home</span>
        </Link>
        Tap on the cards to view the recipes.
      </p>

      <div className="card-grid">
        {recipes.map((recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </div>

      <FulfillmentDialog label="Please enter the password to proceed:" />
    </main>
  )
}
