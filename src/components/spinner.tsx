import React from 'react'
import { Box } from 'rebass/styled-components'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Container = styled(Box)`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`

const Line = styled(Box)`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid;
  border-radius: 50%;
  animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${p => p.theme.colors.primary} transparent transparent
    transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Spinner = () => {
  return (
    <Container>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Container>
  )
}

export default Spinner
