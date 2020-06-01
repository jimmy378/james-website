import React, { useEffect, useState } from 'react'
import { PageProps, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Flex, Box, Text, Image } from 'rebass/styled-components'
import TextButton from '../components/textButton'
import ReactPlayer from 'react-player'
import { Colour, pageLink } from '../util/constants'
import ProjectGrid from '../components/projectGrid'

const Home = (props: PageProps) => {
  const header: IHome = (props as any).data.dataYaml
  const project: IProject = (props as any).data.projectsYaml
  const projects: IProjectNode[] = (props.data as any).allProjectsYaml.edges
  const pageInfo: IPageInfo = (props.data as any).allProjectsYaml.pageInfo
  const prevSlug = (props.pageContext as any).prev
  const nextSlug = (props.pageContext as any).next

  const nextClick = () => {
    if (nextSlug) {
      navigate(`/${nextSlug}`)
    }
  }

  const prevClick = () => {
    if (prevSlug) {
      navigate(`/${prevSlug}`)
    }
  }

  return (
    <Layout pageArea={0} data={header} offMainPage={true}>
      <SEO title={project.title} />
      <Box style={{ height: '120px' }} />
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
            alignItems={'center'}
            flexDirection={['column', 'row']}
            flexWrap={'wrap'}
            mb={[4]}
          >
            <Text fontSize={[6]} fontWeight={[2]}>
              {project.title}.
            </Text>
            <Box flex={1} />
          </Flex>
          {project.video && (
            <Box
              width={'100%'}
              sx={{ position: 'relative', paddingTop: '56.25%' }}
              mb={[4]}
              bg={Colour.primary}
            >
              <ReactPlayer
                url={project.video}
                style={{ position: 'absolute', top: 0, left: 0 }}
                width={'100%'}
                height={'100%'}
              />
            </Box>
          )}
          {project.body && (
            <Box mb={[4]}>
              <Text dangerouslySetInnerHTML={{ __html: project.body }} />
            </Box>
          )}
        </Box>
        <Box flex={1} />
      </Flex>
      <Flex justifyContent="center" alignItems="center" width="100%">
        <Box mx={[2]} width="100%" maxWidth={1024}>
          {project.images.length > 0 && (
            <>
              {project.images.map((image, index) => (
                <Image key={`image${index}`} src={image} mb={[2]} />
              ))}
              <Box mb={[4]} />
            </>
          )}
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" width="100%">
        <Flex
          justifyContent={'flex-start'}
          alignItems={'center'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          mb={[2]}
          width="100%"
          maxWidth={1024}
          mx={[4]}
        >
          <Box mx={[0]} my={[1]} onClick={() => navigate(`/#${pageLink.work}`)}>
            <TextButton text={'back to work'} active={false} altStyle />
          </Box>
          <Box flex={1} />
          <Box mx={[0]} my={[1]} onClick={prevClick}>
            <TextButton
              text={'previous'}
              active={false}
              altStyle
              disabled={!prevSlug}
            />
          </Box>
          <Box mr={[3]} />
          /
          <Box mr={[3]} />
          <Box mx={[0]} my={[1]} onClick={nextClick}>
            <TextButton
              text={'next'}
              active={false}
              altStyle
              disabled={!nextSlug}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" width="100%">
        <Box mx={[2]} width="100%" maxWidth={1024}>
          <ProjectGrid
            initialProjects={projects}
            intervals={pageInfo.perPage}
            hasNextPageInitial={pageInfo.hasNextPage}
            type={project.type as 'all' | 'motion' | 'web' | 'illustration'}
          />
        </Box>
      </Flex>
      <Box style={{ height: '120px' }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $type: String!) {
    projectsYaml(slug: { eq: $slug }) {
      slug
      video
      type
      title
      body
      feature
      images
    }
    allProjectsYaml(limit: 3, filter: { type: { glob: $type } }) {
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
    dataYaml {
      sections {
        title
      }
      logo
    }
  }
`

export default Home
