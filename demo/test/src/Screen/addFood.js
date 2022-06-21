import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import COLORS from '../Constraint/Color';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

// export default class AddFood extends Component {
//     render() {
//         return (
//             <View style={styles.container}>

//                 <View style={styles.header}>
//                     <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}> Tạo món ăn mới</Text>
//                 </View>

//                 <View style={styles.body}>

//                     <Text style={{marginVertical: 5, color: COLORS.grey, fontSize: 14}}> Tên món ăn </Text>
//                     <View style={styles.inputContainer} >
//                         <Icon name='fast-food-outline' style={{fontSize: 22, marginRight: 5}} />
//                         <TextInput placeholder='Hãy nhập tên món ăn' placeholderTextColor={"#151624"} underlineColorAndroid='transparent' />
//                     </View>

//                     <TouchableOpacity style={styles.btnContainer}>
//                         <Icon name='add' size={20}/>
//                         <Text>Thêm thực phẩm</Text>
//                     </TouchableOpacity>

//                 </View>

//             </View>
//         )
//     }
// }

const AddFood = () => {
  return (
    //----------------new------------------
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.primary,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: COLORS.white,
          marginTop: 50,
        }}>
        Tạo mới món ăn
      </Text>
      <ScrollView
        style={{
          backgroundColor: COLORS.white,
          marginTop: 24,
          padding: 24,
        }}>
        <Text style={{color: COLORS.black, fontSize: 16, fontWeight: 'bold'}}>
          Nhập thông tin về món ăn
        </Text>
        <View
          style={{
            alignItems: 'center',
            padding: 8,
            width: '100%',
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
            <Text style={{fontSize: 16, color: COLORS.black}}>Tên móm mới</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
            />
          </View>
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
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>carbs</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
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
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text style={{fontSize: 16, color: COLORS.black}}>Chất đạm</Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
            />
          </View>
        </View>
        <Text style={{color: COLORS.black, fontSize: 16, fontWeight: 'bold'}}>
          Thành phần thực phẩm trong món ăn
        </Text>

        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12,
            marginTop: 32,
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
          <Text
            style={{fontSize: 18, color: COLORS.primary, fontWeight: 'bold'}}>
            + Thêm thực phẩm
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 16,
            borderRadius: 24,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
            Tạo món ăn mới
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    //---------------current---------------
    // <View style={{}}>
    //   <View style={styles.header}>
    //     <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
    //       Tạo món ăn mới
    //     </Text>
    //   </View>

    //   <View style={{width: '100%', height: '50%'}}>
    //     <Text
    //       style={{
    //         marginVertical: 5,
    //         color: COLORS.black,
    //         fontSize: 16,
    //         fontWeight: 'bold',
    //         marginBottom: 24,
    //       }}>
    //       Tên món ăn
    //     </Text>
    //     <View style={styles.inputContainer}>
    //       <Icon
    //         name="fast-food-outline"
    //         style={{fontSize: 22, marginRight: 5}}
    //       />
    //       <TextInput
    //         placeholder="Hãy nhập tên món ăn"
    //         placeholderTextColor={'#151624'}
    //         underlineColorAndroid="transparent"
    //       />
    //     </View>

    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: COLORS.primary,
    //         borderRadius: 12,
    //         padding: 12,
    //         width: 100,
    //       }}>
    //       <Icon name="add" size={20} />
    //       <Text>Thêm thực phẩm</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

export default AddFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#F2F2F2',
    flex: 0.8,
    paddingLeft: 15,
    paddingTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: 6,
    height: 55,
    paddingLeft: 10,
  },
  btnContainer: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
