import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blue300} from 'react-native-paper/lib/typescript/styles/colors';

const CardWaterTK = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        marginTop: 28,
        marginBottom: 32,
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
          Bạn nên uống bao nhiêu nước
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
            flexDirection: 'column',
            justifyContent: 'space-between',
            // alignItems: 'center',
            paddingVertical: 12,
            paddingLeft: 32,
            paddingRight: 16,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 22,
                marginBottom: 4,
                fontWeight: 'bold',
                color: COLORS.black,
              }}>
              2000 ml
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
              Lượng nước bạn cần uống
            </Text>
          </View>
          <View
            style={{alignItems: 'center', flexDirection: 'row', marginTop: 16}}>
            <MaterialCommunityIcons name="bell" size={20} color="orange" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'orange',
                marginLeft: 4,
              }}>
              Thông báo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardWaterTK;
