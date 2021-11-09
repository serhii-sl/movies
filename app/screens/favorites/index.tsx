import * as React from 'react'
// components
import { Screen } from '@md-shared/components'
import { FavoriteMoviesList } from '@md-modules/movies/favorite-movies'
// theme
import { styles } from '@md-shared/theme'

const FavoriteMoviesScreen = () => {
  return (
    <Screen style={styles.SCREEN_CONTAINER}>
      <FavoriteMoviesList />
    </Screen>
  )
}

export { FavoriteMoviesScreen }
