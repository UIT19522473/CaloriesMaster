import {View, Text} from 'react-native';
import React from 'react';
import COLORS from '../../Constraint/Color';
// import {LineChart} from 'react-native-chart-kit';
import {LineChart} from 'react-native-gifted-charts';

// const LineWeightChart = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43],
//         color: (opacity = 1) => `rgba(66, 205, 140, ${opacity})`, // optional
//         strokeWidth: 2, // optional
//       },
//     ],
//     // legend: ['Rainy Days'], // optional
//   };
//   const chartConfig = {
//     backgroundColor: COLORS.primary,
//     backgroundGradientFrom: COLORS.white,
//     backgroundGradientTo: COLORS.white,
//     decimalPlaces: 2, // optional, defaults to 2dp
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//     propsForDots: {
//       r: '6',
//       strokeWidth: '2',
//       stroke: COLORS.primary,
//     },
//   };
//   return (
//     <View
//       style={{
//         paddingVertical: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <LineChart
//         // style={{paddingHorizontal: 10}}
//         yAxisSuffix=" kg"
//         data={data}
//         width={360}
//         height={200}
//         chartConfig={chartConfig}
//       />
//     </View>
//   );
// };

const Calo = () => {
  const lineData = [
    {value: 200, label: 58},
    {value: 1500, label: 1},
    {value: 2000, label: 10},
    {value: 2300, label: 8},
    {value: 1900, label: 58},
  ];
  const lineData2 = [
    {value: 0},
    {value: 20},
    {value: 18},
    {value: 40},
    {value: 36},
    {value: 60},
    {value: 54},
    {value: 8},
  ];
  return (
    <View
      style={{
        // width: '100%',
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
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
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginBottom: 12,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Biểu đồ Calo
      </Text>

      <View
        style={{
          padding: 12,
        }}>
        <LineChart
          width={300}
          areaChart
          data={lineData}
          startFillColor="rgb(46, 217, 255)"
          startOpacity={0.8}
          endFillColor="rgb(203, 241, 250)"
          endOpacity={0.3}
          curved
          label
          dataPointsColor1="green"
          startFillColor1="green"
          isAnimated
          animationDuration={1200}
          showStrip
          maxValue={3000}
          rulesColor={COLORS.primary}
          yAxisTextStyle={{color: COLORS.black}}
        />
      </View>
    </View>
  );
};

export default Calo;
