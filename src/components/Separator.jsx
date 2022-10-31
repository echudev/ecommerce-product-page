import { styled } from '../stitches.config'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$GrayishBlue',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
  variants: {
    light: {
      true: { backgroundColor: '$LightGrayishBlue' }
    },
    bold: {
      true: { fontWeight: 700 }
    },
    display: {
      hidden: { display: 'none' }
    }
  }
})

export const Separator = StyledSeparator
