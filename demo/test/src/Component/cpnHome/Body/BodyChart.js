import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {LineChart} from 'react-native-chart-kit';
import ModalScreen from './Modal';

const LineWeightChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(66, 205, 140, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    // legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    backgroundColor: COLORS.primary,
    backgroundGradientFrom: COLORS.white,
    backgroundGradientTo: COLORS.white,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: COLORS.primary,
    },
  };
  return (
    <View
      style={{
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LineChart
        // style={{paddingHorizontal: 10}}
        yAxisSuffix=" kg"
        data={data}
        width={360}
        height={200}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const ChartWeight = () => {
  const [modalWeight, setModalWeight] = useState(false);
  const handleShowModalWeight = () => {
    setModalWeight(true);
  };

  return (
    <View
      style={{
        paddingHorizontal: 8,
        // marginVertical: 24,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        height: 'auto',
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
      <View
        style={{
          marginTop: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
          Cân nặng
        </Text>

        <View
          style={{
            backgroundColor: COLORS.silver,
            padding: 2,
            borderRadius: 50,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons
            onPress={handleShowModalWeight}
            name="add"
            color={COLORS.black}
            size={20}
          />
        </View>
      </View>
      <LineWeightChart />
      <ModalScreen modalWeight={modalWeight} setModalWeight={setModalWeight} />
    </View>
  );
};

export default ChartWeight;
