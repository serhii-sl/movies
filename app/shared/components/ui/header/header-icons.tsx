import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

type Icon = ({ color }: { color: string }) => JSX.Element

export const Back: Icon = ({ color }) => (
  <Svg width={24} height={24} viewBox={'0 0 24 24'} fill={color}>
    <Path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
  </Svg>
)
