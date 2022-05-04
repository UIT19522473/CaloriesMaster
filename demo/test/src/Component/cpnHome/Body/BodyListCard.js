import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ListCard = () => {
  return (
    <View
      style={{
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <MaterialCommunityIcons
        name="lightbulb-variant"
        color={COLORS.yellow}
        size={80}
      />
      <Text style={{fontSize: 16}}> Co the ban chua biet ?</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: COLORS.black,
          marginVertical: 10,
        }}>
        QUA BO VA RAU CHAN VIT
      </Text>
      <Text style={{fontSize: 16}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus
        dicta atque? Asperiores exercitationem repellendus quisquam dignissimos
        aut, nesciunt perspiciatis doloribus dicta! Magnam, consectetur quia
        fugiat a enim quasi earum. nesciunt perspiciatis doloribus dicta!
        Magnam, consectetur quia fugiat a enim quasi earum.
      </Text>
    </View>
  );
};
export default ListCard;
