import React, { useState, FC, useRef, useEffect } from 'react'
import { Box, Flex, Text, Button } from 'rebass/styled-components'
import AnimationButton from '../animationButton'
import Wave from '../../images/svg/wave'
import Dance from '../../images/svg/dance'
import Spinner from '../spinner'
import loadable from '@loadable/component'
import { useIntersection } from 'react-use'
import Arrow from '../arrow'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { pageLink, Colour } from '../../util/constants'
const Animation = loadable(() => import('../animations/homeAnimation'))

type Props = {
  title: string
  body: string
}

const HomeSection: FC<Props> = ({ title, body }) => {
  const [animationIndex, setAnimationIndex] = useState(0)
  const [animationLoading, setAnimationLoading] = useState(true)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [animationVisible, setAnimationVisible] = useState(false)

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
    <>
      <Flex
        height={`${window.innerHeight}px`}
        width="100%"
        sx={{ position: 'absolute', display: ['flex', 'none'], zIndex: 1 }}
        justifyContent="center"
      >
        <Button
          onClick={() => setAnimationVisible(current => !current)}
          sx={{
            bottom: 50,
            position: 'absolute',
            cursor: 'pointer',
          }}
        >
          {animationVisible ? 'read' : 'animate'}
        </Button>
      </Flex>
      <Flex minHeight={'100vh'} flexDirection="column">
        <Flex flex={1}>
          <Box flex={1} />
          <Flex
            width={1024}
            sx={{
              position: 'relative',
            }}
            mx={[4]}
            alignItems={['center', 'flex-start']}
          >
            <Box
              width={['100%', 311]}
              sx={{
                position: 'relative',
                zIndex: 10,
                display: [animationVisible ? 'none' : 'block'],
              }}
              my={'auto'}
            >
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
                    <Box sx={{ display: ['none', 'block'] }}>
                      <Arrow />
                    </Box>
                  </Link>
                </Flex>
              </motion.div>
            </Box>
            <Box
              flex={1}
              height={['50%', '100%']}
              minHeight={[0, 500]}
              sx={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {animationLoading && (
                <Flex
                  width="100%"
                  height="100%"
                  sx={{ position: 'absolute' }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box sx={{ display: ['none', 'block'] }}>
                    <Spinner />
                  </Box>
                </Flex>
              )}
              <Flex
                height="100%"
                sx={{ transform: ['scale(1.5)', 'scale(1)'] }}
              >
                <Animation
                  animationIndex={animationIndex}
                  setLoading={setAnimationLoading}
                />
              </Flex>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                zIndex: 10,
                justifyContent: 'center',
                flexDirection: 'column',
              }}
              height="100%"
              display={['none', 'flex']}
            >
              <Flex flexDirection="column">
                <AnimationButton
                  active={animationIndex === 0}
                  onClick={() => setAnimationIndex(0)}
                  Icon={Wave}
                />
                <Box mb={[2]} />
                <AnimationButton
                  active={animationIndex === 1}
                  onClick={() => setAnimationIndex(1)}
                  Icon={Dance}
                />
              </Flex>
            </Box>
          </Flex>
          <Box flex={1} />
        </Flex>
      </Flex>
    </>
  )
}

export default HomeSection
