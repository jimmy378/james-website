import React, { useState, FC, useEffect, useRef } from 'react'
import { Box, Flex, Button } from 'rebass/styled-components'
import styled from 'styled-components'
import ProjectContainer from './projectContainer'
import { Link } from 'gatsby'
import Axios from 'axios'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const ProjectGrid: FC<{
  initialProjects: IProjectNode[]
  type: 'all' | 'motion' | 'web' | 'design'
}> = ({ initialProjects, type }) => {
  const [visibleProjects, setVisibleProjects] = useState(
    initialProjects.slice(0, 3)
  )
  const [isInitial, setIsInitial] = useState(true)
  const [count, setCount] = useState(3)

  const getAllProjectsOfType = (): IProjectNode[] => {
    switch (type) {
      case 'all':
      default:
        return initialProjects

      case 'motion':
      case 'web':
      case 'design':
        return initialProjects.filter(x => x.node.type === type)
    }
  }

  const fetchMoreProjects = () => {
    const currentProjects = getAllProjectsOfType()
    setVisibleProjects(currentProjects.slice(0, count + 3))
    setCount(current => current + 3)
  }

  useEffect(() => {
    if (!isInitial) {
      const currentProjects = getAllProjectsOfType()
      setVisibleProjects(currentProjects.slice(0, 3))
      setCount(3)
    } else {
      setIsInitial(false)
    }
  }, [type])

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={'column'}
      width="100%"
    >
      <Box
        sx={{
          gridRow: [0, 2],
          gridTemplateColumns: ['1fr', 'repeat(auto-fill, minmax(400px, 1fr))'],
          display: 'grid',
          gridGap: '10px',
        }}
        width="100%"
      >
        {visibleProjects.map((project, index) => (
          <StyledLink key={`project-${index}`} to={`/${project.node.slug}`}>
            <ProjectContainer
              title={project.node.title}
              imageURL={project.node.feature}
            />
          </StyledLink>
        ))}
      </Box>
      <Box mb={[4]} />
      {visibleProjects.length < getAllProjectsOfType().length && (
        <Button onClick={() => fetchMoreProjects()}>Load more</Button>
      )}
    </Flex>
  )
}

export default ProjectGrid
