import Image from "next/image"
import Link from "next/link"
import placeholder from "./../../../assets/images/ib-no-image-b.png"
import "./card.scss"

import CardPropsInterface from "./CardPropsInterface"

function Card({ image, alt, link }: CardPropsInterface) {
  // Return an empty element if no link is supplied
  if (!link) return <></>
  // Assign the placeholder image if no image is supplied
  const thisImage: any = image ? image : placeholder
  // Assign a placeholder "alt" if no alt text is supplied
  const thisAlt: string = alt ? alt : "No image available for this recipe"

  return (
    <div className="card">
      <Image src={thisImage} alt={thisAlt} className="card__image" />
      <div className="card__body">
        <p>
          <Link href={link.href}>{link.label}</Link>
        </p>
      </div>
    </div>
  )
}

export default Card
