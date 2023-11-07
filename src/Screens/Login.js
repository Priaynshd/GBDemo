import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomCircle from '../Components/CustomCircle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badName, setBadName] = useState(false);

  const SaveData = async () => {
    try {
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('PASSWORD', password);
      navigation.navigate('MyContacts');
    } catch (e) {
      console.log(e);
    }
  };
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
      <View style={{height: responsiveHeight(40)}}>
        <Image
          source={require('../assets/images/FunExSmilyFace.png')}
          style={{
            height: responsiveHeight(32),
            width: responsiveWidth(100),
            marginBottom: responsiveHeight(3),
          }}
        />
        <View
          style={{
            marginTop: responsiveHeight(1),
            justifyContent: 'center',
            alignItems: 'center',
            bottom: responsiveHeight(1),
          }}>
          <Image
            source={require('../assets/images/Funex.png')}
            style={{
              height: responsiveHeight(4),
              width: responsiveWidth(30),
            }}
          />
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
        value={email}
        onChangeText={txt => setEmail(txt)}
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
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          paddingHorizontal: responsiveWidth(13),
          marginTop: responsiveHeight(1),
        }}>
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
          // navigation.navigate('MyContacts');
          // validate();
          SaveData();
        }}
      />
      <View
        style={{
          marginTop: responsiveHeight(3),
          marginLeft: responsiveWidth(3),
          width: responsiveWidth(80),
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginLeft: responsiveWidth(5),
        }}>
        {/* <Text>hii</Text> */}
        <CustomCircle Icon={require('../assets/images/apple.png')} />
        <CustomCircle Icon={require('../assets/images/facebook.png')} />

        <CustomCircle Icon={require('../assets/images/google.png')} />
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          marginTop: responsiveHeight(95),
        }}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={{fontSize: responsiveFontSize(2)}}>
          Don’t have an account? Sign Up Here{' '}
        </Text>
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
