import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../Constraint/Color';

const HeaderTime = () => {
  return (
    <View style={styles.header__time}>
      <Text style={styles.header__time__text}>Hôm nay</Text>
      <View>
        <View style={styles.header__time__cal}>
          <Icon name="angle-left" color="#eee" size={24} />
          <View style={styles.header__time__cal__date}>
            <Icon
              style={styles.header__time__cal__icon}
              name="calendar-o"
              color="#eee"
              size={20}
            />
            <Text style={styles.header__time__cal__text}>20 thang 4</Text>
          </View>
          <Icon name="angle-right" color="#eee" size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    width: '100%',
  },
  header__time: {
    color: COLORS.white,
    paddingTop: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__time__text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.white,
  },
  header__time__cal: {
    flexDirection: 'row',
  },
  header__time__cal__date: {
    flexDirection: 'row',
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header__time__cal__icon: {
    paddingRight: 16,
  },
  header__time__cal__text: {
    color: COLORS.white,
    fontSize: 18,
  },
});

export default HeaderTime;
