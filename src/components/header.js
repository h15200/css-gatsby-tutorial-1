import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "../styles/layout/header.module.scss"
import buttonStyles from '../styles/components/button.module.scss'

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
        <a href="#" className={`${buttonStyles.btn} ${buttonStyles.btn___white} ${buttonStyles.btn___animated}`}>
          Discover our tours
        </a>
      </div>
    </header>
  )
}

export default Header
