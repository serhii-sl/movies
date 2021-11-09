// libs
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// api
import { CreateApi } from '@md-shared/services/api'
// constants
import { EBlackListKeys, EWhiteListKeys } from '@md-shared/constants/redux'
// types
import { RootState } from '@md-store/modules'
import { IProfile } from '@md-shared/types/profile'
// utils
import { getSessionId } from '@md-shared/utils/session'
import { handleThunkError } from '@md-shared/utils/errors'

const initialState = {
  profile: null as null | IProfile,
  loading: false,
}

export const PERFORM_GET_PROFILE = '@profile/PERFORM_GET_PROFILE'

export const performGetProfile = createAsyncThunk<
  IProfile,
  void,
  {
    extra: CreateApi
  }
>(
  PERFORM_GET_PROFILE,
  async (_, { extra: createAPI }) => {
    const sessionId = await getSessionId()
    const api = createAPI({ sessionId })

    const response = await api.getProfile({ sessionId })

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

export const profileAPISlice = createSlice({
  name: EWhiteListKeys.PROFILE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(performGetProfile.pending, (state) => {
      state.loading = true
    })
    builder.addCase(performGetProfile.fulfilled, (state, { payload }) => {
      state.profile = payload
      state.loading = false
    })
    builder.addCase(performGetProfile.rejected, (state, payload) => {
      handleThunkError(payload)
      state.loading = false
    })
  },
})

export const getProfileState = (state: RootState) =>
  state[EWhiteListKeys.PROFILE] ?? []

export default profileAPISlice.reducer
