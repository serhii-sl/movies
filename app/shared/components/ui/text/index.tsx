import * as React from 'react'
import { TextProps as RNTextProps } from 'react-native'
// views
import { RNText, TextStyleProps } from './views'
// types
import { StyledCss } from '@md-shared/types/helpers'

import { TextPresets } from './presets'

export interface TextProps extends RNTextProps {
  text?: string
  preset?: TextPresets
  textStyle?: TextStyleProps
  overrides?: StyledCss
}

const Text: React.FC<TextProps> = ({ text, children, ...rest }) => {
  const content = text || children

  return <RNText {...rest}>{content}</RNText>
}

export { Text }
