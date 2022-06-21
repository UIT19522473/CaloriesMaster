import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import FoodCard from './FoodCard';
import SearchMaterial from '../Header/SearchMaterial';
import COLORS from '../../../Constraint/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {connect, database} from '../../../FirebaseConfig';
import {ref, set, push, remove, onValue} from 'firebase/database';
import {useState} from 'react';
import {useEffect} from 'react';

const MtrItem = ({name, value, calo, user}) => {
  console.log(user);
  return (
    <View
      style={{
        width: '98%',
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //shadow
        paddingHorizontal: 16,
        paddingVertical: 12,
        margin: 4,
        backgroundColor: COLORS.white,
        borderRadius: 24,
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
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: COLORS.black,
            marginBottom: 2,
          }}>
          {name}
        </Text>
        <Text>
          {value}g - {calo} calo
        </Text>
      </View>
      <TouchableOpacity
        style={{
          // paddingVertical: 1,
          // paddingHorizontal: 8,
          // backgroundColor: COLORS.silver,
          // borderRadius: 100,
          justifyContent: 'center',
        }}>
        <Ionicons
          style={{padding: 4, borderRadius: 20, backgroundColor: COLORS.silver}}
          name="add"
          size={22}
        />
      </TouchableOpacity>
    </View>
  );
};

const MaterialList = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.userReducer);
  console.log(user);

  const [listdata, setListdata] = useState([]);
  //load data
  useEffect(() => {
    const starCountRef = ref(database, 'users/' + user + '/ThucPham');
    onValue(starCountRef, snapshot => {
      // const data = snapshot.val();
      let arr = [];
      snapshot.forEach(function (child) {
        var childData = child.val();
        arr.push({
          key: child.key,
          cBeo: childData.cBeo,
          cDam: childData.cDam,
          carbs: childData.carbs,
          kcal: childData.kcal,
          kluong: childData.kluong,
          tenTP: childData.tenTP,
        });
        // console.log(childData);
      });
      setListdata(arr);
      // console.log(data.valueOf());
    });
  }, []);
  // console.log(listdata);
  // console.log(listdata.length);
  // console.log(user);
  return (
    <View style={styles.container}>
      <SearchMaterial />

      <View
        style={{
          width: '90%',
          height: '90%',
          margin: 20,

          //shadow
          paddingHorizontal: 8,
          paddingVertical: 12,
          marginHorizontal: 24,
          // marginVertical: 24,
          backgroundColor: COLORS.white,
          borderRadius: 12,
          // height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}>
        <ScrollView style={{width: '100%', padding: 8}}>
          {listdata.map(item => {
            return (
              <MtrItem
                key={item.key}
                name={item.tenTP}
                value={item.kluong}
                calo={item.kcal}
                user={user}
              />
            );
          })}

          {/* <MtrItem />
          <MtrItem /> */}
        </ScrollView>
      </View>
      {/* <FoodCard
          foodTitle="Bông Artiso"
          rationValue="2"
          rationUnit="khẩu phần ăn"
          foodCal="565.0"
        /> */}
    </View>
  );
};

export default MaterialList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 70,
  },
});
