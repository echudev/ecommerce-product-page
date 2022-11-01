import { styled } from '../stitches.config'
import { useSelector } from 'react-redux'
import Galery from '../components/Galery'
import Specs from '../components/Specs'
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'

const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem',
  '@bp2': {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '0'
  }
})

export const Product = ({ id = 1 }) => {
  const products = useSelector(state => state.products)
  const product = products.find(product => product.id === id)

  return (
    <Wrapper>
      <EmblaCarousel images={product.images} />
      <Galery product={product} />
      <Specs product={product} />
    </Wrapper>
  )
}
