import LibFulfillmentInterface from "./LibFulfillmentInterface"

export const PASSWORD: string = `${process.env.PASSWORD}`
export const isFulfilled: boolean = false

const LibFulfillment: LibFulfillmentInterface = {
  PASSWORD,
  isFulfilled,
}

export default LibFulfillment
