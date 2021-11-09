// libs
import { ViewStyle } from 'react-native'
// themes
import { color } from '@md-shared/theme'
// utils
import { isNil } from 'lodash'

export const presets = {
  fixed: {
    outer: {
      backgroundColor: color.backgroundContent,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },
  scroll: {
    outer: {
      backgroundColor: color.backgroundContent,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: { justifyContent: 'flex-start', alignItems: 'stretch' } as ViewStyle,
  },
}

export type ScreenPresets = keyof typeof presets

export const isNonScrolling = (preset?: ScreenPresets) => {
  return (
    isNil(preset) ||
    !preset?.length ||
    isNil(presets[preset]) ||
    preset === 'fixed'
  )
}
