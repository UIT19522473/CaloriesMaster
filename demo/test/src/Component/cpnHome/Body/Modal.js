import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../../Constraint/Color';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const ModalScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Modal
        hardwareAccelerated
        animationType="fade"
        transparent
        visible={props.modalWeight}
        onRequestClose={() => props.setModalWeight(false)}>
        <View
          // activeOpacity={1}
          // onPress={() => props.setModalWeight(false)}
          style={{
            // backgroundColor: '#00000099',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // paddingHorizontal: 12,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.setModalWeight(false)}
            style={{
              backgroundColor: '#00000099',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Text>hsahashsa</Text> */}
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              backgroundColor: '#00000099',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 8,
            }}>
            <View
              style={{
                paddingHorizontal: 36,
                backgroundColor: COLORS.white,
                width: '100%',
                borderRadius: 12,
                paddingVertical: 12,
                alignItems: 'center',
                marginHorizontal: 100,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: 'bold',
                }}>
                Theo d??i c??n n???ng
              </Text>
              <View
                style={{
                  marginVertical: 24,
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.silver,
                    // padding: 4,
                    borderRadius: 50,
                    height: 26,
                    width: 26,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Feather name="minus" color={COLORS.grey} size={20}></Feather>
                </View>

                <Text style={{fontSize: 24, fontWeight: 'bold'}}>70 kg</Text>
                <View
                  style={{
                    backgroundColor: COLORS.silver,
                    // padding: 4,
                    borderRadius: 50,
                    height: 26,
                    width: 26,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Feather name="plus" color={COLORS.grey} size={20}></Feather>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: 18,
                  marginTop: 12,
                }}>
                <TouchableOpacity
                  style={{
                    borderColor: 'orange',
                    borderWidth: 1,
                    borderRadius: 15,
                    paddingHorizontal: 30,
                    paddingVertical: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'orange',
                    }}>
                    B??? qua
                  </Text>
                </TouchableOpacity>

                <LinearGradient
                  style={{borderRadius: 15}}
                  start={{x: 0.2, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                  colors={['orange', 'red']}>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 30,
                      paddingVertical: 8,
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        color: COLORS.white,
                        fontWeight: 'bold',
                        fontSize: 17,
                      }}>
                      C???p nh???t
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.setModalWeight(false)}
            style={{
              backgroundColor: '#00000099',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

/*

 <LinearGradient
          style={{borderRadius: 15, marginTop: 20}}
          start={{x: 0.2, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={['orange', 'red']}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 24,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                alignItems: 'center',
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              Th??m v??o nh???t k??
            </Text>
          </TouchableOpacity>
        </LinearGradient>

*/

export default ModalScreen;
