import {View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [badName, setBadName] = useState(false);
  const validate = () => {
    if (name == '') {
      setBadName(true);
    } else if (name != '') {
      setBadName(false);
      navigation.navigate('Home');
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../assets/images/FunExSmilyFace.png')} />
        <View
          style={{
            marginTop: responsiveHeight(4),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/images/Funex.png')} />
        </View>
      </View>
      <CustomTextInput
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#77CDD9'}
        radius={responsiveWidth(8)}
        placeholder={'username'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        leftIcon={require('../assets/icons/profile.png')}
        alignItem={'center'}
        onChangeText={txt => setName(txt)}
      />
      {badName && (
        <Text
          style={{
            color: 'red',
            alignSelf: 'flex-start',
            marginLeft: 20,
            marginTop: 3,
          }}>
          Please Enter Name
        </Text>
      )}

      <CustomTextInput
        secureTextEntry={true}
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#77CDD9'}
        radius={responsiveWidth(8)}
        placeholder={'Password'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        leftIcon={require('../assets/icons/pass.png')}
        rightIcon={require('../assets/icons/eye.png')}
        alignItem={'center'}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity
        style={{alignItems: 'flex-end', paddingHorizontal: responsiveWidth(13), marginTop: responsiveHeight(1)}}>
        <Text>Forget Password ?</Text>
      </TouchableOpacity>

      <CustomButton
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#FF5B5F'}
        radius={responsiveWidth(8)}
        title={'SIGN IN'}
        color={'#FFf'}
        marginTop={responsiveHeight(2)}
        onclick={() => {
          navigation.navigate('Register');
        }}
      />
      <TouchableOpacity
        style={{  justifyContent: 'center',alignSelf:'center', position:'absolute',marginTop:responsiveHeight(95)}}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={{fontSize:responsiveFontSize(2)}}>Don’t have an account? Sign Up Here </Text>
      </TouchableOpacity>

      {/* <CustomTextInput
        width={'80%'}
        height={55}
        bg={'#3F526E'}
        radius={30}
        placeholder={'name'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
      />
      <CustomTextInput 
        width={'80%'}
        height={180}
        bg={'#3F526E'}
        radius={30}
        placeholder={'Details'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        alignItem='flex-start'
paddingHorizontal={20}
      />
 <CustomButton
        width={'80%'}
        height={60}
        bg={'#77CDD9'}
        radius={30}
        title={'Submit'}
        color={'#FFf'}
      /> */}
    </SafeAreaView>
  );
};

export default Login;
