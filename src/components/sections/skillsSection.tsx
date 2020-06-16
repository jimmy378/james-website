import React, { useState, FC, useEffect } from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import DropDownButton from '../dropdownButton'
import { motion, Variants } from 'framer-motion'
import Spinner from '../spinner'
import loadable from '@loadable/component'
const Animation = loadable(() => import('../animations/skillsAnimation'))

const GridStyle = styled(Box)`
  position: relative;
  display: grid;
  height: 100%;
  width: 1366px;
`

const textAnimation: Variants = {
  hidden: { height: 0, marginTop: 8, marginBottom: 8 },
  visible: { height: 'auto', marginTop: 20, marginBottom: 20 },
}

const SkillsSection: FC<{ data: IHome }> = ({ data }) => {
  const [animationLoading, setAnimationLoading] = useState(true)

  const [active, setActive] = useState(0)

  return (
    <Flex height={'100%'}>
      <Box flex={1} />
      <GridStyle
        height={'100%'}
        sx={{
          gridTemplateColumns: [
            '1fr',
            '1fr 2fr 4fr 1fr',
            '170px 2fr 4fr 170px',
          ],
          gridTemplateRows: '80px 1fr',
        }}
      >
        <Text
          fontSize={[6]}
          fontWeight={[2]}
          mb={[4]}
          sx={{ gridColumn: [1, 2] }}
          textAlign={['center', 'left']}
        >
          {data.sections[1].title}.
        </Text>
        <Box
          sx={{
            gridColumn: ['1', '3 / span 2'],
            gridRow: ['3', '1 / span 2'],
            position: 'relative',
          }}
          p={[4]}
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
          <Animation animationIndex={active} setLoading={setAnimationLoading} />
        </Box>
        <Box sx={{ gridColumn: ['1', '2 / span 1'] }} px={[4, 0]}>
          <DropDownButton
            text={data.skills[0].title}
            active={active === 0}
            onClick={() => setActive(0)}
          />
          <Box>
            <motion.div
              initial="hidden"
              animate={active === 0 ? 'visible' : 'hidden'}
              variants={textAnimation}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <Text dangerouslySetInnerHTML={{ __html: data.skills[0].body }} />
            </motion.div>
          </Box>
          <DropDownButton
            text={data.skills[1].title}
            active={active === 1}
            onClick={() => setActive(1)}
          />
          <motion.div
            initial="hidden"
            animate={active === 1 ? 'visible' : 'hidden'}
            variants={textAnimation}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <Text dangerouslySetInnerHTML={{ __html: data.skills[1].body }} />
          </motion.div>
          <DropDownButton
            text={data.skills[2].title}
            active={active === 2}
            onClick={() => setActive(2)}
          />
          <motion.div
            initial="hidden"
            animate={active === 2 ? 'visible' : 'hidden'}
            variants={textAnimation}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <Text dangerouslySetInnerHTML={{ __html: data.skills[2].body }} />
          </motion.div>
        </Box>
      </GridStyle>
      <Box flex={1} />
    </Flex>
  )
}

export default SkillsSection
