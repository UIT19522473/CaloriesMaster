import {View, Text} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import COLORS from '../../Constraint/Color';

const Vitamin = () => {
  const renderLegend = (text, color, value) => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginBottom: 2}}>
          <View
            style={{
              height: 18,
              width: 18,
              marginRight: 10,
              borderRadius: 4,
              backgroundColor: color || 'white',
            }}
          />
          <Text style={{color: COLORS.black, fontSize: 16, fontWeight: 'bold'}}>
            {text || ''}
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 16,
            marginLeft: 'auto',
            fontWeight: 'bold',
          }}>
          {value || ''}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        marginVertical: 20,
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
      {/*********************    Custom Header component      ********************/}
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: COLORS.black,
        }}>
        Biểu đồ dinh dinh dưỡng
      </Text>
      {/****************************************************************************/}

      <View
        style={{
          // backgroundColor: COLORS.black,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 12,
          marginLeft: 24,
        }}>
        <PieChart
          strokeColor="white"
          // strokeWidth={2}
          radius={124}
          // innerRadius={115}
          donut
          data={[
            {key: 1, value: 30, color: 'rgb(84,219,234)'},
            {key: 2, value: 40, color: 'lightgreen'},
            {key: 3, value: 20, color: 'orange'},
          ]}
          innerCircleColor="#414141"
          innerCircleBorderWidth={2}
          innerCircleBorderColor={'white'}
          showValuesAsLabels={true}
          showText
          textSize={18}
          showTextBackground={true}
          centerLabelComponent={() => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 36}}>1300</Text>
                <Text style={{color: 'white', fontSize: 18}}>Kcal</Text>
              </View>
            );
          }}
        />
      </View>

      {/*********************    Custom Legend component      ********************/}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 12,
        }}>
        {renderLegend('Carbs', 'rgb(84,219,234)', '1000')}
        {renderLegend('Chất đạm', 'lightgreen', 200)}
        {renderLegend('Chất béo', 'orange', 100)}
      </View>
      {/****************************************************************************/}
    </View>
  );
};

export default Vitamin;
