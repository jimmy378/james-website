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
  type: 'all' | 'motion' | 'web' | 'illustration'
  intervals: number
  hasNextPageInitial: boolean
}> = ({ initialProjects, type, intervals, hasNextPageInitial }) => {
  const firstUpdate = useRef(true)
  const [visibleProjects, setVisibleProjects] = useState(initialProjects)
  const [hasNextPage, setHasNextPage] = useState(hasNextPageInitial)
  const [skip, setSkip] = useState(intervals)

  const getType = (): string => {
    let projectType = 'motion|web|illustration'
    switch (type) {
      case 'all':
        projectType = 'motion|web|illustration'
        break
      case 'motion':
        projectType = 'motion'
        break
      case 'web':
        projectType = 'web'
        break
      case 'illustration':
        projectType = 'illustration'
        break
      default:
        projectType = 'motion|web|illustration'
        break
    }
    return projectType
  }

  const fetchMoreProjects = async (reset: boolean) => {
    if (reset) {
      setSkip(0)
    }
    const result = await Axios({
      url: '/__graphql',
      method: 'post',
      data: {
        query: `
          query {
            allProjectsYaml(limit: ${intervals}, skip: ${
          reset ? 0 : skip
        }, filter: {type: { glob: "${getType()}"}}) {
              edges {
                node {
                  slug
                  title
                  type
                  feature
                }
              }
              pageInfo {
                hasNextPage
                totalCount
                perPage
                itemCount
              }
            }
          }
        `,
      },
    })

    const data = (result.data as any).data.allProjectsYaml as IAllProjectsYaml

    setHasNextPage(data.pageInfo.hasNextPage)

    if (reset) {
      setVisibleProjects(data.edges)
      setSkip(data.pageInfo.itemCount)
    } else {
      setVisibleProjects(current => [...current, ...data.edges])
      setSkip(skip + data.pageInfo.itemCount)
    }
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
    } else {
      fetchMoreProjects(true)
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
      {hasNextPage && (
        <Button onClick={() => fetchMoreProjects(false)}>Load more</Button>
      )}
    </Flex>
  )
}

export default ProjectGrid
