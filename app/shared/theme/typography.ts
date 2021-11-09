import { Platform } from 'react-native'

export const typography = {
  primary: Platform.select({
    ios: 'Rubik',
    android: 'Rubik-Regular',
  }),
  primaryMedium: Platform.select({
    ios: 'Rubik',
    android: 'Rubik-Medium',
  }),
  primaryBold: Platform.select({
    ios: 'Rubik',
    android: 'Rubik-Bold',
  }),
}
