import { StyleSheet } from 'react-native'
// themes
import { spacing, color } from '@md-shared/theme'

const BORDER_RADIUS = 6
const CONTAINER_HEIGHT = 300

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    background: color.palette.white,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    height: CONTAINER_HEIGHT,
    marginBottom: spacing[4],
  },
  infoContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  genresContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing[5],
  },
  countriesContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing[5],
  },
  image: {
    width: '50%',
    height: CONTAINER_HEIGHT,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    backgroundColor: color.palette.gray150,
  },
})
