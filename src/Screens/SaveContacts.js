import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveContacts = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  let contacts=[];
  const saveContacts = async() =>{
    let tempContact=[];
    let x= JSON.parse( await AsyncStorage.getItem('CONTACTS'));
 tempContact=x;
tempContact.map((item)=>{
contacts.push(item);
})
contacts.push({name:name,mobile:phone})
await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts))
navigation.goBack();
  }
  return (
    <SafeAreaView>
      <View>
        <CustomTextInput
          width={responsiveWidth(80)}
          height={responsiveHeight(7)}
          bg={'#fff'}
          radius={responsiveWidth(8)}
          placeholder={'name'}
          placeholdertxtcolor={'#000'}
          color={'#000'}
          // leftIcon={require('../assets/icons/pass.png')}
          // rightIcon={require('../assets/icons/eye.png')}
          alignItem={'center'}
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <CustomTextInput
          width={responsiveWidth(80)}
          height={responsiveHeight(7)}
          bg={'#fff'}
          radius={responsiveWidth(8)}
          placeholder={'number'}
          placeholdertxtcolor={'#000'}
          color={'#000'}
          // leftIcon={require('../assets/icons/pass.png')}
          // rightIcon={require('../assets/icons/eye.png')}
          alignItem={'center'}
          value={phone}
          onChangeText={txt => setPhone(txt)}
        />
        <CustomButton
          width={responsiveWidth(80)}
          height={responsiveHeight(7)}
          bg={'#000'}
          radius={responsiveWidth(8)}
          title={'Save Contact'}
          color={'#FFf'}
          marginTop={responsiveHeight(2)}
          onclick={() => {
            saveContacts();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SaveContacts;
