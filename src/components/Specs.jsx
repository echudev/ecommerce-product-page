import { useState } from 'react'
import { styled, css } from '../stitches.config'
import { Flex } from '../components/Flex'
import { Text } from '../components/Text'
import minusIcon from '../assets/icons/icon-minus.svg'
import plusIcon from '../assets/icons/icon-plus.svg'
import IconButton from '../components/IconButton'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/cartSlice'
import RadixToast from './RadixToast'

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@bp2': {
    width: '100%',
    alignItems: 'center'
  }
})

const description = css({
  justifyContent: 'flex-start',
  maxWidth: '510px',
  padding: '1rem',
  '@bp2': {
    maxWidth: '100%'
  }
})

const PriceBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@bp2': {
    flexDirection: 'row'
  }
})
const Discount = styled('div', {
  display: 'flex',
  '@bp2': {
    marginTop: '1.2rem',
    marginRight: '2rem',
    marginLeft: 'auto'
  }
})

const Controls = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginTop: '2rem',
  '@bp2': {
    flexDirection: 'column'
  }
})

const Counter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$LightGrayishBlue',
  borderRadius: '10px',
  justifyContent: 'space-around',
  '@bp2': {
    width: '100%'
  }
})

const Specs = ({ product }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [counter, setCounter] = useState(1)
  const hanldeAddProduct = () => {
    setCounter(0)
    if (counter > 0) {
      dispatch(addItemToCart({ ...product, quantity: counter }))
      setOpen(true)
    }
  }

  return (
    <Wrapper>
      <Flex column className={description}>
        <Text as='h5' primary>
          SNEAKER COMPANY
        </Text>
        <Text as='h1' vm={1} css={{ fontSize: '2.5rem' }}>
          {product.name}
        </Text>
        <Text as='p' light>
          {product.description}
        </Text>
        <PriceBox>
          <Flex row>
            <Text as='h2' mt={1}>
              ${product.price.toFixed(2)}
            </Text>
            <Text as='p' primary bold mt={1} hm={1} flexCenter
              css={{ backgroundColor: '$PaleOrange', borderRadius: '5px', padding: '5px' }}>
              50%
            </Text>
          </Flex>
          <Discount>
            <Text as='p' lined light2 bold>$250.00</Text>
          </Discount>
        </PriceBox>
        <Controls>
          <Counter>
            <IconButton onClick={() => counter !== 0 ? setCounter(counter - 1) : null}>
              <img src={minusIcon} alt='minus' />
            </IconButton>
            <Text as='h4' css={{ textAlign: 'center', width: '40px' }} hm={1} bold>{counter}</Text>
            <IconButton onClick={() => setCounter(counter + 1)}>
              <img src={plusIcon} alt='plus' />
            </IconButton>
          </Counter>
          <Button fullWidth onClick={hanldeAddProduct}>
            <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero" /></svg>
            <Text as='p' css={{ whiteSpace: 'nowrap' }}>
              Add to cart
            </Text>
          </Button>
          <RadixToast open={open} setOpen={setOpen} />
        </Controls>
      </Flex>
    </Wrapper>
  )
}

export default Specs
