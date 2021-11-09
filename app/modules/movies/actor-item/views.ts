import { StyleSheet } from 'react-native'
// themes
import { spacing, theme } from '@md-shared/theme'

export const ACTOR_ITEM_HEIGHT = 270
const ACTOR_ITEM_WIDTH = 120
const AVATAR_HEIGHT = 180
const BORDER_RADIUS = 6

export const styles = StyleSheet.create({
  container: {
    width: ACTOR_ITEM_WIDTH,
    minHeight: ACTOR_ITEM_HEIGHT,
    background: theme.color.palette.white,
    borderRadius: BORDER_RADIUS,
    marginHorizontal: spacing[1],
  },
  image: {
    width: ACTOR_ITEM_WIDTH,
    height: AVATAR_HEIGHT,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    backgroundColor: theme.color.palette.gray150,
  },
  actorInfo: {
    flex: 1,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    borderColor: theme.color.palette.gray150,
  },
  header: {
    padding: spacing[1],
    flexWrap: 'wrap',
  },
})
