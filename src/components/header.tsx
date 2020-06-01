import { useEffect, useState } from 'react'
import React, { FC } from 'react'
import { Flex, Image, Box } from 'rebass/styled-components'
import styled from 'styled-components'
import TextButton from './textButton'
import { pageLink } from '../util/constants'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { navigate } from 'gatsby'

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  justify-content: center;
  transition: box-shadow 0.5s ease, height 0.5s ease;
`

type Props = {
  pageArea: number
  logoURL: string
  sectionOne: string
  sectionTwo: string
  sectionThree: string
  offMainPage?: boolean
}

const Header: FC<Props> = ({
  pageArea,
  logoURL,
  sectionOne,
  sectionTwo,
  sectionThree,
  offMainPage = false,
}) => {
  const [onTop, setOnTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      setOnTop(scrollTop < 50)
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const logoClick = () => {
    if (window.location.pathname === '/') {
      scroll.scrollToTop({ duration: 1000, smooth: true })
    } else {
      navigate('/')
    }
  }

  const pageClick = (section: string) => {
    if (offMainPage) {
      navigate(`/#${section}`)
    }
  }

  return (
    <header>
      <Container
        bg={'white'}
        height={onTop ? 112 : 75}
        sx={{ boxShadow: onTop ? 'none' : '0 0 40px rgba(0, 0, 0, 0.05)' }}
      >
        <Flex alignItems="center" width={1366} px={[4, 4, 0]}>
          <Box sx={{ cursor: 'pointer' }} onClick={logoClick}>
            <Image src={logoURL} width={35} />
          </Box>
          <Box flex={1} />
          {!offMainPage && (
            <>
              <Link to={pageLink.home} smooth={true} duration={1000}>
                <TextButton text={'who am i?'} active={pageArea === 0} />
              </Link>
              <Box mr={[4]} />
            </>
          )}
          <Link
            to={pageLink.work}
            smooth={true}
            duration={1000}
            onClick={() => pageClick(pageLink.work)}
          >
            <TextButton text={sectionOne} active={pageArea === 1} />
          </Link>
          <Box mr={[4]} />
          <Link
            to={pageLink.skills}
            smooth={true}
            duration={1000}
            onClick={() => pageClick(pageLink.skills)}
          >
            <TextButton text={sectionTwo} active={pageArea === 2} />
          </Link>
          <Box mr={[4]} />
          <Link
            to={pageLink.contact}
            smooth={true}
            duration={1000}
            onClick={() => pageClick(pageLink.contact)}
          >
            <TextButton text={sectionThree} active={pageArea === 3} />
          </Link>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
