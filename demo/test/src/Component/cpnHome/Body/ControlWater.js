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
import COLORS from '../../../Constraint/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Checkbox} from 'react-native-paper';

import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import {StackActions, useNavigation} from '@react-navigation/native';

const LinePractice = props => {
  // source image tap luyen
  let it = '../../../Image/It.png';
  let trung_binh = '../../../Image/TrungBinh.png';
  let cao = '../../../Image/Cao.png';
  let rat_cao = '../../../Image/RatCao.png';
  // source image thoi tiet
  let nong = '../../../Image/Hot_Wether.png';
  let am = '../../../Image/Warm_Weather.png';
  let binh_thuong = '../../../Image/Normal_Weather.png';
  let lanh = '../../../Image/Cold_Weather.png';

  const choseImage = sw => {
    let path = '';
    switch (sw) {
      case 'IT':
        path = require(it);
        break;
      case 'TRUNG_BINH':
        path = require(trung_binh);
        break;
      case 'CAO':
        path = require(cao);
        break;
      case 'RAT_CAO':
        path = require(rat_cao);
        break;
      case 'HOT':
        path = require(nong);
        break;
      case 'WARM':
        path = require(am);
        break;
      case 'NORMAL':
        path = require(binh_thuong);
        break;
      case 'COLD':
        path = require(lanh);
        break;
      default:
        path = '';
    }
    return path;
  };

  return (
    <View style={{marginVertical: 8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              height: 24,
              width: 28,
              resizeMode: 'stretch',
              tintColor: COLORS.black,
            }}
            source={choseImage(props.path)}
            // source={require('../../../Image/It.png')}
          />
          <Text style={{fontSize: 18, paddingHorizontal: 10}}>
            {props.text}
          </Text>
        </View>
        <Text style={{fontSize: 18}}>+{props.value} ml</Text>
      </View>
    </View>
  );
};

