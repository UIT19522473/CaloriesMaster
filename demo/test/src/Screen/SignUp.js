import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import InputField from '../Component/cpnSignIn/Body/InputField';
import {auth} from '../FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {database} from '../FirebaseConfig';
import {ref, set} from 'firebase/database';
import COLORS from '../Constraint/Color';
import SignInHeader from '../Component/cpnSignIn/Header/SignInHeader';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

const SignUp = props => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const resigterUser = () => {
    let tempEmail = '';
    if (password === rePassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(re => {
          for (var i = 0; i < email.length; i++) {
            if (email[i] === '@') {
              tempEmail = email.substring(0, i);
            }
          }
          set(ref(database, 'users/' + tempEmail), {
            username: tempEmail,
            password: password,
          });
          console.log(re);
        })
        .catch(re => {
          console.log(re);
        });
    } else {
      console.log('Loi roi');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SignInHeader titleHeader="Đăng kí Email " />
      </View>
      <View style={styles.body}>
        <InputField
          placeholder="Nhập email bạn muốn đăng kí"
          icon={'email-outline'}
          onChangeText={text => setEmail(text)}
        />

        <InputField
          placeholder="Nhập mật khẩu "
          icon={'lock-outline'}
          onChangeText={text => setPassword(text)}
        />

        <InputField
          placeholder="Xác thực lại mật khẩu"
          icon={'lock-outline'}
          onChangeText={text => setRePassword(text)}
        />

        <TouchableOpacity style={styles.registerBtn} onPress={resigterUser}>
          <Text style={{color: 'white'}}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
  registerBtn: {
    backgroundColor: COLORS.primary,
    width: '50%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
});
