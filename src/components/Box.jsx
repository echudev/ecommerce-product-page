import { styled } from '@stitches/react'

export const Box = styled('div', {
  display: 'flex',
  variants: {
    column: {
      true: { flexDirection: 'column' }
    },
    row: {
      true: { flexDirection: 'row' }
    },
    center: {
      true: { alignItems: 'center', justifyContent: 'center' }
    }
  }
})
