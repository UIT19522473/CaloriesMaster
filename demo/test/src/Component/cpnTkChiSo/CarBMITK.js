import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CardBMITK = props => {
  let textWeight = '';
  if (props.BMI < 18.5) {
    textWeight = 'Thiếu cân';
  }
  if (props.BMI >= 18.5 && props.BMI <= 24.9) {
    textWeight = 'Cân nặng tốt';
  }
  if (props.BMI >= 25 && props.BMI <= 29.9) {
    textWeight = 'Thừa cân';
  }
  if (props.BMI > 30) {
    textWeight = 'Béo phì';
  }
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        marginTop: 24,
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
      </View>
      <View
        style={{
          //new
          paddingHorizontal: 8,
          marginVertical: 24,
          backgroundColor: COLORS.white,
          borderRadius: 12,
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
              {props.BMI}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>{props.dateValue}</Text>
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
              {props.height} cm
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Chiều cao</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
              {props.weight} kg
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{textWeight}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBMITK;
