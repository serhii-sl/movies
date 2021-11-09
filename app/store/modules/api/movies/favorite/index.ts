// libs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// api
import { CreateApi } from '@md-shared/services/api'
// constants
import { EBlackListKeys, EWhiteListKeys } from '@md-shared/constants/redux'
// types
import { RootState } from '@md-store/modules'
import { IMovie } from '@md-shared/types/movie'
import {
  GetFavoritesMoviesVariables,
  GetMoviesResponse,
} from '@md-shared/services/api/controllers/movies'
// utils
import { getSessionId } from '@md-shared/utils/session'
import { handleThunkError } from '@md-shared/utils/errors'

const initialState = {
  movies: null as null | IMovie[],
  loading: false,
  loadMore: false,
  totalCount: 0,
}

export const PERFORM_GET_FAVORITE_MOVIES =
  '@movies/favorite/PERFORM_GET_FAVORITE_MOVIES'

type PerformGetFavoriteMoviesArgsType = GetFavoritesMoviesVariables & {
  shouldLoadMore: boolean
}

export const performGetFavoriteMovies = createAsyncThunk<
  GetMoviesResponse,
  PerformGetFavoriteMoviesArgsType,
  {
    extra: CreateApi
  }
>(
  PERFORM_GET_FAVORITE_MOVIES,
  async ({ page, profileId }, { extra: createAPI }) => {
    const sessionId = await getSessionId()
    const api = createAPI({ sessionId })

    const response = await api.getFavoritesMovies({
      page,
      profileId,
    })

    return response?.data ?? {}
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState
      return (
        state[EBlackListKeys.APP].isConnected &&
        state[EBlackListKeys.APP].isAuthorized
      )
    },
  }
)

export const favoriteMoviesAPISlice = createSlice({
  name: EWhiteListKeys.FAVORITE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      performGetFavoriteMovies.pending,
      (state, { meta: { arg } }) => {
        if (arg.shouldLoadMore) {
          state.loadMore = true
        } else {
          state.loading = true
        }
      }
    )
    builder.addCase(
      performGetFavoriteMovies.fulfilled,
      (state, { payload }) => {
        state.movies = payload.results ?? ([] as IMovie[])
        state.totalCount = payload.total_results ?? 0
        state.loadMore = false
        state.loading = false
      }
    )
    builder.addCase(performGetFavoriteMovies.rejected, (state, payload) => {
      handleThunkError<PerformGetFavoriteMoviesArgsType>(payload)
      state.loading = false
      state.loadMore = false
    })
  },
})

export const getFavoriteMoviesState = (state: RootState) =>
  state[EWhiteListKeys.FAVORITE] ?? []

export default favoriteMoviesAPISlice.reducer
