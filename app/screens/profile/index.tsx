import * as React from 'react'
// components
import { Profile } from '@md-modules/profile'
import { Screen } from '@md-shared/components'
// theme
import { styles } from '@md-shared/theme'

const ProfileScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <Profile />
    </Screen>
  )
}

export { ProfileScreen }
