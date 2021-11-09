import * as React from 'react'
// libs
import Toast from 'react-native-toast-message'
// config
import { DEFAULT_TOAST_CONFIG } from './config'

const ToastComponent: React.FC = () => (
  <Toast ref={Toast.setRef} config={DEFAULT_TOAST_CONFIG} />
)

export { ToastComponent }
