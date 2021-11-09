import { StyleSheet } from 'react-native'
// themes
import { spacing, color } from '@md-shared/theme'

const CONTAINER_HEIGHT = 300
const BORDER_RADIUS = 6

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    background: color.palette.white,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    marginBottom: spacing[4],
  },
  voteContainer: {
    position: 'absolute',
    right: -spacing[4],
    top: -spacing[4],
  },
  image: {
    width: '50%',
    height: CONTAINER_HEIGHT,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    overflow: 'hidden',
    backgroundColor: color.palette.gray150,
  },
  movieInfo: {
    width: '45%',
    flexDirection: 'column',
    alignContent: 'center',
    marginLeft: spacing[3],
    position: 'relative',
  },
  header: {
    width: '75%',
    flexWrap: 'wrap',
    marginBottom: spacing[5],
  },
})
