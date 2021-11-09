import { css } from 'styled-components/native'

export const presets = {
  bold: css`
    font-family: ${({ theme }) => theme.typography.primaryMedium};
    font-weight: 500;
  `,
  header: css`
    font-family: ${({ theme }) => theme.typography.primaryBold};
    font-weight: 700;
    font-size: 18px;
  `,
  screenHeader: css`
    font-family: ${({ theme }) => theme.typography.primaryBold};
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 28px;
    line-height: 34px;
  `,
  secondary: css`
    font-size: 14px;
  `,
}

export type TextPresets = keyof typeof presets
