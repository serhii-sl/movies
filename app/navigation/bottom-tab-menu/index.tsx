import * as React from 'react'
// libs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// assets
import { Movies, Favorites, User } from './tab-icons'
// theme
import { theme } from '@md-shared/theme'
// screens
import { ProfileScreen } from '@md-screens/profile'
import { PopularMoviesScreen } from '@md-screens/popular'
import { FavoriteMoviesScreen } from '@md-screens/favorites'
// types
import { ViewStyle } from 'react-native'

const SCREEN_OPTIONS = {
  headerShown: false,
}

export const TAB_BAR_HEIGHT = 76

const tabBarStyle: ViewStyle = {
  height: TAB_BAR_HEIGHT,
}

// TABS
const tabs = [
  {
    Icon: Movies,
    name: 'Popular',
    screen: PopularMoviesScreen,
  },
  {
    Icon: Favorites,
    name: 'Favorite',
    screen: FavoriteMoviesScreen,
  },
  {
    Icon: User,
    name: 'Profile',
    screen: ProfileScreen,
  },
]

// TAB MENU
const Tab = createBottomTabNavigator()

const BottomTabMenu = () => (
  <Tab.Navigator
    screenOptions={{
      ...SCREEN_OPTIONS,
      tabBarStyle,
    }}
  >
    {tabs.map((tab) => (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <tab.Icon
              color={
                focused ? theme.color.primary : theme.color.palette.blue900
              }
            />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
)

export { BottomTabMenu }
