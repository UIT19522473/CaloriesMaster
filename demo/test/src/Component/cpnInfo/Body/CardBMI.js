import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CardBMI = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        marginTop: 108,
        // height: 120,
        flexDirection: 'column',
        paddingHorizontal: 12,
        // backgroundColor: COLORS.grey,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 4,
        }}>
        <Text style={{color: COLORS.black, fontSize: 18, fontWeight: 'bold'}}>
          Chỉ số khối cơ thể (BMI)
        </Text>
        <MaterialCommunityIcons
          onPress={() => {
            navigation.navigate('UpdateBMR');
          }}
          name="dots-horizontal"
          size={28}
          color={COLORS.black}
          // style={{fontWeight: 'bold'}}
        />
      </View>
      <View
        style={{
          width: '100%',
          // backgroundColor: COLORS.grey,
          borderRadius: 12,
          marginVertical: 18,
          // marginHorizontal: 12,
          // shadow
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}>
        {/* BMI */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 24,
            paddingHorizontal: 50,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 22,
                marginBottom: 4,
                fontWeight: 'bold',
                color: COLORS.black,
              }}>
              BMI
            </Text>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'red'}}>
              23.2
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>22-06-13 06:44</Text>
            <Text
              style={{
                fontSize: 16,
                color: 'orange',
                marginTop: 2,
                fontWeight: '600',
              }}>
              Cập nhật cân nặng
            </Text>
          </View>
        </View>
        {/*Chiều cao  */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 24,
            paddingHorizontal: 50,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
              170 cm
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Chiều cao</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
              67 kg
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Cân nặng tốt</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBMI;
