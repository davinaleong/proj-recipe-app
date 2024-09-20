"use client"
import { useState } from "react"
import { NEXT_PUBLIC_PASSWORD } from "./../../lib/fulfillment/fulfillment"
import FulfillmentDialogPropsInterface from "./FulfillmentDialogPropsInterface"
import "./dialogs.scss"

export default function FulfillmentDialog({
  label,
  message,
}: FulfillmentDialogPropsInterface) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(<></>)
  const [isFulfilled, setIsFulfilled] = useState(false)

  const passwordChangeHandler = (event: any): void => {
    setPassword(event.target.value)
    setError(<></>)
  }

  const formSubmitHandler = (event: any): void => {
    event.preventDefault()

    if (password === NEXT_PUBLIC_PASSWORD) {
      setIsFulfilled(true)
      setError(<></>)
    } else {
      setIsFulfilled(false)
      const thisMessage = message ? message : "The password is incorrect."
      setError(<p className="text-ibRed-500 text-sm">{thisMessage}</p>)
    }
  }

  return (
    <div className={isFulfilled ? "dialog hidden" : "dialog"}>
      <div className="dialog__body">
        <form
          method="post"
          className="dialog__body__form"
          onSubmit={formSubmitHandler}
        >
          <label htmlFor="password" className="dialog__body__form__label">
            {label}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="dialog__body__form__input"
            placeholder="Enter password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {error}
          <button type="submit" className="btn dialog__body__form__btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
