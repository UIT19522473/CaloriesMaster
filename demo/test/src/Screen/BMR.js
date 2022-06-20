import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../Constraint/Color';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import {database} from '../FirebaseConfig';
import {set, push, ref} from 'firebase/database';
import {StackActions, useNavigation} from '@react-navigation/native';

const Submit = (phut, ngay, sex, height, weight, age) => {
  set(ref(database, 'users/tuan/BMR/'), {
    phut: phut,
    ngay: ngay,
    sex: sex,
    height: height,
    weight: weight,
    age: age,
  });
};

const BMR = () => {
  const [phut, setPhut] = useState('');
  const [ngay, setNgay] = useState('');
  const [sex, setSex] = useState('nam');
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(18);
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: COLORS.primary,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            {'Chỉ số trao đổi chất (BMR)'}
          </Text>
        </View>

        <VanDong phut={phut} setPhut={setPhut} ngay={ngay} setNgay={setNgay} />
        <ChiTiet
          sex={sex}
          setSex={setSex}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          age={age}
          setAge={setAge}
        />

        <TouchableOpacity
          onPress={() => {
            // Submit(phut, ngay, sex, height, weight, age),
            navigation.navigate(
              'Target',
              {
                phut: phut,
                ngay: ngay,
                sex: sex,
                height: height,
                weight: weight,
                age: age,
              },
              //here
            );
          }}
          style={{
            position: 'absolute',
            bottom: -12,
            marginBottom: 20,
            paddingHorizontal: 40,
            paddingVertical: 15,
            backgroundColor: COLORS.primary,
            borderRadius: 30,
          }}>
          <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default BMR;

const VanDong = props => {
  return (
    <View
      style={{
        width: '90%',
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        position: 'absolute',
        top: 80,
        //shadow

        marginVertical: 24,
        backgroundColor: COLORS.white,
        borderRadius: 24,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: COLORS.black,
          marginBottom: 18,
          fontWeight: '600',
        }}>
        Bạn vận động như thế nào?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <TextInput
          style={{borderBottomWidth: 1, width: 160}}
          placeholder="Số phút/ngày"
          value={props.phut}
          onChangeText={text => props.setPhut(text)}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: COLORS.black,
            paddingTop: 16,
          }}>
          phút
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 30,
          marginTop: 12,
        }}>
        <TextInput
          style={{borderBottomWidth: 1, width: 160}}
          placeholder="Số ngày/tuần"
          value={props.ngay}
          onChangeText={text => props.setNgay(text)}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: COLORS.black,
            paddingTop: 16,
          }}>
          ngày
        </Text>
      </View>
    </View>
  );
};

const ChiTiet = props => {
  const upWeight = () => {
    props.setWeight(props.weight + 1);
  };

  const downWeight = () => {
    props.setWeight(props.weight - 1);
  };
  const upAge = () => {
    props.setAge(props.age + 1);
  };

  const downAge = () => {
    props.setAge(props.age - 1);
  };

  let bgSexNam = COLORS.silver;
  let colorTextNam = COLORS.black;

  let bgSexNu = COLORS.silver;
  let colorTextNu = COLORS.black;
  if (props.sex === 'nam') {
    colorTextNam = 'white';
    bgSexNam = 'tomato';
  }

  if (props.sex === 'nu') {
    colorTextNu = 'white';
    bgSexNu = 'tomato';
  }

  return (
    <View
      style={{
        marginTop: 220,
        width: '90%',
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        //shadow
        marginVertical: 24,
        borderRadius: 18,
        justifyContent: 'center',
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
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => props.setSex('nam')}
          style={{
            // backgroundColor: 'tomato',
            backgroundColor: `${bgSexNam}`,
            paddingHorizontal: 30,
            paddingVertical: 12,
            borderRadius: 12,
          }}>
          <Foundation color={`${colorTextNam}`} name="male-symbol" size={60} />
          <Text
            style={{
              textAlign: 'center',
              color: `${colorTextNam}`,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Nam
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setSex('nu')}
          style={{
            backgroundColor: `${bgSexNu}`,
            paddingHorizontal: 34,
            paddingVertical: 12,
            borderRadius: 12,
          }}>
          <Foundation color={`${colorTextNu}`} name="female-symbol" size={60} />
          <Text
            style={{
              color: `${colorTextNu}`,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Nữ
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{width: '100%'}}>
        <Text
          style={{
            marginTop: 18,
            marginLeft: 12,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Chiều cao: cm
        </Text>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 12,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'tomato',
          }}>
          {props.height}
        </Text>
        <Slider
          width={'100%'}
          minimumValue={0}
          maximumValue={300}
          // minimumTrackTintColor="#FFFFFF"
          minimumTrackTintColor="tomato"
          maximumTrackImage="#000"
          thumbTintColor="tomato"
          step={1}
          value={props.height}
          onValueChange={value => props.setHeight(value)}
        />
      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          paddingHorizontal: 16,
        }}>
        {/* Cân nặng */}
        <View
          style={{
            borderRadius: 12,
            //shadow
            paddingVertical: 12,
            paddingHorizontal: 20,
            backgroundColor: COLORS.white,
            //shadow
            marginVertical: 24,
            backgroundColor: COLORS.white,
            borderRadius: 18,
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 4,
            }}>
            Cân nặng kg
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 4,
              color: 'tomato',
            }}>
            {props.weight}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // width: '100%',
              marginTop: 12,
              justifyContent: 'space-between',
            }}>
            {/* Trừ cân nặng*/}
            <TouchableOpacity onPress={downWeight}>
              <Feather color={COLORS.black} name="minus-circle" size={21} />
            </TouchableOpacity>
            {/* cộng cân nặng*/}
            <TouchableOpacity onPress={upWeight}>
              <Ionicons
                color={COLORS.black}
                name="add-circle-outline"
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tuổi */}
        <View
          style={{
            borderRadius: 12,
            //shadow
            paddingVertical: 12,
            paddingHorizontal: 20,
            backgroundColor: COLORS.white,
            //shadow
            marginVertical: 24,
            backgroundColor: COLORS.white,
            borderRadius: 18,
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 4,
              paddingHorizontal: 30,
            }}>
            Tuôi
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 4,
              color: 'tomato',
            }}>
            {props.age}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // width: '100%',
              marginTop: 12,
              justifyContent: 'space-between',
            }}>
            {/* Trừ tuổi */}
            <TouchableOpacity onPress={downAge}>
              <Feather color={COLORS.black} name="minus-circle" size={21} />
            </TouchableOpacity>
            {/* Cộng tuổi */}
            <TouchableOpacity onPress={upAge}>
              <Ionicons
                color={COLORS.black}
                name="add-circle-outline"
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
