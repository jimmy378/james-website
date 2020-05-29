import React, { FC } from 'react'
import { useEffect, useState, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

import explode from '../animations/explode.json'

const Container = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
`

const AnimationContainer = styled.g`
  transform: translateX(${p => p.x}px);
`

const SVGContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
`

type Props = {
  data: any
}

const HomeAnimation: FC<Props> = ({ data }) => {
  const containerRef = useRef(null)
  const explodeRef = useRef(null)
  const [anim, setAnim] = useState<AnimationItem>()
  const [explodeAnim, setExplodeAnim] = useState<AnimationItem>()

  const setAnimation = (
    ref: any,
    animation: any,
    loop: boolean
  ): AnimationItem => {
    return lottie.loadAnimation({
      container: ref,
      renderer: 'svg',
      loop: loop,
      autoplay: true,
      animationData: animation,
    })
  }

  useEffect(() => {
    setExplodeAnim(setAnimation(explodeRef.current, explode, false))
    setAnim(setAnimation(containerRef.current, data, true))
  }, [])

  useEffect(() => {
    if (anim && explodeAnim) {
      explodeAnim.stop()
      explodeAnim.play()
      anim.destroy()
      setAnim(setAnimation(containerRef.current, data, true))
    }
  }, [data])

  return (
    <Container>
      <SVGContainer viewBox="0 0 3500 3500" preserveAspectRatio="xMidYMid">
        <AnimationContainer ref={explodeRef} />
        <AnimationContainer ref={containerRef} />
      </SVGContainer>
    </Container>
  )
}

export default HomeAnimation
