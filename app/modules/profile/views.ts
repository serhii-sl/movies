import styled from 'styled-components/native'
// theme
import { dimension, spacing } from '@md-shared/theme'

const CONTAINER_WIDTH = dimension.deviceWidth - spacing[8]

export const Container = styled.View`
  width: ${CONTAINER_WIDTH}px;
  margin: 0 auto;
`

export const AvatarContainer = styled.View`
  align-items: center;
`

export const Avatar = styled.Image`
  width: ${CONTAINER_WIDTH}px;
  height: ${CONTAINER_WIDTH}px;
  border-radius: 20px;
`
