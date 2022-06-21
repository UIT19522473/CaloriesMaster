import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import SignInHeader from '../Component/cpnSignIn/Header/SignInHeader';
import InputField from '../Component/cpnSignIn/Body/InputField';
import {useNavigation} from '@react-navigation/native';
import {auth} from '../FirebaseConfig';
import COLORS from '../Constraint/Color';
import {Icon} from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {useDispatch} from 'react-redux';
import {userLogin} from '../Redux/actions/userAction';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {database} from '../FirebaseConfig';
import {useState} from 'react';

// component ne m------------------
const SignIn = props => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const navigation = useNavigation();
  //luu tai khoan
  const dispatch = useDispatch();
  const sendUser = name => dispatch(userLogin(name));

  //   const addData = (email, passWord) => {
  //     signIn(email, passWord);

  //   };

  let tempEmail = [];

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        // const userName = userCredential.user;
        // console.log(userName);
        // ...
        for (var i = 0; i < email.length; i++) {
          if (email[i] === '@') {
            tempEmail = email.substring(0, i);
          }
        }
        // console.log(tempEmail);
        sendUser(tempEmail);
        navigation.navigate('BMR');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SignInHeader titleHeader="Đăng nhập với Email" />
      </View>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: COLORS.primary,
            width: 315,
            marginBottom: 12,
          }}>
          <Fontisto name="email" size={16} />
          <TextInput
            style={{marginLeft: 8, fontSize: 16}}
            placeholder="Nhập vào Email"
            icon={'email-outline'}
            value={userName}
            onChangeText={text => setUserName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            borderWidth: 1,
            borderColor: COLORS.primary,
            width: 315,
            marginBottom: 12,
          }}>
          <EvilIcons name="lock" size={26} />
          <TextInput
            style={{marginLeft: 2, fontSize: 16}}
            placeholder="Nhập vào mật khẩu"
            icon={'email-outline'}
            value={passWord}
            onChangeText={text => setPassWord(text)}
          />
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text>Bạn chưa có tài khoản? Đăng ký ngay </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => signIn(userName, passWord)}
          style={styles.signInButton}>
          <Text style={{color: 'white'}}>Đăng nhập </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
  },
  body: {
    paddingVertical: 20,
    flex: 0.8,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signInButton: {
    backgroundColor: COLORS.primary,
    width: '50%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
});
