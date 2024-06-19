"use client"
import { PASSWORD } from "@/app/lib/fulfillment/fulfillment"
import FulfillmentDialogPropsInterface from "./FulfillmentDialogPropsInterface"
import "./dialogs.scss"

export default function FulfillmentDialog({
  label,
}: FulfillmentDialogPropsInterface) {
  return (
    <div className="dialog">
      <form className="dialog__form">
        <label htmlFor="password" className="dialog__form__label">
          {label}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="dialog__form__input"
          placeholder="Enter password"
        />
        <button type="submit" className="btn dialog__form__btn">
          Submit
        </button>
      </form>
    </div>
  )
}
