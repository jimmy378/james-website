import HomeSection from '../components/sections/homeSection'
import WorkSection from '../components/sections/workSection'
import SkillsSection from '../components/sections/skillsSection'
import React, { useState, useEffect, useContext } from 'react'
import ContactSection from '../components/sections/contactSection'
import { pageLink } from '../util/constants'
import { Box } from 'rebass/styled-components'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'
import { PageProps, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import WindowContext from '../context/windowContext'

const Trigger = ScrollTrigger as any

const Home = (props: PageProps) => {
  const { isMobile } = useContext(WindowContext)
  const mobileScrollOffset = 'translateY(-40px)'
  const desktopScrollOffset = 'translateY(-120px)'

  const data: IHome = (props.data as any).dataYaml
  const projects: IProjectNode[] = (props.data as any).allProjectsYaml.edges
  const pageInfo: IPageInfo = (props.data as any).allProjectsYaml.pageInfo

  const [pageArea, setPageArea] = useState(0)

  return (
    <Layout pageArea={pageArea} data={data}>
      <SEO title={'James Anderson'} />
      <main>
        <Trigger
          onEnter={() => setPageArea(0)}
          style={{
            transform: 'translateY(300px)',
          }}
        />
        <Element name={pageLink.home} className="element" />
        <HomeSection title={data.title} body={data.body} />
        <Box style={{ height: '200px' }} />
        <Trigger
          onEnter={() => setPageArea(1)}
          style={{
            transform: 'translateY(300px)',
          }}
        />
        <Element
          name={pageLink.work}
          className="element"
          style={{
            position: 'absolute',
            transform: isMobile ? mobileScrollOffset : desktopScrollOffset,
          }}
        />
        <WorkSection data={data} projects={projects} pageInfo={pageInfo} />
        <Box style={{ height: '200px' }} />
        <Trigger
          onEnter={() => setPageArea(2)}
          style={{ transform: 'translateY(300px)' }}
        />
        <Element
          name={pageLink.skills}
          className="element"
          style={{
            position: 'absolute',
            transform: isMobile ? mobileScrollOffset : desktopScrollOffset,
          }}
        />
        <SkillsSection data={data} />
        <Box style={{ height: '200px' }} />
        <Trigger
          onEnter={() => setPageArea(3)}
          style={{ transform: 'translateY(300px)' }}
        />
        <Element
          name={pageLink.contact}
          className="element"
          style={{
            position: 'absolute',
            transform: isMobile ? mobileScrollOffset : desktopScrollOffset,
          }}
        />
        <ContactSection data={data} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    dataYaml {
      skills {
        body
        title
      }
      sections {
        title
      }
      logo
      body
      title
    }
    allProjectsYaml(limit: 3) {
      edges {
        node {
          slug
          title
          type
          feature
        }
      }
      pageInfo {
        hasNextPage
        totalCount
        perPage
        itemCount
      }
    }
  }
`

export default Home
