import { styled } from '../stitches.config'

const Button = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  height: '40px',
  padding: '1.5rem',
  margin: '1rem',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
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
    },
    fullWidth: {
      true: { width: '100%' }
    },
    unset: {
      true: { margin: 0, padding: 0 }
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

export default Button
