import React, { FC, useRef, useState, useEffect } from 'react'
import { Box, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'

const Image = styled(Box)`
  opacity: 1;
  filter: saturate(1) contrast(1);
  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      filter: saturate(0.5) contrast(1);
      opacity: 0.5;
    }
  }
  :active {
    filter: saturate(2) brightness(0.8) contrast(1);
    opacity: 1;
  }
  transition: filter 0.2s ease, opacity 0.2s ease;
`

type Props = {
  title: string
  imageURL: string
}

const ProjectContainer: FC<Props> = ({ title, imageURL }) => {
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
      <Image
        height={400}
        mb={[2]}
        sx={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Text textAlign="center">{title}</Text>
    </motion.div>
  )
}

export default ProjectContainer
