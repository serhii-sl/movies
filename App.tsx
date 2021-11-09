import * as React from 'react'
// components
import { ToastComponent } from '@md-shared/components'
// providers
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// navigation
import { RootNavigator } from '@md-navigation'
// themes
import { theme } from '@md-shared/theme'
// store
import { persistor, store } from '@md-store'

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
            <ToastComponent />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
