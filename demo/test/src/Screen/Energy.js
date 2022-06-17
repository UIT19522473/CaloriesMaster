import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Pie from 'react-native-pie';
import COLORS from '../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import {StackActions, useNavigation} from '@react-navigation/native';
import BodyEnergy from '../Component/cpnEnergy';
import SelectDropdown from 'react-native-select-dropdown';

const Header = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 30,
        marginHorizontal: 15,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {/* button Back */}
      <TouchableOpacity
        style={{
          width: 'auto',
          padding: 5,
        }}
        onPress={() => {
          navigation.dispatch(StackActions.pop(1));
        }}>
        <MaterialIcons name="arrow-back" color="#eee" size={28} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: COLORS.white,
          marginLeft: 18,
        }}>
        Biểu đồ thống kê
      </Text>
    </View>
  );
};

const Energy = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Header />
      <BodyEnergy />
    </SafeAreaView>
  );
};
export default Energy;
