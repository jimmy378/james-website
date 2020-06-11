import { Colour } from './../../util/constants'
const buttonVariants = {
  primary: {
    height: 44,
    px: [4],
    bg: 'white',
    color: 'black',
    border: '0.5px solid black',
    borderRadius: 0,
    outline: 'none',
    cursor: 'pointer',
    '@media (hover:hover) and (pointer: fine)': {
      ':hover': {
        borderColor: Colour.primaryLight,
      },
    },
    ':active': {
      borderColor: Colour.primary,
      color: Colour.primary,
    },
  },
  mobile: {
    height: 44,
    px: [4],
    bg: 'white',
    color: 'black',
    border: '1px solid black',
    borderRadius: 0,
    outline: 'none',
    cursor: 'pointer',
    '@media (hover:hover) and (pointer: fine)': {
      ':hover': {
        borderColor: Colour.primaryLight,
      },
    },
    ':active': {
      borderColor: Colour.primary,
      color: Colour.primary,
    },
  },
}

export default buttonVariants
