import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {
  getRequests,
  getRequestsbyAxios,
  postRequestsbyAxios,
} from './ApiRequest';
import {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header from '../Components/Headers';
import {Image} from 'react-native';

const Home = () => {
  const [catlist, setCatList] = useState([]);
  const [catName, setCatName] = useState('');
  const [prodCatList, setProdCatList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    getRequestsbyAxios(
      'https://fakestoreapi.com/products/categories',
    ).then(res => {
      console.log('data====>', res);
      setCatList(res);
    });
      postRequestsbyAxios('https://fakestoreapi.com/products').then(res =>
        console.log('posttt', res.data),
      );

    // getRequests(
    //   'https://fakestoreapi.com/products',
    //   'POST',
    //   JSON.stringify({
    //     title: 'test product',
    //     price: 13.5,
    //     description: 'lorem ipsum set',
    //     image: 'https://i.pravatar.cc',
    //     category: 'electronic',
    //   }),
    // ).then(res => {
    //   console.log('post Data===>', res);
    // });
  };

  const fetchProductsForCategory = catname => {
    console.log('catname fetch', catname);
    getRequests(
      `https://fakestoreapi.com/products/category/=${catname}`,
      'GET',
      null,
    ).then(res => {
      console.log('cat prod', res);
      setProdCatList(res);
    });
  };

  const renderItem = ({item, index}) => {
    console.log('item', item);
    return (
      <TouchableOpacity
        style={styles.mainview}
        onPress={() => {
          // setCatName(item);
          fetchProductsForCategory(item);
          console.log('catname---', item);
        }}>
        <Text style={{fontSize: responsiveFontSize(3)}}>{item} </Text>
      </TouchableOpacity>
    );
  };
  console.log('response', catlist);
  console.log('prodcatlist', prodCatList);
  return (
    <SafeAreaView>
      <Header title={'Products '} />
      <Text
        style={{
          fontSize: responsiveFontSize(4),
          marginTop: responsiveHeight(5),
        }}>
        Product categories
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={catlist}
        renderItem={renderItem}
      />
      <Text
        style={{
          fontSize: responsiveFontSize(4),
          marginTop: responsiveHeight(5),
        }}>
        Products list
      </Text>
      <View>
        <FlatList
          data={prodCatList}
          contentContainerStyle={styles.listContainer}
          renderItem={({item, index}) => {
            console.log('item prod catlist', item);

            return (
              <View
                style={{
                  backgroundColor: '#fff',
                  marginTop: responsiveHeight(2),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: responsiveHeight(10),
                      width: responsiveWidth(20),
                      marginLeft: 5,
                      top: 20,
                    }}
                  />
                  <Text
                    style={{
                      margin: responsiveWidth(4),
                      fontSize: responsiveFontSize(2),
                    }}>
                    {item.title}
                  </Text>
                </View>
                <Text style={{marginHorizontal: responsiveWidth(30)}}>
                  Rate:{item.price}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  title: {
    padding: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  mainview: {
    backgroundColor: '#FFDD2D',
    width: responsiveWidth(40),
    marginLeft: responsiveWidth(2),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(6),
    justifyContent: 'center',
    padding: responsiveWidth(4),
    flexDirection: 'row',
  },
  txt: {
    fontWeight: '600',
    fontSize: responsiveFontSize(1.7),
  },
  image: {
    bottom: 25,
    height: 55,
    width: 55,
  },
  listContainer: {
    paddingBottom: responsiveHeight(20), // Add bottom padding here to create margin
  },
});
