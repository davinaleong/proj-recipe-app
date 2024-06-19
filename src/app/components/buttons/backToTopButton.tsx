import Image from "next/image"
import Link from "next/link"
import upIcon from "./../../../assets/images/ib-up-icon.svg"
import "./buttons.scss"

export default function BackToTopButton() {
  return (
    <Link href="#top" className="btn btn-back-to-top">
      <Image src={upIcon} alt="Back to top icon" width="32" height="32" />
      <span className="sr-only">Back to top</span>
    </Link>
  )
}
