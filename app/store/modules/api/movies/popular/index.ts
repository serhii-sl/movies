// libs
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// api
import { CreateApi } from '@md-shared/services/api'
// constants
import { EBlackListKeys, EWhiteListKeys } from '@md-shared/constants/redux'
// types
import { RootState } from '@md-store/modules'
import { IMovie } from '@md-shared/types/movie'
import { GetMoviesResponse } from '@md-shared/services/api/controllers/movies'
// utils
import { handleThunkError } from '@md-shared/utils/errors'

const initialState = {
  movies: null as null | IMovie[],
  loading: false,
  loadMore: false,
  totalCount: 0,
  searchTerm: '',
}

export const PERFORM_GET_POPULAR_MOVIES =
  '@movies/popular/PERFORM_GET_POPULAR_MOVIES'

type PerformGetPopularMoviesArgsType = {
  page: number
  query?: string
  shouldLoadMore: boolean
}

export const performGetPopularMovies = createAsyncThunk<
  GetMoviesResponse,
  PerformGetPopularMoviesArgsType,
  {
    extra: CreateApi
  }
>(
  PERFORM_GET_POPULAR_MOVIES,
  async ({ page, query }, { extra: createAPI }) => {
    const api = createAPI()

    let response
    if (query) {
      response = await api.getSearchMovies({
        page,
        query,
      })
    } else {
      response = await api.getPopularMovies({ page })
    }

    return response?.data ?? {}
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState
      return state[EBlackListKeys.APP].isConnected
    },
  }
)

export const popularMoviesReducers = {
  setSearchTerm: (
    state: typeof initialState,
    { payload }: PayloadAction<string>
  ) => ({
    ...state,
    searchTerm: payload,
  }),
}

export const popularMoviesAPISlice = createSlice({
  name: EWhiteListKeys.POPULAR,
  initialState,
  reducers: popularMoviesReducers,
  extraReducers: (builder) => {
    builder.addCase(
      performGetPopularMovies.pending,
      (state, { meta: { arg } }) => {
        if (arg.shouldLoadMore) {
          state.loadMore = true
        } else {
          state.loading = true
        }
      }
    )
    builder.addCase(performGetPopularMovies.fulfilled, (state, { payload }) => {
      state.movies = payload.results ?? ([] as IMovie[])
      state.totalCount = payload.total_results ?? 0
      state.loadMore = false
      state.loading = false
    })
    builder.addCase(performGetPopularMovies.rejected, (state, payload) => {
      handleThunkError<PerformGetPopularMoviesArgsType>(payload)
      state.loading = false
      state.loadMore = false
    })
  },
})

export const getPopularMoviesState = (state: RootState) =>
  state[EWhiteListKeys.POPULAR] ?? []

export const { setSearchTerm } = popularMoviesAPISlice.actions

export default popularMoviesAPISlice.reducer
