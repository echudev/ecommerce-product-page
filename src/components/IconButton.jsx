import { styled } from '../stitches.config'

const IconButton = styled('button', {
  all: 'unset',
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
  width: '50px',
  '&:hover': { cursor: 'pointer' },

  variants: {
    close: {
      true: {
        position: 'relative',
        marginLeft: 'auto',
        top: -10,
        transform: 'scale(1.8)'
      }
    },
    left: {
      true: {
        backgroundColor: '$White',
        position: 'absolute',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2), 0 6px 14px 0 rgba(0, 0, 0, 0.2)',
        top: '50%',
        left: '-5%'
      }
    },
    right: {
      true: {
        backgroundColor: '$White',
        position: 'absolute',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2), 0 6px 14px 0 rgba(0, 0, 0, 0.2)',
        top: '50%',
        right: '-5%'
      }
    }
  }
})

export default IconButton
