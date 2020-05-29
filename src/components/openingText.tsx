import React from 'react'
import { Box, Text, Flex } from 'rebass/styled-components'
import styled from 'styled-components'
import Arrow from './arrow'
import { Link } from 'react-scroll'
import { pageLink } from '../util/constants'

const GreenText = styled.span`
  color: ${p => p.theme.colors.primary};
`

const OpeningText = () => {
  return (
    <Box>
      <Text variant={'heading'}>
        <GreenText>Hi!</GreenText>
        <br />
        I&apos;m James.
      </Text>
      <Box>
        <Box variant={'dividerMedium'} />
        <Text>
          I&apos;m a motion graphics artist, web designer and illustrator based
          in Sydney, Australia.
        </Text>
      </Box>
      <Box>
        <Box variant={'dividerMedium'} />
        <Text>
          Check out my work or send me a message, I&apos;d love to hear from
          you.
        </Text>
      </Box>
      <Box variant={'dividerMedium'} />
      <Flex justifyContent="center">
        <Link to={pageLink.work} smooth={true} duration={1000} offset={-120}>
          <Arrow />
        </Link>
      </Flex>
    </Box>
  )
}

export default OpeningText
