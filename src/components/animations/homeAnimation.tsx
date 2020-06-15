import React, { FC } from 'react'
import dance from '../../animations/dance.json'
import wave from '../../animations/wave.json'
import Lottie from 'react-lottie'

type Props = {
  animationIndex: number
  setLoading(state: boolean): void
}

const HomeSection: FC<Props> = ({ animationIndex, setLoading }) => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationIndex === 0 ? wave : dance,
        rendererSettings: { preserveAspectRatio: 'xMidYMid' },
      }}
      eventListeners={[
        {
          eventName: 'DOMLoaded',
          callback: () => setLoading(false),
        },
      ]}
      height={'100%'}
      width={'100%'}
    />
  )
}

export default HomeSection
