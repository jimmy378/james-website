import React, { FC, useRef, useState, useEffect } from 'react'
import { Box, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import { motion, MotionPluginContext } from 'framer-motion'
import { useIntersection } from 'react-use'

const Image = styled(Box)`
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    75% 100%,
    50% 100%,
    25% 100%,
    0 100%
  );
  transition: clip-path 0.3s ease;
`

const Container = styled(Box)`
  padding: 0;
  @media (hover: hover) and (pointer: fine) {
    :hover {
      padding: 3px;
      border: 2px solid ${p => p.theme.colors.primaryLight};
    }
    :hover ${Image} {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 100%,
        75% 100%,
        50% 75%,
        25% 100%,
        0 100%
      );
      cursor: pointer;
    }
  }
  :active {
    background-color: ${p => p.theme.colors.primaryLight};
  }
  border: 0 solid ${p => p.theme.colors.primaryLight};
  background-color: rgb(240, 240, 240);
  transition: padding 0.3s ease, border 0.3s ease;
  position: relative;
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
    rootMargin: '200px',
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
      variants={{
        on: { transform: 'scale(1)', opacity: 1 },
        off: { transform: 'scale(0)', opacity: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      ref={ref}
    >
      <Container height={400}>
        <Image
          height={'100%'}
          mb={[2]}
          sx={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Container>
      <Text textAlign="center">{title}</Text>
    </motion.div>
  )
}

export default ProjectContainer
