import * as React from 'react'
// libs
import { css } from 'styled-components'
import styled from 'styled-components/native'
// components
import { Text } from '../text'
import Svg, { Circle } from 'react-native-svg'
// theme
import { theme } from '@md-shared/theme'

interface Props {
  progressDegrees: number
  strokeWidth?: number
  textSize?: number
  size?: number
  text?: string | number
}

const textStyles = css`
  color: ${({ theme }) => theme.color.palette.green500};
`

const TextContainer = styled.View`
  height: 100%;
  ${({ theme }) => theme.template.centerContent};
`

export const CircularProgress: React.FC<Props> = ({
  progressDegrees,
  strokeWidth = 5,
  textSize = 13,
  size = 30,
  text,
}) => {
  const radius = size / 2
  const circumference = 2 * Math.PI * radius

  const strokeOffset = (1 / 4) * circumference
  const strokeDasharray = (progressDegrees / 360) * circumference

  return (
    <Svg
      width={size * 2}
      height={size * 2}
      stroke={theme.color.palette.green500}
      strokeWidth={strokeWidth}
      fill={theme.color.transparent}
    >
      <Circle
        stroke={theme.color.palette.gray200}
        strokeWidth={strokeWidth}
        cx={size}
        cy={size}
        r={size / 2}
      />
      <Circle
        cx={size}
        cy={size}
        r={size / 2}
        strokeDasharray={[strokeDasharray, circumference - strokeDasharray]}
        strokeDashoffset={strokeOffset}
      />
      {Boolean(text) && (
        <TextContainer>
          <Text overrides={textStyles} textStyle={{ fs: textSize, fw: 'bold' }}>
            {text}
          </Text>
        </TextContainer>
      )}
    </Svg>
  )
}
