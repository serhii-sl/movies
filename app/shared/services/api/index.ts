// libs
import axiosRetry from 'axios-retry'
import axios, { AxiosError } from 'axios'
// constants
import { API_KEY, API_URL } from '../env'
// utils
import { getRequestError } from './helpers'
// controllers
import { getAuthControllers } from './controllers'
import { getMoviesControllers } from '@md-shared/services/api/controllers/movies'
import { getProfileControllers } from '@md-shared/services/api/controllers/profile'

export type APIVariables = {
  baseURL?: string
  retries?: number
  sessionId?: string
}

const NUMBER_OF_RETRIES = 3
const DELAY_MULTIPLIER = 2000

const customRetryCondition = (error: AxiosError) =>
  axiosRetry.isNetworkOrIdempotentRequestError(error) ||
  getRequestError(error)._tag === 'NoResponseError'

const customRetryDelay = (retryCount: number) => retryCount * DELAY_MULTIPLIER

export const createAPI = ({
  baseURL = API_URL,
  retries,
  sessionId,
}: APIVariables = {}) => {
  /* ------------- API instance ------------- */

  const api = axios.create({
    baseURL,
    timeout: 60000,
    params: {
      api_key: API_KEY,
      session_id: sessionId,
    },
  })

  axiosRetry(api, {
    retries: retries == null ? NUMBER_OF_RETRIES : retries,
    retryDelay: customRetryDelay,
    retryCondition: customRetryCondition,
  })

  /* ------------- Controllers ------------- */

  return {
    // AUTH
    ...getAuthControllers(api),
    // MOVIES
    ...getMoviesControllers(api),
    // PROFILE
    ...getProfileControllers(api),
  }
}

export type CreateApi = (config?: APIVariables) => ReturnType<typeof createAPI>
