import React from 'react'
// libs
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// components
import { BottomTabMenu } from '@md-navigation/bottom-tab-menu'
// hooks
import { useNetworkSubscriber } from '@md-shared/hooks/useNetworkSubscriber'
// screens
import { AuthScreen } from '@md-screens/auth'
import { MovieDetailsScreen } from '@md-screens/details'
// constants
import { ROUTES } from '@md-navigation/constants'

const Stack = createNativeStackNavigator()

const RootStack = () => {
  useNetworkSubscriber()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.root.ROOT_STACK} component={BottomTabMenu} />
      <Stack.Screen name={ROUTES.auth.AUTH} component={AuthScreen} />
      <Stack.Screen name={ROUTES.app.DETAILS} component={MovieDetailsScreen} />
    </Stack.Navigator>
  )
}

const RootNavigator = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
)

export { RootNavigator }
