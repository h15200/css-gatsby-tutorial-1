import React from "react"
import headerStyles from "../styles/header.module.css"

const Header = () => (
  <header className={headerStyles.header}>
    <div className="logo-box">
      <img src="../../img/logo.png" alt="logo" className={headerStyles.logo}/>
    </div>
  </header>
)

export default Header
