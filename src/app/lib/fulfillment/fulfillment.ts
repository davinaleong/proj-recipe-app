import LibFulfillmentInterface from "./LibFulfillmentInterface"

export const NEXT_PUBLIC_PASSWORD: string = `${process.env.NEXT_PUBLIC_PASSWORD}`
console.log(NEXT_PUBLIC_PASSWORD)
export const isFulfilled: boolean = false

const LibFulfillment: LibFulfillmentInterface = {
  NEXT_PUBLIC_PASSWORD,
  isFulfilled,
}

export default LibFulfillment
