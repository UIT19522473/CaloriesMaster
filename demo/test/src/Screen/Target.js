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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {StackActions, useNavigation} from '@react-navigation/native';

const ButtonChoose = ({title, des, borderWidth}) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary,
        // borderColor: `${colorBorder}`,
        borderWidth: borderWidth,
        padding: 8,
        borderRadius: 36,
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: COLORS.primary,
          marginBottom: 12,
        }}>
        {title}
      </Text>
      <Text style={{fontSize: 16, textAlign: 'center', color: COLORS.black}}>
        {/* Quản lý cân nặng của bạn bằng cách ăn uống thông minh hơn */}
        {des}
      </Text>
    </TouchableOpacity>
  );
};

const Target = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      {/* button Back */}

      <View
        style={{
          marginTop: 30,
          marginHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 16,
        }}>
        <TouchableOpacity
          style={{
            width: 'auto',
            padding: 5,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
          }}>
          <MaterialIcons name="arrow-back" color="#eee" size={28} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 24,
            color: '#eee',
          }}>
          Mục tiêu
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
          }}>
          Mục tiêu của bạn là gì?
        </Text>
        <ButtonChoose
          title="Giảm cân"
          des="Quản lý cân nặng của bạn bằng cách ăn uống thông minh hơn"
          borderWidth={2}
        />
        {/* {/* <ButtonChoose /> */}
        <ButtonChoose
          title="Giữ nguyên cân nặng"
          des="Tối ưu cho sức khỏe của bạn"
        />
        <ButtonChoose title="Tăng cân" des="Tăng cân với eat clean" />
      </View>
    </SafeAreaView>
  );
};

export default Target;
