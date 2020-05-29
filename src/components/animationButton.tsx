import React, { FC } from 'react'
import { Box, Image } from 'rebass'
import { Colour } from '../util/constants'

type Props = {
  active?: boolean
  onClick(): void
  svgPath: string
}

const AnimationButton: FC<Props> = ({ active, onClick, svgPath }) => {
  return (
    <Box
      width={60}
      height={60}
      bg={active ? Colour.primary : 'white'}
      onClick={onClick}
      p={12}
      sx={{
        border: '0.5px solid',
        borderColor: active ? Colour.primary : 'black',
        '@media (hover: hover) and (pointer: fine)': {
          ':hover': {
            stroke: Colour.primary,
            borderColor: Colour.primaryLight,
          },
          cursor: 'pointer',
        },
        ':active': {
          stroke: 'black',
          backgroundColor: Colour.primaryDark,
          borderColor: Colour.primaryDark,
        },
      }}
    >
      <Image src={svgPath} />
    </Box>
  )
}

export default AnimationButton
