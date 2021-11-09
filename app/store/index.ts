// libs
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-community/async-storage'
// reducer
import rootReducer from '@md-store/modules'
// api
import { createAPI } from '@md-shared/services/api'
// constants
import { EBlackListKeys, EWhiteListKeys } from '@md-shared/constants/redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: Object.values(EWhiteListKeys),
  blacklist: Object.values(EBlackListKeys),
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: createAPI,
      },
    }),
})

export const persistor = persistStore(store)
