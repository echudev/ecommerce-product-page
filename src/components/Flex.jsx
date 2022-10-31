import { styled } from '@stitches/react'

export const Flex = styled('div', {
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
