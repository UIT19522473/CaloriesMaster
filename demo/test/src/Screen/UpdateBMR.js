import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';

import COLORS from '../Constraint/Color';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {StackActions, useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 40,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: COLORS.black,
      }}>
      <TouchableOpacity
        style={{
          width: 'auto',
          padding: 5,
        }}
        onPress={() => {
          navigation.dispatch(StackActions.pop(1));
        }}>
        <MaterialIcons name="arrow-back" color="#eee" size={28} />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          paddingRight: 40,
          justifyContent: 'center',
          // paddingTop: 12,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.white,
            marginBottom: 12,
          }}>
          Cập nhật BMR
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: COLORS.white,
            paddingHorizontal: 18,
            paddingVertical: 6,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: COLORS.silver,
          }}>
          Đặt mục tiêu
        </Text>
      </View>
    </View>
  );
};

const Item = ({name, value, action}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 28,
        borderRadius: 28,
        alignItems: 'center',
        marginBottom: 16,
        // backgroundColor: COLORS.grey,
        //shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0.01,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        elevation: 2,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 18, color: COLORS.black}}>
        {name}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>{value}</Text>
    </View>
  );
};

const UpdateBMR = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      {/* button Back */}
      <Header />

      {/* body */}
      <View
        style={{
          // alignItems: 'center',
          // justifyContent: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: COLORS.white,
          marginTop: 24,
          paddingHorizontal: 18,
          paddingVertical: 50,
        }}>
        <Item name="Kcal/ngày" value="1999" />
        <Item name="Chiều cao" value="169" />
        <Item name="Cân nặng" value="66" />
        <Item name="Tuổi" value="18" />
        <Item name="Giới tính" value="Nam" />
        <Item name="Cường độ luyện tập" value="trung bình" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    // width: 90,
    // height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    paddingBottom: 4,
  },
});

export default UpdateBMR;
