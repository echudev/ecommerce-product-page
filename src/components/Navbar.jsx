import { styled, css } from '../stitches.config'
import { NavLink } from 'react-router-dom'
import { Box } from './Box.jsx'
import Avatar from './Avatar'
import Cart from './Cart'
import logo from '../assets/icons/logo.svg'

const StyledNav = styled('nav', {
  height: '6rem',
  padding: '0 3rem',
  display: 'flex',
  alignItems: 'center'
})
const linksContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3vw',
  marginLeft: '2rem',
  height: '100%'
})

const linkClass = css({
  position: 'relative',
  textDecoration: 'none',
  color: '$DarkGrayishBlue',
  fontWeight: '$regular',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  transition: '.3s',
  '&::before': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: '$Orange',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease-in-out'
  }
})
const activeLinkClass = css({
  position: 'relative',
  textDecoration: 'none',
  color: '$Black',
  fontWeight: '$regular',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  transition: '.3s',
  '&::before': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: '$Orange',
    transform: 'scaleX(1)',
    transformOrigin: 'center',
    transition: 'transform 0.3s ease-in-out'
  }
})

export const Navbar = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <Box className={linksContainer}>
        <NavLink to='/collections'
          className={({ isActive }) => isActive ? `${activeLinkClass}` : `${linkClass}`}>
          Collections
        </NavLink>
        <NavLink to='/men'
          className={({ isActive }) => isActive ? `${activeLinkClass}` : `${linkClass}`}>
          Men
        </NavLink>
        <NavLink to='/women'
          className={({ isActive }) => isActive ? `${activeLinkClass}` : `${linkClass}`}>
          Women
        </NavLink>
        <NavLink to='/about'
          className={({ isActive }) => isActive ? `${activeLinkClass}` : `${linkClass}`}>
          About</NavLink>
        <NavLink to='/contact'
          className={({ isActive }) => isActive ? `${activeLinkClass}` : `${linkClass}`}>
          Contact
        </NavLink>
      </Box>
      <Box css={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3vw' }}>
        <Cart />
        <Avatar />
      </Box>
    </StyledNav >
  )
}
