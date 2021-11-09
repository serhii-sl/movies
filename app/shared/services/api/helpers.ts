import { AxiosError } from 'axios'

export type RequestError =
  | {
  _tag: 'ResponseError'
  data: any
  status: number
}
  | {
  _tag: 'NoResponseError'
  request: any
}
  | {
  _tag: 'RequestError'
  message: string
}

export const getRequestError = (error: AxiosError): RequestError => {
  if (error.response) {
    // Request made and server responded
    return {
      _tag: 'ResponseError',
      data: error.response.data,
      status: error.response.status,
    }
  } else if (error.request) {
    // The request was made but no response was received
    return {
      _tag: 'NoResponseError',
      request: error.request,
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      _tag: 'RequestError',
      message: error.message,
    }
  }
}
