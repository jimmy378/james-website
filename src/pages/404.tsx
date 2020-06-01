import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { PageProps, graphql } from 'gatsby'

const NotFoundPage = (props: PageProps) => {
  const data: IHome = (props.data as any).dataYaml

  return (
    <Layout pageArea={0} data={data}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const query = graphql`
  query ErrorPageQuery {
    dataYaml {
      sections {
        title
      }
      logo
    }
  }
`

export default NotFoundPage
