import React, { useState, FC } from 'react'
import { Box, Flex } from 'rebass/styled-components'
import OpeningText from '../openingText'
import AnimationButton from '../animationButton'
import HomeAnimation from '../homeAnimation'

type Props = {
  title: string
  body: string
}

const HomeSection: FC<Props> = ({ title, body }) => {
  const animationData = [
    {
      data: require('../../animations/wave.json'),
      svg: '/wave.svg',
    },
    {
      data: require('../../animations/dance.json'),
      svg: '/dance.svg',
    },
  ]
  const [animationIndex, setAnimationIndex] = useState(0)

  return (
    <Flex minHeight={'100vh'} flexDirection="column">
      <Box height={112} minHeight={112} width="100%" />
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
            <HomeAnimation data={animationData[animationIndex].data} />
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
              {animationData.map((data, index) => (
                <Box mb={[2]} key={index}>
                  <AnimationButton
                    active={animationIndex === index}
                    onClick={() => setAnimationIndex(index)}
                    svgPath={animationData[index].svg}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Box flex={1} />
      </Flex>
    </Flex>
  )
}

export default HomeSection
