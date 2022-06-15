import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import ExerciseList from '../Component/cpnExercise/Body/ExerciseList';
import ExerciseHeader from '../Component/cpnExercise/Header/ExerciseHeader';

const Exercise = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <ExerciseHeader/>
      </View>

      <View style={styles.body}>
        <ExerciseList/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    flex: 0.295
  },
  body: {

    flex: 0.705

  }
});

export default Exercise;
