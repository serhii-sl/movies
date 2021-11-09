import React from 'react'
// libs
import { Image, View } from 'react-native'
// components
import { Text } from '@md-shared/components'
// types
import { IMovieActor } from '@md-shared/types/movie'
// views
import { styles } from './views'
// theme
import { spacing } from '@md-shared/theme'
// utils
import { getFullImageRemotePath } from '@md-shared/utils/image'

const defaultAvatar = require('@md-assets/images/png/default-avatar.png')

interface Props {
  actor: IMovieActor
}

const IMAGE_WIDTH = 200
const NUMBER_OF_LINES = 2

const ActorItem: React.FC<Props> = ({ actor }) => {
  const profilePath = actor?.profile_path ?? ''
  const avatarSrc = profilePath
    ? {
        uri: getFullImageRemotePath(IMAGE_WIDTH, profilePath),
      }
    : defaultAvatar

  return React.useMemo(
    () => (
      <View style={styles.container}>
        <Image style={styles.image} source={avatarSrc} />
        <View style={styles.actorInfo}>
          <Text
            preset={'bold'}
            overrides={[styles.header]}
            numberOfLines={NUMBER_OF_LINES}
          >
            {actor.name}
          </Text>
          <Text
            preset={'secondary'}
            textStyle={{
              pl: spacing[1],
              pr: spacing[1],
            }}
            numberOfLines={NUMBER_OF_LINES}
          >
            {actor.character}
          </Text>
        </View>
      </View>
    ),
    [actor]
  )
}

export { ActorItem }
