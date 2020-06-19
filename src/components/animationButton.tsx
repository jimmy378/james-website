import React, { FC } from 'react'
import { Box } from 'rebass/styled-components'
import { Colour } from '../util/constants'

type Props = {
  active?: boolean
  onClick(): void
  Icon: () => JSX.Element
}

const WaveButton: FC<Props> = ({ active, onClick, Icon }) => {
  return (
    <Box
      width={[50, 60]}
      height={[50, 60]}
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
          svg: {
            stroke: 'white',
          },
          backgroundColor: Colour.primaryDark,
          borderColor: Colour.primaryDark,
        },
        svg: {
          fill: 'none',
          stroke: active ? 'white' : 'black',
        },
      }}
    >
      <Icon />
    </Box>
  )
}

export default WaveButton
