/* eslint-disable react/prop-types */
import React, { Fragment } from "react"

import Header from "./header"
import Main from './main'
import Footer from './footer'


const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <main>
      <Main />
    </main>
    <Footer />
  </Fragment>
)

export default Layout
