import React, { FC } from 'react'
import contactData from '../../animations/contact.json'
import Lottie from 'react-lottie'

type Props = {
  setLoading(state: boolean): void
}

const HomeSection: FC<Props> = ({ setLoading }) => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: contactData,
        rendererSettings: { preserveAspectRatio: 'xMidYMax' },
      }}
      height={'100%'}
      width={'100%'}
      eventListeners={[
        {
          eventName: 'DOMLoaded',
          callback: () => setLoading(false),
        },
      ]}
    />
  )
}

export default HomeSection
