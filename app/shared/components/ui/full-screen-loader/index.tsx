import * as React from 'react'
// libs
import { ActivityIndicator, StyleSheet, View } from 'react-native'
// theme
import { dimension, theme } from '@md-shared/theme'
// constants
import { TAB_BAR_HEIGHT } from '@md-navigation/bottom-tab-menu'

interface Props {
  isActive: boolean
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: dimension.deviceHeight / 2 - TAB_BAR_HEIGHT,
    width: dimension.deviceWidth,
  },
})

const FullScreenLoader: React.FC<Props> = ({ isActive, children }) => {
  return isActive ? (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={theme.color.primary} />
    </View>
  ) : (
    <>{children}</>
  )
}

export { FullScreenLoader }
