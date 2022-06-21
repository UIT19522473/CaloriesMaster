import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import FoodCard from './FoodCard';
import SearchFood from '../Header/SearchFood';
import COLORS from '../../../Constraint/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FoodItem = ({name, value, calo}) => {
  return (
    <View
      style={{
        width: '98%',
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //shadow
        paddingHorizontal: 16,
        paddingVertical: 12,
        margin: 4,
        backgroundColor: COLORS.white,
        borderRadius: 24,
        // height: 70,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLORS.black,
            marginBottom: 2,
          }}>
          {name}
        </Text>
        <Text>
          {value}g -{calo} calo
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
        }}>
        <Ionicons
          style={{padding: 4, borderRadius: 20, backgroundColor: COLORS.silver}}
          name="add"
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
};

const FoodList = () => {
  // console.log('Thực phẩm');
  return (
    <View style={styles.container}>
      <SearchFood />

      <View
        style={{
          width: '90%',
          height: '90%',
          margin: 20,

          //shadow
          paddingHorizontal: 8,
          paddingVertical: 12,
          marginHorizontal: 24,
          // marginVertical: 24,
          backgroundColor: COLORS.white,
          borderRadius: 12,
          // height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
        <ScrollView style={{width: '100%', padding: 8}}>
          <FoodItem name={'demo1'} value={'100'} calo={'200'} />
          {/* <FoodItem />
          <FoodItem /> */}
        </ScrollView>
      </View>
      {/* <FoodCard
          foodTitle="Bông Artiso"
          rationValue="2"
          rationUnit="khẩu phần ăn"
          foodCal="565.0"
        /> */}
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 70,
  },
});
