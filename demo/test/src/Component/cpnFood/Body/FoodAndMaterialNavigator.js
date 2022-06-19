import {Text, StyleSheet, View} from 'react-native';
import React, {Component, lazy} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FoodList from './FoodList';
import MaterialList from './MaterialList';
import COLORS from '../../../Constraint/Color';

const Tab = createMaterialTopTabNavigator();

// export default class FoodAndMaterialNavigator extends Component {
//   render() {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarLabelStyle: { fontSize: 17, textTransform: 'none', fontWeight: 'bold' },
//                 tabBarIndicatorStyle: { backgroundColor: COLORS.primary, height: 2.5},
//                 tabBarPressColor: 'white'
//             }}
//         >
//             <Tab.Screen name='Món ăn' component={FoodList} />
//             <Tab.Screen name='Thực phẩm' component={MaterialList}/>
//         </Tab.Navigator>
//     )
//   }
// }

const FoodAndMaterialNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 17,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {backgroundColor: COLORS.primary, height: 2.5},
        tabBarPressColor: 'white',
      }}>
      <Tab.Screen name="Món ăn" component={FoodList} />
      <Tab.Screen name="Thực phẩm" component={MaterialList} />
    </Tab.Navigator>
  );
};

export default FoodAndMaterialNavigator;

const styles = StyleSheet.create({});
