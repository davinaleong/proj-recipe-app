import RecipeSectionPropsInterface from "./RecipeSectionPropsInterface"
import "./recipe-section.scss"

export default function RecipeSection({
  children,
  heading,
  id,
  className,
}: RecipeSectionPropsInterface) {
  return (
    <section id={id} className={`section section-recipe flow ${className}`}>
      <h2 className="text-ibGreen-500 font-serif text-2xl font-black">
        {heading}
      </h2>

      {children}
    </section>
  )
}
