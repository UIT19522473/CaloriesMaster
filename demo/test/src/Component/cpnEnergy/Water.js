import {View, Text} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import COLORS from '../../Constraint/Color';

const Water = () => {
  const barData = [
    {value: 250, label: 'M', frontColor: '#177AD5'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T', frontColor: '#177AD5'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S', frontColor: '#177AD5'},
    {value: 300, label: 'S', frontColor: '#177AD5'},
  ];
  return (
    <View
      style={{
        // marginVertical: 20,
        marginHorizontal: 20,
        padding: 24,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        //shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>
        Biểu đồ nước
      </Text>
      <View style={{width: 320}}>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          maxValue={2000}
        />
      </View>
    </View>
  );
};

export default Water;
