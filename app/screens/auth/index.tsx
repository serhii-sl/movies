import * as React from 'react'
// libs
import styled from 'styled-components/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// components
import { Screen, Text, Button } from '@md-shared/components'
// hooks
import { useAuth } from '@md-shared/hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
// theme
import { styles } from '@md-shared/theme'
// constants
import { PrimaryParamList } from '@md-navigation/constants'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const TEXT_STYLES = {
  align: 'center' as const,
  mb: 30,
}

type AuthScreenProp = NativeStackNavigationProp<PrimaryParamList, 'AUTH'>

const AuthScreen = () => {
  const navigation = useNavigation<AuthScreenProp>()
  const { performSignInWithTMDB, isAuthorized } = useAuth()

  React.useEffect(() => {
    if (navigation.canGoBack() && isAuthorized) {
      navigation.goBack()
    }
  }, [isAuthorized])

  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <Wrapper>
        <Text preset={'header'} textStyle={TEXT_STYLES}>
          Please authorize for view this page
        </Text>
        <Button
          preset={'default'}
          text={'Login via TMDB'}
          onPress={performSignInWithTMDB}
        />
      </Wrapper>
    </Screen>
  )
}

export { AuthScreen }
