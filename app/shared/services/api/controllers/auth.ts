import { AxiosInstance } from 'axios'

export interface GetRequestTokenResponse {
  request_token: string
}

export type GetSessionVariables = Pick<GetRequestTokenResponse, 'request_token'>

export interface GetSessionResponse {
  session_id: string
}

export const getAuthControllers = (api: AxiosInstance) => ({
  getRequestToken: () => api.get<GetRequestTokenResponse>('/authentication/token/new'),
  getSessionId: (variables: GetSessionVariables) => api.post<GetSessionResponse>('/authentication/session/new', variables),
})
