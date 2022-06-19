import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import COLORS from '../Constraint/Color';

import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import {connect, database} from '../FirebaseConfig';
import {ref, set, push, remove, onValue} from 'firebase/database';

import {removeValueTest} from './TestFunction';

const Item = ({userName, Pass}) => {
  return (
    <View style={{width: 200, padding: 12, backgroundColor: COLORS.primary}}>
      <Text>{userName}</Text>
      <Text>{Pass}</Text>
    </View>
  );
};

const Test = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [listdata, setListdata] = useState([]);

  const arrTest = [
    {
      user: '2',
      pass: '12',
    },
    {
      user: '22',
      pass: '125',
    },
    {
      user: '72',
      pass: '121',
    },
  ];

  arrTest.map(item => {
    console.log(item.pass);
  });
  // let data = [];
  useEffect(() => {
    const starCountRef = ref(database, 'users');
    onValue(starCountRef, snapshot => {
      // const data = snapshot.val();

      let arr = [];
      snapshot.forEach(function (child) {
        var childData = child.val();
        arr.push({
          key: child.key,
          idName: childData.idName,
          pass: childData.passW,
        });
        // console.log(childData);
      });
      setListdata(arr);
      // console.log(data.valueOf());
    });
  }, []);
  console.log(listdata);

  const removeValue = () => {
    const dltData = ref(database, 'users');
    remove(dltData);
    console.log('remove');
  };
  // let data = [];

  // useEffect(() => {
  //   //load data
  //   const starCountRef = ref(database, 'users');
  //   onValue(starCountRef, snapshot => {
  //     data = snapshot.val();
  //     // console.log('data', data.val());
  //     // updateStarCount(postElement, data);
  //   });
  // }, []);

  const addData = (id, pass) => {
    set(push(ref(database, 'users')), {
      idName: id,
      passW: pass,
    });
  };

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

      {listdata.map((item, index) => (
        <Item key={index} userName={item.idName} Pass={item.pass} />
      ))}
      {/* <Text>1</Text> */}

      <Text>{arrTest[0].user}</Text>
      <TouchableOpacity
        onPress={() => {
          addData(username, password);
        }}>
        <Text>Thêm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          removeValueTest('users/id1');
        }}>
        <Text>Xóa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          removeValue();
        }}>
        <Text>Sửa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;
