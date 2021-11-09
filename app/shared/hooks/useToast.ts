// libs
import { Platform } from 'react-native'
import { hasNotch } from 'react-native-device-info'
import Toast, { ToastPosition } from 'react-native-toast-message'
// constants
import { EToastTypes } from '@md-shared/constants/toasts'

const TOP_OFFSET = Platform.select({
  ios: hasNotch() ? 40 : 30,
  android: 5,
})

const DEFAULT_TOAST_SHOW_PROPS = {
  visibilityTime: 5000,
  autoHide: true,
  text2: 'Something went wrong!',
  position: 'top' as ToastPosition,
  topOffset: TOP_OFFSET,
}

interface IUseToast {
  showErrorToast: (message: string) => void
}

export const useToast = (): IUseToast => {
  const showErrorToast: IUseToast['showErrorToast'] = (message) => {
    Toast.show({
      ...DEFAULT_TOAST_SHOW_PROPS,
      text2: message ?? DEFAULT_TOAST_SHOW_PROPS.text2,
      type: EToastTypes.ERROR,
    })
  }

  return {
    showErrorToast,
  }
}
