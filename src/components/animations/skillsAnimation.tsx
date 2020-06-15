import React, { FC } from 'react'
import motionData from '../../animations/motion.json'
import devData from '../../animations/developer.json'
import illustrationData from '../../animations/illustration.json'
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
        animationData:
          animationIndex === 0
            ? motionData
            : animationIndex === 1
            ? devData
            : illustrationData,
        rendererSettings: { preserveAspectRatio: 'xMidYMin' },
      }}
      height={'100%'}
      width={'100%'}
      eventListeners={[
        {
          eventName: 'DOMLoaded',
          callback: () => setLoading(false),
        },
        {
          eventName: 'destroy',
          callback: () => setLoading(true),
        },
      ]}
    />
  )
}

export default HomeSection
