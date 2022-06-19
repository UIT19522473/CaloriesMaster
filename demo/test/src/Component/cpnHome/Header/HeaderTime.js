import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../Constraint/Color';
import DateTimePicker from '@react-native-community/datetimepicker';

const HeaderTime = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  console.log(show);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  // const showMode = currentMode => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showCalendar = () => {
  //   setShow(true);
  //   setMode('date');
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  return (
    <View style={styles.header__time}>
      <Text style={styles.header__time__text}>Hôm nay</Text>
      <View>
        <View style={styles.header__time__cal}>
          <Icon name="angle-left" color="#eee" size={24} />
          <View style={styles.header__time__cal__date}>
            <Icon
              onPress={() => setShow(true)}
              style={styles.header__time__cal__icon}
              name="calendar-o"
              color="#eee"
              size={20}
            />
            <Text style={styles.header__time__cal__text}>sss</Text>
          </View>
          <Icon name="angle-right" color="#eee" size={24} />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        {/* <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log('here')}
          style={{
            backgroundColor: '#00000099',
            // flex: 1,
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Click</Text>
        </TouchableOpacity> */}
        {/* {show ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        ) : (
          <></>
        )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    width: '100%',
    // marginTop: 12,
  },
  header__time: {
    color: COLORS.white,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // ---
    // position: 'absolute',
    // zIndex: 1000,
    // elevation: 1000,
    // left: 0,
    // right: 0,
    // top: 0,
  },
  header__time__text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.white,
  },
  header__time__cal: {
    flexDirection: 'row',
  },
  header__time__cal__date: {
    flexDirection: 'row',
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header__time__cal__icon: {
    paddingRight: 16,
  },
  header__time__cal__text: {
    color: COLORS.white,
    fontSize: 18,
  },
});

export default HeaderTime;
