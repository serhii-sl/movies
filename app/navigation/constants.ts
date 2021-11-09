export const ROUTES = {
  root: {
    ROOT_STACK: 'ROOT',
  },
  auth: {
    AUTH: 'AUTH',
  },
  app: {
    POPULAR: 'POPULAR',
    FAVORITES: 'FAVORITES',
    DETAILS: 'DETAILS',
  },
} as const

// ROOT
export type RootParamList = {
  [ROUTES.root.ROOT_STACK]: undefined
}

export type AuthParamList = {
  [ROUTES.auth.AUTH]: undefined
}
// APP
export type AppParamList = {
  [ROUTES.app.POPULAR]: undefined
  [ROUTES.app.FAVORITES]: undefined
  [ROUTES.app.DETAILS]: {
    movieId: string | number
  }
}

// PRIMARY
export type PrimaryParamList = RootParamList & AppParamList & AuthParamList
