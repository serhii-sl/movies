import { DefaultTheme } from 'styled-components'
import { color } from './color'
import { spacing } from './spacing'
import { template } from './template'
import { typography } from './typography'

export * from './color'
export * from './spacing'
export * from './typography'
export * from './template'
export * from './styles'
export * from './dimension'

export const theme: DefaultTheme = {
  color,
  spacing,
  template,
  typography,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof color
    spacing: typeof spacing
    template: typeof template
    typography: typeof typography
  }
}
