import { styled, css } from '../stitches.config'
import { useState } from 'react'
import ImageDialog from '../components/ImageDialog'

const Wraper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'right',
  height: '100%',
  maxWidth: '410px',
  maxHeight: '610px',
  margin: '0 4vw',
  '@bp2': {
    width: '100%',
    maxWidth: '100%'
  }
})
const Img = styled('img', {
  display: 'flex',
  width: '100%',
  minWidth: '200px',
  maxHeight: '350px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 15,
  cursor: 'pointer',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, .1), 0 10px 10px 0 rgba(0, 0, 0, .1)',
  '@bp2': {
    borderRadius: 0
  }
})

const ThumbnailContainer = styled('div', {
  display: 'flex',
  marginTop: 20,
  width: '100%',
  justifyContent: 'space-between',
  gap: '2vw',
  '@bp2': {
    display: 'none'
  }
})

const Thumbnail = styled('img', {
  maxWidth: '70px',
  height: 'auto',
  borderRadius: '15%',
  transition: '.3s',
  '&:hover': {
    cursor: 'pointer',
    filter: 'opacity(40%)'
  }
})

const selected = css({
  boxShadow: '0 0 0 3px $colors$Orange'
})

const Galery = ({ product }) => {
  const [selectedImg, setSelectedImg] = useState('0')
  const [open, setOpen] = useState(false)

  return (
    <Wraper>
        {product.images.map((image, index) => (
          <Img
            onClick={() => setOpen(true)}
            name={index}
            key={index}
            src={image}
            className={'animate__animated animate__fadeIn'}
            style={{ display: index.toString() === selectedImg ? 'flex' : 'none' }}
          />
        ))}
        <ImageDialog open={open} setOpen={setOpen} />
        <ThumbnailContainer>
          {product.thumbnails.map((thumbnail, index) => (
            <Thumbnail
              onClick={(e) => setSelectedImg(e.target.name)}
              name={index}
              key={index}
              src={thumbnail}
              className={selectedImg === index.toString() ? selected : null}
            />
          ))}
        </ThumbnailContainer>
    </Wraper>
  )
}

export default Galery
