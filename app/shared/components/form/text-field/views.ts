// libs
import styled from 'styled-components/native'
// types
import { Margin } from '@md-shared/types/css'
// helpers
import { getMarginStyle } from '@md-shared/helpers/styled'

export type WrapperStyle = Margin

export interface InputStyle {
  fs?: number
}

export const TextInput = styled.TextInput<{
  inputStyle?: InputStyle
}>`
  background-color: ${({ theme }) => theme.color.palette.white};
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  border-color: ${({ theme }) => theme.color.palette.gray200};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.palette.gray500};
  flex: 1;
  font-size: ${({ theme, inputStyle }) => inputStyle?.fs ?? theme.spacing[4]}px;
  padding: ${({ theme }) => theme.spacing[2]}px;
`

export const Wrapper = styled.View<{ wrapperStyle?: WrapperStyle }>`
  ${({ wrapperStyle }) => wrapperStyle && getMarginStyle('wrapperStyle')};
`

export const InnerWrapper = styled.View`
  height: 40px;
  justify-content: center;
`
