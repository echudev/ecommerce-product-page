import { styled } from '../stitches.config'
import { Flex } from './Flex.jsx'
import Avatar from './Avatar'
import Cart from './Cart'
import MenuHorizontal from './MenuHorizontal'
import logo from '../assets/icons/logo.svg'
import MenuLateral from './MenuLateral'

const StyledNav = styled('nav', {
  padding: '0 8vw',
  display: 'flex',
  alignItems: 'center'
})

export const Navbar = () => {
  return (
    <StyledNav css={{ height: '6rem' }}>
      <MenuLateral />
      <img src={logo} alt="logo" />
      <MenuHorizontal />
      <Flex css={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3vw' }}>
        <Cart />
        <Avatar />
      </Flex>
    </StyledNav >
  )
}
