import React, { FC, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import lottie, { AnimationItem } from 'lottie-web'

import burgerOn from '../animations/burgerOff.json'
import burgerOff from '../animations/burgerOn.json'

const Container = styled.svg`
  height: 40px;
  width: 40px;
  cursor: pointer;
`

type Props = {
  active: boolean
  onClick(): void
}

const BurgerIcon: FC<Props> = ({ active, onClick }) => {
  const ContainerRef = useRef(null)
  const [animation, setAnimation] = useState<AnimationItem>()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: ContainerRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: burgerOn,
    })
    setAnimation(anim)
  }, [])

  useEffect(() => {
    if (animation) {
      animation.destroy()
      if (active) {
        const anim = lottie.loadAnimation({
          container: ContainerRef.current!,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          animationData: burgerOn,
        })
        setAnimation(anim)
      } else {
        const anim = lottie.loadAnimation({
          container: ContainerRef.current!,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          animationData: burgerOff,
        })
        setAnimation(anim)
      }
    }
  }, [active])

  return (
    <Container viewBox={'0 0 200 150'} onClick={onClick} ref={ContainerRef} />
  )
}

export default BurgerIcon
