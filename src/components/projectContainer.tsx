import React, { FC } from 'react'
import { Box, Text } from 'rebass/styled-components'
import styled from 'styled-components'

const Image = styled(Box)`
  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      transform: scale(1.015);
      filter: saturate(1) contrast(1);
      opacity: 1;
    }
  }
  :active {
    filter: saturate(1) brightness(0.8) contrast(1);
    opacity: 1;
  }
  opacity: 0.25;
  filter: saturate(0) contrast(0.5);
  transition: transform 0.2s ease;
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
