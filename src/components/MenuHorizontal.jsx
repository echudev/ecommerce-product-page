import { styled, css } from '../stitches.config'
import { NavLink } from 'react-router-dom'

const LinksMenu = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2vw',
  marginLeft: '2rem',
  height: '100%',
  transition: '.3s ease-in-out',
  variants: {
    display: {
      mobile: {
        display: 'none'
      },
      desktop: {
        display: 'flex'
      }
    }
  },
  defaultVariants: {
    display: 'desktop'
  }
})

const link = css({
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
    transition: 'transform 0.3s ease-in-out'
  }
})
const normal = css({
  '&::before': {
    transform: 'scaleX(0)',
    transformOrigin: 'left'
  }
})

const active = css({
  '&::before': {
    transform: 'scaleX(1)',
    transformOrigin: 'center'
  }
})

const MenuHorizontal = () => {
  return (
    <LinksMenu display={{ '@bp2': 'mobile' }}>
      <NavLink to='/collections'
        className={({ isActive }) => isActive ? `${link}` + ' ' + `${active}` : `${link}` + ' ' + `${normal}`}>
        Collections
      </NavLink>
      <NavLink to='/men'
        className={({ isActive }) => isActive ? `${link}` + ' ' + `${active}` : `${link}` + ' ' + `${normal}`}>
        Men
      </NavLink>
      <NavLink to='/women'
        className={({ isActive }) => isActive ? `${link}` + ' ' + `${active}` : `${link}` + ' ' + `${normal}`}>
        Women
      </NavLink>
      <NavLink to='/about'
        className={({ isActive }) => isActive ? `${link}` + ' ' + `${active}` : `${link}` + ' ' + `${normal}`}>
        About</NavLink>
      <NavLink to='/contact'
        className={({ isActive }) => isActive ? `${link}` + ' ' + `${active}` : `${link}` + ' ' + `${normal}`}>
        Contact
      </NavLink>
    </LinksMenu>
  )
}

export default MenuHorizontal
