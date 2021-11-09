import { IMAGE_URL } from '@md-shared/services/env'

export const getFullImageRemotePath = (width: number, path: string) =>
  `${IMAGE_URL}${width}${path}`
