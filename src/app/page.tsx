import Image from "next/image"
import Link from "next/link"
import LinkInterface from "./lib/link/LinkInterface"
import Card from "./components/card/card"
import potIcon from "./../assets/images/ib-favicon.svg"

// TODO: Remove
const link: LinkInterface = { label: "Chicken Wings", href: "#" }

export default function Home() {
  return (
    <main className="wrapper wrapper-centered q-container q-container-main bg-ibYellow-50 min-h-screen flow">
      <h1 className="text-ibGreen-500 font-serif font-6xl font-black flex align-center gap-2">
        <Link href="/" className="block">
          <Image src={potIcon} alt="Pot icon" width="32" height="32" />
          <span className="sr-only">Home</span>
        </Link>
        {`Welcome to Ivy's Bistro`}
      </h1>
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
