import React, { FC, useState } from 'react'
import Header from './header'
import { ThemeProvider } from 'styled-components'
import Theme from '../theme'
import '../styles/index.css'
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

type Props = {
  pageArea: number
  data: IHome
  offMainPage?: boolean
}

const Layout: FC<Props> = ({ children, pageArea, data, offMainPage }) => {
  if (typeof window === `undefined`) {
    return <></>
  }

  return (
    <ThemeProvider theme={Theme}>
      <Header
        pageArea={pageArea}
        logoURL={data.logo}
        sectionOne={data.sections[0].title.toLowerCase()}
        sectionTwo={data.sections[1].title.toLowerCase()}
        sectionThree={data.sections[2].title.toLowerCase()}
        offMainPage={offMainPage}
      />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
