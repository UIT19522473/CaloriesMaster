import {View, Text, Image} from 'react-native';
import React from 'react';
import Home from './Home';
import Food from './Food';
import addFood from './addFood';
import Exercise from './Exercise';
import Info from './Info';
import Login from './Login';
import Target from './Target';
import UpdateBMR from './UpdateBMR';
import Energy from './Energy';
import BMR from './BMR';
import Test from './Test';
// import FirebaseConfig from './FirebaseConfig';

// import DemoBack from '../Component/cpnHome/Body/DemoBack';
import ControlWater from '../Component/cpnHome/Body/ControlWater';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from '../Constraint/Color';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
        <Stack.Screen name="UpdateBMR" component={UpdateBMR} />
        <Stack.Screen name="Energy" component={Energy} />
        <Stack.Screen name="BMR" component={BMR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
function MainBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeAbout}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="addFood"
        component={Food}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="cards-heart"
              size={24}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Exercise"
        component={Exercise}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="run-fast"
              size={24}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="user-alt"
              size={22}
              color={focused ? COLORS.primary : COLORS.grey}
            />
          ),
        }}
      />

      <Tab.Screen name="Test" component={Test} />

      {/* <Tab.Screen name="firebase" component={FirebaseConfig} /> */}
    </Tab.Navigator>
  );
}

const stackHome = createNativeStackNavigator();
const HomeAbout = () => {
  return (
    <stackHome.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <stackHome.Screen name="HomeAbout" component={Home} />
      <stackHome.Screen name="ControlWater" component={ControlWater} />
      <stackHome.Screen name="Target" component={Target} />
    </stackHome.Navigator>
  );
};

export default Root;
