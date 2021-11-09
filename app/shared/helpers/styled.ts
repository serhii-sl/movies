import { css } from 'styled-components/native'
import { StyledCss } from '@md-shared/types/helpers'
import { Margin } from '@md-shared/types/css'

export const getMarginStyle = <P extends string>(key: P): StyledCss => css<{
  [k in P]?: Margin
}>`
  margin-left: ${({ [key]: textStyle }) => (textStyle as any)?.ml ?? 0}px;
  margin-top: ${({ [key]: textStyle }) => (textStyle as any)?.mt ?? 0}px;
  margin-right: ${({ [key]: textStyle }) => (textStyle as any)?.mr ?? 0}px;
  margin-bottom: ${({ [key]: textStyle }) => (textStyle as any)?.mb ?? 0}px;
`
