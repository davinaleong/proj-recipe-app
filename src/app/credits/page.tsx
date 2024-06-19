import Image from "next/image"
import Link from "next/link"
import logo from "./../../assets/images/ib-logo.svg"
import BackButton from "../components/buttons/backButton"

export default function Credits() {
  return (
    <main className="page page-credits wrapper wrapper-centered flow">
      <header>
        <h1 className="text-ibGreen-500 font-serif text-3xl font-black flex align-center gap-2">
          <BackButton />
          {`Credits`}
        </h1>
      </header>

      <article className="flow">
        <p>
          This application was meticulously crafted by Mistress Davina Leong. It
          was designed using the Figma tool and constructed upon the NextJS
          framework. The data is securely stored within Contentful, and the
          hosting is provided by Vercel. All images are privately procured.
        </p>

        <p>
          The Peranakan tiles, which adorn the background and serve as the
          &ldquo;no image&rdquo; placeholder, are artfully generated using
          Adobe&apos;s Firefly. The color palette is derived from Adobe&apos;s
          color collections. The logo is sourced and modified from Adobe Stock.
        </p>

        <p>This text hath been composed by me and refined by ChatGPT.</p>

        <p>Ivy&apos;s Bistro &copy; Davina Leong, 2024</p>
      </article>

      <footer>
        <Link href="/">
          <Image src={logo} alt="Ivy's Bistro Logo" width="150" height="100" />
          <span className="sr-only">{`Ivy&apos;s Bistro`}</span>
        </Link>
      </footer>
    </main>
  )
}
