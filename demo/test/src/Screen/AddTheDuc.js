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

const AddTheDuc = () => {
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
        Thêm bài tập
      </Text>
      <ScrollView
        style={{
          backgroundColor: COLORS.white,
          marginTop: 24,
          padding: 24,
          paddingTop: 100,
        }}>
        <Text style={{color: COLORS.black, fontSize: 20, fontWeight: 'bold'}}>
          Thêm bài tập
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
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 18, color: COLORS.black}}>Tên bài tập</Text>
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
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              Lượng Kcal tiêu thụ
            </Text>
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
              marginBottom: 30,
            }}>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              Thời gian tập (phút)
            </Text>
            <TextInput
              placeholder="bắt buộc"
              style={{borderBottomWidth: 1, width: 120}}
            />
          </View>
        </View>
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
            Tạo mới bài tập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTheDuc;

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
