import Image from "next/image"
import LinkInterface from "./lib/link/LinkInterface"
import Card from "./components/card/card"

// TODO: Remove
const link: LinkInterface = { label: "Chicken Wings", href: "#" }

export default function Home() {
  return (
    <main className="wrapper wrapper-centered q-container q-container-main bg-ibYellow-50 min-h-screen">
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
      </div>
    </main>
  )
}
