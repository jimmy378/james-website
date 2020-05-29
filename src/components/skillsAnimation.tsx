import React, { FC } from 'react'
import { useEffect, useState, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

const Container = styled(Box)`
  width: 100%;
  position: relative;
`

const AnimationContainer = styled.svg`
  transform: translateX(${p => p.x}px);
`

type Props = {
  data: any
}

const SkillsAnimation: FC<Props> = ({ data }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data,
    })
  }, [])

  return (
    <Container>
      <AnimationContainer
        ref={containerRef}
        viewBox="0 0 3000 3000"
        preserveAspectRatio="xMidYMin"
      />
    </Container>
  )
}

export default SkillsAnimation
