import { styled, keyframes } from '../stitches.config'
import PropTypes from 'prop-types'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import cartIcon from '../assets/icons/icon-cart.svg'
import { Separator } from './Separator'

// Animaciones del hover
const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

// estilo del contenido de la card
const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
})

// const StyledArrow = styled(HoverCardPrimitive.Arrow, {
//   fill: 'white'
// })

// declaro propTypes para que no muestre error eslint
Content.propTypes = {
  children: PropTypes.node.isRequired
}
// contenido de la card
function Content ({ children, ...props }) {
  return (
    <HoverCardPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        {/* <StyledArrow /> */}
      </StyledContent>
    </HoverCardPrimitive.Portal>
  )
}

// Exports
export const HoverCard = HoverCardPrimitive.Root
export const HoverCardTrigger = HoverCardPrimitive.Trigger
export const HoverCardContent = Content

// Your app...
const Flex = styled('div', { display: 'flex' })

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: '0 0 0 2px white' }
})

const Img = styled('img', {
  display: 'block',
  position: 'relative',
  padding: 7,
  variants: {
    size: {
      normal: { width: 40, height: 40 },
      large: { width: 60, height: 60 }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

const Text = styled('div', {
  margin: 0,
  color: '$Black',
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: '$DarkGrayishBlue' }
    },
    bold: {
      true: { fontWeight: 700 }
    }
  }
})

const Badge = styled('span', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '18px',
  height: '18px',
  padding: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  backgroundColor: '$Orange',
  color: '$White',
  fontSize: '$2'
})

const Cart = () => (
  <HoverCard openDelay={300} closeDelay={150}>
    {/* icon */}
    <HoverCardTrigger asChild>
      <ImageTrigger href="https://twitter.com/radix_ui" target="_blank" rel="noreferrer noopener">
        <Flex css={{ position: 'relative' }}>
          <Img src={cartIcon} />
          <Badge>5</Badge>
        </Flex>
      </ImageTrigger>
    </HoverCardTrigger>
    {/* card  */}
    <HoverCardContent sideOffset={5}>
      <Flex css={{ flexDirection: 'column', gap: 7 }}>
        <Text bold>Cart</Text>
        <Separator />
        <Text faded>
          Components, icons, colors, and templates for building high-quality, accessible UI. Free
          and open-source.
        </Text>
      </Flex>
    </HoverCardContent>
  </HoverCard>
)

export default Cart
