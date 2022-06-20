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

import COLORS from '../Constraint/Color';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {StackActions, useNavigation} from '@react-navigation/native';

const AddMaterial = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      {/* button Back */}

      <View style={{marginTop: 50, marginHorizontal: 15}}>
        <TouchableOpacity
          style={{
            width: 'auto',
            padding: 5,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.pop());
          }}>
          <MaterialIcons name="arrow-back" color="#eee" size={28} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddMaterial;
