export interface Env {
  API_URL: string
  API_KEY: string
  IMAGE_URL: string
  AUTHENTICATE_TOKEN_URL: string
}

export const { API_URL }: Env = require('../../../config/env')
export const { API_KEY }: Env = require('../../../config/env')
export const { IMAGE_URL }: Env = require('../../../config/env')
export const { AUTHENTICATE_TOKEN_URL }: Env = require('../../../config/env')
