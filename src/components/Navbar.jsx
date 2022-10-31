import { styled, css } from '../stitches.config'
import { NavLink } from 'react-router-dom'
import { Flex } from './Flex.jsx'
import Avatar from './Avatar'
import Cart from './Cart'
import logo from '../assets/icons/logo.svg'

const StyledNav = styled('nav', {
  padding: '0 8vw',
  display: 'flex',
  alignItems: 'center'
})
const linksContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2vw',
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
    <StyledNav css={ { height: '6rem' } }>
      <img src={logo} alt="logo" />
      <Flex className={linksContainer}>
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
      </Flex>
      <Flex css={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3vw' }}>
        <Cart />
        <Avatar />
      </Flex>
    </StyledNav >
  )
}
