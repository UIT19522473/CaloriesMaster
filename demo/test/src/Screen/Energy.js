import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Pie from 'react-native-pie';
import COLORS from '../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import {StackActions, useNavigation} from '@react-navigation/native';
import BodyEnergy from '../Component/cpnEnergy';
import DropDownPicker from 'react-native-dropdown-picker';

const Header = () => {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Ngày');
  const [items, setItems] = useState([
    {label: 'Ngày', value: 'day'},
    {label: 'Tuần', value: 'week'},
    {label: 'Năm', value: 'year'},
  ]);
  // console.log(value);

  return (
    <View
      style={{
        marginTop: 36,
        marginHorizontal: 15,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {/* button Back */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 'auto',
            padding: 5,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));
          }}>
          <MaterialIcons name="arrow-back" color="#eee" size={28} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.white,
            marginLeft: 18,
          }}>
          Thống kê
        </Text>
      </View>
      <View>
        <DropDownPicker
          placeholder="chọn "
          style={{
            backgroundColor: COLORS.primary,
            width: 120,
            borderRadius: 24,
            borderColor: COLORS.white,
            paddingHorizontal: 18,

            // height: 20,
          }}
          textStyle={{
            fontSize: 15,
            color: COLORS.black,
            // backgroundColor: COLORS.primary,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
};

const Energy = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Header />
      <BodyEnergy />
    </SafeAreaView>
  );
};
export default Energy;
