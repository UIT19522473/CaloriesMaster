import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
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
        paddingVertical: 20,
      }}>
      <Pie
        radius={140}
        innerRadius={134}
        sections={[
          {
            percentage: 25,
            color: COLORS.white,
          },
        ]}
        backgroundColor={COLORS.percent}
      />
      <View style={styles.gauge}>
        <Text style={{fontSize: 16, color: '#eee'}}>Mục tiêu hằng ngày</Text>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Text style={styles.gaugeText}>500</Text>
          <Text style={styles.gaugeText}>/</Text>
          <Text style={styles.gaugeText}>2000ml</Text>
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

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,

            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <EvilIcons name="refresh" color={COLORS.primary} size={32} />
        </TouchableOpacity>

        <Text>Cốc</Text>
      </View>
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
