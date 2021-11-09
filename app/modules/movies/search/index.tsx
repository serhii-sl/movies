import * as React from 'react'
// libs
import { View } from 'react-native'
// hooks
import { useDispatch, useSelector } from 'react-redux'
// components
import { Header, TextField } from '@md-shared/components'
// store
import {
  getPopularMoviesState,
  setSearchTerm,
} from '@md-store/modules/api/movies/popular'
// utils
import debounce from 'lodash/fp/debounce'
// theme
import { spacing } from '@md-shared/theme'

const debouncedFn = debounce(400, (fn) => fn?.())

const Search = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector(getPopularMoviesState)

  const handleSearch = (text: string) => {
    debouncedFn(() => dispatch(setSearchTerm(text)))
  }

  return (
    <View style={{ flex: 1 }}>
      <Header text={'POPULAR'} />
      <TextField
        defaultValue={searchTerm}
        placeholder={'Search...'}
        onChangeText={handleSearch}
        wrapperStyle={{ mb: spacing[4] }}
      />
    </View>
  )
}

export { Search }
