import React, { FC } from 'react'
import { Flex, Text, Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { Colour } from '../util/constants'

const Line = styled.polyline<{ active: boolean }>`
  stroke: ${p => (p.active ? 'white' : p.theme.colors.primary)};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 10px;
  fill: transparent;
`

const Button = styled(Flex)<{ active: boolean }>`
  @media (hover: hover) and (pointer: fine) {
    cursor: pointer;
    :hover {
      border-color: ${p => p.theme.colors.primaryLight};
      background-color: ${p =>
        p.active ? p.theme.colors.primaryLight : 'white'};
    }
    :hover ${Line} {
      stroke: ${p => (p.active ? 'white' : p.theme.colors.primaryLight)};
    }
  }
  :active {
    background-color: ${p => (p.active ? p.theme.colors.primaryDark : 'white')};
    border-color: ${p => p.theme.colors.primaryDark};
    color: ${p => (p.active ? 'white' : p.theme.colors.primaryDark)};
  }
  :active ${Line} {
    stroke: ${p => (p.active ? 'white' : p.theme.colors.primaryDark)};
  }
  color: ${p => (p.active ? 'white' : 'black')};
`

type Props = {
  text: string
  active: boolean
  onClick(): void
}

const DropDownButton: FC<Props> = ({ text, active, onClick }) => {
  return (
    <Button
      height={40}
      width={1}
      bg={active ? Colour.primary : 'white'}
      sx={{
        borderRadius: 0,
        border: '0.5px solid',
        borderColor: active ? Colour.primary : 'black',
      }}
      alignItems="center"
      px={[2]}
      active={active}
      onClick={onClick}
    >
      <Text textAlign="left">{text}</Text>
      <Box flex={1} />
      <Box
        height={15}
        sx={{
          transform: `scaleY(${active ? 1 : -1})`,
          transition: 'transform 0.3s ease',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 498 254"
          height="100%"
        >
          <g>
            <g>
              <Line active={active} points="493 5 249 249 5 5" />
            </g>
          </g>
        </svg>
      </Box>
    </Button>
  )
}

export default DropDownButton