const Chart = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const refRBSheetPractice = useRef();
  const refRBSheetWether = useRef();
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
      }}>
      <Pie
        radius={120}
        innerRadius={115}
        sections={[
          {
            percentage: 25,
            color: COLORS.white,
          },
        ]}
        backgroundColor={COLORS.percent}
      />
      <View style={styles.gauge}>
        <Text style={{fontSize: 16, color: '#eee'}}> Mục tiêu hằng ngày </Text>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Text style={styles.gaugeText}> 500 </Text>
          <Text style={styles.gaugeText}> /</Text>
          <Text style={styles.gaugeText}> 2000 ml </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="user"
            color="#eee"
            size={24}
            onPress={() => refRBSheetPractice.current.open()}></FontAwesome>
          <Text
            style={{
              fontSize: 45,
              color: '#eee',
              fontWeight: '100',
              marginHorizontal: 18,
              lineHeight: 50,
            }}>
            |
          </Text>
          <Ionicons
            name="sunny-sharp"
            color="#eee"
            size={32}
            onPress={() => refRBSheetWether.current.open()}
          />
        </View>
      </View>

      {/* RB sheet tập luyện */}
      <RBSheet
        ref={refRBSheetPractice}
        height={400}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {},
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.background,
            padding: 12,
            // alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18}}
              onPress={() => refRBSheetPractice.current.close()}>
              Cường độ luyện tập
            </Text>

            <TouchableOpacity
              onPress={() => refRBSheetPractice.current.close()}>
              <Ionicons
                // styles={{position: 'absolute', top: 0}}
                name="close"
                color={COLORS.grey}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 18,
            }}>
            <Text style={{fontSize: 18}}>Mặc định</Text>
            <Switch
              trackColor={{false: '#767577', true: COLORS.percent}}
              thumbColor={isEnabled ? COLORS.primary : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View>
            <LinePractice
              // bgColor={COLORS.black}
              path="IT"
              text="Ít"
              value="100"
            />
            <LinePractice path="TRUNG_BINH" text="Trung bình" value="200" />
            <LinePractice path="CAO" text="Cao" value="400" />
            <LinePractice path="RAT_CAO" text="Rất cao" value="600" />
          </View>

          <View style={{width: '100%', alignItems: 'center'}}>
            <LinearGradient
              style={{borderRadius: 15, marginTop: 20, width: '60%'}}
              start={{x: 0.2, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={['orange', 'red']}>
              <TouchableOpacity
                style={{
                  // alignSelf: 'flex-start',
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Lưu
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </RBSheet>

      {/* RB sheet thời tiết */}
      <RBSheet
        ref={refRBSheetWether}
        height={400}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {},
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.background,
            padding: 12,
            // alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18}}
              onPress={() => refRBSheetWether.current.close()}>
              Thời tiết
            </Text>

            <TouchableOpacity onPress={() => refRBSheetWether.current.close()}>
              <Ionicons
                // styles={{position: 'absolute', top: 0}}
                name="close"
                color={COLORS.grey}
                size={24}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 18,
            }}>
            <Text style={{fontSize: 18}}>Mặc định</Text>
            <Switch
              trackColor={{false: '#767577', true: COLORS.percent}}
              thumbColor={isEnabled ? COLORS.primary : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View>
            <LinePractice path="HOT" text="Nóng" value="600" />
            <LinePractice path="WARM" text="Ấm" value="300" />
            <LinePractice path="NORMAL" text="Bình thường" value="100" />
            <LinePractice path="COLD" text="Lạnh" value="200" />
          </View>

          <View style={{width: '100%', alignItems: 'center'}}>
            <LinearGradient
              style={{borderRadius: 15, marginTop: 20, width: '60%'}}
              start={{x: 0.2, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={['orange', 'red']}>
              <TouchableOpacity
                style={{
                  // alignSelf: 'flex-start',
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Lưu
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const ItemGlass = props => {
  const [checked, setChecked] = React.useState(false);

  // source image luong nuoc
  let li_nuoc = '../../../Image/cup_water_full.png';
  let chai_nuoc = '../../../Image/Chai_Nuoc.png';
  let tach_tra = '../../../Image/Tach_Tra.png';
  let demo = '../../../Image/demo.png';

  const choseImage = sw => {
    let path = '';
    switch (sw) {
      case 'LI_NUOC':
        path = require(li_nuoc);
        break;
      case 'CHAI_NUOC':
        path = require(chai_nuoc);
        break;
      case 'TACH_TRA':
        path = require(tach_tra);
        break;
      case 'DEMO':
        path = require(demo);
        break;
      default:
        path = '';
    }
    return path;
  };
  return (
    <TouchableOpacity
      onPress={() => {
        setChecked(!checked);
      }}
      style={{
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.grey,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0,
        elevation: 2,
      }}>
      <View style={{width: '100%'}}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>

      <View style={{height: 115, width: 115, padding: 8, alignItems: 'center'}}>
        <Image
          style={{height: '100%', width: '95%', resizeMode: 'stretch'}}
          source={choseImage(props.path)}
        />
      </View>
    </TouchableOpacity>
  );
};

const SliderWater = props => {
  return (
    <View style={{marginTop: 12}}>
      <Text
        style={{
          fontWeight: 'bold',
          color: COLORS.black,
          fontSize: 16,
          paddingHorizontal: 12,
        }}>
        Kích thước
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginTop: 4,
          paddingHorizontal: 12,
          marginBottom: 12,
        }}>
        {props.range}
      </Text>

      <Slider
        width={'100%'}
        minimumValue={0}
        maximumValue={3000}
        // minimumTrackTintColor="#FFFFFF"
        minimumTrackTintColor="tomato"
        maximumTrackImage="#000"
        thumbTintColor="tomato"
        value={props.range}
        step={1}
        onValueChange={value => props.setRange(value)}
      />

      <View
        style={{
          // backgroundColor: COLORS.percent,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
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
              Thêm vào nhật ký
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const Header = () => {
  const [range, setRange] = useState(250);
  const refRBSheet = useRef();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Chart />
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        // onPress={() => console.log('hello')}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: COLORS.grey,
          // elevation: 1,
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: 24,
            height: 24,
            borderRadius: 12,
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 2,
          }}>
          <EvilIcons
            // styles={{position: 'absolute', top: 0}}
            name="refresh"
            color={COLORS.primary}
            size={24}
          />
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            color: COLORS.white,
            fontWeight: 'bold',
          }}>
          Cốc
        </Text>

        <RBSheet
          ref={refRBSheet}
          height={400}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {},
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={{flex: 1, padding: 12}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16}}
                onPress={() => refRBSheet.current.close()}>
                Thêm vào nhật ký
              </Text>

              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Ionicons
                  // styles={{position: 'absolute', top: 0}}
                  name="close"
                  color={COLORS.grey}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16,
              }}>
              <ItemGlass path="LI_NUOC" />
              <ItemGlass path="CHAI_NUOC" />
              <ItemGlass path="TACH_TRA" />
            </View>
            {/* <SliderWater Range={range} setRange={setRange} /> */}
            <SliderWater range={range} setRange={setRange} />
          </View>
        </RBSheet>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor: COLORS.white,
          borderRadius: 20,
          marginTop: 18,
        }}>
        <Text style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
          +400 ml
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ItemWater = () => {
  const link = '../../../Image/cup_water_full.png';
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 18,
        paddingVertical: 10,
        marginVertical: 8,
        backgroundColor: COLORS.white,
        borderRadius: 28,
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <Image
        style={{
          resizeMode: 'stretch',
          height: 35,
          width: 45,
        }}
        source={require(link)}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 16}}>400 ml</Text>
        <Text style={{fontSize: 16}}>09:14</Text>
      </View>

      <View
        style={{
          // padding: 2,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          with: 28,
          height: 28,
          borderRadius: 100,
          backgroundColor: COLORS.grey_background,
        }}>
        <Ionicons
          // styles={{position: 'absolute', top: 0}}
          name="close"
          color={COLORS.grey}
          size={20}
        />
      </View>
    </View>
  );
};

const ListWater = () => {
  return (
    <View
      style={{
        marginTop: 14,
        paddingTop: 14,
        paddingHorizontal: 12,
        height: '30%',
        backgroundColor: COLORS.background,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Lịch sử</Text>

      <ScrollView style={{marginTop: 10, flex: 1}}>
        <ItemWater />
        <ItemWater />
        <ItemWater />
        <ItemWater />
        <ItemWater />
      </ScrollView>
    </View>
  );
};

//bottom sheet
const BottomSheet = () => {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <YourOwnComponent />
      </RBSheet>
    </View>
  );
};

const ControlWater = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      {/* button Back */}

      <View style={{marginTop: 30, marginHorizontal: 15}}>
        <TouchableOpacity
          style={{
            width: 'auto',
            padding: 5,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.popToTop());
          }}>
          <MaterialIcons name="arrow-back" color="#eee" size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView nestedScrollEnabled={true} style={{flex: 1}}>
        <Header />
      </ScrollView>
      {/* phan bieu do nuoc */}
      <ListWater />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    // width: 90,
    // height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
    paddingBottom: 4,
  },
});

export default ControlWater;
