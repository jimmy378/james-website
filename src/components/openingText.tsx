import React, { FC } from 'react'
import { Box, Text, Flex } from 'rebass/styled-components'
import Arrow from './arrow'
import { Link } from 'react-scroll'
import { pageLink, Colour } from '../util/constants'

const OpeningText: FC<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <Box>
      <Text
        variant={'heading'}
        sx={{ '::first-line': { color: Colour.primary } }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Box>
        <Box variant={'dividerMedium'} />
        <Text dangerouslySetInnerHTML={{ __html: body }} />
        <Box variant={'dividerMedium'} />
      </Box>
      <Box variant={'dividerMedium'} />
      <Flex justifyContent="center">
        <Link to={pageLink.work} smooth={true} duration={1000}>
          <Arrow />
        </Link>
      </Flex>
    </Box>
  )
}

export default OpeningText
