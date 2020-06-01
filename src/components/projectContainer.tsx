import React, { FC } from 'react'
import { Box, Text } from 'rebass/styled-components'
import styled from 'styled-components'

const Image = styled(Box)`
  opacity: 1;
  filter: saturate(1) contrast(1);
  @media (hover: hover) and (pointer: fine) {
    opacity: 0.5;
    filter: saturate(0) contrast(1);
    :hover {
      cursor: pointer;
      filter: saturate(1) contrast(1);
      opacity: 1;
    }
  }
  :active {
    filter: saturate(2) brightness(0.8) contrast(1);
    opacity: 1;
  }
  transition: filter 0.2s ease, opacity 0.2s ease;
`

type Props = {
  title: string
  imageURL: string
}

const ProjectContainer: FC<Props> = ({ title, imageURL }) => {
  return (
    <Box>
      <Image
        height={400}
        mb={[2]}
        sx={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Text textAlign="center">{title}</Text>
    </Box>
  )
}

export default ProjectContainer
