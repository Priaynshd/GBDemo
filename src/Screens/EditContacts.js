import {View, Text, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import CustomTextInput from '../Components/CustomTextInput';
import {
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import CustomButton from '../Components/CustomButton';
  import {useNavigation} from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
const EditContacts = ({}) => {
    const navigation = useNavigation();

    const route = useRoute();
    console.log('--',route.params);

    const [name, setName] = useState(route.params.item.name);
    const [phone, setPhone] = useState(route.params.item.mobile);   
  let contacts = [];
  const EditContacts = async () => {
    let tempContact = [];
    let x = JSON.parse(await AsyncStorage.getItem('CONTACTS'));
    tempContact = x;
    tempContact.map((item,index) => {
    //   contacts.push(item);
    if(route.params.index == index)
    {
        item.name=name;
        item.mobile= phone;

    }
    });
    contacts.push({name: name, mobile: phone});
    await AsyncStorage.setItem('CONTACTS', JSON.stringify(contacts));
    navigation.goBack();
  };
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
          title={'Update Contact'}
          color={'#FFf'}
          marginTop={responsiveHeight(2)}
          onclick={() => {
            EditContacts();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditContacts;
