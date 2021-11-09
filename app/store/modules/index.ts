import { combineReducers } from '@reduxjs/toolkit'
// reducers
import appReducer from './app'
import profileAPIReducer from './api/profile'
import movieDetailsAPIReducer from './api/movies/details'
import popularMoviesAPIReducer from './api/movies/popular'
import favoriteMoviesAPIReducer from './api/movies/favorite'
// constants
import { EWhiteListKeys, EBlackListKeys } from '@md-shared/constants/redux'

const rootReducer = combineReducers({
  // black list - session
  [EBlackListKeys.APP]: appReducer,
  [EBlackListKeys.DETAILS]: movieDetailsAPIReducer,
  // white list - storage
  [EWhiteListKeys.POPULAR]: popularMoviesAPIReducer,
  [EWhiteListKeys.FAVORITE]: favoriteMoviesAPIReducer,
  [EWhiteListKeys.PROFILE]: profileAPIReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
