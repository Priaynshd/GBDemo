import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const MyContacts = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = async () => {
    const contactstodisplay = await AsyncStorage.getItem('CONTACTS');
    let tres = JSON.parse(contactstodisplay);
    console.log('strrr', tres);

    setContactList(tres);
  };
  const deleteData = async (index)=>{
    
    let tempData= contactList;
    const selectedData= tempData.filter((item,ind)=>{
        return ind!=index;
    })
    setContactList(selectedData);
    await AsyncStorage.setItem('CONTACTS', JSON.stringify(selectedData))

    console.log(',,',contactList);
  }
  const logout = async () => {
    await AsyncStorage.setItem('EMAIL','');
    await AsyncStorage.setItem('PASSWORD','');
navigation.navigate('Login')
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={contactList}
        renderItem={({item, index}) => {
          console.log('simuuu', item);
          return (
            <View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                height: responsiveHeight(9),
                width: responsiveWidth(90),
                margin: responsiveWidth(2),
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:17

              }}>
                <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                }}>
                {item.name}
              </Text>
              <Text style={{
                  fontSize: responsiveFontSize(2.5),
                  marginLeft:20
                }}>{item.mobile}</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    deleteData(index);
                }}>
             <Text style={{alignItems:'flex-end',marginLeft:100,color:'red'}}>Delete</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
                   // deleteData(item.index);
                   navigation.navigate('EditContacts',{index:index,item})
                }}>
             <Text style={{alignItems:'flex-end',marginLeft:12,color:'red'}}>edit</Text>
             </TouchableOpacity>
            </View>
         
             </View>
            
          );
        }}
      />
      <TouchableOpacity
        style={{
          width: responsiveWidth(50),
          height: responsiveHeight(6),
          backgroundColor: '#000',
          borderRadius: responsiveWidth(30),
          position: 'absolute',
          right: responsiveWidth(7),
          bottom: responsiveWidth(10),
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('SaveContacts');
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontWeight: '500',
            color: '#fff',
          }}>
          Add New Contact
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: responsiveWidth(30),
          height: responsiveHeight(6),
          backgroundColor: '#000',
          borderRadius: responsiveWidth(30),
          position: 'absolute',
          left: responsiveWidth(2),
          bottom: responsiveWidth(10),
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          marginRight:10
        }}
        onPress={() => {
            logout();
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontWeight: '500',
            color: '#fff',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyContacts;
