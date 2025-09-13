import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export default function BatSignal({ size = 220, color = '#ffd54a' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <G fill={color}>
        <Path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 24c92.8 0 168 75.2 168 168s-75.2 168-168 168S88 348.8 88 256 163.2 88 256 88z"/>
        <Path d="M256 150c-18 20-53 34-86 34 8 16 18 28 30 37-16 2-33-1-49-10 9 28 26 48 49 62-15 10-34 16-55 16 34 26 73 35 112 31 39 4 78-5 112-31-21 0-40-6-55-16 23-14 40-34 49-62-16 9-33 12-49 10 12-9 22-21 30-37-33 0-68-14-86-34z"/>
      </G>
    </Svg>
  );
}
