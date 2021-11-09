import React from 'react'
// libs
import { Image, TouchableWithoutFeedback, View } from 'react-native'
// components
import { Text, CircularProgress } from '@md-shared/components'
// types
import { IMovie } from '@md-shared/types/movie'
// views
import { styles } from './views'
// utils
import { getFullImageRemotePath } from '@md-shared/utils/image'

interface Props {
  movie: IMovie
  handleItemClick: (movieId: string | number) => void
}

const MAX_VOTE = 10
const IMAGE_WIDTH = 500
const TITLE_NUMBER_OF_LINES = 2
const DESCRIPTION_NUMBER_OF_LINES = 13

const MovieItem: React.FC<Props> = ({ movie, handleItemClick }) => {
  const movieId = movie?.id ?? ''
  const voteAverage = movie?.vote_average ?? 0

  const voteAverageDegrees = (360 * voteAverage) / MAX_VOTE

  return React.useMemo(
    () => (
      <TouchableWithoutFeedback onPress={() => handleItemClick(movieId)}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: getFullImageRemotePath(IMAGE_WIDTH, movie.poster_path),
            }}
          />
          <View style={styles.movieInfo}>
            <View style={styles.voteContainer}>
              <CircularProgress
                progressDegrees={voteAverageDegrees}
                text={voteAverage}
              />
            </View>
            <Text
              preset={'header'}
              overrides={[styles.header]}
              numberOfLines={TITLE_NUMBER_OF_LINES}
            >
              {movie.title}
            </Text>
            <Text
              preset={'secondary'}
              numberOfLines={DESCRIPTION_NUMBER_OF_LINES}
            >
              {movie.overview}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    ),
    [movie]
  )
}

export { MovieItem }
