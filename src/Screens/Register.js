import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import Tooltip from 'react-native-walkthrough-tooltip';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomButton from '../Components/CustomButton';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showTip, setTip] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: responsiveHeight(5),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images/Funex.png')}
          style={{height: responsiveHeight(5), width: responsiveWidth(30)}}
        />
      </View>
      <View
        style={{
          marginTop: responsiveHeight(9),
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(3.5)}}>
          SignUp
        </Text>
      </View>
      <CustomTextInput
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#3F526E'}
        radius={responsiveWidth(8)}
        placeholder={'First and Last Name'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        onChangeText={txt => setName(txt)}
      />
      <CustomTextInput
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#3F526E'}
        radius={responsiveWidth(8)}
        placeholder={'Email address'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        onChangeText={txt => setName(txt)}
      />

      <CustomTextInput
        secureTextEntry={true}
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#3F526E'}
        radius={responsiveWidth(8)}
        placeholder={'Password'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        rightIcon={require('../assets/icons/eye.png')}
        alignItem={'center'}
        onChangeText={txt => setPassword(txt)}
      />
      {/* <Tooltip
        animated={true}
        arrowSize={{width: 10, height: 9}}
        backgroundColor="rgba(0,0,0,0.5)"
        isVisible={showTip}
        content={<Text>Employee Access Code</Text>}
        placement="top"
        onClose={() => setTip(false)}>
        <TouchableOpacity style={{}} onPress={() => setTip(true)}>
          <Image
            source={require('../assets/icons/eac.png')}
            style={{marginRight: 15}}
          />
        </TouchableOpacity>
      </Tooltip> */}
      <CustomTextInput
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#3F526E'}
        radius={responsiveWidth(8)}
        placeholder={'Work Email or EAC Code'}
        placeholdertxtcolor={'#fff'}
        color={'#fff'}
        rightIcon={require('../assets/icons/eac.png')}
        alignItem={'center'}
        onChangeText={txt => setPassword(txt)}
        onClick={() => {
          setTip(true);
        }}
      />

      {/* <TouchableOpacity
            style={[{ backgroundColor: 'yellow', width: '100%', marginTop: 20, padding: 10,
            borderRadius: 4}, ]}
            onPress={() => setTip(true)}
          >
            <Text>Show ToolTip</Text> */}
      {/* </TouchableOpacity> */}
      <CustomButton
        width={responsiveWidth(80)}
        height={responsiveHeight(7)}
        bg={'#0EBAAB'}
        radius={responsiveWidth(8)}
        title={'SUBMIT'}
        color={'#FFf'}
        marginTop={responsiveHeight(2)}
        onclick={() => {
          navigation.navigate('Register');
        }}
      />

      <Modal visible={showTip} transparent>
        <TouchableOpacity
          activeOpacity={1}
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}
          onPress={() => {
            setTip(false);
          }}>
          <View
            style={{
              position: 'absolute',
              right: responsiveWidth(13),
              bottom: Dimensions.get('window').height / 2 - 87,
              // bottom:responsiveWidth(80)
            }}>
            <View
              style={{
                width: responsiveWidth(50),
                height: responsiveHeight(5),
                backgroundColor: '#fff',
                borderRadius: responsiveWidth(2),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>EAC Employee Code</Text>
            </View>
            <View
              style={{
                //To make Triangle Shape
                width: 0,
                height: 0,
                borderLeftWidth: responsiveWidth(2.8),
                borderRightWidth: responsiveWidth(3),
                borderBottomWidth: responsiveWidth(3),
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#fff',
                alignSelf: 'flex-end',
                transform: [{rotate: '180deg'}],
                marginRight: responsiveWidth(9),
              }}></View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default Register;
