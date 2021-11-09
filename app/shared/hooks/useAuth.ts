import * as React from 'react'
// libs
import { Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
// api
import { createAPI } from '@md-shared/services/api'
// store
import { useDispatch, useSelector } from 'react-redux'
import { performGetProfile } from '@md-store/modules/api/profile'
import {
  getIsAuthorizedState,
  setIsAuthorizedState,
} from '@md-store/modules/app'
// constants
import { APP_DEEP_LINK } from '@md-shared/constants/app'
import { EStorageKeys } from '@md-shared/constants/storage'
// services
import { AUTHENTICATE_TOKEN_URL } from '@md-shared/services/env'

interface IUseAuth {
  isAuthorized: boolean
  checkSession: () => Promise<boolean>
  performSignInWithTMDB: () => Promise<void>
  redirectUrlHandler: (event: { url: string }) => void
}

const api = createAPI()

export const useAuth = (): IUseAuth => {
  const dispatch = useDispatch()

  const isAuthorized = useSelector(getIsAuthorizedState)

  const requestTokenRef = React.useRef<string | null>(null)

  const performSignInWithTMDB: IUseAuth['performSignInWithTMDB'] = async () => {
    const response = await api.getRequestToken()
    const requestToken = response?.data?.request_token

    await Linking.openURL(
      `${AUTHENTICATE_TOKEN_URL}/${requestToken}?redirect_to=${APP_DEEP_LINK}`
    )
    requestTokenRef.current = requestToken
  }

  const redirectUrlHandler: IUseAuth['redirectUrlHandler'] = async (event) => {
    const url = event?.url ?? ''

    if (url && requestTokenRef.current) {
      const payload = {
        request_token: requestTokenRef.current,
      }

      const response = await api.getSessionId(payload)

      const sessionId = response?.data?.session_id ?? ''

      await AsyncStorage.setItem(EStorageKeys.SESSION_ID, sessionId)
      dispatch(setIsAuthorizedState(true))

      dispatch(performGetProfile())
    }
  }

  const checkSession: IUseAuth['checkSession'] = async () => {
    const sessionId = await AsyncStorage.getItem(EStorageKeys.SESSION_ID)

    if (sessionId) {
      Linking.removeAllListeners('url')
      return true
    }

    return false
  }

  React.useEffect(() => {
    Linking.addEventListener('url', redirectUrlHandler)

    checkSession().then((result) => dispatch(setIsAuthorizedState(result)))

    return () => Linking.removeAllListeners('url')
  }, [])

  return {
    isAuthorized,
    checkSession,
    redirectUrlHandler,
    performSignInWithTMDB,
  }
}
