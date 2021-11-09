// libs
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// constants
import { EBlackListKeys } from '@md-shared/constants/redux'
// types
import { RootState } from '@md-store/modules'

const initialState = {
  isConnected: true,
  isAuthorized: false,
}

export const appReducers = {
  setIsConnectedState: (
    state: typeof initialState,
    { payload }: PayloadAction<boolean>
  ) => ({
    ...state,
    isConnected: payload,
  }),
  setIsAuthorizedState: (
    state: typeof initialState,
    { payload }: PayloadAction<boolean>
  ) => ({
    ...state,
    isAuthorized: payload,
  }),
}

export const appSlice = createSlice({
  name: EBlackListKeys.APP,
  initialState,
  reducers: appReducers,
})

export const getIsConnectedState = (state: RootState) =>
  state[EBlackListKeys.APP].isConnected
export const getIsAuthorizedState = (state: RootState) =>
  state[EBlackListKeys.APP].isAuthorized

export const { setIsConnectedState, setIsAuthorizedState } = appSlice.actions

export default appSlice.reducer
