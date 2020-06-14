import React, { FC, useState, useEffect } from 'react'

const defaultState = {
  isMobile: false,
  onLoad: () => {},
}

const WindowContext = React.createContext(defaultState)

export const WindowContextProvider: FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 672 : true
  )

  const onResize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 672) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <WindowContext.Provider value={{ isMobile: isMobile, onLoad: onResize }}>
      {children}
    </WindowContext.Provider>
  )
}

export default WindowContext
