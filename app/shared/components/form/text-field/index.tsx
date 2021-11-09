import React from 'react'
// types
import { TextInputProps } from 'react-native'
// theme
import { color } from '@md-shared/theme'
// views
import {
  TextInput,
  InnerWrapper,
  Wrapper,
  InputStyle,
  WrapperStyle,
} from './views'

export interface TextFieldProps extends TextInputProps {
  inputStyle?: InputStyle
  placeholder?: string
  wrapperStyle?: WrapperStyle
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  wrapperStyle,
  ...rest
}) => {
  return (
    <Wrapper wrapperStyle={wrapperStyle}>
      <InnerWrapper>
        <TextInput
          placeholder={placeholder}
          underlineColorAndroid={color.transparent}
          placeholderTextColor={color.palette.gray200}
          {...rest}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

export { TextField }
