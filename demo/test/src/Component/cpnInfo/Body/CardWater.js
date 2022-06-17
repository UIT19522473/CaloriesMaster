import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blue300} from 'react-native-paper/lib/typescript/styles/colors';

const CardWater = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        marginTop: 12,
        // height: 120,
        flexDirection: 'column',
        paddingHorizontal: 12,
        // backgroundColor: COLORS.grey,
        marginBottom: 100,
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
        <MaterialCommunityIcons
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
        {/* Water */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'red'}}>
              Lượng nước bạn cần uống
            </Text>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
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
        {/*Chiều cao  */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 16,
            paddingLeft: 32,
            paddingRight: 18,
          }}>
          <View style={{}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
              1000 ml
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Lượng nước đã uống
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardWater;
