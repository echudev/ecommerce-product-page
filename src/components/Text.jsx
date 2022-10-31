import { styled } from '@stitches/react'

export const Text = styled('div', {
  variants: {
    bold: {
      true: { fontWeight: '$bold' }
    },
    regular: {
      true: { fontWeight: '$regular' }
    },
    primary: {
      true: { color: '$Orange' }
    },
    black: {
      true: { color: '$Black' }
    },
    light: {
      true: { color: '$DarkGrayishBlue' }
    },
    light2: {
      true: { color: '$GrayishBlue' }
    },
    center: {
      true: { textAlign: 'center' }
    },
    left: {
      true: { textAlign: 'left' }
    },
    right: {
      true: { textAlign: 'right' }
    },
    flexCenter: {
      true: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
    },
    m: {
      0: { margin: '0' },
      1: { margin: '1rem' },
      2: { margin: '2rem' },
      3: { margin: '3rem' }
    },
    hm: {
      1: { marginLeft: '1rem', marginRight: '1rem' },
      2: { marginLeft: '2rem', marginRight: '2rem' },
      3: { marginLeft: '3rem', marginRight: '3rem' }
    },
    vm: {
      1: { marginTop: '1rem', marginBottom: '1rem' },
      2: { marginTop: '2rem', marginBottom: '2rem' },
      3: { marginTop: '3rem', marginBottom: '3rem' }
    },
    mt: {
      1: { marginTop: '1rem' },
      2: { marginTop: '2rem' },
      3: { marginTop: '3rem' }
    },
    lined: {
      true: { textDecoration: 'line-through' }
    }
  },
  defaultVariants: {
    bold: false,
    m: 0,
    padding: 0
  }
})
