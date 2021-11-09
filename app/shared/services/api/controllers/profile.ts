import { AxiosInstance } from 'axios'
// types
import { IProfile } from '@md-shared/types/profile'

export interface GetProfileVariables {
  sessionId: string
}

export const getProfileControllers = (api: AxiosInstance) => ({
  getProfile: ({ sessionId }: GetProfileVariables) =>
    api.get<IProfile>('/account', {
      params: {
        session_id: sessionId,
      },
    }),
})
