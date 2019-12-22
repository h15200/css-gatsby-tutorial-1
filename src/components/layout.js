/* eslint-disable react/prop-types */
import React, { Fragment } from "react"

import Header from "./header"
import Main from './main'
// import footer, put it outside main

const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <main>
      <Main />
    </main>
  </Fragment>
)

export default Layout
