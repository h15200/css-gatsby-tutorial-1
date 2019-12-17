import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "../styles/header.module.scss"

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
      <Img className={headerStyles.header_logo} fixed={data.file.childImageSharp.fixed} alt="logo"/>
      <div className={headerStyles.header_textBox}>
        <h1 className={headerStyles.header_headingPrimary}>
          <span className={headerStyles.header_headingPrimary___main}>Outdoors</span>
          <span className={headerStyles.header_headingPrimary___sub}>is where life happens</span>
        </h1>
        <a href="#" className={`${headerStyles.header_btn} ${headerStyles.header_btn___white} ${headerStyles.header_btn___animated}`}>
          Discover our tours
        </a>
      </div>
    </header>
  )
}

export default Header
