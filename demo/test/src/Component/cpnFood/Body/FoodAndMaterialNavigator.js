import {Text, StyleSheet, View} from 'react-native';
import React, {Component, lazy} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FoodList from './FoodList';
import MaterialList from './MaterialList';
import COLORS from '../../../Constraint/Color';
import FoodHeader from '../Header/FoodHeader';

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

const FoodAndMaterialNavigator = props => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      {/* <FoodHeader /> */}
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 30,
          backgroundColor: COLORS.primary,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.white,
            marginTop: 20,
          }}>
          Món ăn của riêng bạn
        </Text>
      </View>
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
        <Tab.Screen navigationKey="MonAn" name="Món ăn" component={FoodList} />
        <Tab.Screen name="Thực phẩm" component={MaterialList} />
      </Tab.Navigator>
    </View>
  );
};

export default FoodAndMaterialNavigator;

const styles = StyleSheet.create({});
