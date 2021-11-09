import * as React from 'react'
// components
import { Screen } from '@md-shared/components'
import { PopularMoviesList } from '@md-modules/movies/popular-movies'
// theme
import { styles } from '@md-shared/theme'

const PopularMoviesScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <PopularMoviesList />
    </Screen>
  )
}

export { PopularMoviesScreen }
