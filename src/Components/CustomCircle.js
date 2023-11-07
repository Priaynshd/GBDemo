import {View, Text, PixelRatio, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomCircle = ({Icon}) => {
  return (
    <TouchableOpacity
      style={{
        height: 55,
        width: 55,
        borderRadius: 100 / PixelRatio.get(),
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <Image source={Icon} style={{height: 25, width: 25}} />
    </TouchableOpacity>
  );
};

export default CustomCircle;
