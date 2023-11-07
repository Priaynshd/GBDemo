import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = () => {
    const navigation=useNavigation();

    useEffect(()=>{
setTimeout(()=>{
// navigation.navigate('Login')
getData();
},3000)
    },[])

    const getData = async () => {
        const email = await AsyncStorage.getItem('EMAIL');
        console.log(email);
        const pass = await AsyncStorage.getItem('PASSWORD');
        console.log(pass);
        if(email!==null)
        {
            navigation.navigate('MyContacts');
        }
        else{
            navigation.navigate('Login')
        }
      };
  return (
    <View>
      <Text>Intro</Text>
    </View>
  )
}

export default Intro