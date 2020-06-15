import React, { FC, useRef, useState, useEffect } from 'react'
import { Box, Text, Flex } from 'rebass/styled-components'
import Arrow from './arrow'
import { Link } from 'react-scroll'
import { pageLink, Colour } from '../util/constants'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'

const OpeningText: FC<{ title: string; body: string }> = ({ title, body }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  useEffect(() => {
    if (intersection && intersection.intersectionRatio === 1) {
      setVisible(true)
    }
  }, [intersection])
  return (
    <motion.div
      initial={'off'}
      animate={visible ? 'on' : 'off'}
      variants={{ on: { opacity: 1 }, off: { opacity: 0 } }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      ref={ref}
    >
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
    </motion.div>
  )
}

export default OpeningText
