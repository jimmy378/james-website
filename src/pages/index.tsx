// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HomePage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
  </Layout>
)

export default HomePage
