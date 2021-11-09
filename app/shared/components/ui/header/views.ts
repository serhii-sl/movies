import styled from 'styled-components/native'

export const HeaderWrapper = styled.View`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]}px;
  position: relative;
`

export const BackWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 50%;
`

export const RightIconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 50%;
`
