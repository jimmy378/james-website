import buttonVariants from './variants/buttons'
import boxVariants from './variants/box'
import textVariants from './variants/text'
import formVariants from './variants/forms'

export const breakpoints = ['42em', '1366px']

export const fontSizes = [12, 14, 16, 20, 24, 32, 44]

export const space = [0, 4, 8, 16, 32, 64, 128, 256]

export const colors = {
  primary: '#60BC65',
  primaryLight: '#B4DE7A',
  primaryDark: '#43913a',
  secondary: '#7B3FD9',
  secondaryLight: '#ac65f7',
  secondaryDark: '#5429c2',
  grey: '#AFAFAF',
}

export const fonts = {
  body: 'Montserrat, sans-serif;',
  heading: 'inherit',
  monospace: 'Menlo, monospace',
}

export const fontWeights = [200, 400, 700]

export const lineHeights = {
  body: 1.5,
  heading: 1.25,
}

export const shadows = {
  small: '0 0 4px rgba(0, 0, 0, .125)',
  large: '0 0 24px rgba(0, 0, 0, .125)',
}

const Theme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  shadows,
  forms: formVariants,
  text: {
    ...textVariants,
  },
  variants: {
    ...boxVariants,
  },
  buttons: buttonVariants,
}

export default Theme
