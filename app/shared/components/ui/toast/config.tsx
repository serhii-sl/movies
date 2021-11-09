import * as React from 'react'
// libs
import { BaseToast } from 'react-native-toast-message'
// themes
import { styles } from './views'
// constants
import { EToastTypes } from '@md-shared/constants/toasts'

export const DEFAULT_TOAST_CONFIG = {
  [EToastTypes.ERROR]: ({ text2, ...rest }) => (
    <BaseToast
      {...rest}
      style={styles.style}
      contentContainerStyle={styles.containerStyles}
      text2Style={styles.textStyles}
      text2={text2}
      text1NumberOfLines={1}
      text2NumberOfLines={2}
    />
  ),
}
