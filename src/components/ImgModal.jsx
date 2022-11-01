import { useState } from 'react'
import { styled, keyframes, css } from '@stitches/react'
import 'animate.css'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import IconButton from './IconButton.jsx'
import { Flex } from './Flex.jsx'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$BackgroundBlack',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

const StyledContent = styled(DialogPrimitive.Content, {
  borderRadius: 6,
  position: 'fixed',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '95vh',
  maxWidth: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' }
})

const Img = styled('img', {
  position: 'relative',
  display: 'flex',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '80%',
  borderRadius: '5%',
  transition: '2s',
  cursor: 'pointer'
})
const Tmb = styled('img', {
  display: 'flex',
  margin: 7,
  maxWidth: '80px',
  minWidth: '10px',
  height: 'auto',
  borderRadius: '15%',
  transition: '.3s',
  '&:hover': {
    cursor: 'pointer',
    filter: 'opacity(40%)'
  }
})

function Content ({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
}

// Exports
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = Content
export const DialogClose = DialogPrimitive.Close

const ImgModal = ({ open, setOpen, images, thumbnails }) => {
  const [iconColor, setIconColor] = useState({
    close: '#ffffff',
    left: '#1D2026',
    right: '#1D2026'
  })
  const handlerCloseColorEnter = (btn) => {
    setIconColor({ ...iconColor, [btn]: '#ff7d1a' })
  }
  const handlerCloseColorLeave = (btn) => {
    setIconColor({ ...iconColor, [btn]: btn === 'close' ? '#ffffff' : '#1D2026' })
  }
  const [selectedImg, setSelectedImg] = useState(0)

  const selected = css({
    boxShadow: '0 0 0 3px $colors$Orange',
    filter: 'opacity(80%)'
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent >
        <Flex column center css={{ height: '95vh', position: 'relative' }}>
          {/* Botón que cierra el dialog */}
          <DialogClose asChild>
            <IconButton close name='close' css={{ zIndex: '1' }}
              onPointerEnter={(e) => handlerCloseColorEnter(e.target.name)}
              onPointerLeave={(e) => handlerCloseColorLeave(e.target.name)}>
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill={iconColor.close} fillRule="evenodd" />
              </svg>
            </IconButton>
          </DialogClose>
          <IconButton right name='right' css={{ zIndex: '1' }}
            onClick={() => setSelectedImg(selectedImg < 3 ? selectedImg + 1 : 0)}
            onPointerEnter={(e) => handlerCloseColorEnter(e.target.name)}
            onPointerLeave={(e) => handlerCloseColorLeave(e.target.name)}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke={iconColor.right} strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
          </IconButton>
          {/* galería de imágenes */}
          {images.map((image, index) => (
            <Img src={image} alt=""
              id={index}
              key={index}
              style={{ display: index === selectedImg ? 'flex' : 'none' }}
            />
          ))}
          <IconButton left name='left' css={{ zIndex: '1' }}
            onClick={() => setSelectedImg(selectedImg > 0 ? selectedImg - 1 : 3)}
            onPointerEnter={(e) => handlerCloseColorEnter(e.target.name)}
            onPointerLeave={(e) => handlerCloseColorLeave(e.target.name)}>
            <svg width="17" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke={iconColor.left} strokeWidth="3" fill="none" fillRule="evenodd" /></svg>          </IconButton>
          <Flex row>
            {thumbnails.map((thumbnail, index) => (
              <Tmb
                onClick={(e) => setSelectedImg(Number(e.target.id))}
                id={index}
                key={index}
                src={thumbnail}
                className={selectedImg === index ? selected : null}
              />
            ))}
          </Flex>
        </Flex>
      </DialogContent>
    </Dialog>
  )
}

export default ImgModal
