import { Colour } from '../../util/constants'

const formVariants = {
  input: {
    border: 'none',
    p: [3],
    ':focus': {
      outline: 'none',
      borderColor: Colour.primary,
      '::placeholder': {
        color: Colour.primary,
      },
    },
  },
  textArea: {
    border: 'none',
    resize: 'none',
    height: '200px',
    p: [3],
    ':focus': {
      outline: 'none',
      borderColor: Colour.primary,
      '::placeholder': {
        color: Colour.primary,
      },
    },
  },
}

export default formVariants
