import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../Constraint/Color';
import Calo from './Calo';
import Vitamin from './Vitamin';
import Water from './Water';

const BodyEnergy = () => {
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        marginTop: 12,
      }}>
      <Calo />
      <Vitamin />
      <Water />
    </ScrollView>
  );
};

export default BodyEnergy;
