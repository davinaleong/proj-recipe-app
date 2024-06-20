import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import BackButton from "./../components/buttons/backButton"
import { getContentfulEntries } from "./../lib/contentful/sdk"
import placeholder from "./../../assets/images/ib-no-image-b.png"
import RecipeSection from "../components/recipeSection/recipeSection"
import "./recipe-page.scss"

export async function generateStaticParams() {
  const items: any = await getContentfulEntries()

  return items.map((item: any) => ({
    slug: item.fields.slug,
  }))
}

async function getData(slug: string) {
  const items: any = await getContentfulEntries(slug)
  return items[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const item = await getData(slug)
  if (!item) {
    notFound()
  }

  const { fields } = item

  const {
    title,
    subtitle,
    description,
    ingredients,
    preparation,
    variations,
    remarks,
    image,
  } = fields

  const thisSubtitle: any = subtitle ? (
    <p className="page-recipe__subtitle">{subtitle}</p>
  ) : (
    <></>
  )

  let thisSrc: any = placeholder
  let thisAlt: string = "ib-no-image-b.png"
  let thisWidth: any = 1920
  let thisHeight: any = 1080
  let thisImage = <></>

  if (image) {
    const { fields } = image
    thisSrc = `http:${fields.file.url}`
    thisAlt = `${fields.file.title}`
    thisWidth = fields.file.details.image.width
    thisHeight = fields.file.details.image.height

    thisImage = (
      <Image
        src={thisSrc}
        alt={thisAlt}
        className="inline-block rounded-sm shadow-md"
        width={thisWidth}
        height={thisHeight}
      />
    )
  }

  let thisDescription = <></>
  if (description) {
    thisDescription = (
      <RecipeSection id="description" heading="Description">
        {documentToReactComponents(description)}
      </RecipeSection>
    )
  }

  let thisRemarks = <></>
  if (remarks) {
    thisRemarks = (
      <RecipeSection id="remarks" heading="Remarks">
        {remarks}
      </RecipeSection>
    )
  }

  return (
    <main className="page page-recipe wrapper wrapper-centered flow">
      <article className="flow">
        <header className="">
          <div className="page-recipe__header__inner">
            <BackButton />
            <h1>{title}</h1>
            {thisSubtitle}
          </div>

          <nav className="flex align-center justify-around">
            {description ? <Link href="#description">Description</Link> : <></>}
            <Link href="#ingredients">Ingredients</Link>
            <Link href="#preparation">Preparation</Link>
            {variations ? <Link href="#variations">Variations</Link> : <></>}
            {remarks ? <Link href="#remarks">Remarks</Link> : <></>}
          </nav>

          {thisImage}
        </header>

        {thisDescription}

        <RecipeSection id="ingredients" heading="Ingredients">
          {documentToReactComponents(ingredients)}
        </RecipeSection>

        <RecipeSection id="preparation" heading="Preparation">
          {documentToReactComponents(preparation)}
        </RecipeSection>

        <RecipeSection id="variations" heading="Variations">
          {documentToReactComponents(variations)}
        </RecipeSection>

        {thisRemarks}
      </article>

      <footer>
        <p className="text-center text-sm">
          <Link href="/">See other recipes</Link>
        </p>
      </footer>
    </main>
  )
}
