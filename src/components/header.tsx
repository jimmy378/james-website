import { useEffect, useState } from 'react'
import React, { FC } from 'react'
import { Flex, Image, Box } from 'rebass/styled-components'
import styled from 'styled-components'
import TextButton from './textButton'
import { pageLink } from '../util/constants'
import { Link } from 'react-scroll'
import { Events, animateScroll as scroll } from 'react-scroll'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  height: 112px;
  width: 100%;
  z-index: 100;
  justify-content: center;
`

type Props = {
  pageArea: number
}

const Header: FC<Props> = ({ pageArea }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "/uploads/icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      setScrolling(true)
    })

    Events.scrollEvent.register('end', function (to, element) {
      setScrolling(false)
    })

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])
  return (
    <header>
      <Container bg={'white'}>
        <Flex alignItems="center" width={1366} px={[4, 4, 0]}>
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => scroll.scrollToTop({ duration: 1000, smooth: true })}
          >
            <Img fixed={data.file.childImageSharp.fixed} />
          </Box>
          <Box flex={1} />
          <Link to={pageLink.home} smooth={true} duration={1000}>
            <TextButton text={'who am i?'} active={pageArea === 0} />
          </Link>
          <Box mr={[4]} />
          <Link to={pageLink.work} smooth={true} duration={1000} offset={-120}>
            <TextButton text={'work'} active={pageArea === 1} />
          </Link>
          <Box mr={[4]} />
          <Link
            to={pageLink.skills}
            smooth={true}
            duration={1000}
            offset={-120}
          >
            <TextButton text={'skills'} active={pageArea === 2} />
          </Link>
          <Box mr={[4]} />
          <Link
            to={pageLink.contact}
            smooth={true}
            duration={1000}
            offset={-490}
          >
            <TextButton text={'contact'} active={pageArea === 3} />
          </Link>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
