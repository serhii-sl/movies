// libs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// api
import { CreateApi } from '@md-shared/services/api'
// constants
import { EBlackListKeys } from '@md-shared/constants/redux'
// types
import { RootState } from '@md-store/modules'
import {
  GetMovieDetailsVariables,
  SetMovieAsFavoriteVariables,
} from '@md-shared/services/api/controllers/movies'
import { IMovieActor, IMovieDetails } from '@md-shared/types/movie'
// utils
import { getSessionId } from '@md-shared/utils/session'
import { handleThunkError } from '@md-shared/utils/errors'

const initialState = {
  movie: null as null | IMovieDetails,
  actors: null as null | IMovieActor[],
  loading: false,
  favorite: false,
}

export const PERFORM_GET_MOVIE_DETAILS =
  '@movies/movie/PERFORM_GET_MOVIE_DETAILS'
export const PERFORM_GET_MOVIE_ACTORS = '@movies/movie/PERFORM_GET_MOVIE_ACTORS'
export const PERFORM_GET_MOVIE_IS_FAVORITE_VALUE =
  '@movies/movie/PERFORM_GET_MOVIE_IS_FAVORITE_VALUE'
export const PERFORM_SET_MOVIE_IS_FAVORITE_STATE =
  '@movies/movie/PERFORM_SET_MOVIE_IS_FAVORITE_STATE'

type PerformGetMovieDetailsArgsType = {
  movieId: string | number
}

export const performGetMovieDetails = createAsyncThunk<
  IMovieDetails,
  PerformGetMovieDetailsArgsType,
  {
    extra: CreateApi
  }
>(
  PERFORM_GET_MOVIE_DETAILS,
  async ({ movieId }, { extra: createAPI }) => {
    const api = createAPI()

    const response = await api.getMovieDetails({ movieId })

    return response?.data ?? {}
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState
      return state[EBlackListKeys.APP].isConnected
    },
  }
)

export const performGetMovieActorsDetails = createAsyncThunk<
  IMovieActor[],
  GetMovieDetailsVariables,
  {
    extra: CreateApi
  }
>(
  PERFORM_GET_MOVIE_ACTORS,
  async ({ movieId }, { extra: createAPI }) => {
    const api = createAPI()

    const response = await api.getMovieActors({ movieId })

    return response?.data?.cast ?? []
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as RootState
      return state[EBlackListKeys.APP].isConnected
    },
  }
)

export const performSetMovieIsFavoriteState = createAsyncThunk<
  void,
  SetMovieAsFavoriteVariables,
  {
    extra: CreateApi
  }
>(
  PERFORM_SET_MOVIE_IS_FAVORITE_STATE,
  async (variables, { extra: createAPI }) => {
    const sessionId = await getSessionId()
    const api = createAPI({ sessionId })

    await api.setMovieIsFavoriteState(variables)
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

export const performGetMovieIsFavoriteValue = createAsyncThunk<
  boolean,
  GetMovieDetailsVariables,
  {
    extra: CreateApi
  }
>(
  PERFORM_GET_MOVIE_IS_FAVORITE_VALUE,
  async (variables, { extra: createAPI }) => {
    const sessionId = await getSessionId()
    const api = createAPI({ sessionId })

    const respone = await api.getMovieStates(variables)
    return respone.data.favorite
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

export const movieDetailsReducers = {
  clearMovieDetailsState: () => initialState,
}

export const movieDetailsAPISlice = createSlice({
  name: EBlackListKeys.DETAILS,
  initialState,
  reducers: movieDetailsReducers,
  extraReducers: (builder) => {
    builder.addCase(performGetMovieDetails.pending, (state) => {
      state.loading = true
    })
    builder.addCase(performGetMovieDetails.fulfilled, (state, { payload }) => {
      state.movie = payload ?? ({} as IMovieDetails)
      state.loading = false
    })
    builder.addCase(performGetMovieDetails.rejected, (state, payload) => {
      handleThunkError<PerformGetMovieDetailsArgsType>(payload)
      state.loading = false
    })
    builder.addCase(performGetMovieActorsDetails.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      performGetMovieActorsDetails.fulfilled,
      (state, { payload }) => {
        state.actors = payload ?? ([] as IMovieActor[])
        state.loading = false
      }
    )
    builder.addCase(performGetMovieActorsDetails.rejected, (state, payload) => {
      handleThunkError<GetMovieDetailsVariables>(payload)
      state.loading = false
    })
    builder.addCase(
      performGetMovieIsFavoriteValue.fulfilled,
      (state, { payload }) => {
        state.favorite = payload
      }
    )
    builder.addCase(performSetMovieIsFavoriteState.fulfilled, (state) => {
      state.favorite = !state.favorite
    })
  },
})

export const getMovieDetailsState = (state: RootState) =>
  state[EBlackListKeys.DETAILS] ?? []

export const { clearMovieDetailsState } = movieDetailsAPISlice.actions

export default movieDetailsAPISlice.reducer
