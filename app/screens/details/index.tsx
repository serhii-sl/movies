import * as React from 'react'
// components
import { Screen } from '@md-shared/components'
import { MovieDetails } from '@md-modules/movies/movie-details'
// hooks
import { Route, useRoute } from '@react-navigation/native'
// theme
import { styles } from '@md-shared/theme'
// constants
import { AppParamList, ROUTES } from '@md-navigation/constants'

const MovieDetailsScreen = () => {
  const route =
    useRoute<Route<typeof ROUTES.app.DETAILS, AppParamList['DETAILS']>>()

  const movieId = route.params.movieId
  return (
    <Screen style={styles.SCREEN_CONTAINER_WITH_SCROLL} preset={'scroll'}>
      <MovieDetails movieId={movieId} />
    </Screen>
  )
}

export { MovieDetailsScreen }
