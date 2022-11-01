import { styled, keyframes } from '../stitches.config'
import * as Popover from '@radix-ui/react-popover'
import cartIcon from '../assets/icons/icon-cart.svg'
import trashIcon from '../assets/icons/icon-delete.svg'
import { Separator } from './Separator'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
import Button from './Button'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' }
})

const StyledTrigger = styled(Popover.Trigger, {
  backgroundColor: 'transparent',
  padding: 0,
  border: 'unset',
  cursor: 'pointer',
  borderRadius: '100%'
})
const StyledContent = styled(Popover.Content, {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  animation: `${scaleIn} 0.1s ease-out`,
  borderRadius: 6,
  padding: 20,
  width: '100%',
  minWidth: 300,
  zIndex: 1000,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@bp2': {
    width: '98vw',
    marginRight: '1vw',
    marginTop: '2rem'
  }
})

const CartIconButton = styled('a', {
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
      small: { widt: 30, height: 33 },
      medium: { width: 40, height: 40 },
      large: { width: 55, height: 55 }
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

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 10
})

const Flex = styled('div', { display: 'flex' })

const Text = styled('div', {
  margin: 0,
  display: 'inline',
  color: '$Black',
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: '$DarkGrayishBlue' }
    },
    bold: {
      true: { fontWeight: 700 }
    },
    center: {
      true: { textAlign: 'center' }
    }
  }
})

const CartPopover = () => {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Popover.Root>
           <StyledTrigger>
                <CartIconButton>
                 <Flex css={{ position: 'relative' }}>
                   <Img src={cartIcon} alt='cart' size='medium'/>
                    {cart.length < 1 ? null : <Badge>{totalItems}</Badge>}
                 </Flex>
                </CartIconButton>
           </StyledTrigger>
        <StyledContent>
        <Flex css={{ flexDirection: 'column', gap: 7 }}>
          <Text bold>Cart</Text>
          <Separator />
          {cart.length < 1
            ? <Text faded center>Your cart is empty.</Text>
            : <>
              {cart.map((item, i) => (
                <Item key={i} item={item}>
                  <Img
                  src={item.thumbnails[0]}
                  alt='thumbnail'
                  size='large'
                  css={{ borderRadius: '10px' }} />
                  <Flex css={{ flexDirection: 'column' }}>
                    <Text as='p'>{item.name}</Text>
                    <Text as='p'>${item.price.toFixed(2)} x {item.quantity} <b>${(item.price * item.quantity).toFixed(2)}</b></Text>
                  </Flex>
                  <Img
                    onClick={() => handleRemoveItem(item.id)}
                    src={trashIcon}
                    alt='trash'
                    size='small'
                    css={{ marginLeft: '10px', cursor: 'pointer' }}
                  />
                </Item>
              ))}
              <Button fullWidth unset>Checkout</Button>
            </>
          }
        </Flex>
       </StyledContent>
   </Popover.Root>
  )
}
export default CartPopover
