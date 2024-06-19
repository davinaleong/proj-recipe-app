import Image from "next/image"
import Link from "next/link"
import LinkInterface from "./lib/link/LinkInterface"
import Card from "./components/card/card"
import potIcon from "./../assets/images/ib-favicon.svg"
import "./home.scss"

// TODO: Remove
const link: LinkInterface = { label: "Chicken Wings", href: "/recipe" }

export default function Home() {
  return (
    <main className="page page-home wrapper wrapper-centered flow">
      <h1 className="text-ibGreen-500 font-serif text-4xl font-black flex align-center gap-2">
        {`Welcome to Ivy's Bistro`}
      </h1>

      <p className="flex align-center gap-2">
        <Link href="/" className="home-logo">
          <Image src={potIcon} alt="Pot icon" width="32" />
          <span className="sr-only">Home</span>
        </Link>
        Tap on the cards to view the recipes.
      </p>

      <div className="card-grid">
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
        <Card link={link} />
      </div>
    </main>
  )
}
