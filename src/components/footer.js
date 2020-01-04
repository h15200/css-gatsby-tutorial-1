import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import footerStyles from '../styles/layout/footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo1.png" }) {
        childImageSharp {
          fluid (maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer_logoBox}>
        <Img className={footerStyles.footer_logo} alto="Full logo" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className={footerStyles.row}>
        <div className={footerStyles.col_1_of_2}>
          <div className={footerStyles.footer_navigation}>
            <ul className={footerStyles.footer_list}>
              <li className={footerStyles.footer_item}><a className={footerStyles.footer_link} href="#">Company</a></li>
              <li className={footerStyles.footer_item}><a className={footerStyles.footer_link} href="#">Contact Us</a></li>
              <li className={footerStyles.footer_item}><a className={footerStyles.footer_link} href="#">Careers</a></li>
              <li className={footerStyles.footer_item}><a className={footerStyles.footer_link} href="#">Privacy</a></li>
              <li className={footerStyles.footer_item}><a className={footerStyles.footer_link} href="#">Services</a></li>
            </ul>
          </div>
        </div>
        <div className={footerStyles.col_1_of_2}>
          <p className={footerStyles.footer_copyright}>
            Built by Hideaki Aomori following Jonas Schedtmann&apos;s course
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
