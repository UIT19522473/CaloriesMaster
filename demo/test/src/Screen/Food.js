
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import FoodHeader from '../Component/cpnFood/Header/FoodHeader'
import FoodCard from '../Component/cpnFood/Body/FoodCard';
import FoodList from '../Component/cpnFood/Body/FoodList';

const Food = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <FoodHeader />
      </View>

      <View style={styles.body}>
        {/* <FoodCard foodTitle='Cơm gà' rationValue='1' rationUnit='khẩu phần ăn' foodCal='300' /> */}
        <FoodList/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.26
  },
  body: {
    flex: 0.74
  }
});

export default Food;
