import { styled } from '../stitches.config'

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  margin: 5,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',
  transition: '.1s',
  '&:active': { transform: 'translateY(1px)' },

  variants: {
    color: {
      primary: {
        backgroundColor: '$Orange',
        color: '$White',
        boxShadow: '0 2px 10px $colors$Orange',
        '&:hover': { filter: 'opacity(60%)' },
        '&:focus': { boxShadow: '0 0 0 2px $Orange' }
      },
      secondary: {
        backgroundColor: 'green',
        color: '$White',
        '&:hover': { backgroundColor: 'black' },
        '&:focus': { boxShadow: '0 0 0 2px violet' }
      }
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

export default Button
