import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import favicon from '../../img/favicon.ico'

import indexStyles from '../styles/index.module.css'

const IndexPage = () => (
    <Fragment>
      <Helmet>
        <title>css practice with tutorial on udemy</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Header />

    </Fragment>
)

export default IndexPage
