import React, { useState } from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import SkillsAnimation from '../skillsAnimation'
import motionData from '../../animations/motion.json'
import devData from '../../animations/developer.json'
import illustrationData from '../../animations/illustration.json'
import DropDownButton from '../dropdownButton'
import { motion, Variants } from 'framer-motion'

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

const SkillsSection = () => {
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
          Skills.
        </Text>
        <Box
          sx={{ gridColumn: ['1', '3 / span 2'], gridRow: ['3', '1 / span 2'] }}
          p={[4]}
        >
          {active === 0 && <SkillsAnimation data={motionData} />}
          {active === 1 && <SkillsAnimation data={devData} />}
          {active === 2 && <SkillsAnimation data={illustrationData} />}
        </Box>
        <Box sx={{ gridColumn: ['1', '2 / span 1'] }} px={[5, 0]}>
          <DropDownButton
            text={'Motion Graphics'}
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
              <Text>
                Motion design has been my passion for many years. I use the
                adobe suite on a daily basis and love creating sleek animations.
                <br />
                <br />
                Motion design has been my passion for many years. I use the
                adobe suite on a daily basis and love creating sleek animations.
              </Text>
            </motion.div>
          </Box>
          <DropDownButton
            text={'Web Development'}
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
            <Text>
              Motion design has been my passion for many years. I use the adobe
              suite on a daily basis and love creating sleek animations.
              <br />
              <br />
              Motion design has been my passion for many years. I use the adobe
              suite on a daily basis and love creating sleek animations.
            </Text>
          </motion.div>
          <DropDownButton
            text={'Illustration'}
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
            <Text>
              Motion design has been my passion for many years. I use the adobe
              suite on a daily basis and love creating sleek animations.
              <br />
              <br />
              Motion design has been my passion for many years. I use the adobe
              suite on a daily basis and love creating sleek animations.
            </Text>
          </motion.div>
        </Box>
      </GridStyle>
      <Box flex={1} />
    </Flex>
  )
}

export default SkillsSection
