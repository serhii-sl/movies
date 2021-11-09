import { ViewStyle } from 'react-native'
import { color } from './color'
import { spacing } from './spacing'

const SCREEN_CONTAINER: ViewStyle = {
  backgroundColor: color.backgroundContent,
  paddingHorizontal: spacing[2],
  paddingTop: spacing[1],
  paddingBottom: spacing[2],
}

const SCREEN_CONTAINER_WITH_SCROLL: ViewStyle = {
  backgroundColor: color.backgroundContent,
  paddingTop: spacing[1],
  paddingBottom: spacing[2],
}

export const styles = {
  SCREEN_CONTAINER,
  SCREEN_CONTAINER_WITH_SCROLL,
}
