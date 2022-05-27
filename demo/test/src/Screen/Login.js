import React from 'react';
import {View, Button, Text, StyleSheet, ImageBackground} from 'react-native';
import SignInButton from '../Component/cpnLogin/Body/SignInButton';


import background_image from '../Image/background_login.png';


const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background_image} resizeMode="cover" style={styles.image}>
          <SignInButton></SignInButton>
      </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});


export default Login;
// onPress={() => {
//   navigation.navigate('MainBottomTab');
// }}