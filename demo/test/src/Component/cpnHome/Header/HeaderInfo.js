import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Pie from 'react-native-pie';
import COLORS from '../../../Constraint/Color';
import {ProgressBar} from 'react-native-paper';

const Chart = () => {
  return (
    <View style={{width: 140, alignItems: 'center'}}>
      <Pie
        radius={80}
        innerRadius={75}
        sections={[
          {
            percentage: 60,
            color: COLORS.white,
          },
        ]}
        backgroundColor={COLORS.percent}
      />
      <View style={styles.gauge}>
        <Text style={styles.gaugeText}>2000</Text>
        <Text style={{color: COLORS.white, fontSize: 18}}>Cần nạp</Text>
      </View>
    </View>
  );
};
// phần thông tin chỉ số nạp tiêu hao và biểu đồ
const HeaderInfoEnergy = () => {
  return (
    <View style={styles.energy}>
      <View style={styles.energy__data}>
        <Text style={styles.energy__num}>0</Text>
        <Text style={styles.energy__text}>đã nạp</Text>
      </View>
      <Chart />
      <View style={styles.energy__data}>
        <Text style={styles.energy__num}>0</Text>
        <Text style={styles.energy__text}>tiêu hao</Text>
      </View>
    </View>
  );
};

//các thành phần vitamin: carbs + chất đạm + chất béo
const HeaderInfoVitamin = () => {
  return (
    <View style={styles.vitamin}>
      <View style={styles.vitamin__wrap}>
        <Text style={styles.vitamin__text}>Carbs</Text>
        <ProgressBar
          progress={0.2}
          color={COLORS.white}
          width={80}
          paddingVertical={4}
        />
        <View style={styles.vitamin__data}>
          <Text style={styles.vitamin__num}>0</Text>
          <Text style={styles.vitamin__slash}>/</Text>
          <Text style={styles.vitamin__num}>180</Text>
        </View>
      </View>
      <View style={styles.vitamin__wrap}>
        <Text style={styles.vitamin__text}>Chất đạm</Text>
        <ProgressBar
          progress={0.2}
          color={COLORS.white}
          width={80}
          paddingVertical={4}
        />
        <View style={styles.vitamin__data}>
          <Text style={styles.vitamin__num}>0</Text>
          <Text style={styles.vitamin__slash}>/</Text>
          <Text style={styles.vitamin__num}>180</Text>
        </View>
      </View>
      <View style={styles.vitamin__wrap}>
        <Text style={styles.vitamin__text}>Chất béo</Text>
        <ProgressBar
          progress={0.2}
          color={COLORS.white}
          width={80}
          paddingVertical={4}
        />
        <View style={styles.vitamin__data}>
          <Text style={styles.vitamin__num}>0</Text>
          <Text style={styles.vitamin__slash}>/</Text>
          <Text style={styles.vitamin__num}>180</Text>
        </View>
      </View>
    </View>
  );
};

const HeaderInfo = () => {
  return (
    <View style={styles.header__info}>
      <HeaderInfoEnergy />
      <HeaderInfoVitamin />
    </View>
  );
};

const styles = StyleSheet.create({
  header__info: {
    paddingVertical: 8,
    justifyContent: 'center',
  },

  energy: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    alignItems: 'center',
  },

  gauge: {
    position: 'absolute',
    width: 90,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    paddingBottom: 4,
  },

  energy__data: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  energy__num: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  energy__text: {
    fontSize: 18,
    color: COLORS.white,
  },

  //vitamin
  vitamin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    // backgroundColor: '#ffa',
  },

  vitamin__wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vitamin__text: {
    fontSize: 16,
    color: COLORS.white,
  },
  vitamin__data: {
    flexDirection: 'row',
  },
  vitamin__num: {
    color: COLORS.white,
  },
  vitamin__slash: {
    color: COLORS.white,
    paddingHorizontal: 4,
  },
});
export default HeaderInfo;
