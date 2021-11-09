import * as React from 'react'
// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useAuthCheck } from '@md-shared/hooks/useAuthCheck'
// components
import { FullScreenLoader, Header, Text } from '@md-shared/components'
// store
import {
  getProfileState,
  performGetProfile,
} from '@md-store/modules/api/profile'
// views
import { Container, AvatarContainer, Avatar } from '@md-modules/profile/views'
// theme
import { spacing } from '@md-shared/theme'
// utils
import { getFullImageRemotePath } from '@md-shared/utils/image'
// types
import { TextStyleProps } from '@md-shared/components/ui/text/views'

const defaultAvatar = require('@md-assets/images/png/default-avatar.png')

const IMAGE_WIDTH = 400
const NAME_TEXT_STYLES: TextStyleProps = {
  mt: spacing[4],
  fs: spacing[5],
  fw: 'bold',
}
const USERNAME_TEXT_STYLES: TextStyleProps = {
  mt: spacing[2],
}

const Profile = () => {
  useAuthCheck()
  const dispatch = useDispatch()

  const { profile, loading } = useSelector(getProfileState)

  React.useEffect(() => {
    dispatch(performGetProfile())
  }, [])

  const showFullScreenLoader = loading && !profile
  const name = profile?.name ?? ''
  const username = profile?.username ?? ''
  const avatarPath = profile?.avatar?.tmdb?.avatar_path ?? ''

  const avatarSrc = avatarPath
    ? {
        uri: getFullImageRemotePath(IMAGE_WIDTH, avatarPath),
      }
    : defaultAvatar

  return (
    <FullScreenLoader isActive={showFullScreenLoader}>
      <Header text={'PROFILE'} />
      <Container>
        {Boolean(avatarPath) && (
          <AvatarContainer>
            <Avatar source={avatarSrc} />
          </AvatarContainer>
        )}
        <Text textStyle={NAME_TEXT_STYLES}>{name}</Text>
        <Text textStyle={USERNAME_TEXT_STYLES}>@{username}</Text>
      </Container>
    </FullScreenLoader>
  )
}

export { Profile }
