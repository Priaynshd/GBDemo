import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CustomTextInput = ({
  width,
  height,
  radius,
  bg,
  color,
  placeholder,
  placeholdertxtcolor,
  leftIcon,
  rightIcon,
  secureTextEntry,
  alignItem,
  paddingHorizontal,
  onClick,
  onChangeText,
}) => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
      <TouchableOpacity
        disabled={true}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          backgroundColor: bg,
          marginTop: 20,
          marginStart: 40,
          flexDirection: 'row',
          alignItems: alignItem,
          paddingLeft: 10,
          paddingVertical: paddingHorizontal,
          paddingHorizontal: 10,
        }}>
        {leftIcon && (
          <Image source={leftIcon} style={{height: 20, width: 20}} />
        )}
        <TextInput
          secureTextEntry={secureTextEntry}
          style={{
            paddingHorizontal: 20,
            width: rightIcon ? '80%' : '70%',
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholdertxtcolor}
          color={color}
          onChangeText={txt => {
            setValue(txt);
            onChangeText(txt);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            onClick();
          }}>
          {rightIcon && (
            <Image source={rightIcon} style={{height: 20, width: 20}} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomTextInput;
