import Image from "next/image"
import Link from "next/link"
import placeholder from "./../../../assets/images/ib-no-image-b.png"
import "./card.scss"

import CardPropsInterface from "./CardPropsInterface"

function Card({ recipe }: CardPropsInterface) {
  const { fields } = recipe
  const { title, slug, image } = fields

  let thisSrc: any = placeholder
  let thisAlt: string = "ib-no-image-b.png"
  let thisWidth: any = 1920
  let thisHeight: any = 1080

  if (image) {
    const { fields } = image
    thisSrc = `http:${fields.file.url}`
    thisAlt = `${fields.file.title}`
    thisWidth = fields.file.details.image.width
    thisHeight = fields.file.details.image.height
  }

  return (
    <div className="card">
      <Image
        src={thisSrc}
        alt={thisAlt}
        className="card__image"
        width={thisWidth}
        height={thisHeight}
      />
      <div className="card__body">
        <p>
          <Link href={`/${slug}`}>{title}</Link>
        </p>
      </div>
    </div>
  )
}

export default Card
