import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Logo = ({ width = 24, height = 24, color = '#6ec845' }) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: '1rem'}}>
      <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
          d="M16 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V7M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20M9.5 17.5L8 16.25V14M14 16C14 19.3137 11.3137 22 8 22C4.68629 22 2 19.3137 2 16C2 12.6863 4.68629 10 8 10C11.3137 10 14 12.6863 14 16Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      <Text style={{color: '#7a7a7a', fontSize: 28, fontWeight: 500}}>Agenda ai</Text>
    </View>
  );
};

export default Logo;
