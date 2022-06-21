import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';

import COLORS from '../Constraint/Color';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect, database} from '../FirebaseConfig';
import {ref, set, push, remove, onValue} from 'firebase/database';

import {StackActions, useNavigation} from '@react-navigation/native';

import {useSelector} from 'react-redux';

const AddMaterial = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.userReducer);

  const [tenTP, setTenTP] = useState('');
  const [kluong, setKLuong] = useState('');
  const [kcal, setKcal] = useState('');
  const [cBeo, setCBeo] = useState('');
  const [carbs, setCarbs] = useState('');
  const [cDam, setCDam] = useState('');

  const addData = () => {
    set(push(ref(database, 'users/' + user + '/ThucPham')), {
      tenTP: tenTP,
      kluong: kluong,
      kcal: kcal,
      cBeo: cBeo,
      carbs: carbs,
      cDam: cDam,
    });

    Alert.alert('Thêm thực phẩm', 'Bạn đã thêm thực phẩm thành công', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.dispatch(StackActions.pop(1))},
    ]);
    // console.log('thanh công');
  };
  // console.log(user);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      {/* button Back */}

      <View
        style={{
          marginTop: 50,
          marginHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 'auto',
            padding: 5,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.pop());
          }}>
          <MaterialIcons name="arrow-back" color="#eee" size={28} />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 24,
            fontSize: 20,
            color: COLORS.white,
            fontWeight: 'bold',
          }}>
          Tạo thục phẩm mới
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.white,
          padding: 16,
          marginTop: 24,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
          Thông tin cơ bản
        </Text>
        {/* tên thực phẩm */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 8,
            //new
            marginVertical: 24,
            backgroundColor: COLORS.white,
            borderRadius: 12,
            // height: 70,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <Text style={{fontSize: 16, color: COLORS.black}}>
            Tên của thực phẩm
          </Text>
          <TextInput
            placeholder="bắt buộc"
            style={{borderBottomWidth: 1, width: 120}}
            value={tenTP}
            onChangeText={text => setTenTP(text)}
          />
        </View>
        {/* Khẩu phần ăn */}
        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: 'bold'}}>
          Khẩu phần ăn
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 8,
            //new
            marginVertical: 24,
            backgroundColor: COLORS.white,
            borderRadius: 12,
            // height: 70,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <Text style={{fontSize: 16, color: COLORS.black}}>
            Khối lượng (g)
          </Text>
          <TextInput
            placeholder="bắt buộc"
            style={{borderBottomWidth: 1, width: 120}}
            value={kluong}
            onChangeText={text => setKLuong(text)}
          />
        </View>
        {/* Thông tin dinh dưỡng */}
        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: 'bold'}}>
          Thông tin dinh dưỡng
        </Text>
        <View
          style={{
            alignItems: 'center',

            padding: 8,
            //new
            marginVertical: 24,
            backgroundColor: COLORS.white,
            borderRadius: 12,
            // height: 70,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>Kcal</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
              value={kcal}
              onChangeText={text => setKcal(text)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>Chất béo</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
              value={cBeo}
              onChangeText={text => setCBeo(text)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>Carbs</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
              value={carbs}
              onChangeText={text => setCarbs(text)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: 12,
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>Chất đạm</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
              value={cDam}
              onChangeText={text => setCDam(text)}
            />
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center', marginTop: 12}}>
          <TouchableOpacity
            onPress={() => addData()}
            style={{
              backgroundColor: COLORS.primary,
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 24,
            }}>
            <Text
              style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
              Thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddMaterial;
