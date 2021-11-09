import * as React from 'react'
import Svg, { Path, G, Circle } from 'react-native-svg'

type Icon = ({ color }: { color: string }) => JSX.Element

export const Favorites: Icon = ({ color }) => (
  <Svg width={24} height={24} viewBox={'0 0 24 24'} fill={color}>
    <Path d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z' />
  </Svg>
)

export const User: Icon = ({ color }) => (
  <Svg width={24} height={24} viewBox={'0 0 24 24'} fill={color}>
    <Circle cx='12' cy='6' r='6' />
    <Circle cx='12' cy='23' r='10' />
  </Svg>
)

export const Movies: Icon = ({ color }) => (
  <Svg height={24} viewBox={'0 0 1280 1091'} width={24} fill={color}>
    <G transform='translate(0, 1091) scale(0.1, -0.1)' stroke='none'>
      <Path
        d='M1470 9790 l0 -250 83 0 c77 0 87 -3 124 -29 22 -16 50 -45 62 -64
          20 -33 21 -46 21 -316 l0 -281 -53 -55 -53 -55 -92 0 -92 0 0 -3240 0 -3240
          87 0 c97 0 125 -12 176 -78 l27 -35 0 -280 c0 -268 -1 -281 -21 -314 -12 -19
          -40 -48 -62 -64 -37 -26 -47 -29 -124 -29 l-83 0 0 -255 0 -255 4925 0 4925 0
          0 260 0 260 -79 0 c-74 0 -82 2 -122 32 -78 60 -79 67 -79 368 l0 266 26 41
          c15 22 45 52 67 67 35 22 52 26 114 26 l73 0 0 3235 0 3235 -70 0 c-42 0 -82
          6 -98 14 -31 16 -84 71 -101 103 -7 14 -11 112 -11 291 l0 269 30 42 c47 65
          82 81 173 81 l77 0 0 250 0 250 -4925 0 -4925 0 0 -250z m1410 -277 c21 -16
          50 -46 64 -68 l26 -39 0 -272 0 -271 -30 -42 c-55 -76 -72 -81 -266 -81 -164
          0 -171 1 -203 24 -18 13 -44 39 -57 57 l-24 33 0 286 0 285 32 39 c59 72 73
          76 256 76 163 0 164 0 202 -27z m1267 2 c21 -13 50 -43 65 -66 l28 -42 0 -272
          0 -272 -30 -42 c-55 -76 -72 -81 -266 -81 -164 0 -171 1 -203 24 -18 13 -44
          39 -57 57 l-24 33 0 286 0 285 32 39 c59 72 73 76 256 76 157 0 164 -1 199
          -25z m1212 10 c16 -8 45 -33 65 -57 l36 -42 0 -286 0 -286 -24 -33 c-13 -18
          -39 -44 -57 -57 -32 -23 -39 -24 -203 -24 -194 0 -211 5 -266 81 l-30 42 0
          272 0 272 28 42 c15 23 43 52 62 66 34 23 42 24 198 25 125 0 170 -3 191 -15z
          m1248 -14 c22 -16 50 -45 62 -64 20 -33 21 -46 21 -306 0 -305 0 -304 -72
          -365 l-42 -36 -180 0 -180 0 -53 55 -53 55 0 282 c0 320 0 319 81 378 l42 30
          167 0 167 0 40 -29z m1240 0 c22 -16 50 -45 62 -64 20 -33 21 -46 21 -306 0
          -305 0 -304 -72 -365 l-42 -36 -180 0 -180 0 -53 55 -53 55 0 281 c0 270 1
          283 21 316 12 19 40 48 62 64 l40 29 167 0 167 0 40 -29z m1232 14 c16 -8 45
          -33 65 -57 l36 -42 0 -286 0 -286 -24 -33 c-13 -18 -39 -44 -57 -57 -32 -23
          -39 -24 -203 -24 -194 0 -211 5 -266 81 l-30 42 0 274 0 274 25 37 c14 20 42
          49 62 65 36 27 37 27 200 27 125 0 171 -4 192 -15z m1210 0 c16 -8 45 -33 65
          -57 l36 -42 0 -286 0 -286 -24 -33 c-13 -18 -39 -44 -57 -57 -32 -23 -39 -24
          -203 -24 -194 0 -211 5 -266 81 l-30 42 0 271 0 272 26 39 c14 22 42 52 62 67
          37 27 39 27 200 28 125 0 170 -3 191 -15z m-7407 -7286 c16 -12 43 -40 59 -62
          l29 -40 0 -271 0 -272 -26 -41 c-15 -22 -45 -52 -67 -67 -40 -25 -45 -26 -203
          -26 l-161 0 -40 29 c-85 61 -83 53 -83 371 0 270 1 284 21 317 12 18 37 45 57
          58 35 24 42 25 210 25 161 0 176 -2 204 -21z m1270 0 c16 -12 43 -40 59 -62
          l29 -40 0 -271 0 -272 -26 -41 c-15 -22 -45 -52 -67 -67 -40 -25 -45 -26 -203
          -26 l-161 0 -40 29 c-85 61 -83 53 -83 371 0 270 1 284 21 317 12 18 37 45 57
          58 35 24 42 25 210 25 161 0 176 -2 204 -21z m1230 -4 c20 -13 45 -40 57 -58
          20 -33 21 -47 21 -317 0 -318 2 -310 -83 -371 l-40 -29 -161 0 c-158 0 -163 1
          -203 26 -22 15 -52 45 -67 67 l-26 41 0 269 c0 302 0 303 78 367 l37 30 175 0
          c170 0 176 -1 212 -25z m1236 -11 c72 -61 72 -60 72 -365 l0 -273 -26 -37
          c-14 -21 -43 -49 -65 -63 -37 -25 -43 -26 -200 -26 -184 0 -205 7 -260 83
          l-29 40 0 282 0 281 24 33 c13 18 39 44 57 57 32 23 38 24 209 24 l176 0 42
          -36z m1243 -1 c69 -63 69 -61 69 -364 0 -260 -1 -273 -21 -306 -12 -19 -40
          -48 -62 -64 l-40 -29 -165 0 c-187 0 -208 6 -263 83 l-29 40 0 279 0 280 27
          37 c56 78 66 81 265 81 l178 0 41 -37z m1238 13 c18 -13 44 -39 57 -57 l24
          -33 0 -280 c0 -318 0 -317 -81 -376 l-42 -30 -161 0 c-157 0 -163 1 -201 26
          -22 14 -52 43 -67 64 l-28 38 0 272 c0 304 0 303 72 364 l42 36 176 0 c171 0
          177 -1 209 -24z m1213 -1 c20 -13 45 -40 57 -58 20 -33 21 -47 21 -319 l0
          -284 -36 -42 c-58 -68 -72 -72 -252 -72 -154 0 -159 1 -199 26 -22 15 -52 45
          -67 67 l-26 41 0 269 c0 302 0 303 78 367 l37 30 175 0 c170 0 176 -1 212 -25z'
      />
    </G>
  </Svg>
)
