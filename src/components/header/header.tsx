import * as React from "react"
import PropTypes from "prop-types"
import { textCenter } from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={textCenter}>{siteTitle}</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
