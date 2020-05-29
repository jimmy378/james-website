import React from 'react'
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

import contactData from '../animations/contact.json'

const Container = styled(Box)`
  width: 100%;
  position: relative;
`

const AnimationContainer = styled.svg`
  transform: translateX(${p => p.x}px);
`

const ContactAnimation = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: contactData,
    })
  }, [])

  return (
    <Container>
      <AnimationContainer
        ref={containerRef}
        viewBox="0 0 1500 1500"
        preserveAspectRatio="xMidYMax"
      />
    </Container>
  )
}

export default ContactAnimation
