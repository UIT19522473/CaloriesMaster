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

const ButtonChoose = ({title, des, target, index, setTarget}) => {
  const border = target === index ? 2 : 0;
  return (
    <TouchableOpacity
      onPress={() => setTarget(index)}
      style={{
        width: '80%',
        borderColor: COLORS.primary,
        borderWidth: border,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginVertical: 24,
        backgroundColor: COLORS.white,
        borderRadius: 24,

        // height: 70,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
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

const Target = ({route}) => {
  const navigation = useNavigation();
  let data = route.params;
  // data.new = 'demo';

  const [target, setTarget] = useState(1);
  data.target = target;
  console.log(data);
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
            navigation.dispatch(StackActions.pop(1));
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
          target={target}
          setTarget={setTarget}
          index={1}
        />
        {/* {/* <ButtonChoose /> */}
        <ButtonChoose
          title="Giữ nguyên cân nặng"
          des="Tối ưu cho sức khỏe của bạn"
          target={target}
          setTarget={setTarget}
          index={2}
        />
        <ButtonChoose
          title="Tăng cân"
          des="Tăng cân với eat clean"
          target={target}
          setTarget={setTarget}
          index={3}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TKChiSo', data);
        }}
        style={{
          position: 'absolute',
          bottom: 24,
          left: '35%',
          backgroundColor: COLORS.primary,
          borderRadius: 50,
        }}>
        <Text
          style={{
            paddingHorizontal: 40,
            paddingVertical: 12,
            fontSize: 16,
            fontWeight: 'bold',
            color: COLORS.white,
          }}>
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Target;
