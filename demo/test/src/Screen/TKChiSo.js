import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  black,
  orange500,
} from 'react-native-paper/lib/typescript/styles/colors';
import COLORS from '../Constraint/Color';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ScrollView} from 'react-native-gesture-handler';
// import BodyInfo from '../Component/cpnInfo/Body';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardBMITK from '../Component/cpnTkChiSo/CarBMITK';
import CardWaterTK from '../Component/cpnTkChiSo/CardWaterTK';
import CardTDEE from '../Component/cpnTkChiSo/CardTDEE';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';

import {database} from '../FirebaseConfig';
import {set, push, ref} from 'firebase/database';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        position: 'absolute',
        backgroundColor: COLORS.primary,
        top: 0,
        zIndex: 3, // works on ios
        elevation: 1000, // works on android
        // right: 0,
      }}>
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 24,
          paddingTop: 38,
          paddingBottom: 12,
        }}>
        <StatusBar translucent backgroundColor={COLORS.transparent} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 18,
            paddingBottom: 8,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
            Thống Kê Chỉ Số
          </Text>
        </View>
      </View>
    </View>
  );
};

const TKChiSo = ({route}) => {
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(new Date());

  // const [textDate, setTextDate] = useState(
  //   date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
  // );
  const dateValue =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  const Key =
    date.getDate() + '' + (date.getMonth() + 1) + '' + date.getFullYear();

  const target = route.params.target;
  const age = route.params.age;
  const height = route.params.height;
  const ngay = route.params.ngay;
  const phut = route.params.phut;
  const sex = route.params.sex;
  const weight = route.params.weight;

  //tinh BMI
  const BMI = Math.round((weight / ((height * height) / 10000)) * 100) / 100;

  //tinh TDEE va BMR
  let R = 1.2;

  if (ngay <= 3 && ngay > 2) {
    R = 1.375;
  }
  if (ngay <= 5 && ngay >= 4) {
    R = 1.55;
  }
  if (ngay >= 6) {
    R = 1.725;
  }
  const K = sex === 'nam' ? 5 : -1.65;

  const BMR = 9.99 * weight + 6.25 * height - 4.92 * age - K;
  const TDEE = Math.round(R * BMR);

  const navigation = useNavigation();
  // console.log('TKChiSo', route.params);
  // console.log(BMR);
  // console.log('TDEE', TDEE);
  // console.log('BMI', BMI);

  let sumCalo = TDEE - 500;

  if (target === 2) {
    sumCalo = TDEE;
  }
  if (target === 3) {
    sumCalo = TDEE + 500;
  }

  //add BMR
  const addBMR = () => {
    set(ref(database, 'users/demo1/BMR/'), {
      phut: phut,
      ngay: ngay,
      sex: sex,
      height: height,
      weight: weight,
      age: age,
    });
  };
  //add macroVitamin
  const addMacroVitamin = () => {
    set(ref(database, 'users/demo1/MacroVitamin/'), {
      Calo: sumCalo,
      Carbs: 0.4,
      ChatBeo: 0.3,
      ChatDam: 0.3,
    });
  };
  //add CanNang
  const addWeight = () => {
    set(ref(database, 'users/demo1/CanNang/' + Key), {
      Time: dateValue,
      Value: weight,
    });
  };

  //add data to home screen
  const addHome = () => {
    console.log('addHome');
    // key theo thời gian
    set(ref(database, 'users/demo1/Home/' + Key), {
      Time: dateValue,
    });
    // add cân nặng hiện tại
    set(ref(database, 'users/demo1/Home/' + Key + '/CanNang'), {
      Value: weight,
    });
    //add Calories phần màu xanh
    set(ref(database, 'users/demo1/Home/' + Key + '/Calories'), {
      CanNap: sumCalo,
      Carbs: 0,
      ChatBeo: 0,
      ChatDam: 0,
      DaNap: 0,
      TieuHao: 0,
    });
    //add Water
    set(ref(database, 'users/demo1/Home/' + Key + '/Water'), {
      DaUong: 0,
    });
  };

  const addData = () => {
    addBMR();
    addMacroVitamin();
    addWeight();

    //data home Screen
    addHome();
  };

  return (
    <View style={styles.center}>
      <Header />
      <ScrollView
        style={{
          marginTop: 18,
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        <CardTDEE TDEE={TDEE} target={target} />
        <CardBMITK
          BMI={BMI}
          height={height}
          weight={weight}
          dateValue={dateValue}
        />
        <CardWaterTK />
      </ScrollView>
      <TouchableOpacity
        // onPress={() => navigation.navigate('MainBottomTab')}
        onPress={() => addData()}
        style={{
          position: 'absolute',
          bottom: 12,
          left: '35%',
        }}>
        <Text
          style={{
            paddingHorizontal: 32,
            paddingVertical: 16,
            backgroundColor: COLORS.primary,
            color: COLORS.white,
            fontSize: 18,
            fontWeight: 'bold',
            borderRadius: 30,
          }}>
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: COLORS.primary,
  },
});

export default TKChiSo;
