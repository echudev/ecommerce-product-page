import { styled, css } from '../stitches.config'

export const pageWrapper = css({
  width: '100%',
  height: '70vh',
  justifyContent: 'center',
  marginTop: '2rem'
})
export const leftWrapper = css({
  width: '50%',
  height: '100%',
  justifyContent: 'right'
})

export const rightWrapper = css({
  width: '50%'
})

export const gallery = css({
  position: 'relative',
  maxHeight: '610px',
  maxWidth: '410px',
  margin: '0 4vw'
})

export const Img = styled('img', {
  display: 'none',
  width: '100%',
  minWidth: '200px',
  maxHeight: '350px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 15,
  cursor: 'pointer',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, .1), 0 10px 10px 0 rgba(0, 0, 0, .1)'
})

export const thumbnailContainer = css({
  marginTop: 20,
  width: '100%',
  justifyContent: 'space-between',
  gap: '2vw'
})

export const Thumbnail = styled('img', {
  maxWidth: '70px',
  height: 'auto',
  borderRadius: '15%',
  transition: '.3s',
  '&:hover': {
    cursor: 'pointer',
    filter: 'opacity(40%)'
  }
})

export const description = css({
  justifyContent: 'flex-start',
  maxHeight: '610px',
  maxWidth: '510px',
  padding: '1rem'
})

export const selected = css({
  boxShadow: '0 0 0 3px $colors$Orange'
})

export const toShow = css({
  display: 'flex'
})
