import React from 'react';
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
import CardBMI from '../Component/cpnInfo/Body/CardBMI';
import CardWater from '../Component/cpnInfo/Body/CardWater';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';

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

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.white}}>
            Thông tin
          </Text>
          <View
            style={{
              marginLeft: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Fontisto
              // onPress={handleShowModalWeight}
              name="player-settings"
              color={COLORS.white}
              size={24}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.white,
                marginTop: 4,
              }}>
              Cài đặt
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// const CardBMI = () => {
//   return (
//     <View
//       style={{
//         flexDirection: 'column',
//         width: '100%',
//         marginTop: 100,
//         // height: 120,
//         flexDirection: 'column',
//         // backgroundColor: COLORS.grey,
//       }}>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//           paddingHorizontal: 12,
//           paddingVertical: 4,
//         }}>
//         <Text style={{color: COLORS.black, fontSize: 16}}>
//           Chỉ số khối cơ thể (BMI)
//         </Text>
//         <MaterialCommunityIcons name="dots-horizontal" size={26} />
//       </View>
//       <View style={{width: '100%', backfaceVisibility: COLORS.black}}>
//         {/* BMI */}
//         <View
//           style={{
//             width: '100%',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: 24,
//           }}>
//           <View style={{alignItems: 'center'}}>
//             <Text
//               style={{
//                 fontSize: 22,
//                 marginBottom: 4,
//                 fontWeight: 'bold',
//                 color: COLORS.black,
//               }}>
//               BMI
//             </Text>
//             <Text style={{fontSize: 22, fontWeight: 'bold', color: 'red'}}>
//               23.2
//             </Text>
//           </View>
//           <View style={{alignItems: 'center'}}>
//             <Text style={{fontSize: 18}}>22-06-13 06:44</Text>
//             <Text
//               style={{
//                 fontSize: 16,
//                 color: 'orange',
//                 marginTop: 2,
//                 fontWeight: '600',
//               }}>
//               Cập nhật cân nặng
//             </Text>
//           </View>
//         </View>
//         {/*Chiều cao  */}
//         <View>
//           <Text>2</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const Info = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Header />
      <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
        <CardBMI />
        <CardWater />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Energy');
        }}
        style={{
          position: 'absolute',
          bottom: 28,
          right: 28,
          paddingHorizontal: 18,
          paddingVertical: 12,
          backgroundColor: COLORS.primary,
          borderRadius: 30,
        }}>
        <Fontisto name="flash" size={32} color="yellow" />
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

export default Info;
