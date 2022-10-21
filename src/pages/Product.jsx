import { useState } from 'react'
import { styled, css } from '../stitches.config'
import { Box } from '../components/Box'
import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'
import tmb1 from '../assets/images/image-product-1-thumbnail.jpg'
import tmb2 from '../assets/images/image-product-2-thumbnail.jpg'
import tmb3 from '../assets/images/image-product-3-thumbnail.jpg'
import tmb4 from '../assets/images/image-product-4-thumbnail.jpg'

const Img = styled('img', {
  display: 'flex',
  maxWidth: '100%',
  minWidth: '150px',
  height: 'auto',
  borderRadius: '5%',
  transition: '1s',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.5)'
  }
})
const Tmb = styled('img', {
  display: 'flex',
  margin: 7,
  maxWidth: '100%',
  minWidth: '10px',
  height: 'auto',
  borderRadius: '15%',
  transition: '.3s',
  '&:hover': {
    cursor: 'pointer',
    filter: 'opacity(40%)'
  }
})

export const Product = () => {
  const [state, setState] = useState({
    img: img1,
    index: '0'
  })
  const thumbnails = [tmb1, tmb2, tmb3, tmb4]

  const handleClick = (e) => {
    if (e.target.name === '0') {
      setState({ img: img1, index: '0' })
    } else if (e.target.name === '1') {
      setState({ img: img2, index: '1' })
    } else if (e.target.name === '2') {
      setState({ img: img3, index: '2' })
    } else if (e.target.name === '3') {
      setState({ img: img4, index: '3' })
    }
  }

  const selected = css({
    boxShadow: '0 0 0 3px $colors$Orange',
    filter: 'opacity(80%)'
  })

  return (
    <Box column center css={{ maxWidth: '500px' }}>
      <Box css={{ padding: 7 }}>
        <Box css={{ overflow: 'hidden', borderRadius: '5%' }}>
          <Img src={state.img} />
        </Box>
      </Box>
      <Box row >
        {thumbnails.map((thumbnail, index) => (
          <Tmb
            onClick={handleClick}
            name={index}
            key={index}
            src={thumbnail}
            className={state.index === index.toString() ? selected : null}
          />
        ))}
      </Box>
    </Box>
  )
}
