import LibLinkInterface from "@/app/lib/link/LinkInterface"

export default interface CardPropsInterface {
  image?: any | undefined
  alt?: string | undefined
  link?: LibLinkInterface | undefined
}
