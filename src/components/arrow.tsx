import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

const Line = styled.polyline`
  stroke: ${p => p.theme.colors.primaryLight};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 15px;
  fill: transparent;
`

const Container = styled(Box)`
  width: 80px;
  padding: 10px;
  @media (hover: hover) and (pointer: fine) {
    :hover ${Line} {
      stroke: ${p => p.theme.colors.primary};
    }
    cursor: pointer;
  }
  :active ${Line} {
    stroke: ${p => p.theme.colors.primaryDark};
  }
`

const Arrow = () => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 254">
        <g>
          <g>
            <Line points="493 5 249 249 5 5" />
          </g>
        </g>
      </svg>
    </Container>
  )
}

export default Arrow
