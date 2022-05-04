import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Glass = () => {
  return (
    <View>
      <MaterialCommunityIcons
        // style={styles.header__time__cal__icon}
        name="glass-pint-outline"
        color={COLORS.silver}
        size={50}></MaterialCommunityIcons>

      <MaterialIcons
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
        }}
        name="add"
        color={COLORS.black}
        size={16}
      />
    </View>
  );
};

const AddWater = () => {
  return (
    <View
      style={{
        paddingHorizontal: 8,
        marginVertical: 24,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        height: 70,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <Glass />
    </View>
  );
};

export default AddWater;
