/* eslint-disable react/prop-types */
import React, { Fragment } from "react"

import Header from "./header"
import Main from './main'
import Footer from './footer'
import Popup from './popup'
import Nav from './nav'


const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <Nav />
    <main>
      <Main />
    </main>
    <Popup />
    <Footer />
  </Fragment>
)

export default Layout
