import * as React from 'react'
// libs
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
  ViewStyle,
} from 'react-native'
// hooks
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// presets
import { ScreenPresets, isNonScrolling, presets } from './presets'

const isIos = Platform.OS === 'ios'

interface Props {
  style?: ViewStyle
  unsafe?: boolean
  preset?: ScreenPresets
  statusBar?: 'light-content' | 'dark-content'
  backgroundColor?: string
}

const ScreenWithoutScrolling: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets()

  const preset = presets.fixed
  const style = props.style || {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {}

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
    >
      <StatusBar barStyle={props.statusBar || 'dark-content'} />
      <View style={[preset.inner, style, backgroundStyle, insetStyle]}>
        {props.children}
      </View>
    </KeyboardAvoidingView>
  )
}

const ScreenWithScrolling: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets()

  const preset = presets.scroll
  const style = props.style || {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {}

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? 'padding' : undefined}
    >
      <StatusBar barStyle={props.statusBar || 'dark-content'} />
      <View style={[preset.outer, style, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
        >
          {props.children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

const Screen: React.FC<Props> = (props) => {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />
  } else {
    return <ScreenWithScrolling {...props} />
  }
}

export { Screen }
