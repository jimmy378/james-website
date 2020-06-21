import React, { useState, FC } from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import TextButton from '../textButton'
import ProjectGrid from '../projectGrid'

const WorkSection: FC<{
  data: IHome
  projects: IProjectNode[]
  pageInfo: IPageInfo
  projectOrder: string[]
}> = ({ data, projects, pageInfo, projectOrder }) => {
  const [selectedType, setSelectedType] = useState<
    'all' | 'motion' | 'web' | 'design'
  >('all')

  const orderedProjects = (): IProjectNode[] => {
    const ordered: IProjectNode[] = []
    for (const slug of projectOrder) {
      const project = projects.find(x => x.node.slug === slug)
      if (project) {
        ordered.push(project)
      }
    }
    return ordered
  }

  return (
    <Box>
      <Flex>
        <Box flex={1} />
        <Box
          width={1024}
          sx={{
            position: 'relative',
          }}
          mx={[4]}
        >
          <Flex
            justifyContent={['center', 'flex-start']}
            alignItems={['flex-start', 'center']}
            flexDirection={['column', 'row']}
            flexWrap={'wrap'}
            mb={[2]}
          >
            <Text fontSize={[6]} fontWeight={[2]} mb={[3]}>
              {data.sections[0].title}.
            </Text>
            <Box flex={1} />
            <Flex
              alignItems="center"
              flexWrap={'wrap'}
              justifyContent={['flex-start', 'center']}
            >
              <Box mr={[3, 0]} my={[1]} onClick={() => setSelectedType('all')}>
                <TextButton
                  text={'all'}
                  active={selectedType === 'all'}
                  altStyle
                />
              </Box>
              <Box mr={[0, 4]} />
              <Box
                mx={[3, 0]}
                my={[1]}
                onClick={() => setSelectedType('motion')}
              >
                <TextButton
                  text={'motion'}
                  active={selectedType === 'motion'}
                  altStyle
                />
              </Box>
              <Box mr={[0, 4]} />
              <Box mx={[3, 0]} my={[1]} onClick={() => setSelectedType('web')}>
                <TextButton
                  text={'web'}
                  active={selectedType === 'web'}
                  altStyle
                />
              </Box>
              <Box mr={[0, 4]} />
              <Box
                mx={[3, 0]}
                my={[1]}
                onClick={() => setSelectedType('design')}
              >
                <TextButton
                  text={'design'}
                  active={selectedType === 'design'}
                  altStyle
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box flex={1} />
      </Flex>
      <Flex justifyContent="center" alignItems="center" width="100%">
        <Box mx={[2]} width="100%" maxWidth={1366}>
          <ProjectGrid
            initialProjects={orderedProjects()}
            type={selectedType}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default WorkSection
