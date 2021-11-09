import * as React from 'react'
// libs
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// hooks
import { useAuth } from '@md-shared/hooks/useAuth'
import { useIsFocused, useNavigation } from '@react-navigation/native'
// constants
import { PrimaryParamList, ROUTES } from '@md-navigation/constants'

type PrimaryNavigationProp = NativeStackNavigationProp<PrimaryParamList>

export const useAuthCheck = () => {
  const isFocused = useIsFocused()
  const { checkSession } = useAuth()
  const navigation = useNavigation<PrimaryNavigationProp>()

  React.useEffect(() => {
    checkSession().then((isAuthorized) => {
      if (!isAuthorized && isFocused) {
        navigation.navigate(ROUTES.auth.AUTH)
      }
    })
  })
}
