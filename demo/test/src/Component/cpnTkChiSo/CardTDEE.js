import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blue300} from 'react-native-paper/lib/typescript/styles/colors';

const CardTDEE = props => {
  let text = 'Năng lượng nạp vào để giảm cân ( calo thâm hụt = TDEE - 500)';
  let txtCalo = 'Calo cần giảm 500';
  let sumCalo = props.TDEE - 500;

  if (props.target === 2) {
    text = 'Năng lượng cần nạp vào để giữ cân (TDEE)';
    txtCalo = 'Calo cần tăng: 0';
    sumCalo = props.TDEE;
  }
  if (props.target === 3) {
    text = 'Năng lượng nạp vào để tăng cân ( calo đã tăng = TDEE + 500)';
    txtCalo = 'Calo cần tăng: 500';
    sumCalo = props.TDEE + 500;
  }
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        marginTop: 100,
        // height: 120,
        flexDirection: 'column',
        paddingHorizontal: 12,
        // backgroundColor: COLORS.grey,
        // marginBottom: 50,
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
          {text}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          // backgroundColor: COLORS.grey,
          borderRadius: 12,
          marginVertical: 18,

          // marginHorizontal: 12,
          // shadow

          //new
          paddingHorizontal: 4,
          paddingVertical: 12,
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
        {/* Water */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 50,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 22,
                marginBottom: 4,
                fontWeight: 'bold',
                color: COLORS.black,
              }}>
              {sumCalo}
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
              Kcal/ngày
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'red'}}>
              TDEE: {props.TDEE}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'red',
                marginTop: 8,
              }}>
              {txtCalo}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardTDEE;
