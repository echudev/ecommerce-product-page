import { styled } from '../stitches.config'
import { Flex } from './Flex.jsx'
import Avatar from './Avatar'
import CartPopover from './CartPopover'
import MenuHorizontal from './MenuHorizontal'
import logo from '../assets/icons/logo.svg'
import MenuLateral from './MenuLateral'

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
})

const StyledNav = styled('nav', {
  height: '6rem',
  width: '100%',
  maxWidth: '1400px',
  padding: '0 8vw',
  display: 'flex',
  alignItems: 'center'
})

export const Navbar = () => {
  return (
    <Wrapper>
      <StyledNav>
        <MenuLateral />
        <img src={logo} alt="logo" />
        <MenuHorizontal />
        <Flex css={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3vw' }}>
          <CartPopover />
          <Avatar />
        </Flex>
      </StyledNav >
    </Wrapper>
  )
}
