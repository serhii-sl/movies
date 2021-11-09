import * as React from 'react'
// libs
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useAuthCheck } from '@md-shared/hooks/useAuthCheck'
// components
import { MovieItem } from '../movie-item'
import { FullScreenLoader, Header, PaginatedList } from '@md-shared/components'
// store
import {
  getFavoriteMoviesState,
  performGetFavoriteMovies,
} from '@md-store/modules/api/movies/favorite'
import { getProfileState } from '@md-store/modules/api/profile'
// types
import { IMovie } from '@md-shared/types/movie'
// constants
import { PrimaryParamList, ROUTES } from '@md-navigation/constants'

const listHeaderComponent = <Header text={'FAVORITE'} />

type MovieDetailsScreenProp = NativeStackNavigationProp<
  PrimaryParamList,
  'DETAILS'
>

const FavoriteMoviesList = () => {
  useAuthCheck()
  const dispatch = useDispatch()
  const navigation = useNavigation<MovieDetailsScreenProp>()

  const { movies, loading, loadMore, totalCount } = useSelector(
    getFavoriteMoviesState
  )
  const { profile } = useSelector(getProfileState)

  const profileId = profile?.id ?? ''

  const goToMovieDetails = (movieId: string | number) =>
    navigation.navigate(ROUTES.app.DETAILS, { movieId })

  const loadMovies = async (page, shouldLoadMore) => {
    dispatch(
      performGetFavoriteMovies({
        page,
        profileId,
        shouldLoadMore,
      })
    )
  }

  const renderItem = React.useCallback(
    ({ item }) => <MovieItem movie={item} handleItemClick={goToMovieDetails} />,
    []
  )

  React.useEffect(() => {
    loadMovies(1, false)
  }, [profile])

  const showFullScreenLoader = loading && !movies

  return (
    <FullScreenLoader isActive={showFullScreenLoader}>
      <PaginatedList<IMovie>
        data={movies}
        loadData={loadMovies}
        isLoadMore={loadMore}
        renderItem={renderItem}
        dataCount={totalCount}
        listHeaderComponent={listHeaderComponent}
      />
    </FullScreenLoader>
  )
}

export { FavoriteMoviesList }
