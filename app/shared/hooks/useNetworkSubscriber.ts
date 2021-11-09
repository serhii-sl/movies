import * as React from 'react'
// libs
import { useDispatch, useSelector } from 'react-redux'
import NetInfo from '@react-native-community/netinfo'
// hooks
import { useToast } from '@md-shared/hooks/useToast'
// store
import { getIsConnectedState, setIsConnectedState } from '@md-store/modules/app'

export const useNetworkSubscriber = () => {
  const dispatch = useDispatch()
  const { showErrorToast } = useToast()

  const isConnectedStore = useSelector(getIsConnectedState)

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      if (isConnectedStore !== isConnected) {
        showErrorToast(
          isConnected
            ? 'Network connection established'
            : 'No network connection'
        )
        dispatch(setIsConnectedState(isConnected ?? true))
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])
}
