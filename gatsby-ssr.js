import React from 'react'
import { WindowContextProvider } from './src/context/windowContext'

const Provider = ({ element }) => (
  <WindowContextProvider>{element}</WindowContextProvider>
)

export const wrapRootElement = Provider
