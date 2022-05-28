import React from 'react';
import {View, Button, Text, StyleSheet, ImageBackground} from 'react-native';

import GoogleSignInButton from '../Component/cpnLogin/Body/GoogleSignInButton';
import FacebookSignInButton from '../Component/cpnLogin/Body/FacebookSignInButton'
import EmailSignInButton from '../Component/cpnLogin/Body/EmailSignInButton'
import background_image from '../Image/background_login.png';


const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background_image} resizeMode="cover" style={styles.image}>
          <EmailSignInButton text = "Đăng nhập bằng Email"></EmailSignInButton>
          <GoogleSignInButton text = "Đăng nhập bằng Google" style = {styles.signInButton}></GoogleSignInButton>
          <FacebookSignInButton text = "Đăng nhập bằng Facebook" ></FacebookSignInButton>
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
    justifyContent: "center",
    alignItems: "center"
  },
  signInButton: {
  }
});



export default Login;
// onPress={() => {
//   navigation.navigate('MainBottomTab');
// }}