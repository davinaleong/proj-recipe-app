import Image from "next/image"
import Link from "next/link"
import logo from "./../../../assets/images/ib-logo.svg"
import houseIcon from "./../../../assets/images/ib-home-icon.svg"
import copyrightIcon from "./../../../assets/images/ib-copyright-icon.svg"
import "./primary-header.scss"

export default function PrimaryHeader() {
  return (
    <header className="primary-header">
      <div className="primary-header__wrapper wrapper wrapper-centered q-container q-container-primary-header">
        <Link href="/" className="primary-header__brand">
          <Image src={logo} alt="Ivy's Bistro" />
          <span className="sr-only">{`Ivy's Bistro`}</span>
        </Link>

        <nav className="primary-header__nav">
          <Link href="/" className="primary-header__nav__link">
            <Image
              src={houseIcon}
              alt="House icon"
              className="primary-header__nav__link__image"
              width="32"
              height="32"
            />
            <div className="primary-header__nav__link__label">Home</div>
          </Link>
          <Link href="/credits" className="primary-header__nav__link">
            <Image
              src={copyrightIcon}
              alt="Copyright icon"
              className="primary-header__nav__link__image"
              width="32"
              height="32"
            />
            <div className="primary-header__nav__link__label">Credits</div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
