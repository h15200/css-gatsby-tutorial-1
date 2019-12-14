import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fixed(height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <Img className={headerStyles.logo} fixed={data.file.childImageSharp.fixed} alt="logo"/>
      <div className={headerStyles.textBox}>
        <h1 className={headerStyles.headingPrimary}>
          <span className={headerStyles.headingPrimaryMain}>Outdoors</span>
          <span className={headerStyles.headingPrimarySub}>is where life happens</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
