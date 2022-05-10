import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import Pie from 'react-native-pie';
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {StackActions, useNavigation} from '@react-navigation/native';

const Chart = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
      }}>
      <Pie
        radius={120}
        innerRadius={115}
        sections={[
          {
            percentage: 25,
            color: COLORS.white,
          },
        ]}
        backgroundColor={COLORS.percent}
      />
      <View style={styles.gauge}>
        <Text style={{fontSize: 16, color: '#eee'}}> Mục tiêu hằng ngày </Text>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Text style={styles.gaugeText}> 500 </Text>
          <Text style={styles.gaugeText}> /</Text>
          <Text style={styles.gaugeText}> 2000 ml </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name="user" color="#eee" size={24} />
          <Text
            style={{
              fontSize: 45,
              color: '#eee',
              fontWeight: '100',
              marginHorizontal: 18,
              lineHeight: 50,
            }}>
            |
          </Text>
          <Ionicons name="sunny-sharp" color="#eee" size={32} />
        </View>
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Chart />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            width: 24,
            height: 24,
            borderRadius: 12,
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <EvilIcons
            // styles={{position: 'absolute', top: 0}}
            name="refresh"
            color={COLORS.primary}
            size={24}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            color: COLORS.white,
            fontWeight: 'bold',
          }}>
          Cốc
        </Text>
      </View>

      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor: COLORS.white,
          borderRadius: 20,
          marginTop: 18,
        }}>
        <Text style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
          +400 ml
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ItemWater = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginVertical: 8,
        backgroundColor: COLORS.white,
        borderRadius: 28,
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <Image
        style={{
          resizeMode: 'stretch',
          height: 35,
          width: 45,
        }}
        source={require('../../../Image/cup_water_full.png')}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 16}}>400 ml</Text>
        <Text style={{fontSize: 16}}>09:14</Text>
      </View>

      <View
        style={{
          // padding: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          with: 28,
          height: 28,
          borderRadius: 100,
          backgroundColor: COLORS.grey_background,
        }}>
        <Ionicons
          // styles={{position: 'absolute', top: 0}}
          name="close"
          color={COLORS.grey}
          size={20}
        />
      </View>
    </View>
  );
};

const ListWater = () => {
  return (
    <View
      style={{
        marginTop: 14,
        paddingTop: 14,
        paddingHorizontal: 12,
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Lịch sử</Text>
      <ScrollView style={{marginTop: 10}}>
        <ItemWater />
        <ItemWater />
        <ItemWater />
        <ItemWater />
        <ItemWater />
      </ScrollView>
    </View>
  );
};

const ControlWater = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      {/* button Back */}
      <View style={{marginTop: 30, marginHorizontal: 15}}>
        <TouchableOpacity
          style={{
            width: 'auto',
            padding: 5,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
          }}>
          <MaterialIcons name="arrow-back" color="#eee" size={28} />
        </TouchableOpacity>
      </View>
      {/* phan bieu do nuoc */}
      <Header />
      <ListWater />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    // width: 90,
    // height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    paddingBottom: 4,
  },
});

export default ControlWater;
