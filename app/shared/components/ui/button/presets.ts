// libs
import { css } from 'styled-components'
// types
import { StyledCss } from '@md-shared/types/helpers'

export const buttonPresets = {
  default: css<{ disabled?: boolean }>`
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color.palette.blue200 : theme.color.primary};
    height: 54px;
  `,
}

type TextPresets = { [key in keyof typeof buttonPresets]: StyledCss }

export const textPresets: TextPresets = {
  default: css`
    color: ${({ theme }) => theme.color.palette.white};
    font-family: ${({ theme }) => theme.typography.primaryMedium};
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  `,
}

export type ButtonPresets = keyof typeof buttonPresets
