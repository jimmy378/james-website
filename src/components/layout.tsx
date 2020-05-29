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
}

const Layout: FC<Props> = ({ children, pageArea }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Header pageArea={pageArea} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
