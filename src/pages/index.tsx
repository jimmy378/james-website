import HomeSection from '../components/sections/homeSection'
import WorkSection from '../components/sections/workSection'
import SkillsSection from '../components/sections/skillsSection'
import React, { useState } from 'react'
import ContactSection from '../components/sections/contactSection'
import { pageLink } from '../util/constants'
import { Box } from 'rebass/styled-components'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Trigger = ScrollTrigger as any

const Home = (props: PageProps) => {
  const [pageArea, setPageArea] = useState(0)

  return (
    <Layout pageArea={pageArea}>
      <SEO title={'James Anderson'} />
      <main>
        <Trigger
          onEnter={() => setPageArea(0)}
          style={{ transform: 'translateY(300px)' }}
        />
        <Element name={pageLink.home} className="element" />
        <HomeSection />
        <Box style={{ height: '200px' }} />
        <Trigger
          onEnter={() => setPageArea(1)}
          style={{ transform: 'translateY(300px)' }}
        />
        <Element name={pageLink.work} className="element" />
        <WorkSection />
        <Box style={{ height: '200px' }} />
        <Trigger
          onEnter={() => setPageArea(2)}
          style={{ transform: 'translateY(300px)' }}
        />
        <Element name={pageLink.skills} className="element" />
        <SkillsSection />
        <Box style={{ height: '200px' }} />
        <Trigger
          onEnter={() => setPageArea(3)}
          style={{ transform: 'translateY(300px)' }}
        />
        <Element name={pageLink.contact} className="element" />
        <ContactSection />
      </main>
    </Layout>
  )
}

export default Home
