import { styled } from '@stitches/react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import avatarImage from '../assets/images/image-avatar.png'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$Orange',
  cursor: 'pointer',
  transition: '.2s',
  '&:hover': {
    boxShadow: '0 0 0 2px $colors$White, 0 0 0 4px $colors$Orange'
  }
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'Black',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500
})

// Exports
export const Avatar = StyledAvatar
export const AvatarImage = StyledImage
export const AvatarFallback = StyledFallback

// Your app...
const Flex = styled('div', { display: 'flex' })

const AvatarDemo = () => (
    <Flex css={{ gap: 20 }}>
        <Avatar>
            <AvatarImage
                src={avatarImage}
                alt="Colm Tuite"
            />
            <AvatarFallback delayMs={600}>CT</AvatarFallback>
        </Avatar>
    </Flex>
)

export default AvatarDemo
