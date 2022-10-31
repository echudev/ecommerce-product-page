import { useState } from 'react'
import { styled, css } from '../stitches.config'
import { NavLink } from 'react-router-dom'
import menuIcon from '../assets/icons/icon-menu.svg'
import closeIcon from '../assets/icons/icon-close.svg'

const Backdrop = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  userSelect: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
})
const showBackdrop = css({
  opacity: '1',
  zIndex: '500',
  transition: 'opacity .2s linear .1s, z-index .2s linear'
})
const hideBackdrop = css({
  opacity: '0',
  zIndex: '-500',
  transition: 'opacity .2s linear, z-index .2s linear .1s'
})

const MenuButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '99',
  height: '50px',
  width: '50px',
  cursor: 'pointer',
  variants: {
    display: {
      mobile: {
        display: 'flex'
      },
      desktop: {
        display: 'none'
      }
    }
  },
  defaultVariants: {
    display: 'desktop'
  }
})
const CloseButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '999',
  height: '50px',
  width: '50px',
  cursor: 'pointer',
  margin: '2rem 0 0 2rem'
})

const LinksMenu = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '300px',
  height: '100vh',
  backgroundColor: '$White',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '999',
  transition: 'transform .3s ease-in-out'
})
const showMenu = css({
  transform: 'translateX(0)'
})
const hideMenu = css({
  transform: 'translateX(-320px)'
})

const link = css({
  position: 'relative',
  textDecoration: 'none',
  color: '$Black',
  fontWeight: '$bold',
  display: 'flex',
  alignItems: 'center',
  margin: '1rem 2rem'
})

const MenuLateral = () => {
  const [open, setOpen] = useState(false)

  return (
  <>
    <MenuButton display={{ '@bp2': 'mobile' }} onClick={() => setOpen(true)}>
        <img src={menuIcon} alt="menu" />
    </MenuButton>
    <Backdrop className={ open ? showBackdrop : hideBackdrop } onClick={() => setOpen(false)} />
    <LinksMenu className={ open ? showMenu : hideMenu }>
            <CloseButton onClick={() => setOpen(false)}>
              <img src={closeIcon} alt="close" />
            </CloseButton>
            <NavLink to='/collections' className={link}>
                Collections
            </NavLink>
            <NavLink to='/men' className={link}>
                Men
            </NavLink>
            <NavLink to='/women' className={link}>
                Women
            </NavLink>
            <NavLink to='/about' className={link}>
                About</NavLink>
            <NavLink to='/contact' className={link}>
                Contact
            </NavLink>
    </LinksMenu>
 </>)
}

export default MenuLateral
