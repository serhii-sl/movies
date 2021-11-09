import { StyleSheet } from 'react-native'
// theme
import { dimension, spacing, color } from '@md-shared/theme'

export const styles = StyleSheet.create({
  textStyles: {
    fontSize: spacing[4],
    color: color.palette.gray100,
  },
  style: {
    width: dimension.deviceWidth - spacing[5],
    borderLeftColor: color.transparent,
    backgroundColor: color.palette.blue300,
  },
  containerStyles: {
    paddingHorizontal: spacing[3],
  },
})
