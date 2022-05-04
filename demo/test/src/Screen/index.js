import {View, Text} from 'react-native';
import React from 'react';
import Home from './Home';
import Food from './Food';
import Exercise from './Exercise';
import Info from './Info';
import Login from './Login';

// import DemoBack from '../Component/cpnHome/Body/DemoBack';
import ControlWater from '../Component/cpnHome/Body/ControlWater';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
function MainBottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Home" component={HomeAbout} />
      <Tab.Screen name="Food" component={Food} />
      <Tab.Screen name="Exercise" component={Exercise} />
      <Tab.Screen name="Info" component={Info} />
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
    </stackHome.Navigator>
  );
};

export default Root;
