import * as React from 'react'
// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
// components
import { Search } from '../search'
import { MovieItem } from '../movie-item'
import { FullScreenLoader, PaginatedList } from '@md-shared/components'
// store
import {
  getPopularMoviesState,
  performGetPopularMovies,
} from '@md-store/modules/api/movies/popular'
// types
import { IMovie } from '@md-shared/types/movie'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// constants
import { PrimaryParamList, ROUTES } from '@md-navigation/constants'

type LoadMovies = (
  page: number,
  shouldLoadMore?: boolean,
  query?: string
) => Promise<void>

type MovieDetailsScreenProp = NativeStackNavigationProp<
  PrimaryParamList,
  'DETAILS'
>

const PopularMoviesList = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<MovieDetailsScreenProp>()

  const { movies, loading, loadMore, totalCount, searchTerm } = useSelector(
    getPopularMoviesState
  )

  const loadMovies: LoadMovies = async (page, shouldLoadMore = false) => {
    await dispatch(
      performGetPopularMovies({
        page,
        shouldLoadMore,
        query: searchTerm,
      })
    )
  }

  const goToMovieDetails = (movieId: string | number) =>
    navigation.navigate(ROUTES.app.DETAILS, { movieId })

  const renderItem = React.useCallback(
    ({ item }) => <MovieItem movie={item} handleItemClick={goToMovieDetails} />,
    []
  )

  React.useEffect(() => {
    loadMovies(1, false, searchTerm)
  }, [searchTerm])

  const showFullScreenLoader = loading && !movies

  return (
    <FullScreenLoader isActive={showFullScreenLoader}>
      <PaginatedList<IMovie>
        data={movies}
        loadData={loadMovies}
        isLoadMore={loadMore}
        renderItem={renderItem}
        dataCount={totalCount}
        listHeaderComponent={<Search />}
      />
    </FullScreenLoader>
  )
}

export { PopularMoviesList }
