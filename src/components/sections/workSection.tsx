import React, { useState } from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import TextButton from '../textButton'
import ProjectContainer from '../projectContainer'

const GridStyle = styled(Box)`
  position: relative;
  display: grid;
  height: 100%;
  width: 1366px;
  overflow: hidden;
`

const ProjectGrid = styled(Box)`
  display: grid;
  grid-gap: 10px;
`

const WorkSection = () => {
  const [selectedType, setSelectedType] = useState(0)

  return (
    <Flex height={'100%'}>
      <Box flex={1} />
      <GridStyle
        height={'100%'}
        sx={{
          gridTemplateColumns: ['1fr', '1fr 6fr 1fr', '170px 1fr 170px'],
        }}
      >
        <Flex
          sx={{ gridColumnStart: [1, 2] }}
          justifyContent={['center', 'flex-start']}
          alignItems={'center'}
          flexDirection={['column', 'row']}
          flexWrap={'wrap'}
          mb={[2]}
        >
          <Text fontSize={[6]} fontWeight={[2]} mb={[3]}>
            Work.
          </Text>
          <Box flex={1} />
          <Flex alignItems="center" flexWrap={'wrap'} justifyContent={'center'}>
            <Box mx={[3, 0]} my={[1]} onClick={() => setSelectedType(0)}>
              <TextButton text={'all'} active={selectedType === 0} altStyle />
            </Box>
            <Box mr={[0, 4]} />
            <Box mx={[3, 0]} my={[1]} onClick={() => setSelectedType(1)}>
              <TextButton
                text={'motion'}
                active={selectedType === 1}
                altStyle
              />
            </Box>
            <Box mr={[0, 4]} />
            <Box mx={[3, 0]} my={[1]} onClick={() => setSelectedType(2)}>
              <TextButton text={'web'} active={selectedType === 2} altStyle />
            </Box>
            <Box mr={[0, 4]} />
            <Box mx={[3, 0]} my={[1]} onClick={() => setSelectedType(3)}>
              <TextButton
                text={'illustration'}
                active={selectedType === 3}
                altStyle
              />
            </Box>
          </Flex>
        </Flex>
        <ProjectGrid
          sx={{
            gridColumnStart: [0, 1],
            gridColumnEnd: [0, 4],
            gridRow: [0, 2],
            gridTemplateColumns: [
              '1fr',
              'repeat(auto-fill, minmax(400px, 1fr))',
            ],
          }}
          px={[2]}
        >
          <ProjectContainer
            title={'Test Project'}
            imageURL={'placeholder.jpg'}
          />
          <ProjectContainer
            title={'Test Project'}
            imageURL={'placeholder.jpg'}
          />
          <ProjectContainer
            title={'Test Project'}
            imageURL={'placeholder.jpg'}
          />
          <ProjectContainer
            title={'Test Project'}
            imageURL={'placeholder.jpg'}
          />
          <ProjectContainer
            title={'Test Project'}
            imageURL={'placeholder.jpg'}
          />
        </ProjectGrid>
      </GridStyle>
      <Box flex={1} />
    </Flex>
  )
}

export default WorkSection
