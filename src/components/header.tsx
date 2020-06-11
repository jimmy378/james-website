import { useEffect, useState, useContext } from 'react'
import React, { FC } from 'react'
import { Flex, Image, Box, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import TextButton from './textButton'
import { pageLink, Colour } from '../util/constants'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { navigate } from 'gatsby'
import WindowContext from '../context/windowContext'
import BurgerIcon from './burgerIcon'
import { motion } from 'framer-motion'

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
  const { isMobile } = useContext(WindowContext)
  const [burgerActive, setBurgerActive] = useState(false)

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
      {isMobile ? (
        <>
          <motion.div
            animate={burgerActive ? 'active' : 'inactive'}
            variants={{
              active: { transform: 'translateX(0px)' },
              inactive: {
                transform: `translateX(${window.innerWidth + 10}px)`,
              },
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'white',
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.05)',
              boxSizing: 'border-box',
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Link
              to={pageLink.home}
              smooth={true}
              duration={1000}
              onClick={() => setBurgerActive(false)}
            >
              <Text>who am I?</Text>
            </Link>
            <Box mb={[4]} />
            <Link
              to={pageLink.work}
              smooth={true}
              duration={1000}
              onClick={() => setBurgerActive(false)}
            >
              <Text>work</Text>
            </Link>
            <Box mb={[4]} />
            <Link
              to={pageLink.skills}
              smooth={true}
              duration={1000}
              onClick={() => setBurgerActive(false)}
            >
              <Text>skills</Text>
            </Link>
            <Box mb={[4]} />
            <Link
              to={pageLink.contact}
              smooth={true}
              duration={1000}
              onClick={() => setBurgerActive(false)}
            >
              <Text>contact</Text>
            </Link>
          </motion.div>
          <Flex
            sx={{ position: 'fixed', zIndex: 500 }}
            width="100vw"
            justifyContent="flex-end"
          >
            <Box bg="white" p={[2]} sx={{ borderBottomLeftRadius: '2px' }}>
              <BurgerIcon
                active={burgerActive}
                onClick={() => setBurgerActive(current => !current)}
              />
            </Box>
          </Flex>
        </>
      ) : (
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
                  <TextButton text={'who am I?'} active={pageArea === 0} />
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
      )}
    </header>
  )
}

export default Header
