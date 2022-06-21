import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import COLORS from '../../../Constraint/Color';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions, useNavigation} from '@react-navigation/native';

const ExerciseHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Tìm bài tập . . ."
        inputStyle={{fontSize: 15}}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AddTheDuc')}
        style={styles.addExerciseContainer}>
        <Icon name="fire" size={25} style={styles.icon} />
        <Text style={styles.buttonText}> Thêm bài tập </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 25,
    paddingBottom: 15,
  },
  searchBar: {
    width: '90%',
    borderRadius: 30,
    height: '25%',
  },
  addExerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  icon: {
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});
