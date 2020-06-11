import React, { FC, useState, useEffect } from 'react'

const defaultState = {
  isMobile: false,
}

const WindowContext = React.createContext(defaultState)

export const WindowContextProvider: FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 672 : false
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 672) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    const onResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 672) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <WindowContext.Provider value={{ isMobile: isMobile }}>
      {children}
    </WindowContext.Provider>
  )
}

export default WindowContext
