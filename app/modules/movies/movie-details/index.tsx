import React from 'react'
// libs
import { Image, TouchableOpacity, View } from 'react-native'
// components
import { Heart } from './details-icons'
import { MovieActors } from '@md-modules/movies/movie-actors'
import { CircularProgress, Header, Text } from '@md-shared/components'
// store
import {
  clearMovieDetailsState,
  getMovieDetailsState,
  performGetMovieDetails,
  performGetMovieIsFavoriteValue,
  performSetMovieIsFavoriteState,
} from '@md-store/modules/api/movies/details'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileState } from '@md-store/modules/api/profile'
// views
import { styles } from './views'
// theme
import { spacing, theme } from '@md-shared/theme'
// utils
import { getFullImageRemotePath } from '@md-shared/utils/image'
import { getIsAuthorizedState } from '@md-store/modules/app'

const defaultAvatar = require('@md-assets/images/png/default-avatar.png')

interface Props {
  movieId: string | number
}

const MAX_VOTE = 10
const IMAGE_WIDTH = 500
const CIRCULAR_PROGRESS_SIZE = 60

const MovieDetails: React.FC<Props> = ({ movieId }) => {
  const dispatch = useDispatch()

  const { profile } = useSelector(getProfileState)
  const isAuthorized = useSelector(getIsAuthorizedState)
  const { movie, favorite } = useSelector(getMovieDetailsState)

  const title = movie?.title ?? ''
  const overview = movie?.overview ?? ''
  const poster = movie?.poster_path ?? ''
  const genres = movie?.genres ?? []
  const productionCountries = movie?.production_countries ?? []
  const voteAverage = movie?.vote_average ?? 0
  const avatarSrc = poster
    ? {
        uri: getFullImageRemotePath(IMAGE_WIDTH, poster),
      }
    : defaultAvatar

  const voteAverageDegrees = (360 * voteAverage) / MAX_VOTE

  const loadMovieDetails = async (movieId: string | number) => {
    dispatch(
      performGetMovieDetails({
        movieId,
      })
    )
    dispatch(
      performGetMovieIsFavoriteValue({
        movieId,
      })
    )
  }

  const setMovieIsFavoriteState = () => {
    dispatch(
      performSetMovieIsFavoriteState({
        movieId,
        profileId: profile?.id ?? '',
        isFavorite: !favorite,
      })
    )
  }

  const clearState = () => {
    dispatch(clearMovieDetailsState())
  }

  React.useEffect(() => {
    loadMovieDetails(movieId)

    return clearState
  }, [])

  return (
    <View
      style={{
        height: '100%',
        paddingHorizontal: spacing[2],
      }}
    >
      <Header
        text={title}
        withBackBtn
        rightIcon={
          isAuthorized ? (
            <TouchableOpacity onPress={setMovieIsFavoriteState}>
              <Heart color={theme.color.palette.gray1000} isActive={favorite} />
            </TouchableOpacity>
          ) : undefined
        }
      />

      <View style={styles.container}>
        <Image style={styles.image} source={avatarSrc} />
        <View style={styles.infoContainer}>
          <View style={styles.genresContainer}>
            {genres.map((genre) => (
              <Text
                key={genre.id}
                textStyle={{ mb: spacing[2] }}
                preset={'bold'}
              >
                {genre.name}
              </Text>
            ))}
          </View>
          <CircularProgress
            progressDegrees={voteAverageDegrees}
            text={voteAverage}
            size={CIRCULAR_PROGRESS_SIZE}
            strokeWidth={spacing[2]}
            textSize={spacing[6]}
          />
          <View style={styles.countriesContainer}>
            {productionCountries.map((country) => (
              <Text
                key={country.iso_3166_1}
                textStyle={{ mb: spacing[2] }}
                preset={'secondary'}
              >
                {country.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <MovieActors movieId={movieId} />
      <Text preset={'secondary'} textStyle={{ mt: spacing[5] }}>
        {overview}
      </Text>
    </View>
  )
}

export { MovieDetails }
