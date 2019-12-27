import React, { Fragment } from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import Nav from '../components/nav'

const IndexPage = () => (
  <Fragment>
    <Head title="Home" />
    <Layout>
    <Nav />
    </Layout>
  </Fragment>
)

export default IndexPage
