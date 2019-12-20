/* eslint-disable react/prop-types */
import React, { Fragment } from "react"

import Header from "./header"
import About from './about'
// import other layout components, then put them inside main
// import footer, put it outside main

const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <main>
      <About />
    </main>
  </Fragment>
)

export default Layout
