import React, { useState, FC } from 'react'
import { Box, Flex } from 'rebass/styled-components'
import OpeningText from '../openingText'
import AnimationButton from '../animationButton'
import Wave from '../../images/svg/wave'
import Dance from '../../images/svg/dance'
import dance from '../../animations/dance.json'
import wave from '../../animations/wave.json'
// import Lottie from 'react-lottie'
import Spinner from '../spinner'

type Props = {
  title: string
  body: string
}

const HomeSection: FC<Props> = ({ title, body }) => {
  const [animationIndex, setAnimationIndex] = useState(0)
  const [animationLoading, setAnimationLoading] = useState(true)

  return (
    <Flex minHeight={'100vh'} flexDirection="column">
      <Flex flex={1}>
        <Box flex={1} />
        <Flex
          width={1024}
          sx={{
            position: 'relative',
          }}
          mx={[4]}
          alignItems={'flex-start'}
        >
          <Box
            width={['100%', 311]}
            sx={{ position: 'relative', zIndex: 10 }}
            my={'auto'}
          >
            <OpeningText title={title} body={body} />
          </Box>
          <Box
            flex={1}
            height={'100%'}
            minHeight={500}
            sx={{
              position: 'relative',
            }}
            display={['none', 'block']}
          >
            {animationLoading && (
              <Flex
                width="100%"
                height="100%"
                sx={{ position: 'absolute' }}
                justifyContent="center"
                alignItems="center"
              >
                <Spinner />
              </Flex>
            )}
            {/* <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationIndex === 0 ? wave : dance,
                rendererSettings: { preserveAspectRatio: 'xMidYMid' },
              }}
              eventListeners={[
                {
                  eventName: 'DOMLoaded',
                  callback: () => setAnimationLoading(false),
                },
              ]}
              height={'100%'}
              width={'100%'}
            /> */}
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
  )
}

export default HomeSection
