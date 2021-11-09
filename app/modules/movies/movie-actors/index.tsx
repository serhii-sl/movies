import React from 'react'
// libs
import { ActivityIndicator, FlatList } from 'react-native'
// components
import { ActorItem } from '@md-modules/movies/actor-item'
// store
import {
  getMovieDetailsState,
  performGetMovieActorsDetails,
} from '@md-store/modules/api/movies/details'
// hooks
import { useDispatch, useSelector } from 'react-redux'
// constants
import { ACTOR_ITEM_HEIGHT } from '@md-modules/movies/actor-item/views'

interface Props {
  movieId: string | number
}

const FLAT_LIST_STYLE = {
  height: ACTOR_ITEM_HEIGHT,
}

const MovieActors: React.FC<Props> = ({ movieId }) => {
  const dispatch = useDispatch()

  const { actors, loading } = useSelector(getMovieDetailsState)

  const loadMovieDetails = async (movieId: string | number) => {
    dispatch(
      performGetMovieActorsDetails({
        movieId,
      })
    )
  }

  React.useEffect(() => {
    loadMovieDetails(movieId)
  }, [])

  const renderItem = React.useCallback(
    ({ item }) => <ActorItem actor={item} />,
    []
  )

  const keyExtractor = React.useCallback((item) => item.id, [])

  return loading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      horizontal
      data={actors}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={FLAT_LIST_STYLE}
    />
  )
}

export { MovieActors }
