import {View, StyleSheet} from 'react-native';
import React from 'react';
import HeaderTime from './HeaderTime';
import HeaderInfo from './HeaderInfo';
import COLORS from '../../../Constraint/Color';
const Header = () => {
  return (
    <View styles={styles.header}>
      <HeaderTime />
      <HeaderInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
  },
});

export default Header;
