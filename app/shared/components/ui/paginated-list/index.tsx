import * as React from 'react'
// libs
import { useIsFocused } from '@react-navigation/native'
// components
import { Text } from '@md-shared/components'
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  RefreshControl,
} from 'react-native'
// other
import { theme } from '@md-shared/theme'
import { palette } from '@md-shared/theme/palette'
// views
import { LoaderWrapper, EmptyPlaceholder } from './views'
// utils
import { uniqBy } from 'lodash'

export interface FlatListPropsExt<T> extends FlatListProps<T> {
  data: T[] | null
  perPage?: number
  loadData: (page: number, shouldLoadMore?: boolean) => Promise<unknown>
  dataCount?: number
  resetList?: boolean
  isLoadMore: boolean
  emptyDataMsg?: string
  useRefreshControl?: boolean
  listHeaderComponent?: React.ReactElement
}

const FLAT_LIST_STYLE = { flexGrow: 1 }

const ListLoader = () => (
  <LoaderWrapper>
    <ActivityIndicator size='large' color={theme.color.primary} />
  </LoaderWrapper>
)

const PaginatedList = <T extends {}>({
  data,
  loadData,
  dataCount = 0,
  isLoadMore,
  emptyDataMsg = 'No data found!',
  useRefreshControl = true,
  listHeaderComponent,
  ...rest
}: FlatListPropsExt<T>) => {
  const isFocused = useIsFocused()

  // state
  const [page, setPage] = React.useState(1)
  const [listData, setListData] = React.useState<T[] | null>(null)
  const [refreshing, setRefreshing] = React.useState(false)

  const listRef: React.MutableRefObject<FlatList | null> = React.useRef(null)

  // effects
  React.useEffect(() => {
    if (isFocused && listData) {
      loadData(page, page > 1)
    }
  }, [page, isFocused])

  React.useEffect(() => {
    if (data) {
      setListData((prev) =>
        page > 1 ? uniqBy([...(prev ?? []), ...data], 'id') : data
      )
    }
  }, [data])

  // methods
  const onRefresh = React.useCallback(() => {
    if (page > 1) {
      setPage(1)
    } else {
      setRefreshing(true)
      loadData(1).then(() => setRefreshing(false))
    }
  }, [page])

  const loadMoreData = () => {
    if (listData && listData?.length < dataCount && !isLoadMore) {
      setPage((prev) => prev + 1)
    }
  }

  const renderListHeader = React.useCallback(() => {
    if (listHeaderComponent) {
      return listHeaderComponent
    }

    if (!listData?.length && !refreshing) {
      return <ListLoader />
    }

    return null
  }, [])

  const renderListFooter = React.useCallback(() => {
    if (isLoadMore) {
      return <ListLoader />
    }

    return null
  }, [isLoadMore])

  const renderListEmpty = React.useCallback(() => {
    if (listData && !listData?.length) {
      return (
        <EmptyPlaceholder>
          <Text preset={'header'}>{emptyDataMsg}</Text>
        </EmptyPlaceholder>
      )
    }

    return null
  }, [listData, emptyDataMsg])

  const keyExtractor = React.useCallback((item) => item.id, [])

  return React.useMemo(
    () => (
      <FlatList
        ref={listRef}
        data={listData}
        onEndReachedThreshold={0}
        onEndReached={loadMoreData}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        ListFooterComponent={renderListFooter}
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={FLAT_LIST_STYLE}
        refreshControl={
          useRefreshControl ? (
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refreshing}
              tintColor={palette.blue300}
              colors={[theme.color.primary]}
            />
          ) : undefined
        }
        {...rest}
      />
    ),
    [listData, isLoadMore, refreshing, useRefreshControl]
  )
}

export { PaginatedList }
