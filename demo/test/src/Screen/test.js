import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import {connect, database} from '../FirebaseConfig';
import {ref, set, onValue} from 'firebase/database';

const Test = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const testConnect2 = (username, password) => {
    set(ref(database, 'users/' + username), {
      username: username,
      password: password,
    });
  };

  const starCountRef = ref(database, 'users/hello22');
  onValue(starCountRef, snapshot => {
    const data = snapshot.val();
    console.log('data', data.password);
    // updateStarCount(postElement, data);
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{width: 300, borderWidth: 3}}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={{width: 300, borderWidth: 3}}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => {
          testConnect2('today2', '1232'), setIsSignIn(true);
        }}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;
