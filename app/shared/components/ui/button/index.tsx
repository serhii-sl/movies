import React from 'react'
// components
import { Text, TextProps } from '@md-shared/components'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
// views
import { InnerWrapper, Wrapper, ButtonStyle } from './views'
// presets
import { textPresets, ButtonPresets } from './presets'
// types
import { StyledCss } from '@md-shared/types/helpers'
// theme
import { theme } from '@md-shared/theme'

interface Props extends TouchableOpacityProps {
  text?: string
  preset?: ButtonPresets
  textStyle?: TextProps['textStyle']
  isLoading?: boolean
  overrides?: StyledCss
  buttonStyle?: ButtonStyle
}

const Button: React.FC<Props> = ({
  preset = 'default',
  text,
  textStyle,
  children,
  isLoading,
  ...rest
}) => {
  const textPreset = textPresets[preset]

  const content = children || (
    <Text text={text} textStyle={textStyle} overrides={textPreset} />
  )

  return (
    <Wrapper preset={preset} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.color.palette.white} />
      ) : (
        <InnerWrapper>{content}</InnerWrapper>
      )}
    </Wrapper>
  )
}

export { Button }
