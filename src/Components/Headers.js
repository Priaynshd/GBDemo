import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
const width = Dimensions.get('window')
const Header = ({ title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon }) => {
    // const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.Header}>
                <TouchableOpacity style={styles.btn}  onPress={() => {
          onClickLeftIcon();
        }}>
                    <Image source={leftIcon} style={styles.icon}  />

                </TouchableOpacity>
                <Text style={styles.titleTxt}>{title}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Image source={rightIcon} style={[styles.icon, {width:30,height:30}]} />

                </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Header;

const styles = StyleSheet.create({
    Header: {
        width: width,
        height: 60,
        backgroundColor: '#0786DAFD',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',


    },
    icon: {
        height: 40, width: 40, margin: 33
    },
    btn: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 23,
        paddingRight: 25
    },
    titleTxt:{
        color:'#000',
        fontSize:responsiveFontSize(5),
    }
})
