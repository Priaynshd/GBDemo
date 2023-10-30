import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({width, height, radius, bg, title, color,onclick,marginTop}) => {
  return (
    <View style={{marginTop:20}}>
      <TouchableOpacity
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          backgroundColor: bg,
          color: color,
          justifyContent:'center',
          alignContent:'center',
          alignSelf:'center',
          marginTop:marginTop,
        }}
        onPress={()=>{
            onclick();
        }}
        >
            <Text style={{textAlign:'center',color:color,fontSize:20,fontWeight:'bold',}}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};


export default CustomButton;
