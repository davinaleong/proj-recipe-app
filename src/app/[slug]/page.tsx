import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import Link from "next/link"
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
  const { fields } = await getData(slug)
  const { description, ingredients, preparation, variations, remarks, image } =
    fields

  let thisSrc: any = placeholder
  let thisAlt: string = "ib-no-image-b.png"
  let thisWidth: any = "32"
  let thisHeight: any = "32"

  if (image) {
    const { fields } = image
    thisSrc = `http:${fields.file.url}`
    thisAlt = `${fields.file.title}`
    thisWidth = fields.file.details.image.width
    thisHeight = fields.file.details.image.height
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
        <header className="flow">
          <h1 className="text-ibGreen-500 font-serif text-4xl font-black flex align-center gap-2">
            <BackButton />
            {fields.title}
          </h1>

          <nav className="flex align-center justify-around">
            {description ? <Link href="#description">Description</Link> : <></>}
            <Link href="#ingredients">Ingredients</Link>
            <Link href="#preparation">Preparation</Link>
            {variations ? <Link href="#variations">Variations</Link> : <></>}
            {remarks ? <Link href="#remarks">Remarks</Link> : <></>}
          </nav>

          <Image
            src={thisSrc}
            alt={thisAlt}
            className="inline-block rounded-sm shadow-md"
            width={thisWidth}
            height={thisHeight}
          />
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
