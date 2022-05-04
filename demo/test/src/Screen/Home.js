import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Animated,
} from 'react-native';
import COLORS from '../Constraint/Color';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../Component/cpnHome/Header';
import Body from '../Component/cpnHome/Body';

const HEADER_HEIGHT = 330;

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />

      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView style={styles.body}>
        <Body heightHeader={HEADER_HEIGHT} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    height: HEADER_HEIGHT,
    width: '100%',
  },
  body: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    // backgroundColor: COLORS.white,
    // transform: 30,
    // backgroundColor: COLORS.percent,
  },
});

export default Home;
