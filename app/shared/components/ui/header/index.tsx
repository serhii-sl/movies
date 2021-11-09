import React from 'react'
// libs
import { useNavigation } from '@react-navigation/native'
// components
import { Back } from './header-icons'
import { Text } from '@md-shared/components'
// views
import { BackWrapper, HeaderWrapper, RightIconWrapper } from './views'
// theme
import { theme } from '@md-shared/theme'

interface Props {
  text?: string
  withBackBtn?: boolean
  rightIcon?: React.ReactElement
}

const Header: React.FC<Props> = ({ text, withBackBtn, rightIcon }) => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <HeaderWrapper withBackBtn={withBackBtn}>
      {withBackBtn && (
        <BackWrapper onPress={goBack}>
          <Back color={theme.color.palette.gray400} />
        </BackWrapper>
      )}
      <Text
        preset={'screenHeader'}
        numberOfLines={1}
        textStyle={{
          ml: withBackBtn ? theme.spacing[5] : 0,
          mr: rightIcon ? theme.spacing[5] : 0,
        }}
      >
        {text}
      </Text>
      <RightIconWrapper>{rightIcon}</RightIconWrapper>
    </HeaderWrapper>
  )
}

export { Header }
