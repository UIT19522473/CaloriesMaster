import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import GoogleSignInButton from '../Component/cpnLogin/Body/GoogleSignInButton';
import FacebookSignInButton from '../Component/cpnLogin/Body/FacebookSignInButton';
import EmailSignInButton from '../Component/cpnLogin/Body/EmailSignInButton';
import background_image from '../Image/background_login.png';

import {useDispatch} from 'react-redux';
import {userLogin} from '../Redux/actions/userAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const login = name => dispatch(userLogin(name));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background_image}
        resizeMode="cover"
        style={styles.image}>
        <EmailSignInButton text="Đăng nhập bằng Email"></EmailSignInButton>
        <GoogleSignInButton
          text="Đăng nhập bằng Google"
          style={styles.signInButton}></GoogleSignInButton>
        <FacebookSignInButton text="Đăng nhập bằng Facebook"></FacebookSignInButton>
      </ImageBackground>

      <Button
        title="MainPage >>"
        onPress={() => {
          login('demo1');
          navigation.navigate('MainBottomTab');
        }}></Button>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 12,
        }}
        onPress={() => {
          navigation.navigate('BMR');
        }}>
        <Text>{'BMR >>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {},
});

export default Login;
