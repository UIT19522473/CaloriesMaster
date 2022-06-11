import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import COLORS from '../../../Constraint/Color';

import AddWater from '../Body/BodyWater';
import ListCard from './BodyListCard';
import ChartWeight from './BodyChart';
import {useNavigation} from '@react-navigation/native';

const TitleWater = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
        Bạn đã uống bao nhiêu nước
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('ControlWater');
        }}
        style={{
          fontSize: 18,
          textDecorationLine: 'underline',
          color: COLORS.textDecoration,
        }}>
        0/2000 ml
      </Text>
    </View>
  );
};

const TitleWeight = () => {
  return (
    <View
      style={{
        marginVertical: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.black}}>
        Mục tiêu
      </Text>
      <Text
        style={{
          fontSize: 18,
          textDecorationLine: 'underline',
          color: COLORS.textDecoration,
        }}>
        60.0 kg
      </Text>
    </View>
  );
};

const Body = () => {
  return (
    <View styles={styles.body}>
      <View
        // thanh tab top
        style={{
          height: 30,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.primary,
          // marginTop: 328,
        }}></View>

      <View
        style={{
          backgroundColor: COLORS.background,
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}>
        <TitleWater />
        <AddWater />
        <ListCard />
        <TitleWeight />
        <ChartWeight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
});

export default Body;
