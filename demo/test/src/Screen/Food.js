
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import FoodHeader from '../Component/cpnFood/Header/FoodHeader'
import FoodCard from '../Component/cpnFood/Body/FoodCard';
import FoodList from '../Component/cpnFood/Body/FoodList';
import FoodAndMaterialNavigator from '../Component/cpnFood/Body/FoodAndMaterialNavigator';

const Food = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <FoodHeader />
      </View>

      <View style={styles.body}>
        {/* <FoodList/> */}
        <FoodAndMaterialNavigator/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.25
  },
  body: {
    flex: 0.75
  }
});

export default Food;
