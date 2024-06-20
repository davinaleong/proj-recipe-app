import Image from "next/image"
import Link from "next/link"
import backIcon from "./../../../assets/images/ib-back-icon.svg"
import "./buttons.scss"

export default function BackButton() {
  return (
    <Link href="/" className="btn btn-back">
      <Image src={backIcon} alt="Pot icon" width="32" height="40" />
      <span className="sr-only">Back</span>
    </Link>
  )
}
